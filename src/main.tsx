import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <App />
  </StrictMode>,
)
