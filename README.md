# Cyber Portfolio — React (Vite) Version

This project is a Vite + React scaffold porting the static cyber-themed portfolio into a React app with Tailwind CSS, Framer Motion, and Reach Router installed.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
npm run preview
```

Notes
- Tailwind config: `tailwind.config.cjs`
- Vite config: `vite.config.js`
- Entry: `src/main.jsx` -> `src/App.jsx`

3D model (GLTF)
- Place a GLTF/GLB model at `assets/models/hero.glb` to replace the procedural placeholder.
- Use the provided PowerShell helper to download a model:

```powershell
.\download-model.ps1 -Url "https://example.com/path/to/your/model.glb"
```

If you don't provide a model, the scene will use a low-poly torus-knot fallback.

Performance & visuals
- The 3D canvas adapts DPR when offscreen and suspends updates when not visible.
- Postprocessing includes Depth-of-Field, SSAO, Bloom, and Chromatic Aberration tuned for a cyber look.

Camera anchors and pinning
- Tune camera anchors in `src/config/anchors.js`. The pin spacer height in CSS (`.pin-spacer`) matches the number of anchors (default 4).
- The hero/canvas area is pinned during scroll so the camera path plays while the user scrolls down.

Fetching remote assets
- Use `fetch-assets.ps1` to download image/model assets from a URL into `assets/remote`:

```powershell
.\fetch-assets.ps1 -Url "https://www.davidlangarica.dev"
```

Deploy
- Netlify: `netlify.toml` is provided.
- Vercel: `vercel.json` is provided.
- CI: a GitHub Actions workflow builds and uploads the `dist` artifact (`.github/workflows/build.yml`).
# Cyber Portfolio (Cyber Themed Static Site)

This is a small static one-page portfolio scaffold with a cybersecurity aesthetic.

How to run
- Open `index.html` in a browser (double-click or use a local static server).

Files added
- `index.html`
- `assets/css/styles.css`
- `assets/js/script.js`

Customize
- Replace `Your Name` and the contact email in `index.html`.
- Edit content and styles in `assets/css/styles.css`.
