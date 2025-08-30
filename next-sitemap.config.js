/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fintech.anteenti.com', // FinTech Telugu production URL
  generateRobotsTxt: true, // Optional: Generates a robots.txt file
  // Optional: Add other configurations like exclude, additionalPaths, etc.
  // exclude: ['/secret-page', '/admin/*'],
  // robotsTxtOptions: {
  //   policies: [
  //     { userAgent: '*', allow: '/' },
  //     { userAgent: 'Googlebot-Image', disallow: '/images' },
  //   ],
  // },
};