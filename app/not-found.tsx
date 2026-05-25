import Link from 'next/link'
import './styles/NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">← Back to Home</Link>
    </div>
  )
}
