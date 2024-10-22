import './App.css'
import { useRef } from 'react'
function App(){ 
  const inputref = useRef();
  function focusOnInput()
  {
    //document.getElementbyId("name");
    inputref.current.focus();
  }
  return <div>
    SignUp
    <input ref={inputref} type={"text"}></input>
    <input type={"text"}></input>
    <button onClick={focusOnInput}>submit</button>
 </div>
}

export default App
