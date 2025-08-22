import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './providers'
import '@/styles/main.css'

const rootElement = document.getElementById('root')

if (rootElement?.innerHTML) {
  const root = ReactDOM.createRoot(rootElement!)
  root.render(
    <React.StrictMode>
      <Providers />
    </React.StrictMode>,
  )
}
