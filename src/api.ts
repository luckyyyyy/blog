const GITHUB_API = 'https://api.github.com'
const OWNER = 'luckyyyyy'
const REPO = 'Blog'

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

export async function getIssues(): Promise<Issue[]> {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/issues?state=open&per_page=20`)
  if (!res.ok) throw new Error(`Failed to fetch issues: ${res.status}`)
  return res.json()
}

export async function getIssue(number: number): Promise<Issue> {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/issues/${number}`)
  if (!res.ok) throw new Error(`Failed to fetch issue: ${res.status}`)
  return res.json()
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

export async function getIssueComments(number: number): Promise<Comment[]> {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/issues/${number}/comments`)
  if (!res.ok) throw new Error(`Failed to fetch comments: ${res.status}`)
  return res.json()
}
