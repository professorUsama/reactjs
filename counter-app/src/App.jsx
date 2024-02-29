import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0;
  let [counter, setCounter ] = useState(0)
  const decreament = () =>{
    console.log("value dcreament", counter);
    counter = counter - 1;
    if(counter < 1){
      counter = 0;
    }
    setCounter(counter)
  }
  const increament = () =>{
    console.log("value increament", counter);
    counter = counter + 1;
    setCounter(counter)
  }
  return (
    <>
     <h1>Counter App</h1>
     <h2>{counter}</h2>
     <button onClick={decreament}>-</button> <button onClick={increament}>+</button>
    </>
  )
}

export default App
