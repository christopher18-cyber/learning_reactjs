import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import GlobalState from './context/index.jsx'
// import { AppProvider } from './components/provider.jsx'


createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App />
  </GlobalState>
)
