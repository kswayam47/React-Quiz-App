import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
     <BrowserRouter basename="/React-Quiz-App">
    <App /> 
    </BrowserRouter>

)
