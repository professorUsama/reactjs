import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowCharacter, setallowCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  let copyButtonRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (allowNumber) {
      str += "0123456789";
    }
    if (allowCharacter) {
      str += "!@#%^&()-_+=[]|:;<>,.?/~";
    }
    for (let i = 1; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      pass += str[randomNumber];
    }
    setPassword(pass);

  }, [length, allowNumber, allowCharacter, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumber, allowCharacter, passwordGenerator])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-white">
        Password Generator
      </h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-800'>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-green-700 font-bold' placeholder='Password' readOnly ref={passwordRef} />
          <button className='bg-blue-700 px-2 text-white font-bold shrink-0' onClick={copyPassword} ref={copyButtonRef}>COPY</button>
        </div>
        <div className='flex text-sm gap-x-1'>
          <input type="range" min={8} max={50} value={length} className='cursor-pointer' onChange={(event) => { setLength(event.target.value) }} />
          <label className='font-bold mx-2'>Length: {length}</label>
          <input type="checkbox" defaultChecked={allowNumber} id='numberInput' onChange={() => { setAllowNumber((prev) => !prev) }} />
          <label>Numbers</label>
          <input type="checkbox" defaultChecked={allowCharacter} id='numberInput' onChange={() => { setallowCharacter((prev) => !prev) }} className='mx-1' />
          <label>Characters</label>
        </div>
      </div>
    </>
  )
}
export default App
