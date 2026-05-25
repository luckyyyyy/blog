'use client'

import Background from './Background'
import Header from './Header'
import './Layout.css'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      <main className="main-content">{children}</main>
    </>
  )
}
