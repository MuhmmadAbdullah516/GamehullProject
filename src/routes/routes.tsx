import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layout/mainlayout'
import ProtectedRoute from './protected-route'
import AdminRoutes from '@/admin/routes/admin-route'

const ForgetPasswordPage = lazy(() => import('@/pages/auth/forget'))
const LoginPage = lazy(() => import('@/pages/auth/login'))
const RegisterPage = lazy(() => import('@/pages/auth/register'))
const ResetPasswordPage = lazy(() => import('@/pages/auth/reset-password'))
const VerifyOtpPage = lazy(() => import('@/pages/auth/verifyOtp'))

const HomePage = lazy(() => import('@/pages/brand/home'))
const GamePage = lazy(() => import('@/pages/brand/games'))
const GameDetailPage = lazy(() => import('@/pages/brand/game-detail'))
const FreeSpinPage = lazy(() => import('@/pages/brand/free-spin'))
const AffiliatePage = lazy(() => import('@/pages/brand/affiliate'))
const AboutPage = lazy(() => import('@/pages/brand/about'))
const PrivacyPage = lazy(() => import('@/pages/brand/privacy'))
const TermsPage = lazy(() => import('@/pages/brand/terms'))
const ContactPage = lazy(() => import('@/pages/brand/contact'))
const ProfilePage = lazy(() => import('@/pages/brand/profile'))
const TransactionsPage = lazy(() => import('@/pages/brand/transactions'))
const CashoutPage = lazy(() => import('@/pages/brand/cashout'))
const ResponsiblePage = lazy(() => import('@/pages/brand/responsible'))
const SupportPage = lazy(() => import('@/pages/brand/support'))

const pageFallback = (
  <div className="min-h-screen bg-[#050913]" aria-busy="true" aria-live="polite" />
)

function AppRoutes() {
  return (
    <Suspense fallback={pageFallback}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamePage />} />
          <Route path="free-spin" element={<FreeSpinPage />} />
          <Route path="affiliate" element={<AffiliatePage />} />
          <Route path="responsible" element={<ResponsiblePage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="games/:slug" element={<GameDetailPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="cashout" element={<CashoutPage />} />
            
          </Route>
          
        </Route>

        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgetPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
