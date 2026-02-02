# Portfolio web (React + Vite)

Portfolio sencillo en **React + CSS** con estética limpia y acento naranja, pensado para desplegarse en **GitHub Pages**.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy a GitHub Pages

Este proyecto está preparado para publicar en GitHub Pages desde la rama `gh-pages` usando `gh-pages`.

1) En GitHub, ve a **Settings → Pages** y configura **Source** a `gh-pages` (root).
2) Publica:

```bash
npm run deploy
```

## Deploy automático con GitHub Actions (recomendado)

Este repo incluye un workflow en `.github/workflows/deploy.yml` que:

- hace build en cada `push` a `main`
- publica automáticamente a **GitHub Pages** usando **GitHub Actions**

### Configuración en GitHub (1 vez)

En GitHub: **Settings → Pages**

- **Source**: `GitHub Actions`

Después, con cada push a `main`, se actualizará la web.

> Nota: el workflow calcula el `base` como `/${{ github.event.repository.name }}/`.

### Nota sobre el nombre del repo

El script usa `/${npm_package_name}/` como `base` para Vite.

- Si tu repo **se llama distinto** al `name` de `package.json`, cambia el script `build:gh` para que el base coincida.
	- Ejemplo: `GITHUB_PAGES_BASE=/mi-repo/ vite build`

## Personalización rápida

- Cambia los textos/links en `src/App.jsx`.
- Ajusta colores, tipografía y layout en `src/index.css`.

> Los proyectos están como *placeholder*: reemplaza `Demo` y `Código` por tus URLs reales.
