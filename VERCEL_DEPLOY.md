# Vercel Deployment Guide

This project is ready to deploy on Vercel!

## Quick Deploy

1. **Import your GitHub repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import the repository: `https://github.com/namithm70/fitness222.git`

2. **Configure the project:**
   - **Root Directory:** Leave as root (`.`)
   - The `vercel.json` at the root will handle the build configuration automatically
   - Vercel will use the settings from `vercel.json`:
     - Build Command: `cd web && npm install && npm run build`
     - Output Directory: `web/dist`
     - Install Command: `cd web && npm install`

   **OR** if you prefer to set Root Directory to `web`:
   - **Root Directory:** Set to `web`
   - **Framework Preset:** Vite (should auto-detect)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
   - **Install Command:** `npm install` (default)

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

## Configuration

The `vercel.json` file in the `web/` directory configures:
- **SPA Routing:** All routes are rewritten to `/index.html` to support React Router client-side routing

## Environment Variables

If you need any environment variables, add them in the Vercel dashboard under:
**Settings → Environment Variables**

## Custom Domain

After deployment, you can add a custom domain in:
**Settings → Domains**

Your site will be live at a `*.vercel.app` URL immediately after deployment!

