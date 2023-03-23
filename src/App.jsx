import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/Contador'

function App() {
  

  return (
    <div className="App">
     <h1>useReducer</h1>
     <hr/>
     <Contador/>
    </div>
  )
}

export default App
