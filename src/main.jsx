import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fontsource/outfit";
import "@fontsource/roboto"; 
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
