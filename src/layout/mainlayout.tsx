import { Outlet } from 'react-router-dom'

import Footer from '@/components/footer'
import Header from '@/pages/brand/header'

function MainLayout() {
  return (
    <main className="min-h-screen bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] text-slate-900 transition-colors duration-300 dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] dark:text-slate-100">
      <Header />

      <Outlet />

      <Footer />
    </main>
  )
}

export default MainLayout
