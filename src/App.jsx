import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FunctionalComponents from './components/function.jsx'
import Navbar from './components/doing.jsx'
import Rendernum from './components/index.jsx'

import './App.css'
import ContextTextComponent from './components/context-concept/text.jsx'
import ContextButtonComponent from './components/context-concept/button.jsx'
import UseReducerExample from './components/use-reducer-example.jsx'

function App() {
  return (
    <div>
      <h1>Practice concept</h1>
      {/* < Rendernum /> */}
      {/* < FunctionalComponents /> */}
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponents /> */}
      {/* <Navbar /> */}
      {/* <ContextTextComponent />
      <ContextButtonComponent /> */}
      <UseReducerExample />
    </div>
  )
}

export default App
