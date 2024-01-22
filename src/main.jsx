import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> //consolda iki kere yazdırıyor. bunu kaldırdık. 
  <>
    <App />
  </>
  // </React.StrictMode>,
)
