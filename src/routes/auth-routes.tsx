import { useEffect, useState } from 'react'

import ForgetPasswordPage from '@/pages/forget'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import ResetPasswordPage from '@/pages/resetPassword'

const routes = {
  '/': LoginPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/forgot-password': ForgetPasswordPage,
  '/reset-password': ResetPasswordPage,
  '/resetPassword': ResetPasswordPage,
  '/resetpassword': ResetPasswordPage,
}

type RoutePath = keyof typeof routes

function getRoutePath(): RoutePath {
  const pathname = window.location.pathname

  return pathname in routes ? (pathname as RoutePath) : '/'
}

function AppRoutes() {
  const [routePath, setRoutePath] = useState(getRoutePath)

  useEffect(() => {
    const handleRouteChange = () => {
      setRoutePath(getRoutePath())
    }

    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  const Page = routes[routePath]

  return <Page />
}

export default AppRoutes
