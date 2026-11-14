# Astelverse web

Company site for https://www.astelverse.com, built with Angular 18.

## Develop

    npm install
    npx ng serve                     # http://localhost:4200

## Where things live

- `src/app/data/products.ts`: the product cards on the home page. Add a product here.
- `src/app/pages/`: one folder per page. Add a route for each in `src/app/app.routes.ts`.
- `src/styles.css`: colour tokens (light and dark) and shared layout.
- `public/`: copied as-is to the site root (`robots.txt`, `sitemap.xml`, `_headers`).
  Add new pages to `sitemap.xml`.

## Deploy

Cloudflare Workers static assets, configured in `wrangler.jsonc`. Every push to
`main` builds on Cloudflare (`npm run build`, then `npx wrangler deploy`) and
serves `dist/astelverse-web/browser`, sending unknown paths to `index.html` so
Angular routes work. `astelverse.com` gets a 301 redirect to `www`.
