import type { MetadataRoute } from 'next'
import { getIssues } from './api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://william.im'
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  ]

  try {
    const issues = await getIssues(1, 50)
    const postPages: MetadataRoute.Sitemap = issues.map(issue => ({
      url: `${base}/posts/${issue.number}/${slugify(issue.title)}`,
      lastModified: new Date(issue.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
    return [...staticPages, ...postPages]
  } catch {
    return staticPages
  }
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
