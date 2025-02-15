import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar'
import Home from './components/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar/>
  <Home/>
  </StrictMode>,
)
