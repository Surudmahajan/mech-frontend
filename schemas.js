export const SCHEMAS = {

  /* =========================
     VECTORS
  ========================= */

  "vectors:magnitude": {
    title: "Vector Magnitude",
    fields: [
      { name: "x", label: "X Component", type: "number" },
      { name: "y", label: "Y Component", type: "number" }
    ]
  },

  "vectors:direction": {
    title: "Vector Direction",
    fields: [
      { name: "x", label: "X Component", type: "number" },
      { name: "y", label: "Y Component", type: "number" }
    ]
  },

  "vectors:add-2d": {
    title: "Vector Addition (2D)",
    fields: [
      { name: "vectors", label: "Vectors (x,y per line)", type: "multiline" }
    ]
  },

  "vectors:resolve": {
    title: "Resolve Vector",
    fields: [
      { name: "magnitude", label: "Magnitude", type: "number" },
      { name: "angle_deg", label: "Angle (degrees)", type: "number" }
    ]
  },

  "vectors:dot": {
    title: "Dot Product",
    fields: [
      { name: "a_x", label: "Vector A - X", type: "number" },
      { name: "a_y", label: "Vector A - Y", type: "number" },
      { name: "b_x", label: "Vector B - X", type: "number" },
      { name: "b_y", label: "Vector B - Y", type: "number" }
    ]
  },

  "vectors:cross": {
    title: "Cross Product (2D)",
    fields: [
      { name: "a_x", label: "Vector A - X", type: "number" },
      { name: "a_y", label: "Vector A - Y", type: "number" },
      { name: "b_x", label: "Vector B - X", type: "number" },
      { name: "b_y", label: "Vector B - Y", type: "number" }
    ]
  },

  "vectors:angle-between": {
    title: "Angle Between Vectors",
    fields: [
      { name: "a_x", label: "Vector A - X", type: "number" },
      { name: "a_y", label: "Vector A - Y", type: "number" },
      { name: "b_x", label: "Vector B - X", type: "number" },
      { name: "b_y", label: "Vector B - Y", type: "number" }
    ]
  },

  /* =========================
     STATICS – PARTICLES
  ========================= */

  "statics_particles:resultant-concurrent": {
    title: "Resultant of Concurrent Forces",
    fields: [
      { name: "forces_x", label: "Forces in X (comma separated)", type: "text" },
      { name: "forces_y", label: "Forces in Y (comma separated)", type: "text" }
    ]
  },

  "statics_particles:equilibrant": {
    title: "Equilibrant of Forces",
    fields: [
      { name: "forces_x", label: "Forces in X (comma separated)", type: "text" },
      { name: "forces_y", label: "Forces in Y (comma separated)", type: "text" }
    ]
  },

  "statics_particles:equilibrium-check": {
    title: "Equilibrium Check",
    fields: [
      { name: "fx", label: "Sum of Forces in X", type: "number" },
      { name: "fy", label: "Sum of Forces in Y", type: "number" }
    ]
  },

  "statics_particles:lami": {
    title: "Lami’s Theorem",
    fields: [
      { name: "f1", label: "Known Force", type: "number" },
      { name: "alpha", label: "Alpha (deg)", type: "number" },
      { name: "beta", label: "Beta (deg)", type: "number" },
      { name: "gamma", label: "Gamma (deg)", type: "number" }
    ]
  },

  /* =========================
     FRICTION
  ========================= */

  "friction:limiting-friction": {
    title: "Limiting Friction",
    fields: [
      { name: "mu", label: "Coefficient of Friction", type: "number" },
      { name: "normal", label: "Normal Reaction", type: "number" }
    ]
  },

  "friction:angle-of-friction": {
    title: "Angle of Friction",
    fields: [
      { name: "mu", label: "Coefficient of Friction", type: "number" }
    ]
  },

  "friction:block-inclined": {
    title: "Block on Inclined Plane",
    fields: [
      { name: "mass", label: "Mass", type: "number" },
      { name: "angle_deg", label: "Inclination Angle (deg)", type: "number" },
      { name: "mu", label: "Coefficient of Friction", type: "number" }
    ]
  },

  /* =========================
     STATICS – RIGID BODY
  ========================= */

  "statics_rigid:moment-about-point": {
    title: "Moment About a Point",
    fields: [
      { name: "fx", label: "Force X", type: "number" },
      { name: "fy", label: "Force Y", type: "number" },
      { name: "x", label: "X Distance", type: "number" },
      { name: "y", label: "Y Distance", type: "number" }
    ]
  },

  "statics_rigid:varignon": {
    title: "Varignon’s Theorem",
    fields: [
      { name: "fx", label: "Force X", type: "number" },
      { name: "fy", label: "Force Y", type: "number" },
      { name: "x", label: "X Distance", type: "number" },
      { name: "y", label: "Y Distance", type: "number" }
    ]
  },

  "statics_rigid:couple": {
    title: "Couple Moment",
    fields: [
      { name: "force", label: "Force", type: "number" },
      { name: "distance", label: "Distance Between Forces", type: "number" }
    ]
  },

  "statics_rigid:reaction-2d": {
    title: "Support Reactions (2D)",
    fields: [
      { name: "load", label: "Applied Load", type: "number" },
      { name: "position", label: "Load Position", type: "number" },
      { name: "length", label: "Beam Length", type: "number" }
    ]
  },

  /* =========================
     STRUCTURES – TRUSS
  ========================= */

  "truss:determinacy": {
    title: "Truss Determinacy Check",
    fields: [
      { name: "members", label: "Number of Members", type: "number" },
      { name: "joints", label: "Number of Joints", type: "number" },
      { name: "reactions", label: "Number of Reactions", type: "number" }
    ]
  },

  "truss:method-of-joints-single": {
    title: "Method of Joints (Single Joint)",
    fields: [
      { name: "fx", label: "ΣFx", type: "number" },
      { name: "fy", label: "ΣFy", type: "number" }
    ]
  },

  "truss:zero-force-members": {
    title: "Zero Force Members",
    fields: [
      { name: "forces", label: "Member Forces (comma separated)", type: "text" }
    ]
  },

  /* =========================
     STRUCTURES – BEAM
  ========================= */

  "beam:reactions": {
    title: "Beam Reactions",
    fields: [
      { name: "load", label: "Load", type: "number" },
      { name: "position", label: "Load Position", type: "number" },
      { name: "length", label: "Beam Length", type: "number" }
    ]
  },

  "beam:moment-at-section": {
    title: "Moment at Section",
    fields: [
      { name: "load", label: "Load", type: "number" },
      { name: "load_pos", label: "Load Position", type: "number" },
      { name: "section", label: "Section Position", type: "number" }
    ]
  },

  "beam:sfd-point-load": {
    title: "SFD – Point Load",
    fields: [
      { name: "load", label: "Load", type: "number" },
      { name: "position", label: "Load Position", type: "number" },
      { name: "length", label: "Beam Length", type: "number" }
    ]
  },

  "beam:bmd-point-load": {
    title: "BMD – Point Load",
    fields: [
      { name: "load", label: "Load", type: "number" },
      { name: "position", label: "Load Position", type: "number" },
      { name: "length", label: "Beam Length", type: "number" }
    ]
  },

  "beam:sfd-udl": {
    title: "SFD – UDL",
    fields: [
      { name: "w", label: "UDL Intensity", type: "number" },
      { name: "length", label: "Beam Length", type: "number" }
    ]
  },

  "beam:bmd-udl": {
    title: "BMD – UDL",
    fields: [
      { name: "w", label: "UDL Intensity", type: "number" },
      { name: "length", label: "Beam Length", type: "number" }
    ]
  },

  /* =========================
     KINEMATICS – PARTICLES
  ========================= */

  "kinematics_particles:rectilinear": {
    title: "Rectilinear Motion",
    fields: [
      { name: "u", label: "Initial Velocity", type: "number" },
      { name: "a", label: "Acceleration", type: "number" },
      { name: "t", label: "Time", type: "number" }
    ]
  },

  "kinematics_particles:motion-under-gravity": {
    title: "Motion Under Gravity",
    fields: [
      { name: "u", label: "Initial Velocity", type: "number" },
      { name: "t", label: "Time", type: "number" }
    ]
  },

  "kinematics_particles:projectile": {
    title: "Projectile Motion",
    fields: [
      { name: "velocity", label: "Initial Velocity", type: "number" },
      { name: "angle_deg", label: "Angle (deg)", type: "number" }
    ]
  },

  "kinematics_particles:relative-velocity-1d": {
    title: "Relative Velocity (1D)",
    fields: [
      { name: "v_a", label: "Velocity of A", type: "number" },
      { name: "v_b", label: "Velocity of B", type: "number" }
    ]
  },

  "kinematics_particles:relative-velocity-2d": {
    title: "Relative Velocity (2D)",
    fields: [
      { name: "ax", label: "A - X", type: "number" },
      { name: "ay", label: "A - Y", type: "number" },
      { name: "bx", label: "B - X", type: "number" },
      { name: "by", label: "B - Y", type: "number" }
    ]
  },

  "kinematics_particles:pulley-system": {
    title: "Pulley System",
    fields: [
      { name: "m1", label: "Mass 1", type: "number" },
      { name: "m2", label: "Mass 2", type: "number" }
    ]
  },

  /* =========================
     KINEMATICS – RIGID
  ========================= */

  "kinematics_rigid:pure-translation": {
    title: "Pure Translation",
    fields: [
      { name: "v", label: "Velocity", type: "number" },
      { name: "a", label: "Acceleration", type: "number" }
    ]
  },

  "kinematics_rigid:pure-rotation": {
    title: "Pure Rotation",
    fields: [
      { name: "omega", label: "Angular Velocity", type: "number" },
      { name: "alpha", label: "Angular Acceleration", type: "number" },
      { name: "radius", label: "Radius", type: "number" }
    ]
  },

  "kinematics_rigid:general-plane-motion": {
    title: "General Plane Motion",
    fields: [
      { name: "v_cm", label: "CM Velocity", type: "number" },
      { name: "omega", label: "Angular Velocity", type: "number" },
      { name: "radius", label: "Radius", type: "number" }
    ]
  },

  "kinematics_rigid:relative-velocity": {
    title: "Relative Velocity (Rigid Body)",
    fields: [
      { name: "omega", label: "Angular Velocity", type: "number" },
      { name: "radius", label: "Radius", type: "number" }
    ]
  },

  "kinematics_rigid:relative-acceleration": {
    title: "Relative Acceleration",
    fields: [
      { name: "omega", label: "Angular Velocity", type: "number" },
      { name: "alpha", label: "Angular Acceleration", type: "number" },
      { name: "radius", label: "Radius", type: "number" }
    ]
  },

  "kinematics_rigid:instantaneous-center": {
    title: "Instantaneous Center of Rotation",
    fields: [
      { name: "v_a", label: "Velocity at A", type: "number" },
      { name: "v_b", label: "Velocity at B", type: "number" },
      { name: "distance_ab", label: "Distance AB", type: "number" }
    ]
  },

  /* =========================
     KINETICS – PARTICLES
  ========================= */

  "kinetics_particles:newton-second-law": {
    title: "Newton’s Second Law",
    fields: [
      { name: "force", label: "Force", type: "number" },
      { name: "mass", label: "Mass", type: "number" }
    ]
  },

  "kinetics_particles:work": {
    title: "Work Done",
    fields: [
      { name: "force", label: "Force", type: "number" },
      { name: "displacement", label: "Displacement", type: "number" },
      { name: "angle_deg", label: "Angle (deg)", type: "number" }
    ]
  },

  "kinetics_particles:work-energy": {
    title: "Work–Energy Principle",
    fields: [
      { name: "mass", label: "Mass", type: "number" },
      { name: "u", label: "Initial Velocity", type: "number" },
      { name: "v", label: "Final Velocity", type: "number" }
    ]
  },

  "kinetics_particles:power": {
    title: "Power",
    fields: [
      { name: "force", label: "Force", type: "number" },
      { name: "velocity", label: "Velocity", type: "number" }
    ]
  },

  "kinetics_particles:impulse": {
    title: "Impulse",
    fields: [
      { name: "force", label: "Force", type: "number" },
      { name: "time", label: "Time", type: "number" }
    ]
  },

  "kinetics_particles:momentum": {
    title: "Momentum",
    fields: [
      { name: "mass", label: "Mass", type: "number" },
      { name: "velocity", label: "Velocity", type: "number" }
    ]
  },

  "kinetics_particles:impact": {
    title: "Impact (1D)",
    fields: [
      { name: "m1", label: "Mass 1", type: "number" },
      { name: "u1", label: "Velocity 1 (before)", type: "number" },
      { name: "m2", label: "Mass 2", type: "number" },
      { name: "u2", label: "Velocity 2 (before)", type: "number" },
      { name: "restitution", label: "Coefficient of Restitution", type: "number" }
    ]
  },

  /* =========================
     KINETICS – RIGID
  ========================= */

  "kinetics_rigid:force-acceleration": {
    title: "Force–Acceleration Method",
    fields: [
      { name: "torque", label: "Torque", type: "number" },
      { name: "inertia", label: "Moment of Inertia", type: "number" }
    ]
  },

  "kinetics_rigid:torque-angular-acceleration": {
    title: "Torque & Angular Acceleration",
    fields: [
      { name: "force", label: "Force", type: "number" },
      { name: "radius", label: "Radius", type: "number" }
    ]
  },

  "kinetics_rigid:work-energy": {
    title: "Work–Energy (Rigid Body)",
    fields: [
      { name: "inertia", label: "Moment of Inertia", type: "number" },
      { name: "omega1", label: "Initial Angular Velocity", type: "number" },
      { name: "omega2", label: "Final Angular Velocity", type: "number" }
    ]
  },

  "kinetics_rigid:angular-momentum": {
    title: "Angular Momentum",
    fields: [
      { name: "inertia", label: "Moment of Inertia", type: "number" },
      { name: "omega", label: "Angular Velocity", type: "number" }
    ]
  },

  "kinetics_rigid:pure-rolling": {
    title: "Pure Rolling",
    fields: [
      { name: "velocity", label: "Linear Velocity", type: "number" },
      { name: "radius", label: "Radius", type: "number" }
    ]
  },

  /* =========================
     VIBRATIONS
  ========================= */

  "vibrations:natural-frequency": {
    title: "Natural Frequency",
    fields: [
      { name: "k", label: "Spring Constant", type: "number" },
      { name: "m", label: "Mass", type: "number" }
    ]
  },

  "vibrations:free-undamped": {
    title: "Free Undamped Vibration",
    fields: [
      { name: "k", label: "Spring Constant", type: "number" },
      { name: "m", label: "Mass", type: "number" },
      { name: "x0", label: "Initial Displacement", type: "number" }
    ]
  },

  "vibrations:free-damped": {
    title: "Free Damped Vibration",
    fields: [
      { name: "k", label: "Spring Constant", type: "number" },
      { name: "m", label: "Mass", type: "number" },
      { name: "c", label: "Damping Coefficient", type: "number" },
      { name: "x0", label: "Initial Displacement", type: "number" }
    ]
  },

  "vibrations:logarithmic-decrement": {
    title: "Logarithmic Decrement",
    fields: [
      { name: "x1", label: "Amplitude 1", type: "number" },
      { name: "x2", label: "Amplitude 2", type: "number" }
    ]
  },

  "vibrations:forced-vibration": {
    title: "Forced Vibration",
    fields: [
      { name: "k", label: "Spring Constant", type: "number" },
      { name: "m", label: "Mass", type: "number" },
      { name: "c", label: "Damping Coefficient", type: "number" },
      { name: "force", label: "Force Amplitude", type: "number" },
      { name: "omega", label: "Excitation Frequency", type: "number" }
    ]
  },

  "vibrations:resonance": {
    title: "Resonance",
    fields: [
      { name: "k", label: "Spring Constant", type: "number" },
      { name: "m", label: "Mass", type: "number" }
    ]
  },

  /* =========================
     PROPERTIES
  ========================= */

  "properties:moment-of-inertia": {
    title: "Moment of Inertia (Point Mass)",
    fields: [
      { name: "mass", label: "Mass", type: "number" },
      { name: "radius", label: "Radius", type: "number" }
    ]
  },

  "properties:parallel-axis": {
    title: "Parallel Axis Theorem",
    fields: [
      { name: "I_cm", label: "I about CG", type: "number" },
      { name: "mass", label: "Mass", type: "number" },
      { name: "distance", label: "Distance", type: "number" }
    ]
  },

  "properties:perpendicular-axis": {
    title: "Perpendicular Axis Theorem",
    fields: [
      { name: "Ix", label: "Ix", type: "number" },
      { name: "Iy", label: "Iy", type: "number" }
    ]
  },

  "properties:radius-of-gyration": {
    title: "Radius of Gyration",
    fields: [
      { name: "inertia", label: "Moment of Inertia", type: "number" },
      { name: "mass", label: "Mass", type: "number" }
    ]
  },

  "properties:flywheel-energy": {
    title: "Flywheel Energy Fluctuation",
    fields: [
      { name: "inertia", label: "Moment of Inertia", type: "number" },
      { name: "omega1", label: "Angular Velocity 1", type: "number" },
      { name: "omega2", label: "Angular Velocity 2", type: "number" }
    ]
  },

  "properties:gyroscopic-couple": {
    title: "Gyroscopic Couple",
    fields: [
      { name: "inertia", label: "Moment of Inertia", type: "number" },
      { name: "omega", label: "Spin Angular Velocity", type: "number" },
      { name: "precession", label: "Precession Velocity", type: "number" }
    ]
  },

  "properties:gyroscopic-stability": {
    title: "Gyroscopic Stability",
    fields: [
      { name: "couple", label: "Gyroscopic Couple", type: "number" },
      { name: "weight", label: "Weight", type: "number" },
      { name: "height", label: "Height", type: "number" }
    ]
  }

};
