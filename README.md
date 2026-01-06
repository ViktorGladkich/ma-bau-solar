# MA Bau GmbH – Corporate Website

Modern, responsive corporate website for **MA Bau GmbH** – a specialist in photovoltaic installation across Germany and Europe.

🌐 **Live:** [mabaugmbh.de](https://mabaugmbh.de)

## ✨ Features

- **AI Chatbot** – Powered by Google Gemini 2.5 Flash for customer inquiries
- **WhatsApp Integration** – Quick contact button for instant communication
- **Contact Form** – Web3Forms integration for reliable email delivery
- **Responsive Design** – Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** – GSAP & Framer Motion for premium UX
- **SEO Optimized** – Meta tags, sitemap.xml, robots.txt, structured data
- **DSGVO Compliant** – Full German privacy law compliance

## 🛠️ Tech Stack

| Technology       | Purpose           |
| ---------------- | ----------------- |
| React 19         | UI Framework      |
| TypeScript       | Type Safety       |
| Vite             | Build Tool        |
| Tailwind CSS     | Styling           |
| GSAP             | Scroll Animations |
| Framer Motion    | UI Animations     |
| Google Gemini    | AI Chatbot        |
| Web3Forms        | Contact Form      |
| Cloudflare Pages | Hosting           |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ViktorGladkich/ma-bau-solar.git
cd ma-bau-solar/liebscher-portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Add your VITE_GEMINI_API_KEY to .env

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── chat/       # AI Chatbot components
│   └── ui/         # Base UI components
├── pages/          # Page components
├── data/           # Static data & configurations
├── hooks/          # Custom React hooks
└── lib/            # Utilities & helpers
```

## 🔐 Environment Variables

| Variable              | Description                       |
| --------------------- | --------------------------------- |
| `VITE_GEMINI_API_KEY` | Google Gemini API key for chatbot |

## 📊 Company Info

- **Company:** MA Bau GmbH
- **Location:** Dresden, Germany
- **Service Area:** Germany & Europe
- **Specialization:** Photovoltaic installation (rooftops & ground-mounted)
- **Capacity Installed:** 42+ MWp
- **Projects Completed:** 100+

## 📄 License

Private project. All rights reserved.

## 📞 Contact

- **Website:** [mabaugmbh.de](https://mabaugmbh.de)
- **Email:** info@ma-bau-gmbh.de
- **Phone:** +49 176 32187740
