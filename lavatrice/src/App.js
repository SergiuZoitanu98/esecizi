import "./App.css";
import Wmachine from "./Components/Wmachine/Wmachine";
function App() {
  return (
    <div className="container">
      <Wmachine />
    </div>
  );
}

export default App;

/*Esercizio 1: Realizza una lavatrice in React.
La UI dovrà avere una stringa che mostra lo stato attuale della lavatrice e un bottone per far partire il lavaggio (quando è attiva, il bottone invece si chiamerà "stop" e metterà in pausa il lavaggio).
Gli stati sono: idle (in attesa di istruzioni), pre-lavaggio, lavaggio, risciacquo, centrifuga, fine e pausa.
Quando è idle, puoi prendere il bottone "start" per farla partire. A questo punto andrà nello stato "pre-lavaggio", dopo 30 secondi andrà nello stato "lavaggio", dopo 1 minuto nello stato "risciacquo", dopo 10 secondi nello stato "centrifuga" e dopo altri 10 secondi nello stato "fine".

Se in qualsiasi momento viene premuto "stop", va nello stato "pausa" e il bottone diventerà "riprendi" e farà ripartire dallo stato precedente.

Attenzione che, in pausa, non è importante salvarsi il tempo dello stato precedente. Ad esempio, se avevo già fatto 30 secondi di lavaggio e premo pausa, quando riprendo non devo fare i "restanti 30 secondi", ma ricomincia tutto il lavaggio (1 minuto)

Non voglio css e l'html deve avere SOLO una stringa e un bottone (quelli nativi bruttissimi)
<div>
<span>{stato}</span>
<button onClick={...}>Start</button>
</div>
Questo è tutto l'html (ovviamente con Start che diventa Stop e Riprendi, l'onClick corretto, lo stato corretto ecc.)*/
