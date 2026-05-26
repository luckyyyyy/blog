const GITHUB_API = 'https://api.github.com'
const OWNER = 'luckyyyyy'
const REPO = 'Blog'

const headers: HeadersInit = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {}

export interface Issue {
  id: number
  number: number
  title: string
  body: string
  html_url: string
  created_at: string
  comments: number
  user: {
    login: string
    avatar_url: string
  }
  labels: Array<{
    name: string
    color: string
  }>
}

export async function getIssues(page = 1, perPage = 20): Promise<Issue[]> {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/issues?state=open&creator=${OWNER}&per_page=${perPage}&page=${page}`, { next: { revalidate: 600 }, headers })
  if (!res.ok) throw new Error(`Failed to fetch issues: ${res.status}`)
  return res.json()
}

export async function getIssuesPage(page = 1, perPage = 20): Promise<{ issues: Issue[]; hasNext: boolean }> {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/issues?state=open&creator=${OWNER}&per_page=${perPage}&page=${page}`, { next: { revalidate: 600 }, headers })
  if (!res.ok) throw new Error(`Failed to fetch issues: ${res.status}`)
  const issues: Issue[] = await res.json()
  const link = res.headers.get('Link') || ''
  const hasNext = link.includes('rel="next"')
  return { issues, hasNext }
}

export async function getIssue(number: number): Promise<Issue> {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/issues/${number}`, { next: { revalidate: 600 }, headers })
  if (!res.ok) throw new Error(`Failed to fetch issue: ${res.status}`)
  const issue = await res.json()
  if (issue.user?.login !== OWNER) throw new Error('Issue not found')
  return issue
}

export interface Comment {
  id: number
  body: string
  created_at: string
  html_url: string
  user: {
    login: string
    avatar_url: string
    html_url: string
  }
}

export async function getIssueComments(number: number, page = 1, perPage = 30): Promise<Comment[]> {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/issues/${number}/comments?per_page=${perPage}&page=${page}`, { next: { revalidate: 600 }, headers })
  if (!res.ok) throw new Error(`Failed to fetch comments: ${res.status}`)
  return res.json()
}

export async function getRepoStars(repos: string[]): Promise<Record<string, number>> {
  const results = await Promise.allSettled(
    repos.map(async (repo) => {
      const res = await fetch(`${GITHUB_API}/repos/${repo}`, {
        next: { revalidate: 3600 },
        headers,
      })
      if (!res.ok) return { repo, stars: 0 }
      const data = await res.json()
      return { repo, stars: data.stargazers_count as number }
    })
  )
  return Object.fromEntries(
    repos.map((repo, i) => {
      const r = results[i]
      return [repo, r.status === 'fulfilled' ? r.value.stars : 0]
    })
  )
}
