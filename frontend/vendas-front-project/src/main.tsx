import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CategoryList from './admin/categorycad/CategoryList.tsx'
import App from './app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
