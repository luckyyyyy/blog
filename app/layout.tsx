import type { Metadata } from 'next'
import Background from './components/Background'
import Header from './components/Header'
import './globals.css'
import './components/Layout.css'

export const metadata: Metadata = {
  title: 'William Chan - 写代码不赚钱 就交个朋友',
  icons: '/assets/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Background />
        <Header />
        <main className="main-content">{children}</main>
      </body>
    </html>
  )
}
