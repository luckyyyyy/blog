import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getIssuesPage } from '../../api'
import Post from '../../components/Post'
import Pagination from '../../components/Pagination'
import '../../styles/Home.css'

interface PageProps {
  params: Promise<{ page: string }>
}

const PER_PAGE = 20

export async function generateStaticParams() {
  try {
    const { issues } = await getIssuesPage(1, PER_PAGE)
    const totalPages = Math.ceil(issues.length / PER_PAGE)
    // Pre-render up to 5 pagination pages
    return Array.from({ length: Math.min(4, totalPages) }, (_, i) => ({
      page: String(i + 2),
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params
  return {
    title: `Blog - Page ${page} - William Chan`,
    description: `Articles page ${page} by William Chan`,
  }
}

export default async function BlogPageNum({ params }: PageProps) {
  const { page: pageStr } = await params
  const pageNum = parseInt(pageStr)
  if (isNaN(pageNum) || pageNum < 2) notFound()

  const { issues, hasNext } = await getIssuesPage(pageNum, PER_PAGE)
  if (issues.length === 0) notFound()

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
      <Pagination currentPage={pageNum} hasNext={hasNext} />
    </div>
  )
}
