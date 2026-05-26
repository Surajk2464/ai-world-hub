import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  
  // Fetch all tools
  const { data: tools } = await supabase
    .from('ai_tools')
    .select('slug, updated_at')
    .limit(50000)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aiworldhub.site'

  const toolUrls = (tools || []).map((tool) => ({
    url: `${siteUrl}/tool/${tool.slug}`,
    lastmod: tool.updated_at,
    changefreq: 'weekly',
    priority: 0.8,
  }))

  const staticUrls = [
    {
      url: siteUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
  ]

  const allUrls = [...staticUrls, ...toolUrls]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      ({ url, lastmod, changefreq, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  `
    )
    .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
