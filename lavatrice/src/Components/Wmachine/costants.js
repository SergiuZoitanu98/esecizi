export const PHASES = {
    Pausa: 0,
    Ready: 1,
    "Pre-Lavaggio": 2,
    Lavaggio: 3,
    Risciacquo: 4,
    Centrifuga: 5,
    Fine: 6
  };
  
  const PHASE_TIMEOUTS = {
    [PHASES["Pre-Lavaggio"]]: 3000,
    [PHASES.Lavaggio]: 6000,
    [PHASES.Risciacquo]: 2000,
    [PHASES.Centrifuga]: 100
  };
  
  const BTN_LABELS = {
    [PHASES.Pausa]: "Riprendi",
    [PHASES.Ready]: "Start",
    [PHASES.Fine]: "Riparti"
  };
  
  export const getPhaseTimeout = (phase) => PHASE_TIMEOUTS[phase];
  export const getBtnLabel = (phase) => BTN_LABELS[phase] ?? "Pausa";
  