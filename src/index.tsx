import React from 'react'
import ReactDOM from 'react-dom/client'
import { ViewPortProviderCpn } from './utils/responsive'
import './index.css'
import { store } from './redux/HomeArticle/ArticleListQuery'
import { Provider } from 'react-redux'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ViewPortProviderCpn>
    <Provider store={store}>
      <App />
    </Provider>
  </ViewPortProviderCpn>
)
