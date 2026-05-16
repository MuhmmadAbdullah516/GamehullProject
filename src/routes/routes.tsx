import { Route, Routes } from 'react-router-dom'

import ForgetPasswordPage from '@/pages/forget'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import VerifyOtpPage from '@/pages/verifyOtp'
import MainLayout from '@/layout/mainlayout'
import GamePage from "@/pages/games"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
        <Route path="games" element={<GamePage />} />
        <Route path="free-spin" element={<div>Free Spin Page</div>} />
        <Route path="affiliate" element={<div>Affiliate Page</div>} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgetPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
    </Routes>
  )
}

export default AppRoutes
