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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
