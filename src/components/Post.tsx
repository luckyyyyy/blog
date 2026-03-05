import { marked } from 'marked'
import 'github-markdown-css/github-markdown.css'
import type { Issue } from '../api'
import './Post.css'

interface PostProps {
  issue: Issue
}

export default function Post({ issue }: PostProps) {
  const html = marked.parse(issue.body || '') as string

  return (
    <a className="post-link" target="_blank" rel="noopener noreferrer" href={issue.html_url}>
      <article className="post-card">
        <h2 className="post-title">{issue.title}</h2>
        <div className="post-meta">
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
        </div>
        <div
          className="post-body markdown-body"
          data-color-mode="auto"
          data-light-theme="light"
          data-dark-theme="dark"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </a>
  )
}
