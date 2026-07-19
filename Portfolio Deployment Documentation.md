# Portfolio Deployment Documentation — rohan-portfolio

A reference of everything done to build, deploy, and connect a custom domain to the portfolio site, plus the issues hit along the way and how each was fixed.

## 1. Project setup

- Source: forked/rebuilt from the open-source `react-portfolio-template` (React + TypeScript + SCSS, by Yuji Sato), rewritten with real content: bio, skills, career history, and projects pulled from LinkedIn, GitHub, and project write-ups.
- Local project folder: `~/Documents/Projects/rohan-portfolio`
- GitHub repo: `https://github.com/Cetyl/rohan-portfolio`

## 2. First-time GitHub push

```
cd ~/Documents/Projects/rohan-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Cetyl/rohan-portfolio.git
git push -u origin main
```

## 3. Deploying to GitHub Pages

Install dependencies once:
```
npm install
```

Every time you want to publish changes:
```
npm run build
npx gh-pages -d build
```
(or the shorthand `npm run deploy`, which runs both automatically)

This builds the site and pushes the compiled output to a separate `gh-pages` branch, which GitHub Pages serves.

In the GitHub repo: **Settings → Pages** — confirm the source is set to the `gh-pages` branch.

Default live URL: `https://cetyl.github.io/rohan-portfolio`

## 4. Adding your profile photo

The image had to be added manually since a pasted/inline chat image isn't saved as an accessible file — only a real file upload or a file already sitting in a connected folder works.

- Photo saved to: `src/assets/images/avatar.jpg`
- Imported directly in `src/components/Main.tsx`:
  ```tsx
  import avatar from '../assets/images/avatar.jpg';
  ...
  <img src={avatar} alt="Rohan Poojari" />
  ```
- Importing from `src/` (rather than referencing `/avatar.jpg` in the `public` folder as an absolute path) matters — see the bug below.

## 5. Connecting a custom subdomain (Hostinger)

Domain registrar: Hostinger, root domain `rpoojari.space`
Subdomain chosen: `portfolio.rpoojari.space`

**In the project**, `public/CNAME` contains just:
```
portfolio.rpoojari.space
```

**In Hostinger DNS settings** (Domains → rpoojari.space → DNS):
- Added a CNAME record: host = `portfolio`, value = `cetyl.github.io`

**On GitHub**: Settings → Pages → Custom domain → entered `portfolio.rpoojari.space` → saved → enabled "Enforce HTTPS" once available.

(Note: for a root/apex domain instead of a subdomain, you'd add four A records pointing to `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` instead of a CNAME.)

## 6. Issues hit and how they were fixed

### Issue: avatar image showed a broken icon after deploying to the custom domain
**Cause:** the image was referenced as an absolute path (`/avatar.jpg`), which only resolves correctly when the site is served from the domain root. Under the original GitHub Pages URL (`cetyl.github.io/rohan-portfolio/`), `/avatar.jpg` pointed to the wrong location.
**Fix:** moved the image into `src/assets/images/` and imported it in the component so the build tool (webpack) bundles it with the correct path automatically, regardless of what subpath or domain it's served from.

### Issue: local `.git` history disappeared
**Cause:** re-unzipping an updated project file on top of the same folder overwrote the entire folder, including the hidden `.git` directory that tracked the GitHub connection.
**Fix:** re-cloned the existing GitHub repo fresh (`git clone https://github.com/Cetyl/rohan-portfolio.git`) instead of unzipping over the old folder. From that point on, changes were made by editing files directly inside the cloned folder, not by unzipping a new copy over it.

### Issue: blank page after switching to the custom domain
**Cause:** `package.json`'s `homepage` field was still set to the old GitHub Pages subpath (`https://cetyl.github.io/rohan-portfolio`). The build process uses this value to generate all asset paths (JS, CSS, manifest). Since the custom domain serves from the root, the browser was requesting files under a `/rohan-portfolio/` folder that no longer matched the site's actual structure — resulting in 404s for `main.js`, `main.css`, and `manifest.json`, and a blank page.
**Fix:**
```
sed -i '' 's|https://cetyl.github.io/rohan-portfolio|https://portfolio.rpoojari.space|' package.json
rm -rf build node_modules/.cache
npm run build
npx gh-pages -d build
git add .
git commit -m "Fix homepage for custom domain"
git push
```

### Issue: manually pasting a corrected `package.json` introduced invalid JSON
**Cause:** copy/paste (partly via voice dictation) corrupted the file — a missing opening `{` after `"dependencies":` and a garbled version string.
**Fix:** used `sed` to make a single targeted text substitution instead of retyping the whole file, avoiding manual copy/paste errors entirely.

## 7. Quick reference: how to publish any future change

```
cd ~/Documents/Projects/rohan-portfolio
# edit whatever files need changing
git add .
git commit -m "Describe the change"
git push
npm run build
npx gh-pages -d build
```

Then check `https://portfolio.rpoojari.space` in an incognito/private browser window (avoids stale cache).
