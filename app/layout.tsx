import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"

export const metadata = {
  title: "Juan Carlos - Arts and Photography Portfolio",
  description: "Explore the lens and layers of my world—photography, creative assets, and visual stories with soul. Chill vibes, sharp shots, and fresh ideas, all in one place",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
    <head>
      <meta charSet="UTF-8"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png"/>
      <link rel="manifest" href="/images/icons/site.webmanifest"/>

      <title>Juan Carlos de Borja | Full Stack Developer</title>
      <meta name="title" content="Juan Carlos de Borja | Full Stack Developer"/>
      <meta name="description"
            content="Award-winning developer blending tech, design, and strategy. View my projects, skills, and how I can help you build amazing digital experiences."/>
      <link rel="icon" href="/images/icons/favicon.ico"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://creative.eejay.me/"/>
      <meta property="og:title" content="Juan Carlos de Borja | Full Stack Developer"/>

      <meta property="og:description"
            content="Award-winning developer blending tech, design, and strategy. View my projects, skills, and how I can help you build amazing digital experiences."/>
      <meta property="og:image" content="https://creative.eejay.me/images/preview.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://creative.eejay.com/"/>
      <meta property="twitter:title" content="Juan Carlos de Borja | Full Stack Developer"/>
      <meta property="twitter:description"
            content="Award-winning developer blending tech, design, and strategy. View my projects, skills, and how I can help you build amazing digital experiences."/>
      <meta property="twitter:image" content="https://creative.eejay.me/images/preview.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="canonical" href="https://creative.eejay.me/"/>
      <meta name="theme-color" content="#0f172a"/>
      <meta name="robots" content="index, follow"/>
    </head>

    <body className={inter.className}>{children}</body>
    </html>
  )
}
