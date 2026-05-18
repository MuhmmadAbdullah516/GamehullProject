import { Route, Routes } from 'react-router-dom'

import ForgetPasswordPage from '@/pages/auth/forget'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'
import VerifyOtpPage from '@/pages/auth/verifyOtp'
import MainLayout from '@/layout/mainlayout'
import GamePage from "@/pages/brand/games"
import GameDetailPage  from "@/pages/brand/game-detail"
import HomePage from "@/pages/brand/home"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="games" element={<GamePage />} />
        <Route path="free-spin" element={<div>Free Spin Page</div>} />
        <Route path="affiliate" element={<div>Affiliate Page</div>} />
        <Route path="games/:slug" element={<GameDetailPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgetPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
    </Routes>
  )
}

export default AppRoutes
