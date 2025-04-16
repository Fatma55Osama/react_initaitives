import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
