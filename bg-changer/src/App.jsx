import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200 '
        style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2 bg-white rounded-2xl px-3 py-2'>
            <button className='outline-none px-4 py-1 rounded-xl text-white font-bold ' style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Default</button>
            <button className='outline-none px-4 py-1 rounded-xl text-white font-bold ' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-xl text-white font-bold' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
            <button className='outline-none px-4 py-1 rounded-xl text-white font-bold' style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>Black</button>
            <button className='outline-none px-4 py-1 rounded-xl text-white font-bold' style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}>Gray</button>
            <button className='outline-none px-4 py-1 rounded-xl text-black font-bold' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App

