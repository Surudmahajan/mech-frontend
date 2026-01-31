import { SCHEMAS } from "./schemas.js";

const AI_PROXY_BASE = "https://surudmahajan12-mechproxy.hf.space";
const BACKEND_BASE  = "https://surudmahajan12-mechback.hf.space";
const VISUALS_ORIGIN = "https://omechvisual.netlify.app";

export async function sendMessage() {
  const inputEl = document.getElementById("userInput");
  const statusEl = document.getElementById("status");
  const outputEl = document.getElementById("output");
  const formEl = document.getElementById("form");

  const message = inputEl.value.trim();
  if (!message) return;

  statusEl.textContent = "Understanding your request…";
  outputEl.textContent = "";
  formEl.innerHTML = "";

  const intent = await postJSON(`${AI_PROXY_BASE}/classify`, { message });

  if (intent.mode === "explain_concept") {
    const res = await postJSON(`${AI_PROXY_BASE}/explain`, { message });
    outputEl.textContent = res.explanation;
    statusEl.textContent = "Done";
    return;
  }

  if (intent.mode === "calculate") {
    const key = `${intent.domain}:${intent.operation}`;
    const schema = SCHEMAS[key];
    if (!schema) {
      statusEl.textContent = "No form available for this operation";
      return;
    }

    renderForm(schema, async payload => {
      statusEl.textContent = "Computing…";

      const result = await callBackend(
        intent.endpoint,
        intent.method,
        payload
      );

      const iframe = document.getElementById("visuals-iframe");
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          {
            type: "ENGINE_RESULT",
            payload: {
              domain: intent.domain,
              operation: intent.operation,
              data: result
            }
          },
          VISUALS_ORIGIN
        );
      }

      const explanation = await postJSON(`${AI_PROXY_BASE}/explain`, {
        message,
        backend_result: result
      });

      outputEl.innerHTML = `
FINAL ANSWER
────────────
${formatResult(result)}

CONCEPTUAL STEPS
────────────────
${explanation.explanation}
      `;

      statusEl.textContent = "Done";
    });
  }
}

function renderForm(schema, onSubmit) {
  const formEl = document.getElementById("form");
  formEl.innerHTML = `<h3>${schema.title}</h3>`;

  schema.fields.forEach(f => {
    formEl.innerHTML += `
      <label>${f.label}</label>
      <input type="${f.type}" id="field_${f.name}" />
    `;
  });

  const btn = document.createElement("button");
  btn.textContent = "Solve";

  btn.onclick = () => {
    const payload = {};

    schema.fields.forEach(f => {
      const raw = document
        .getElementById(`field_${f.name}`)
        .value
        .trim();

      if (f.type === "number") {
        payload[f.name] = Number(raw);
      } else {
        payload[f.name] = raw
          .split(",")
          .map(v => Number(v.trim()));
      }
    });

    onSubmit(payload);
  };

  formEl.appendChild(btn);
}

async function postJSON(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function callBackend(endpoint, method, payload) {
  const res = await fetch(`${BACKEND_BASE}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return await res.json();
}

function formatResult(result) {
  if (result.solution) {
    return Object.entries(result.solution)
      .map(([k, v]) => `• ${k} = ${v}`)
      .join("<br>");
  }
  return Object.entries(result)
    .map(([k, v]) => `• ${k}: ${v}`)
    .join("<br>");
}
