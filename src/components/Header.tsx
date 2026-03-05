import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img className="header-avatar" src="/assets/avatar.png" alt="avatar" />
        <div className="header-terminal">
          <span>[</span>
          <span className="ansi-pink">root</span>
          <span>@</span>
          <span className="ansi-red">williamchan.me</span>
          <span>:</span>
          <span className="ansi-green">~/blog</span>
          <span>]</span>
          <span> $</span>
          <span className="cursor" />
          <span className="placeholder">echo "Passionate about technology &amp; Hacker"</span>
        </div>
      </div>
      <nav className="header-right">
        <div className="header-links">
          <Link to="/">Home</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://weibo.com/techvicky" className="link-weibo">微博</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/people/qingyh/activities" className="link-zhihu">知乎</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/luckyyyyy" className="link-github">GitHub</a>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  )
}
