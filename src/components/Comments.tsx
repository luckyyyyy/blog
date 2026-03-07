import { marked } from 'marked'
import type { Comment } from '../api'
import './Comments.css'

interface Props {
  comments: Comment[]
  issueUrl: string
}

export default function Comments({ comments, issueUrl }: Props) {
  return (
    <section className="comments-section">
      <div className="comments-header">
        <h2 className="comments-title">评论 <span className="comments-count">{comments.length}</span></h2>
        <a
          href={issueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="comments-write-btn"
        >
          去 GitHub 评论 ↗
        </a>
      </div>

      {comments.length === 0 ? (
        <div className="comments-empty">
          <p>暂无评论，去 GitHub 留下第一条评论吧</p>
        </div>
      ) : (
        <ul className="comments-list">
          {comments.map(comment => (
            <li key={comment.id} className="comment-item">
              <a
                href={comment.user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="comment-avatar-link"
              >
                <img
                  src={comment.user.avatar_url}
                  alt={comment.user.login}
                  className="comment-avatar"
                />
              </a>
              <div className="comment-body">
                <div className="comment-meta">
                  <a
                    href={comment.user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comment-author"
                  >
                    {comment.user.login}
                  </a>
                  <time className="comment-time">
                    {new Date(comment.created_at).toLocaleDateString('zh-CN')}
                  </time>
                  <a
                    href={comment.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comment-link"
                  >
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
      )}
    </section>
  )
}
