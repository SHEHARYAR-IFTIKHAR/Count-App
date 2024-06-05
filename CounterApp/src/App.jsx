import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1);
  const addValue = () => {
    setCounter(counter + 1)
  }

  const extractValue = () => {
    setCounter(counter - 1)
  }
  // let counter = 5;
  return (

    <>
      <div className='bg-gray-900 h-screen  flex flex-col justify-center items-center'>
        <h1 className="font-bold text-4xl text-white m-5">
          SheharyarIftikhar <span className='text-yellow-500'>.</span>
        </h1>

        <h2 className='text-white mt-3 text-3xl font-bold'>Counter Value: <span className='text-yellow-500'>{counter}</span></h2>
        <div className="flex gap-3 mt-5">
          <button className='text-white border px-5 py-3 rounded-md shadow-md font-semibold' onClick={addValue}>Increase Value</button>
          <button className='text-white border px-5 py-3 rounded-md shadow-md font-semibold' onClick={extractValue}>Decrease Value</button>

        </div>
      </div>
    </>
  )
}

export default App
