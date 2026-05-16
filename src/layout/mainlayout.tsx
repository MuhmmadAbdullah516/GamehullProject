import { Outlet } from 'react-router-dom'

import Footer from '@/components/footer'
import Header from '@/pages/header'

function MainLayout() {
  return (
    <main className="min-h-screen bg-bg text-text transition-colors duration-300 dark:bg-bg-dark dark:text-text-dark">
      <Header />

      <Outlet />

      <Footer />
    </main>
  )
}

export default MainLayout
