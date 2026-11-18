import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Shared page frame: header + current page + footer
export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
