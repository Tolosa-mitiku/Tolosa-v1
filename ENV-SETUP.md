# Environment Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with:

```bash
# Site URL for SEO and metadata
# IMPORTANT: Update this with your actual production domain
NEXT_PUBLIC_SITE_URL=https://tolosa-mitiku.com
```

## Local Development

For local development, the site will default to `https://tolosa-mitiku.com` if no environment variable is set.

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), add the environment variable:

### Vercel
```bash
vercel env add NEXT_PUBLIC_SITE_URL
# Enter your production URL when prompted
```

### Netlify
Add to your Netlify dashboard under:
Site Settings → Environment Variables → Add Variable
- Key: `NEXT_PUBLIC_SITE_URL`
- Value: `https://your-domain.com`

### Other Platforms
Add the environment variable through your platform's dashboard or CLI.

## Important Notes

- The `NEXT_PUBLIC_` prefix makes the variable available in the browser
- This URL is used for:
  - Open Graph metadata
  - Twitter cards
  - Canonical URLs
  - Sitemap generation
  - Structured data (JSON-LD)

