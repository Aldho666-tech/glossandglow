# GlossGo & Wash - Premium React Landing Page

![Next UI Layer](https://img.shields.io/badge/UI-Brutalist-neon?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![Vite](https://img.shields.io/badge/Bundler-Vite-purple?style=flat-square)

GlossGo & Wash is a modern, Gen-Z oriented web application focused on showcasing premium car washing packages. Featuring fluid Framer Motion animations, a bold brutalist color palette, and high-impact sticker typography to capture attention instantly.

## ✨ Features
- **Dynamic Preloader**: Deep-blue masking typography preloader entry.
- **Top-Down Canvas**: Animated top-down view of cars and washing scenes.
- **Brutalist Elements**: Thick borders, high contrast layouts (Neon Green, Dark Blue, Off-White Cream).
- **Responsive Bento Grid**: Modern card layout for packages.
- **Actionable Floating Bar**: Overhauled bottom-pills CTA for Whatsapp integration.

## 🚀 Quick Start (Local Development)

To run the application on your own local environment:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

3. **Build exclusively for production**
   ```bash
   npm run build
   ```

## 📦 Deployment (Vercel)

This application is configured natively for Vercel deployment without any additional setup. 
The internal repository handles routing natively via `npx vite build` to prevent `ESLint / NPM` execution halts (exit code 126 permission denied).

To push an update:
```bash
git add .
git commit -m "update your message"
git push origin main
```
Vercel should automatically attach to the branch and trigger the rebuilding task.

## 🎨 Color Palette Reference
- Base Dark: `#1a1a1a`
- Neon Green: `#b4f420` (Variable: `--green`)
- Deep Blue: `#1e3a8a` (Variable: `--blue`)
- Classic Cream: `#f5f3e9` (Variable: `--cream`)
