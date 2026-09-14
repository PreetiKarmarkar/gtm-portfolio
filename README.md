# Preeti Karmarkar — Portfolio

Single-page portfolio built with Next.js 16 (App Router), React 19, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build: `npm run build && npm start`.

## Swap in real assets

| What | Where |
| --- | --- |
| Hero photo | Save a portrait as `public/images/profile.jpg`. Until it exists, the "Add your photo here" gradient shows. |
| Project screenshots | Replace `public/images/projects/{talkmybill,outreachiq,competeiq}.svg`. If you use `.png`/`.jpg`, update the `image` paths in `components/Projects.tsx`. |
| "Try It Live" URLs | `liveUrl` fields in `components/Projects.tsx` (currently `example.com` placeholders). |
| Case-study links | Add a `caseStudyUrl` to a project to show its "View Case Study →" link. |

## Structure

```
app/
  layout.tsx       fonts (DM Sans, Cormorant Garamond, Caveat) + metadata
  page.tsx         section order
  globals.css      all styling: tokens, grain, scrollbar, sections, breakpoints
components/
  Reveal.tsx       once-only scroll-reveal wrapper (Framer Motion)
  Hero, Marquee, About, Experience, Projects, Leadership, Contact, Footer
public/images/projects/  placeholder screenshots
```

## Deploy to Vercel

**Option A: GitHub + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo, and keep the defaults (Framework: Next.js). Click Deploy.
3. Every push to `main` redeploys automatically.

**Option B: Vercel CLI**
```bash
npm i -g vercel
vercel          # first run: log in, link the project, get a preview URL
vercel --prod   # deploy to production
```
