import { useState ,useRef} from 'react'
import './App.css'

//a clock with start and stop button
function App(){ 
  const [currentCount,setCurrentCount]=useState(1);
  const timer = useRef();

  function startClock()
  {
    let value = setInterval(function(){
      setCurrentCount(c=>c+1);
    },1000);
    timer.current=value;
   
  }
   //here the rerender doesnt take

  function stopClock()
  {
    clearInterval(timer.current);
  }

  return <div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>stop</button>
  </div>

}

export default App
