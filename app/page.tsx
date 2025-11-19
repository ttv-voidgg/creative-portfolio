"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { Loader } from "../components/Loader"
import { SocialMedia } from "../components/SocialMedia"
import { useAssetLoader } from "../hooks/useAssetLoader"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"

// Move frames data to be accessible by the loader
const initialFrames = [
  {
    id: 0,
    video: "",
    coverImage: "/assets/images/gits-1.jpg",
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    images: [
      "/assets/images/Night-CharlesMatheson-001.jpeg",
      "/assets/images/Night-CharlesMatheson-002.jpeg",
      "/assets/images/Night-CharlesMatheson-003.jpeg",
    ],
  },  
  {
    id: 1,
    video: "/assets/videos/reel-1.mp4",
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    images: [
      "/assets/images/Night-CharlesMatheson-001.jpeg",
      "/assets/images/Night-CharlesMatheson-002.jpeg",
      "/assets/images/Night-CharlesMatheson-003.jpeg",
    ],
  },
  {
    id: 2,
    video: "/assets/videos/porsche.mp4",
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    images: [
      "/assets/images/porsche-001.png",
      "/assets/images/porsche-002.png",
      "/assets/images/porsche-003.png",
    ],
  },
  {
    id: 3,
    video: "/assets/videos/wpg-beach.mp4",
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    images: [
      "/assets/images/wpg-beach-001.jpeg",
      "/assets/images/wpg-beach-002.jpeg",
      "/assets/images/wpg-beach-003.jpeg",
    ],
  },
  {
    id: 4,
    video: "/assets/videos/room.mp4",
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    images: [
      "/assets/images/room-001.jpeg",
      "/assets/images/room-002.jpeg",
      "/assets/images/room-003.jpeg",
    ],
  },
  {
    id: 5,
    video: "/assets/videos/sazabi.mp4",
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    images: [
      "/assets/images/sazabi-001.png",
      "/assets/images/sazabi-002.png",
      "/assets/images/sazabi-003.png",
      "/assets/images/sazabi-004.png",
    ],
  },
  {
    id: 6,
    video: "/assets/videos/kenora.mp4",
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
    images: [
      "/assets/images/kenora-001.jpeg",
      "/assets/images/kenora-002.jpeg",
      "/assets/images/kenora-003.jpeg",
      "/assets/images/kenora-004.jpeg",
      "/assets/images/kenora-005.jpeg",
    ],
  },
  {
    id: 7,
    video: "/assets/videos/aurora.mp4",
    corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
    images: [
      "/assets/images/aurora-001.jpeg",
      "/assets/images/aurora-002.jpeg",
      "/assets/images/aurora-003.jpeg",
    ],
  },
  {
    id: 8,
    video: "/assets/videos/vancity.mp4",
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png",
    images: [
      "/assets/images/vancity-001.jpeg",
      "/assets/images/vancity-002.jpeg",
      "/assets/images/vancity-003.jpeg",
    ],
  },
  {
    id: 9,
    video: "/assets/videos/portage.mp4",
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png",
    images: [
      "/assets/images/portage-001.jpg",
      "/assets/images/portage-002.jpg",
      "/assets/images/portage-003.jpg",
    ],
  },
]

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  const { isLoading, progress } = useAssetLoader(initialFrames)

  return (
    <>
      <Loader isLoading={isLoading} progress={progress} />
      <div
        className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
      >
        <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
          {/* Left Content */}
          <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-8">
              <h1
                className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
                style={{ fontSize: `${4 * headerSize}rem` }}
              >
                Carlos
                <br />
                de Borja
              </h1>
              <div
                className={`${inter.className} flex flex-col gap-4 text-white/50 text-sm font-light max-w-[300px] max-sm:max-w-full`}
                style={{ fontSize: `${0.875 * textSize}rem` }}
              >
                <div className="space-y-6">
                  <div className="h-px bg-white/10 w-full" />
                  <p>
                    I'm Juan Carlos, a software engineer with a passion for capturing moments and building beautiful
                    things; whether it's through a lens or a line of code. This site is a curated collection of my
                    photography and creative assets, from raw street shots and moody portraits to design resources and
                    visual experiments.
                  </p>
                  <p>
                    By day, I write code and architect digital solutions. By night (and sometimes weekends), I chase
                    light, texture, and stories with my camera. Everything here is an extension of how I see the world;
                    structured, spontaneous, and a little offbeat.
                  </p>
                  <p>
                    Feel free to explore, get inspired, or just vibe. Whether you're a fellow creative, dev, or just
                    here to scroll, I'm glad you stopped by.
                  </p>
                  <div className="h-px bg-white/10 w-full" />
                </div>
                {/* Social Media Section */}
                <div className="max-sm:hidden">
                <SocialMedia />
                  <p className="mt-2">
                    Carlos de Borja 2025
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">{!isLoading && <DynamicFrameLayout />}</div>

          <div className="h-px bg-white/10 w-full sm:hidden" />
          <div className="sm:hidden w-full">
            <SocialMedia/>
            <p className="mt-2 text-white/50 text-sm font-light text-center">
              Carlos de Borja 2025
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
