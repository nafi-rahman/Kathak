import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/tailwind.css'
import 'intersection-observer';


import {
  BrowserRouter as Router,
  BrowserRouter
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
