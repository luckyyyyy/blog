import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { getIssue, getIssueComments } from '../api'
import type { Issue, Comment } from '../api'
import Comments from '../components/Comments'
import 'github-markdown-css/github-markdown.css'
import './PostDetail.css'

export default function PostDetail() {
  const { number } = useParams<{ number: string }>()
  const [issue, setIssue] = useState<Issue | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!number) return
    const n = parseInt(number)
    Promise.all([getIssue(n), getIssueComments(n)])
      .then(([issue, comments]) => {
        setIssue(issue)
        setComments(comments)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [number])

  if (loading) return <div className="detail-state">Loading...</div>
  if (error || !issue) return (
    <div className="detail-state detail-error-state">
      <p>文章不存在或加载失败</p>
      <Link to="/blog">← 返回列表</Link>
    </div>
  )

  const html = (marked.parse(issue.body || '') as string).replace(/^<h1[^>]*>.*?<\/h1>\s*/i, '')

  return (
    <div className="post-detail">
      <nav className="detail-nav">
        <Link to="/blog">← 所有文章</Link>
      </nav>
      <article className="detail-article">
        <h1 className="detail-title">{issue.title}</h1>
        <div className="detail-meta">
          <time>{new Date(issue.created_at).toLocaleDateString('zh-CN')}</time>
          {issue.labels.map(label => (
            <span
              key={label.name}
              className="post-label"
              style={{ background: `#${label.color}20`, color: `#${label.color}`, borderColor: `#${label.color}40` }}
            >
              {label.name}
            </span>
          ))}
          <a
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-github-link"
          >
            在 GitHub 查看 ↗
          </a>
        </div>
        <div
          className="markdown-body detail-body"
          data-color-mode="auto"
          data-light-theme="light"
          data-dark-theme="dark"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <Comments comments={comments} issueUrl={issue.html_url} />
    </div>
  )
}
