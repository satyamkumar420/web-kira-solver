# Kira Solver Web 🚀

**Official Website & Documentation for Kira Solver App.**

Kira Solver is an undetectable AI assistant designed for technical interviews. This repository contains the official landing page, documentation, and download portal for the Kira Solver desktop app.

## 📥 App Releases & Downloads

Download the latest version of Kira Solver App from GitHub Releases:
👉 **[Download Kira Solver App](https://github.com/satyamkumar420/kira-solver-app/releases)**

---

## ✨ Features

- **⚡ Blazing Fast:** Built on **Next.js 16** with **Turbopack** and React 19 for instantaneous page loads.
- **📖 Comprehensive Documentation:** Guides on Code Mode, MCQ Mode, AI Chat Mode, Hotkeys, and Undetectability.
- **🎨 Modern UI:** Sleek dark-mode aesthetic built with Tailwind CSS and Radix UI.
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile screens.
- **🔒 Static & Secure:** Pure static prerendering with modern Next.js proxy architecture (`proxy.ts`).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Components:** [Radix UI](https://www.radix-ui.com/) & Framer Motion
- **Analytics:** [@vercel/analytics](https://vercel.com/analytics)

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 1. Clone the repository

```bash
git clone https://github.com/satyamkumar420/web-kira-solver.git
cd web-kira-solver
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── public/                 # Static assets (logos, icons, illustrations)
├── src/
│   ├── app/
│   │   ├── (root)/         # Main public routes
│   │   │   ├── about/      # About Us
│   │   │   ├── docs/       # Documentation & Guides
│   │   │   ├── download/   # Download portal
│   │   │   ├── privacy/    # Privacy Policy
│   │   │   ├── terms/      # Terms of Service
│   │   │   ├── layout.tsx  # Root page layout
│   │   │   └── page.tsx    # Landing page
│   │   ├── globals.css     # Global styles & theme
│   │   └── layout.tsx      # Main HTML document layout
│   ├── components/
│   │   ├── docs/           # Documentation navigation & sidebar
│   │   ├── download/       # Download cards
│   │   ├── landing/        # Hero, Features, Problem, Solution, FAQ, Footer, Header
│   │   └── ui/             # Reusable UI components (buttons, dialogs, accordions, carousel)
│   ├── lib/                # Utility helpers (cn, formatDate)
│   └── proxy.ts            # Next.js routing proxy
```

---

## 🚀 Deployment

Easily deploy to [Vercel](https://vercel.com) with zero configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/satyamkumar420/web-kira-solver)

---

## 📄 License

This project is licensed under the MIT License.
