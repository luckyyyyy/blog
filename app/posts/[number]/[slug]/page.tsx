import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { marked } from '../../../lib/marked'
import { toSlug } from '../../../lib/slug'
import { getIssue, getIssues } from '../../../api'
import Comments from '../../../components/Comments'
import 'github-markdown-css/github-markdown.css'
import '../../../styles/PostDetail.css'

interface PageProps {
  params: Promise<{ number: string; slug: string }>
}

export async function generateStaticParams() {
  try {
    const issues = await getIssues(1, 50)
    return issues.map(issue => ({
      number: String(issue.number),
      slug: toSlug(issue.title),
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { number } = await params
  try {
    const issue = await getIssue(parseInt(number))
    const plainText = (issue.body || '')
      .replace(/[#*`\[\]()!>_~|\\-]/g, '')
      .replace(/\n+/g, ' ')
      .trim()
    const description = plainText.length > 160 ? plainText.slice(0, 157) + '...' : plainText

    return {
      title: `${issue.title} - William Chan`,
      description,
      openGraph: {
        title: issue.title,
        description,
        type: 'article',
        publishedTime: issue.created_at,
        authors: [issue.user.login],
      },
    }
  } catch {
    return { title: 'Post Not Found - William Chan' }
  }
}

export default async function PostDetail({ params }: PageProps) {
  const { number, slug } = await params

  let issue
  try {
    issue = await getIssue(parseInt(number))
  } catch {
    notFound()
  }

  // Redirect to canonical URL if slug doesn't match (including old /post/:number redirects with slug="-")
  const expectedSlug = toSlug(issue.title)
  if (slug !== expectedSlug) {
    redirect(`/posts/${issue.number}/${expectedSlug}`)
  }

  const html = (marked.parse(issue.body || '') as string).replace(/^<h1[^>]*>.*?<\/h1>\s*/i, '')

  return (
    <div className="post-detail">
      <nav className="detail-nav">
        <Link href="/blog">← 所有文章</Link>
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
      <Comments issueNumber={issue.number} issueUrl={issue.html_url} totalComments={issue.comments} />
    </div>
  )
}
