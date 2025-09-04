import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepApp } from './FirstStepApp'
import { MiNombreApp } from './MiNombreApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepApp />
    {/* <MiNombreApp /> */}
  </StrictMode>,
)
