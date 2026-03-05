import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-brand">
          <img className="header-avatar" src="/assets/avatar.png" alt="avatar" />
          <span className="header-name">青阳魂</span>
        </Link>
        <nav className="header-nav">
          <Link to="/blog">Blog</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/luckyyyyy">GitHub</a>
        </nav>
      </div>
    </header>
  )
}
