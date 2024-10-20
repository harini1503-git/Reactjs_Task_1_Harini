import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchableList from './Search.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchableList />
  </StrictMode>,
)
