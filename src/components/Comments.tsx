import { useState, useEffect, useRef, useCallback } from 'react'
import { marked } from 'marked'
import { getIssueComments } from '../api'
import type { Comment } from '../api'
import './Comments.css'

interface Props {
  issueNumber: number
  issueUrl: string
  totalComments: number
}

const PER_PAGE = 30

export default function Comments({ issueNumber, issueUrl, totalComments }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(totalComments > 0)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadPage = useCallback(async (p: number) => {
    setLoading(true)
    try {
      const data = await getIssueComments(issueNumber, p, PER_PAGE)
      setComments(prev => p === 1 ? data : [...prev, ...data])
      if (data.length < PER_PAGE) setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [issueNumber])

  useEffect(() => {
    if (totalComments > 0) loadPage(1)
  }, [totalComments, loadPage])

  useEffect(() => {
    if (!hasMore || loading) return
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setPage(p => p + 1)
    }, { rootMargin: '200px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, loading])

  useEffect(() => {
    if (page > 1) loadPage(page)
  }, [page, loadPage])

  return (
    <section className="comments-section">
      <div className="comments-header">
        <h2 className="comments-title">
          评论
          <span className="comments-count">{totalComments}</span>
        </h2>
        <a href={issueUrl} target="_blank" rel="noopener noreferrer" className="comments-write-btn">
          去 GitHub 评论 ↗
        </a>
      </div>

      {totalComments === 0 ? (
        <div className="comments-empty">
          <p>暂无评论，去 GitHub 留下第一条评论吧</p>
        </div>
      ) : (
        <>
          <ul className="comments-list">
            {comments.map(comment => (
              <li key={comment.id} className="comment-item">
                <a href={comment.user.html_url} target="_blank" rel="noopener noreferrer" className="comment-avatar-link">
                  <img src={comment.user.avatar_url} alt={comment.user.login} className="comment-avatar" />
                </a>
                <div className="comment-body">
                  <div className="comment-meta">
                    <a href={comment.user.html_url} target="_blank" rel="noopener noreferrer" className="comment-author">
                      {comment.user.login}
                    </a>
                    <time className="comment-time">
                      {new Date(comment.created_at).toLocaleDateString('zh-CN')}
                    </time>
                    <a href={comment.html_url} target="_blank" rel="noopener noreferrer" className="comment-link">
                      在 GitHub 查看 ↗
                    </a>
                  </div>
                  <div
                    className="markdown-body comment-content"
                    data-color-mode="auto"
                    data-light-theme="light"
                    data-dark-theme="dark"
                    dangerouslySetInnerHTML={{ __html: marked.parse(comment.body || '') as string }}
                  />
                </div>
              </li>
            ))}
          </ul>
          {loading && <div className="comments-loading">Loading...</div>}
          {!hasMore && comments.length > 0 && (
            <div className="comments-end">· 已加载全部评论 ·</div>
          )}
          <div ref={sentinelRef} />
        </>
      )}
    </section>
  )
}
