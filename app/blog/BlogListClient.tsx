'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { getIssues, type Issue } from '../api'
import Post from '../components/Post'

interface Props {
  initialIssues: Issue[]
  perPage: number
}

export default function BlogListClient({ initialIssues, perPage }: Props) {
  const [issues, setIssues] = useState<Issue[]>(initialIssues)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(initialIssues.length >= perPage)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadPage = useCallback(async (p: number) => {
    setLoading(true)
    try {
      const data = await getIssues(p, perPage)
      setIssues(prev => [...prev, ...data])
      if (data.length < perPage) setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [perPage])

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
    <>
      <div className="post-list">
        {rows.map(row =>
          row.type === 'year'
            ? <div key={`year-${row.year}`} className="post-year-divider"><span>{row.year}</span></div>
            : <Post key={row.issue.id} issue={row.issue} />
        )}
      </div>
      {loading && <div className="home-loading">Loading...</div>}
      {!hasMore && issues.length > 0 && <div className="home-end">· 已加载全部文章 ·</div>}
      <div ref={sentinelRef} />
    </>
  )
}
