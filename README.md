# Induja Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Requirements

- Node.js 18+ (recommended)
- npm

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open in browser:

```text
http://localhost:8080
```

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Resume Setup (Easy to Update)

Resume file is served from:

- `public/resume.pdf`

The resume link path is configured in:

- `src/config/site.ts`

To update the resume in future:

1. Replace/add the new PDF file in `public/`
2. Update `resumePath` in `src/config/site.ts` if filename changes

Example:

```ts
export const resumePath = "/resume-2026.pdf";
```

## Share With Public Link (Temporary)

If you want anyone to access your local running app temporarily:

```bash
npx localtunnel --port 8080
```

This gives a public URL like `https://xxxxx.loca.lt`.  
Keep your dev server running while sharing this link.

## Deploy on Vercel (permanent public link)

This repo is set up so **Vercel builds from the repository root** (where `package.json` lives).  
`vercel.json` includes SPA rewrites so React Router routes (for example `/about`) work on refresh.

1. Push this project to [GitHub](https://github.com/madithatiinduja/portfolio).
2. In [Vercel](https://vercel.com), **Add New Project** → import that repository.
3. Use the defaults Vercel suggests for Vite:
   - **Framework Preset**: Vite (or “Other” if needed)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. **Root Directory**: leave empty (`.`) if the repo root contains `package.json` and `vite.config.ts`.  
   Only set a subfolder here if your GitHub repo wraps the app in another directory (for example `indujaportfolio-main/`).
5. Deploy. Vercel will give you a URL like `https://portfolio-xxx.vercel.app`.

If a past deploy failed with “failed to resolve import `/src/main.tsx`”, the build was running from the wrong folder—fix **Root Directory** in Vercel (step 4) or flatten the repo so the Vite app is at the repo root.

### Push from this machine (first time)

From the project folder (same level as `package.json`):

```bash
git init
git add .
git commit -m "Initial portfolio with Vite and resume"
git branch -M main
git remote add origin https://github.com/madithatiinduja/portfolio.git
git push -u origin main
```

If the remote already has commits, use `git pull origin main --rebase` before pushing, or follow GitHub’s instructions to resolve conflicts.
