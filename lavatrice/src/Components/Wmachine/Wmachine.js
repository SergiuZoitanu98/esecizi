import { useEffect, useState } from "react";
import { getBtnLabel, getPhaseTimeout, PHASES } from './costants'

export default function WashingMachine() {
  const [phase, setPhase] = useState(PHASES.Ready);

  function onClick() {
    if ([PHASES.Ready, PHASES.Pausa, PHASES.Fine].includes(phase))
      return setPhase(PHASES["Pre-Lavaggio"]);
    return setPhase(PHASES.Pausa);
  }

  useEffect(() => {
    if ([PHASES.Pausa, PHASES.Ready, PHASES.Fine].includes(phase)) return;

    const timeout = setTimeout(() => {
      setPhase((c) => c + 1);
    }, getPhaseTimeout(phase));

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <>
      <h2> Stato Lavatrice: </h2>
      <WashingMachineState phase={phase} />
      <WashingMachineButton onClick={onClick} phase={phase} />
    </>
  );
}

const WashingMachineState = ({ phase }) => (
  <h3>{Object.keys(PHASES)[phase]}</h3>
);
const WashingMachineButton = ({ onClick, phase }) => (
  <button onClick={onClick}>{getBtnLabel(phase)}</button>
);
