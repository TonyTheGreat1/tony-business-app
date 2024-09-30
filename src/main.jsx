import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/authContext';

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


/*  createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode>

)   */
