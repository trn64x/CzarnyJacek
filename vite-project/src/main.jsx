import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from './context/contextmenuProvider.jsx'
import ContextRetryprovider from './context/contextretryProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <ContextRetryprovider>
    <App />
    </ContextRetryprovider>
    </ContextProvider>
  </StrictMode>,
)
