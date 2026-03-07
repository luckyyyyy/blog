import { useState, useEffect, useRef, useCallback } from 'react'
import { getIssues, type Issue } from '../api'
import Post from '../components/Post'
import './Home.css'

const PER_PAGE = 20

export default function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadPage = useCallback(async (p: number) => {
    setLoading(true)
    try {
      const data = await getIssues(p, PER_PAGE)
      setIssues(prev => p === 1 ? data : [...prev, ...data])
      if (data.length < PER_PAGE) setHasMore(false)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { loadPage(1) }, [loadPage])

  useEffect(() => {
    if (!hasMore || loading) return
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(p => p + 1)
      }
    }, { rootMargin: '200px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, loading])

  useEffect(() => {
    if (page > 1) loadPage(page)
  }, [page, loadPage])

  // Group issues by year with dividers
  const rows: Array<{ type: 'year'; year: number } | { type: 'post'; issue: Issue }> = []
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
      {error && <div className="home-error">Failed to load posts</div>}
      <div className="post-list">
        {rows.map(row =>
          row.type === 'year'
            ? (
              <div key={`year-${row.year}`} className="post-year-divider">
                <span>{row.year}</span>
              </div>
            )
            : <Post key={row.issue.id} issue={row.issue} />
        )}
      </div>
      {loading && <div className="home-loading">Loading...</div>}
      {!hasMore && issues.length > 0 && <div className="home-end">· 已加载全部文章 ·</div>}
      <div ref={sentinelRef} />
    </div>
  )
}
