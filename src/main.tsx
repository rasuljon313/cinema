import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/main.scss'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './router/App'
const client =new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
        <App/>
    </QueryClientProvider>
  </React.StrictMode>,
)
