import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Background from './components/Background'
import Header from './components/Header'
import './globals.css'
import './components/Layout.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'William Chan - 写代码不赚钱 就交个朋友',
  description: 'Full Stack Developer & AI Agent Engineer. 博客分享 Web 开发、AI Agent、Rust、TypeScript 等技术实践。',
  icons: '/assets/favicon.ico',
  metadataBase: new URL('https://william.im'),
  authors: [{ name: 'William Chan', url: 'https://github.com/luckyyyyy' }],
  keywords: ['William Chan', '博客', 'Web开发', 'AI Agent', 'Rust', 'TypeScript', 'Full Stack'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'William Chan',
    images: ['/assets/avatar.png'],
  },
  twitter: {
    card: 'summary',
  },
  alternates: {
    canonical: 'https://william.im',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Background />
        <Header />
        <main className="main-content">{children}</main>
        <GoogleAnalytics gaId="G-TR4Y7MLJP1" />
      </body>
    </html>
  )
}
