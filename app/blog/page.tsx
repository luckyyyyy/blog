import type { Metadata } from 'next'
import { getIssuesPage } from '../api'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import '../styles/Home.css'

export const metadata: Metadata = {
  title: 'Blog - William Chan',
  description: 'Articles about web development, AI, and engineering by William Chan',
}

const PER_PAGE = 20

export default async function BlogPage() {
  const { issues, hasNext } = await getIssuesPage(1, PER_PAGE)

  const rows: Array<{ type: 'year'; year: number } | { type: 'post'; issue: typeof issues[0] }> = []
  let lastYear: number | null = null
  for (const issue of issues) {
    const year = new Date(issue.created_at).getFullYear()
    if (year !== lastYear) {
      rows.push({ type: 'year', year })
      lastYear = year
    }
    rows.push({ type: 'post', issue })
  }

  return (
    <div className="home">
      <h2 className="home-section-title">文章</h2>
      <div className="post-list">
        {rows.map(row =>
          row.type === 'year'
            ? <div key={`year-${row.year}`} className="post-year-divider"><span>{row.year}</span></div>
            : <Post key={row.issue.id} issue={row.issue} />
        )}
      </div>
      <Pagination currentPage={1} hasNext={hasNext} />
    </div>
  )
}
