import type { Metadata } from 'next'
import { getIssues } from '../api'
import BlogListClient from './BlogListClient'
import '../styles/Home.css'

export const metadata: Metadata = {
  title: 'Blog - William Chan',
  description: 'Articles about web development, AI, and engineering by William Chan',
}

const PER_PAGE = 20

export default async function BlogPage() {
  const initialIssues = await getIssues(1, PER_PAGE)

  return (
    <div className="home">
      <h2 className="home-section-title">文章</h2>
      <BlogListClient initialIssues={initialIssues} perPage={PER_PAGE} />
    </div>
  )
}
