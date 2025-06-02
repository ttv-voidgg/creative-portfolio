"use client"

import { useState, useEffect } from "react"

interface Frame {
  id: number
  video: string
  images: string[]
  corner: string
  edgeHorizontal: string
  edgeVertical: string
}

export function useAssetLoader(frames: Frame[]) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadAssets = async () => {
      // Collect all asset URLs
      const videoUrls = frames.map((frame) => frame.video)
      const imageUrls = frames
        .flatMap((frame) => [...frame.images, frame.corner, frame.edgeHorizontal, frame.edgeVertical])
        .filter(Boolean)

      const allAssets = [...videoUrls, ...imageUrls]
      let loadedCount = 0

      const updateProgress = () => {
        loadedCount++
        const newProgress = (loadedCount / allAssets.length) * 100
        setProgress(newProgress)
      }

      // Load videos
      const videoPromises = videoUrls.map((url) => {
        return new Promise<void>((resolve) => {
          const video = document.createElement("video")
          video.preload = "metadata"
          video.onloadedmetadata = () => {
            updateProgress()
            resolve()
          }
          video.onerror = () => {
            updateProgress()
            resolve()
          }
          video.src = url
        })
      })

      // Load images
      const imagePromises = imageUrls.map((url) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = () => {
            updateProgress()
            resolve()
          }
          img.onerror = () => {
            updateProgress()
            resolve()
          }
          img.src = url
        })
      })

      // Wait for all assets to load
      await Promise.all([...videoPromises, ...imagePromises])

      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }

    loadAssets()
  }, [frames])

  return { isLoading, progress }
}
