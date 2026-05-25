import type { Metadata } from 'next'
import ClientShell from './components/ClientShell'
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
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
