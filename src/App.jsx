import { useState } from 'react'
import './App.css'

//a clock with start and stop button
function App(){ 
  const [currentCount,setCurrentCount]=useState(1);
  const [timer,setTimer]=useState(0);
  //this take rendering to update the value

  function startClock()
  {
    let value = setInterval(function(){
      setCurrentCount(c=>c+1);
    },1000);
    setTimer(value)
  }

  function stopClock()
  {
    clearInterval(timer);
  }

  return <div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>stop</button>
  </div>

}

export default App
