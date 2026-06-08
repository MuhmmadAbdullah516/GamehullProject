import { Route, Routes } from 'react-router-dom'

import ForgetPasswordPage from '@/pages/auth/forget'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'
import ResetPasswordPage from '@/pages/auth/reset-password'
import VerifyOtpPage from '@/pages/auth/verifyOtp'
import MainLayout from '@/layout/mainlayout'
import GamePage from "@/pages/brand/games"
import GameDetailPage  from "@/pages/brand/game-detail"
import HomePage from "@/pages/brand/home"
import FreeSpinPage from "@/pages/brand/free-spin"
import AffiliatePage from "@/pages/brand/affiliate"
import AboutPage from "@/pages/brand/about"
import PrivacyPage from "@/pages/brand/privacy"
import TermsPage from "@/pages/brand/terms"
import ContactPage from "@/pages/brand/contact"
import ProtectedRoute from './protected-route'
import ProfilePage from '@/pages/brand/profile'
import TransactionsPage from '@/pages/brand/transactions'
import CashoutPage from '@/pages/brand/cashout'
import ResponsiblePage from '@/pages/brand/responsible'
import SupportPage from '@/pages/brand/support'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="games" element={<GamePage />} />
        <Route path='free-spin' element={<FreeSpinPage/>}/>
        <Route path="affiliate" element={<AffiliatePage />} />
        <Route path="responsible" element={<ResponsiblePage/>}/>
        <Route path="support" element={<SupportPage/>}/>
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

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgetPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  )
}

export default AppRoutes
