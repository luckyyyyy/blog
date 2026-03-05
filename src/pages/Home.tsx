import { useState, useEffect } from 'react'
import { getIssues, type Issue } from '../api'
import Post from '../components/Post'
import './Home.css'

export default function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getIssues()
      .then(setIssues)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="home">
      <h2 className="home-section-title">文章</h2>
      {loading && <div className="home-loading">Loading...</div>}
      {error && <div className="home-error">Failed to load posts</div>}
      <div className="post-list">
        {issues.map(issue => (
          <Post key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  )
}
