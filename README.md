# Eigencode Clone

A cyberpunk-themed website clone of Eigencode, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌟 Cyberpunk/hacker aesthetic with terminal-inspired UI
- 🎨 ASCII art headers with layered glitch effects
- 🌊 Matrix-style background animation
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 App Router
- 🎭 Custom animations and effects
- 🔧 TypeScript for type safety

## Pages

- **Home** - Main landing page with ASCII art "EIGENCODE"
- **Aura** - AI assistant showcase with ASCII art "AURA"
- **Commands** - Feature showcase with available/roadmap tabs
- **Docs** - Documentation with sidebar navigation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd eigencode-clone
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
eigencode-clone/
├── app/                    # Next.js 14 App Router
│   ├── aura/              # Aura page
│   ├── cmds/              # Commands page
│   ├── docs/              # Documentation page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── glitch-text.tsx   # Glitch effect component
│   ├── matrix-background.tsx # Matrix animation
│   ├── terminal-window.tsx   # Terminal UI component
│   └── typing-effect.tsx     # Typing animation
├── lib/                  # Utility functions
│   └── utils.ts          # Tailwind utilities
└── public/               # Static assets
\`\`\`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants

## Customization

### Colors

The cyberpunk color scheme is defined in `tailwind.config.ts`:

- `cyber-black` - Deep black background
- `cyber-green` - Matrix green
- `cyber-blue` - Neon blue
- `cyber-magenta` - Electric magenta
- `cyber-yellow` - Bright yellow

### Animations

Custom animations are defined in the Tailwind config:
- `blink` - Cursor blinking effect
- `glitch` - Text glitch animation
- `scanline` - CRT scanline effect
- `matrix-rain` - Matrix code rain

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please respect the original Eigencode branding and intellectual property.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/eigencode-clone)

You can also deploy to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any platform that supports Next.js

## Performance

- Optimized for Core Web Vitals
- Lazy loading for components
- Efficient animations using CSS transforms
- Responsive images and assets

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### Common Issues

1. **Matrix animation performance**: Reduce the number of columns in `matrix-background.tsx`
2. **ASCII art not displaying**: Check font loading and monospace font fallbacks
3. **Animations stuttering**: Ensure hardware acceleration is enabled

### Development

\`\`\`bash
# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build
\`\`\`

## Acknowledgments

- Original design inspiration from [Eigencode](https://eigencode.dev)
- ASCII art generation techniques
- Cyberpunk aesthetic references
- Matrix digital rain effect implementations
