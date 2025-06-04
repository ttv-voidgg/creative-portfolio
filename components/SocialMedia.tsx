"use client"

import { Github, Instagram, Linkedin, Globe } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ttv-voidgg/",
    icon: Github,
    hoverColor: "hover:text-purple-500/80",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kai._.0008/",
    icon: Instagram,
    hoverColor: "hover:text-pink-400",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jcedeborja",
    icon: Linkedin,
    hoverColor: "hover:text-blue-400",
  },
  {
    name: "Website",
    url: "https://webdev.eejay.me",
    icon: Globe,
    hoverColor: "hover:text-green-400",
  },
]

export function SocialMedia() {
  return (
    <div className="social-media flex items-center gap-4 max-sm:justify-center">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white/60 transition-colors duration-200 ${social.hoverColor} hover:scale-110 transform transition-transform`}
            aria-label={`Visit ${social.name} profile`}
          >
            <IconComponent size={20} />
          </a>
        )
      })}
    </div>
  )
}
