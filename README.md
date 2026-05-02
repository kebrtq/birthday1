# Birthday1 Deployment

This project is configured for static deployment on Cloudflare Pages using Git-based deploys.

## Deploy flow (Git push)

```bash
git add .
git commit -m "update"
git push
```

## Cloudflare Pages settings

- Build command: `npm run build`
- Output directory: `out`
