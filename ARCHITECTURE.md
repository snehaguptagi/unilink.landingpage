# Architecture

AI College Advisor is a **client-side React app** (Create React App) — a marketing landing page for the AI College Advisor college-admissions concept, plus a Claude-powered AI admissions advisor. No backend.

## Stack
- React (Create React App / `react-scripts`)
- Tailwind CSS (via PostCSS — `tailwind.config.js` + `postcss.config.js`)
- lucide-react (icons)
- Anthropic API, called client-side, for the advisor

## Data flow
1. `src/components/LandingPage.js` renders the marketing sections (hero, For Students / For Universities, features, CTA, footer).
2. `src/components/AIAdvisor.js` takes a free-text student profile, sends it to the Anthropic API, and returns a reach/match/safety university shortlist + next steps.
3. The advisor is mounted as a section within `LandingPage`.

## Key decisions
- **No backend.** It's a landing page + a self-contained AI widget, so it deploys as static files.
- **Bring-your-own-key AI.** The Anthropic key is entered in the UI and stored in `localStorage`, never bundled — the secure pattern for a client-side app.
- **Tailwind wired through PostCSS.** CRA doesn't ship Tailwind; `tailwindcss` + `postcss.config.js` make the `@tailwind` directives compile (without this the page renders unstyled).

## Structure
```
src/components/LandingPage.js   marketing page (hero, features, CTA)
src/components/AIAdvisor.js     Claude admissions advisor (BYO key)
src/App.js / src/index.js       entry
tailwind.config.js / postcss.config.js
```
