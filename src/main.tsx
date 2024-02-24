import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/main.css'
import { Routes } from '@generouted/react-router'
import { Providers } from './providers'

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <Providers>
      <Routes />
    </Providers>
  </StrictMode>,
)
