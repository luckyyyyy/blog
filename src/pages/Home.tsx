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
      <h1 className="home-title">青阳魂的博客</h1>
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
