import React from 'react'
import ReactDOM from 'react-dom/client'
import { ViewPortProviderCpn } from './utils/responsive'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ViewPortProviderCpn>
    <App />
  </ViewPortProviderCpn>
)
