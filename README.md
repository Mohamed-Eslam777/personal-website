# Mohammed Maklad - Portfolio Website

A modern, responsive portfolio website showcasing AI expertise and full-stack development skills with complete bilingual support (Arabic/English) and dark mode.

## Features

- 🌍 **Bilingual Support**: Full RTL/LTR Arabic and English support
- 🌙 **Dark/Light Mode**: Theme toggle with localStorage persistence
- ⚡ **Performance Optimized**: Lazy loading, code splitting, and optimized animations
- 🎨 **Beautiful Animations**: Framer Motion animations throughout
- 📱 **Fully Responsive**: Mobile-first design, works perfectly on all devices
- 🎯 **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Vite

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui with Radix UI
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Extract the project** and open it in VS Code

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**: 
   - Navigate to `http://localhost:5000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── client/
│   ├── src/
│   │   ├── pages/           # Page components
│   │   ├── components/      # Reusable components
│   │   ├── contexts/        # React contexts (Language, Theme)
│   │   ├── lib/             # Utility functions
│   │   ├── hooks/           # Custom hooks
│   │   ├── App.tsx          # Main app component
│   │   └── index.css        # Global styles
│   └── public/              # Static files
├── server/                  # Express backend (minimal)
├── shared/                  # Shared types and schemas
├── tailwind.config.ts       # Tailwind configuration
└── vite.config.ts          # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking

## Features Breakdown

### 🎭 Bilingual System
- Switch between Arabic (RTL) and English (LTR)
- Automatic direction switching
- Smooth transitions

### 🎨 Animated Background
- Unique wave animations
- Performance-optimized canvas
- Reduces complexity on lower-end devices

### ⚡ Lazy Loading
- Components load on scroll
- Faster initial page load
- Optimized animation durations

### 📊 Sections
- **Hero**: Eye-catching intro with animated background
- **About**: Professional summary
- **Experience**: Work history and achievements
- **Projects**: Featured projects with live demos
- **Skills**: Comprehensive skill categories
- **Testimonials**: Client feedback
- **Contact**: Contact information and links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Fast load times with lazy loading
- 📦 Optimized bundle size
- 🎯 Smooth 60fps animations
- 📱 Mobile-optimized

## Notes

- This is a **frontend-only** portfolio (no backend database)
- CV file is stored in `public/cv.pdf`
- All configurations are in the root directory for easy access

## Troubleshooting

**Port 5000 already in use?**
```bash
# Kill the process using port 5000
npx kill-port 5000
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Clear cache:**
```bash
npm run dev -- --force
```

## Author

Mohammed Maklad - AI Specialist & Full-Stack Developer

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
