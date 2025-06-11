---
title: My Creative Portfolio
description: A dynamic, interactive portfolio showcasing photography, 3D modeling, and web development work.
date: 2025-06-01
image: https://creative.eejay.me/creative.png 
site: https://creative.eejay.me/
category: Development
author:
 name: Juan Carlos de Borja
 role: Developer and Author
 avatar: https://github.com/ttv-voidgg.png  
---


# Juan Carlos Portfolio

A dynamic, interactive portfolio showcasing photography, 3D modeling, and web development work.

## Features

- **Dynamic Frame Layout**: Interactive grid with hover effects
- **Project Galleries**: Click any frame to view detailed project information
- **Asset Preloading**: Comprehensive loading system for smooth user experience
- **Responsive Design**: Works seamlessly across all device sizes
- **Custom Typography**: Beautiful custom fonts and typography system

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/
│   ├── fonts.ts          # Font configurations
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── DynamicFrameLayout.tsx
│   ├── FrameComponent.tsx
│   ├── ImageGallery.tsx
│   └── Loader.tsx
├── hooks/
│   └── useAssetLoader.ts # Asset loading hook
└── lib/
    └── utils.ts          # Utility functions
\`\`\`

## Customization

### Adding New Projects

Edit the `initialFrames` array in `components/DynamicFrameLayout.tsx`:

\`\`\`typescript
{
  id: 10,
  video: "your-video-url.mp4",
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["Tech1", "Tech2"],
  category: "Your Category",
  year: "2024",
  images: ["image1.jpg", "image2.jpg"],
  // ... other properties
}
\`\`\`

### Styling

- Main colors and theme: `app/globals.css`
- Component styles: Individual component files
- Tailwind config: `tailwind.config.js`

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## License

This project is for portfolio purposes.
