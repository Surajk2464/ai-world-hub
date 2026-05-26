/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Domain redirects are handled by Vercel at the edge level
  // Do NOT add application-level redirects for www/non-www as they conflict with Vercel's automatic redirects
}

export default nextConfig
