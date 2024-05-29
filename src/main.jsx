import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import 'boxicons'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
          <AppRouter />
        </React.StrictMode>
    </BrowserRouter>

)
