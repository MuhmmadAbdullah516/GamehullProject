import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.tsx'
import { AuthProvider } from '@/context/auth-context'
import ScrollToTop from '@/components/scroll-to-top'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <App />
      </AuthProvider>
      <ToastContainer
        autoClose={2600}
        className="!bottom-3 !left-3 !right-3 !w-auto [--toastify-color-dark:transparent] [--toastify-font-family:Inter,ui-sans-serif,system-ui,sans-serif] [--toastify-toast-width:calc(100vw-24px)] sm:!bottom-4 sm:!left-auto sm:!right-4 sm:!w-[21.25rem] sm:[--toastify-toast-width:340px]"
        closeOnClick
        newestOnTop
        pauseOnFocusLoss={false}
        position="bottom-right"
        progressClassName="bg-[#2d75ff]"
        theme="dark"
        toastClassName="min-h-14 w-full max-w-full rounded-xl border border-blue-500/25 bg-[linear-gradient(180deg,rgb(3_18_31_/_0.96)_0%,rgb(15_9_69_/_0.97)_58%,rgb(31_11_80_/_0.98)_100%)] text-sm font-medium leading-5 text-white/90 shadow-[0_24px_80px_rgb(0_0_0_/_0.42)] sm:rounded-2xl [&_.Toastify__close-button]:text-slate-400 [&_.Toastify__close-button]:opacity-100 [&_.Toastify__toast-icon]:me-3 [&_.Toastify__toast-icon]:w-5"
      />
    </BrowserRouter>
   
  </StrictMode>,
)
