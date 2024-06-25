import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './media.css'
import { Normalize } from 'styled-normalize'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
)
