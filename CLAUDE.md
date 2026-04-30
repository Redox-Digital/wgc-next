# WGC Next — CLAUDE.md

## Project
**World Golf Challenge** — plateforme de golf compétitif. Les joueurs jouent physiquement dans leur club et participent à des challenges digitaux avec classements, prix et badges. Frontend Next.js uniquement, les données sont actuellement statiques (backend à venir).

## Stack
- **Next.js 16** (Pages Router), **React 19**, **TypeScript 5**
- **SCSS Modules** (un `.module.scss` par composant)
- Variables globales : `styles/wgc-variables.scss`, `styles/wgc-globals.scss`
- Fonts Google : Inter (body), Lexend (titres), Syne (accents) — via `next/font/google`
- Animations : `lottie-react`
- Alertes UI : `sweetalert2`

## Structure
```
pages/          # Routes (Pages Router)
components/     # Composants réutilisables
constants/      # DummyData.tsx (données statiques) + Navigation.ts
styles/         # Variables et globals SCSS
public/         # Assets statiques
```

## Routes principales
- `/` landing, `/clubhouse` hub principal
- `/challenges`, `/leaderboards`
- `/profile/*` (login, create, edit, wallet, badges, notifications, gear, history)
- `/users`, `/users/[user]` profils publics
- `/lobby`, `/extracurricular/*`, `/jaquet-droz/*`, `/4aces/*` (sections sponsors/challenges thématiques)
- `/private/create`, `/private/edit`
- `/support/*`, `/privacy`, `/terms`

## Conventions
- Chaque composant : `ComponentName.tsx` + `ComponentName.module.scss` dans `components/`
- Props `logged`, `notification`, `edit` contrôlent les états UI
- Backgrounds dynamiques via `ChangeBackgroundColor` / `ChangeBody` (useEffect utilities)
- `next/image` partout pour les images
- Données mockées dans `constants/DummyData.tsx` — pas d'API routes pour l'instant

## Commandes
```bash
npm run dev    # dev server
npm run build  # build production
npm run lint   # ESLint
```
