import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-5xl'>Teste</h1>
      <div className="card">
        <a
          className='flex flex-row justify-center items-center rounded px-4 py-3 bg-blue-500 text-base text-white font-semibold
            active:underline-offset-8'
          onClick={() => setCount((count) => count + 1)}>
          Cadastre-se {count}
        </a>
      </div>
    </div>
  )
}

export default App
