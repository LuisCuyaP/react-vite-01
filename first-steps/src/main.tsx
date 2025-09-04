import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepApp } from './FirstStepApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepApp />
  </StrictMode>,
)
