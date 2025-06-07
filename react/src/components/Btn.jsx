import React from 'react'
import { useCount } from '../context/UserContext'
const Btn = () => {

    const {setCount } = useCount();
  return (
    <div>
        <button
        onClick={() => setCount((prev) => prev + 1)}
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click Me
        </button>
        <button 
        onClick={() => setCount((prev) => prev - 1)}
         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
            Another Button
        </button>
    </div>
  )
}

export default Btn