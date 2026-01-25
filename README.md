# MA Bau GmbH – Corporate Website 🏗️☀️

[![Live Website](https://img.shields.io/badge/Live-mabaugmbh.de-blue?style=for-the-badge)](https://mabaugmbh.de)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Modern, high-performance corporate website for **MA Bau GmbH** – a leading specialist in photovoltaic installation and construction services across Germany and Europe.

🌐 **Live Website:** [mabaugmbh.de](https://mabaugmbh.de)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Company Info](#-company-info)
- [Contact](#-contact)

---

## 🏢 About

MA Bau GmbH is a Dresden-based company specializing in:

- **Photovoltaic Systems** – Ground-mounted and rooftop installations
- **Construction Services** – Metalwork, drywall, renovation, demolition
- **Sustainable Energy Solutions** – Custom solar projects across Europe

**Track Record:**

- ✅ 42+ MWp installed capacity
- ✅ 100+ completed projects
- ✅ 5+ years of experience
- ✅ Operations in Germany & Europe

---

## ✨ Features

### 🤖 AI-Powered Customer Support

- **Google Gemini 2.5 Flash** integration for intelligent chatbot
- Real-time customer inquiries and support
- Markdown rendering with clickable links
- Quick reply buttons for common questions

### 📱 Modern User Experience

- **Fully Responsive** – Mobile-first design approach
- **Smooth Animations** – GSAP scroll triggers & Framer Motion
- **Premium Design** – Glassmorphism, gradients, micro-interactions
- **Fast Loading** – Optimized images via Cloudinary
- **Lazy Loading** – Code-splitting for optimal performance

### 🔍 SEO & Marketing

- **SEO Optimized** – Meta tags, Open Graph, Twitter Cards
- **Structured Data** – Schema.org LocalBusiness markup
- **Sitemap & Robots.txt** – Search engine friendly
- **DSGVO Compliant** – Full German privacy law compliance
- **Legal Pages** – Impressum, Datenschutz, AGB

### 📧 Contact & Communication

- **WhatsApp Integration** – Direct messaging button
- **Contact Form** – Web3Forms for reliable email delivery
- **Multiple Contact Methods** – Email, phone, form

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Version | Purpose                 |
| ---------------- | ------- | ----------------------- |
| **React**        | 19.0    | UI Framework            |
| **TypeScript**   | 5.0     | Type Safety             |
| **Vite**         | 6.0     | Build Tool & Dev Server |
| **Tailwind CSS** | 4.0     | Utility-First Styling   |

### Animation & Interaction

| Technology        | Purpose                             |
| ----------------- | ----------------------------------- |
| **GSAP**          | Scroll-triggered animations         |
| **Framer Motion** | UI transitions & micro-interactions |
| **Lucide React**  | Icon library                        |

### Integrations

| Service                     | Purpose                    |
| --------------------------- | -------------------------- |
| **Google Gemini 2.5 Flash** | AI Chatbot                 |
| **Web3Forms**               | Contact form backend       |
| **Cloudinary**              | Image & video optimization |

### Deployment & Hosting

| Service              | Purpose              |
| -------------------- | -------------------- |
| **Cloudflare Pages** | Static hosting & CDN |
| **GitHub**           | Version control      |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/ViktorGladkich/ma-bau-solar.git
cd ma-bau-solar/liebscher-portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your API keys to .env
# VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Type checking
npx tsc --noEmit
```

---

## 📁 Project Structure

```
liebscher-portfolio/
├── public/                  # Static assets
│   ├── logo/               # Company logos
│   ├── my-favicon/         # Favicon files
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine directives
│
├── src/
│   ├── components/         # React components
│   │   ├── chat/          # AI Chatbot components
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── BookingComponents.tsx
│   │   ├── home/          # Homepage sections
│   │   │   ├── IntroSection.tsx
│   │   │   └── ServicesSection.tsx
│   │   ├── AIChatBot.tsx  # Main chatbot component
│   │   ├── Navbar.tsx     # Navigation
│   │   ├── Footer.tsx     # Footer
│   │   └── Hero.tsx       # Hero section
│   │
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ExpertisePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ImpressumPage.tsx
│   │   ├── DatenschutzPage.tsx
│   │   └── AGBPage.tsx
│   │
│   ├── data/              # Static data & configs
│   │   ├── chatbotConfig.ts
│   │   ├── homePageData.tsx
│   │   └── projectsData.tsx
│   │
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
│
├── .env.example           # Environment variables template
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Google Gemini API Key (required for AI chatbot)
VITE_GEMINI_API_KEY=your_api_key_here
```

**How to get API keys:**

- **Google Gemini:** [Get API Key](https://aistudio.google.com/app/apikey)

---

## 🚀 Deployment

### Cloudflare Pages

This project is deployed on **Cloudflare Pages** with automatic deployments from GitHub.

**Build Settings:**

```
Build command: npm run build
Build output directory: dist
Node version: 18
```

**Environment Variables:**

- Add `VITE_GEMINI_API_KEY` in Cloudflare Pages settings

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting provider
```

---

## ⚡ Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Image Optimization:** Cloudinary auto-format & compression
- **Code Splitting:** Lazy-loaded routes
- **CDN:** Cloudflare global network

---

## 📊 Company Info

**MA Bau GmbH**

- 📍 **Address:** Rubensweg 1, 01217 Dresden, Germany
- 🌍 **Service Area:** Germany & Europe (Sachsen, Brandenburg, Berlin, Austria)
- 🏗️ **Specialization:**
  - Photovoltaic installation (ground-mounted & rooftop)
  - Metalwork & steel substructures
  - Drywall & interior construction
  - Renovation & demolition
  - Painting & finishing work

**Achievements:**

- ⚡ 42+ MWp installed capacity
- 📈 100+ completed projects
- 🏆 5+ years of industry experience
- 🌍 International projects (Germany, Austria)

---

## 📄 License

© 2026 MA Bau GmbH. All rights reserved.

This is a private commercial project. Unauthorized copying, distribution, or use is prohibited.

---

## 📞 Contact

**MA Bau GmbH**

- 🌐 **Website:** [mabaugmbh.de](https://mabaugmbh.de)
- 📧 **Email:** [info@ma-bau-gmbh.de](mailto:info@ma-bau-gmbh.de)
- 📱 **Phone:** [+49 176 32187740](tel:+4917632187740)
- 💬 **WhatsApp:** [Chat with us](https://wa.me/4917632187740)

**Business Hours:**

- Monday - Friday: 08:00 - 18:00
- Saturday - Sunday: Closed

---

## 🙏 Acknowledgments

- **Design Inspiration:** Modern corporate websites
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Manrope, Playfair Display)
- **AI:** Google Gemini 2.5 Flash

---

**Built with ❤️ in Dresden, Germany**
