# AI College Advisor — Landing Page

The marketing landing page for **AI College Advisor**, a platform to simplify college admissions by connecting students and universities in one place.

> This repo is the **landing page** (a React single-page site). It's the front door to the product — students learn how it works and browse universities; universities partner and manage applications.

## What's on the page

- **For Students** — How It Works, Browse Universities, Application Guide
- **For Universities** — Partner With Us, Admin Portal
- **Resources** and **About Us**
- Responsive hero, feature grid, and call-to-action sections

## Tech stack

- [React 18](https://react.dev/) via [Create React App](https://create-react-app.dev/) (`react-scripts`)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build to ./build
```

## Project structure

```
src/
├── components/
│   └── LandingPage.js   # the full landing page (hero, features, CTA, footer)
├── App.js               # renders LandingPage
├── index.js             # entry point
└── index.css            # Tailwind directives + globals
public/
└── index.html
```
