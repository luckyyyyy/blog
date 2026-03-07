import { Link } from 'react-router-dom'
import type { Issue } from '../api'
import './Post.css'

interface PostProps {
  issue: Issue
}

export default function Post({ issue }: PostProps) {
  return (
    <Link className="post-link" to={`/post/${issue.number}`}>
      <article className="post-card">
        <div className="post-main">
          <h2 className="post-title">{issue.title}</h2>
          {issue.labels.length > 0 && (
            <div className="post-labels">
              {issue.labels.map(label => (
                <span
                  key={label.name}
                  className="post-label"
                  style={{ background: `#${label.color}20`, color: `#${label.color}`, borderColor: `#${label.color}40` }}
                >
                  {label.name}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="post-aside">
          <img src={issue.user.avatar_url} alt={issue.user.login} className="post-author-avatar" />
          <span className="post-author-name">{issue.user.login}</span>
          <time className="post-date">
            {new Date(issue.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </time>
          {issue.comments > 0 && (
            <span className="post-comments">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Z" />
              </svg>
              {issue.comments}
            </span>
          )}
        </div>
      </article>
    </Link>
  )
}
