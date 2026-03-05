import { Outlet } from 'react-router-dom'
import Header from './Header'
import Background from './Background'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <Background />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  )
}
