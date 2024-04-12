import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col w-screen f-full place-items-center justify-center'>
      <div className='flex justify-center items-center space-x-10 mb-8'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo h-36" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-36" alt="React logo" />
        </a>
      </div>

      <div className='flex justify-center items-center'>
        <h1 className='text-6xl font-bold mb-4'>Vite + React</h1>
      </div>

      <div className="card mt-10">
        <div className='flex justify-center items-center'>
          <button onClick={() => setCount((count) => count + 1)} className='bg-gray-200 font-bold py-2 px-4 rounded'>
            count is {count}
          </button>
        </div>
        <p className='mt-4'>
          Edit <code className='bg-gray-200 rounded px-1'>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="flex mt-20 read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </div>
  )
}

export default App
