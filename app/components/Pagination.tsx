import Link from 'next/link'
import './Pagination.css'

interface Props {
  currentPage: number
  hasNext: boolean
}

export default function Pagination({ currentPage, hasNext }: Props) {
  if (currentPage === 1 && !hasNext) return null

  const pages: number[] = []
  const start = Math.max(1, currentPage - 2)
  const end = hasNext ? currentPage + 2 : currentPage
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return (
    <nav className="pagination" aria-label="pagination">
      {currentPage > 1 && (
        <Link
          className="pagination-btn"
          href={currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`}
          rel="prev"
        >
          ←
        </Link>
      )}
      {pages.map(p => (
        <Link
          key={p}
          className={`pagination-btn ${p === currentPage ? 'pagination-active' : ''}`}
          href={p === 1 ? '/blog' : `/blog/${p}`}
        >
          {p}
        </Link>
      ))}
      {hasNext && (
        <Link className="pagination-btn" href={`/blog/${currentPage + 1}`} rel="next">
          →
        </Link>
      )}
    </nav>
  )
}
