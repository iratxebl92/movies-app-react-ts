import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'


i18next.init({
  interpolation: {escapeValue: false},
  lng: "es", //con que idioma empieza por defecto
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
     <App />
    </I18nextProvider>
  </StrictMode>,
)
