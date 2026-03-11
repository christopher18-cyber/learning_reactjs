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
import FormComponent from './components/form/index.jsx'
import FormPracticeComponent from './components/form/practice.jsx'
import LoginComponent from './components/login/index.jsx'
import RegisterComponent from './components/register/index.jsx'

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
      {/* <UseReducerExample /> */}
      {/* <FormComponent /> */}
      {/* <FormPracticeComponent /> */}
      <div style={{
        display: "flex",
        gap: "50px"
      }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  )
}

export default App
