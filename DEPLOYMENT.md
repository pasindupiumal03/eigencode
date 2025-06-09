# Deployment Guide

## Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Manual Deployment

### Build the project
\`\`\`bash
npm run build
\`\`\`

### Start production server
\`\`\`bash
npm start
\`\`\`

## Environment Variables

Set these in your deployment platform:

- `NEXT_PUBLIC_APP_URL` - Your domain URL
- Any other environment variables from `.env.example`

## Performance Optimization

1. Enable compression
2. Configure CDN for static assets
3. Set up proper caching headers
4. Monitor Core Web Vitals

## Security

1. Set up proper CSP headers
2. Configure HTTPS
3. Set up rate limiting if needed
4. Regular security updates
