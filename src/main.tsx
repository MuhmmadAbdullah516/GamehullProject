import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.tsx'
import { AuthProvider } from '@/context/auth-context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
       <ToastContainer
      autoClose={2600}
      className="gamehull-toast-container"
      closeOnClick
      newestOnTop
      pauseOnFocusLoss={false}
      position="bottom-right"
      progressClassName="gamehull-toast-progress"
      theme="dark"
      toastClassName="gamehull-toast"
    />
    </BrowserRouter>
   
  </StrictMode>,
)
