import Link from 'next/link'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-brand">
          <img className="header-avatar" src="/assets/avatar.png" alt="avatar" />
          <span className="header-name">William Chan</span>
        </Link>
        <nav className="header-nav">
          <Link href="/blog">Blog</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/luckyyyyy">GitHub</a>
        </nav>
      </div>
    </header>
  )
}
