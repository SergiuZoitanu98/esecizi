import './App.css';
import {useState,useEffect} from 'react'
function App() {
const [giorni,setGiorni]=useState(0)
const [ore,setOre]=useState(0)
const [minuti,setMinuti]=useState(0)
const [secondi,setSecondi] =useState(0)

  const countdown = ()=>{
    const dataNatale = new Date("December 25, 2022 00:00:00").getTime()
    const dataOggi = new Date().getTime()
 
    const differenzaTempo = dataNatale - dataOggi

    const secondi = 1000;
    const minuti = secondi * 60;
    const ore = minuti * 60;
    const giorni = ore * 24;

    let giorniRimanenti = Math.floor((differenzaTempo / giorni)) 
    let oreRimanenti = Math.floor((differenzaTempo % giorni)/ore) 
    let minutiRimanenti = Math.floor((differenzaTempo % ore)/minuti)
    let secondiRimanenti = Math.floor((differenzaTempo % minuti)/secondi)
  

    setGiorni(giorniRimanenti)
    setOre(oreRimanenti)
    setMinuti(minutiRimanenti)
    setSecondi(secondiRimanenti)

  }

  useEffect(()=>{
    setInterval(countdown,1000)
  },[])
  return (
   <>
    <div className='container'>
      <span>Giorni</span>
      <h3>{giorni}</h3>
      <span>Ore</span>
      <h3>{ore}</h3>

      <span>Minuti</span>
      <h3>{minuti}</h3>

      <span>Secondi</span>
      <h3>{secondi}</h3>


    </div>
   
   </>
  );
}

export default App;
