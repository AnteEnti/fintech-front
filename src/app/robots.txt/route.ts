export function GET() {
  return new Response(
    `User-agent: *
Allow: /

# Telugu FinTech platform - Educational financial content
Sitemap: https://fintechtelugu.com/sitemap.xml

# Block admin and private routes
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

# Allow all educational content
Allow: /calculators/
Allow: /learn/
Allow: /compare/
Allow: /tips/
Allow: /legal/
Allow: /about/`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}