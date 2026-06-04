# DEPLOY.md - PestRemovalUSA

## Active workflow
`.github/workflows/deploy.yml` builds the Next.js static export on push to `main` (and on manual `workflow_dispatch`), then publishes the `out/` directory to the `live` branch using peaceiris/actions-gh-pages.

## How it works
```
Push / merge to main
  -> GitHub Actions: npm ci
  -> npm run build (Next.js static export to out/, then next-sitemap postbuild)
  -> touch out/.nojekyll
  -> publish out/ to the `live` branch (force_orphan)
  -> Hostinger serves the `live` branch
  -> Claude posts the live review links in chat (LIVE LINK REVIEW GATE)
```

## What is in the live branch
The compiled static site only: HTML, CSS, JS, sitemaps, assets. No source files, no TypeScript, no YAML.

## Build state
See `build_state.json` for current page counts and the next-batch pointer.

## Critical rules
- The `live` branch is build output. Never edit it directly.
- `.github/workflows/*.yml` cannot be edited via the GitHub MCP connector (403). Edit on a local clone and commit with git, or hand Gareth the full file to paste via the GitHub web editor. See ERRORS.md.
- Static export means no server runtime. No server-side rendering, no API routes at runtime. All pages are pre-rendered via `generateStaticParams`.
- During development the working branch is `claude/pest-control-seo-setup-cpLLm`. Pushes there do not deploy until merged to `main`, unless the workflow trigger is widened.
