import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes';
import './main.css'
import { CharacterProvider } from './context/CharacterProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </CharacterProvider>
  </React.StrictMode> 
)
