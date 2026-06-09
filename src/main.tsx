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
        className="!bottom-3 !left-3 !right-3 !w-auto [--toastify-color-progress-error:#ef4444] [--toastify-color-progress-info:#2563eb] [--toastify-color-progress-success:#16a34a] [--toastify-color-progress-warning:#f59e0b] [--toastify-font-family:Inter,ui-sans-serif,system-ui,sans-serif] [--toastify-icon-color-error:#ef4444] [--toastify-icon-color-info:#2563eb] [--toastify-icon-color-success:#16a34a] [--toastify-icon-color-warning:#f59e0b] [--toastify-toast-width:calc(100vw-24px)] sm:!bottom-4 sm:!left-auto sm:!right-4 sm:!w-[21.25rem] sm:[--toastify-toast-width:340px]"
        closeOnClick
        newestOnTop
        pauseOnFocusLoss={false}
        position="bottom-right"
        progressClassName="!h-1"
        theme="light"
        toastClassName="min-h-14 w-full max-w-full overflow-hidden rounded-[20px] border border-card-border bg-card-bg bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] text-sm font-semibold leading-5 text-text-heading shadow-card transition-all duration-200 sm:rounded-[20px] dark:border-card-dark-border dark:bg-card-dark-bg dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] dark:text-text-dark-heading dark:shadow-card-dark [&.Toastify__toast--error]:border-red-500/20 [&.Toastify__toast--info]:border-blue-500/20 [&.Toastify__toast--success]:border-emerald-500/20 [&.Toastify__toast--warning]:border-amber-500/20 [&_.Toastify__close-button]:self-center [&_.Toastify__close-button]:text-text-dim [&_.Toastify__close-button]:opacity-100 dark:[&_.Toastify__close-button]:text-text-dark-dim [&_.Toastify__toast-body]:items-center [&_.Toastify__toast-body]:text-inherit [&_.Toastify__toast-icon]:me-3 [&_.Toastify__toast-icon]:w-5"
      />
    </BrowserRouter>
   
  </StrictMode>,
)
