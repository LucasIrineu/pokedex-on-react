import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SearchResultsProvider } from './context/searchResultsProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchResultsProvider>
      <App />
    </SearchResultsProvider>
  </React.StrictMode>,
)
