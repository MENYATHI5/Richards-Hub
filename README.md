# Richards hub - Professional CV Editing Service

A modern, responsive landing page for a professional CV editing service with WhatsApp payment integration. Created by Mbuyelo Nyathi in honor of his late father, Richard Nyathi.

## 🌟 Our Story

Sometimes it's not that you don't meet the requirements, it's how you present yourself on paper. Mbuyelo Nyathi, a full-stack developer and CV consultant, created Richards hub to help talented individuals showcase their true potential at affordable prices. This company honors the legacy of Richard Nyathi, Mbuyelo's late father.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Sections**: Hero, Services, Pricing, How It Works, Contact
- **WhatsApp Integration**: Easy payment and communication via WhatsApp
- **TypeScript**: Full type safety across the application
- **Next.js 14**: Latest React framework with App Router
- **SEO Optimized**: Meta tags and semantic HTML

## 📋 Sections

1. **Header/Navigation**: Sticky header with mobile menu
2. **Hero Section**: Eye-catching CTA with value propositions
3. **Services**: Six key services offered
4. **Pricing**: Three pricing tiers (Standard, Professional, Premium)
5. **How It Works**: 6-step process visualization
6. **Contact**: Contact form and WhatsApp link
7. **Footer**: Company info and quick links

## 💰 Pricing Tiers

- **Quick Edit** - R50: CV review and alterations
- **Complete Revamp** - R90: Full CV rewrite with optimization
- **Premium Package** - R140: All-inclusive with cover letter and interview prep

## 🛠️ Tech Stack

- Next.js 14+ with TypeScript
- React 18
- Tailwind CSS
- PostCSS with Autoprefixer

## 📦 Installation

1. Install Node.js from https://nodejs.org/ (if not already installed)
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:3000 in your browser

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (hot reload enabled)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About/Story section
│   ├── Services.tsx        # Services grid
│   ├── Pricing.tsx         # Pricing cards
│   ├── HowItWorks.tsx      # Process steps
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
└── utils/
    └── whatsapp.ts         # WhatsApp utility functions
```

## 🔗 WhatsApp Integration

The site uses WhatsApp for:
- **Direct Communication**: Easy customer contact
- **Payment Processing**: Simple transaction flow
- **File Sharing**: CV exchange

### WhatsApp Links

- Update the phone number in `Contact.tsx` component
- Format: `https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]`

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize:
- Primary color (default: #2563eb - blue)
- Secondary color (default: #1e40af - darker blue)

### Content
- Update company information in [Header.tsx](src/components/Header.tsx) and [Footer.tsx](src/components/Footer.tsx)
- Modify services in [Services.tsx](src/components/Services.tsx)
- Adjust pricing in [Pricing.tsx](src/components/Pricing.tsx)
- Edit business hours in [Contact.tsx](src/components/Contact.tsx)
- Update about section in [About.tsx](src/components/About.tsx)

### Phone Number
Update the WhatsApp phone number in:
1. `Contact.tsx` - for the direct WhatsApp link
2. `Pricing.tsx` - in the plan CTA buttons
3. `HowItWorks.tsx` - if needed

## 📱 Responsive Design

The site is fully responsive:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Click "Deploy"

### Other Platforms
- Netlify
- GitHub Pages
- Any Node.js hosting

## 📝 License

This project is proprietary and confidential.

## 📧 Support

For questions or support, contact via WhatsApp.
