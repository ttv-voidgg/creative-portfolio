"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ImageGallery } from "./ImageGallery"

const GRID_SIZE = 12
const CELL_SIZE = 60 // pixels per grid cell

interface Frame {
  id: number
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  autoplayMode: "all" | "hover"
  isHovered: boolean
  // Add project details
  title: string
  description: string
  technologies: string[]
  category: string
  year: string
  client?: string
  images: string[] // Add this line
}

const initialFrames: Frame[] = [
  {
    id: 1,
    video: "/assets/videos/reel-1.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "Late Night Strolls",
    description:
      "While I was walking along Chancellor Matheson, I saw a broken lamp post and took advantage of the composition that I was going to be able to get out of the light setting.",
    technologies: ["iPhone Native Camera", "Moment Bloom Lens", "Adobe Lightroom", "Adobe Photoshop"],
    category: "Photography & Modeling",
    year: "2025",
    images: [
      "/assets/images/Night-CharlesMatheson-001.jpeg?height=400&width=400",
      "/assets/images/Night-CharlesMatheson-002.jpeg?height=400&width=400",
      "/assets/images/Night-CharlesMatheson-003.jpeg?height=400&width=400",
    ],
  },
  {
    id: 2,
    video: "/assets/videos/porsche.mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "Porsche Cayman",
    description:
      "A 3D model that I created for my Augmented Reality project for a car build and price prototype",
    technologies: ["Blender", "Three.js", "Vite", "React", "WebGL", "WebXR",  "GLSL", "JavaScript"],
    category: "3D Modeling and Web Development",
    year: "2025",
    images: [
    "/assets/images/porsche-001.png",
    "/assets/images/porsche-002.png",
    "/assets/images/porsche-003.png",
    ],
  },
  {
    id: 3,
    video: "/assets/videos/wpg-beach.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "Manitoba Spring",
    description:
      "Something that I really like here in Manitoba is the beauty of spring",
    technologies: ["iPhone Native Camera", "Moment Bloom Lens", "Adobe Lightroom", "Adobe Photoshop"],
    category: "Nature Photography",
    year: "2025",
    images: [
    "/assets/images/wpg-beach-001.jpeg",
    "/assets/images/wpg-beach-002.jpeg",
    "/assets/images/wpg-beach-003.jpeg",
    ],
  },
  {
    id: 4,
    video: "/assets/videos/room.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "WebGL Full-Stack Portfolio",
    description:
      "I created a portfolio to showcase my Full-Stack software engineering skills. You can visit my portfolio by following this link: https://webdev.eejay.me",
    technologies: ["Blender", "Three.js", "Vite", "React", "WebGL", "WebXR",  "GLSL", "JavaScript"],
    category: "3D Modeling and Web Development",
    year: "2023",
    client: "",
    images: [
    "/assets/images/room-001.jpeg",
    "/assets/images/room-002.jpeg",
    "/assets/images/room-003.jpeg",
    ],
  },
  {
    id: 5,
    video: "/assets/videos/sazabi.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "Sazabi",
    description:
      "Just learning how to do some armature to animate models",
    technologies: ["Blender"],
    category: "3D Modeling",
    year: "2024",
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
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "Kenora Hike",
    description:
      "Took a hike with my college instructor and some friends",
    technologies: ["iPhone Native Camera", "Moment Bloom Lens", "Adobe Lightroom", "Adobe Photoshop"],
    category: "Nature Photography",
    year: "2024",
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
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "Sky Gazing",
    description:
      "My friends and I went on a trip to see the Aurora for the first time",
    technologies: ["iPhone Native Camera", "Moment Bloom Lens", "Adobe Lightroom", "Adobe Photoshop"],
    category: "Astro Photography",
    year: "2024",
    images: [
    "/assets/images/aurora-001.jpeg",
    "/assets/images/aurora-002.jpeg",
    "/assets/images/aurora-003.jpeg",
    ],
  },
  {
    id: 8,
    video: "/assets/videos/vancity.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "VanCity Vibes",
    description:
      "I went for a stroll in Vancouver after my US Visa Appointment. It was a nice day as I finally got approved after more than a decade of waiting!",
    technologies: ["iPhone Native Camera", "Moment Bloom Lens", "Adobe Lightroom", "Adobe Photoshop"],
    category: "Achitectural Photography",
    year: "2025",
    images: [
    "/assets/images/vancity-001.jpeg",
    "/assets/images/vancity-002.jpeg",
    "/assets/images/vancity-003.jpeg",
    ],
  },
  {
    id: 9,
    video: "/assets/videos/portage.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 90,
    autoplayMode: "all",
    isHovered: false,
    title: "Christmas 2023",
    description:
      "Sort of a lonely Christmas 2023, I moved alone to Canada to start a new life, grow, and be wiser. The A&W photo got featured in A&W's official social media pages.",
    technologies: ["iPhone Native Camera", "Moment Bloom Lens", "Adobe Lightroom", "Adobe Photoshop"],
    category: "Street Photography",
    year: "2023",
    images: [
    "/assets/images/portage-001.jpg",
    "/assets/images/portage-002.jpg",
    "/assets/images/portage-003.jpg",
    ],
  },
]

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(4)
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)
  const [showFrames, setShowFrames] = useState(false) // Update: showFrames starts as false
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("all")
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null)
  const [uploadingImages, setUploadingImages] = useState<{ [key: number]: boolean }>({})

  // Add click handler
  const handleFrameClick = (frame: Frame) => {
    setSelectedFrame(frame)
  }

  const closeModal = () => {
    setSelectedFrame(null)
  }

  const handleImageUpload = async (frameId: number, files: FileList) => {
    setUploadingImages((prev) => ({ ...prev, [frameId]: true }))

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        // Create object URL for immediate preview
        return URL.createObjectURL(file)
      })

      const imageUrls = await Promise.all(uploadPromises)

      setFrames((prevFrames) =>
        prevFrames.map((frame) =>
          frame.id === frameId ? { ...frame, images: [...frame.images, ...imageUrls] } : frame,
        ),
      )
    } catch (error) {
      console.error("Error uploading images:", error)
    } finally {
      setUploadingImages((prev) => ({ ...prev, [frameId]: false }))
    }
  }

  const removeImage = (frameId: number, imageIndex: number) => {
    setFrames((prevFrames) =>
      prevFrames.map((frame) =>
        frame.id === frameId ? { ...frame, images: frame.images.filter((_, index) => index !== imageIndex) } : frame,
      ),
    )
  }

  const getRowSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  const updateFrameProperty = (id: number, property: keyof Frame, value: number) => {
    setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  const toggleControls = () => {
    setShowControls(!showControls)
  }

  const toggleCleanInterface = () => {
    setCleanInterface(!cleanInterface)
    if (!cleanInterface) {
      setShowControls(false)
    }
  }

  const updateCodebase = () => {
    console.log("Updating codebase with current values:")
    console.log("Hover Size:", hoverSize)
    console.log("Gap Size:", gapSize)
    console.log("Frames:", frames)
    // Here you would typically make an API call to update the codebase
    // For now, we'll just log the values
  }

  function parseDescription(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) =>
        urlRegex.test(part) ? (
            <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
              {part}
            </a>
        ) : (
            part
        )
    );
  }

  return (
    <div className="space-y-4 w-full h-full">
      <div className="flex justify-between items-center mb-4 max-sm:hidden">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="frame-toggle" checked={showFrames} onCheckedChange={setShowFrames} />
            <label htmlFor="frame-toggle" className="text-sm text-white/70">
              {showFrames ? "Hide Frames" : "Show Frames"}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="autoplay-toggle"
              checked={autoplayMode === "all"}
              onCheckedChange={(checked) => setAutoplayMode(checked ? "all" : "hover")}
            />
            <label htmlFor="autoplay-toggle" className="text-sm text-white/70">
              {autoplayMode === "all" ? "Autoplay All" : "Hover Autoplay"}
            </label>
          </div>
        </div>
      </div>
      {!cleanInterface && (
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Dynamic Frame Layout</h2>
          <div className="space-x-2">
            <Button onClick={toggleControls}>{showControls ? "Hide Controls" : "Show Controls"}</Button>
            <Button onClick={updateCodebase}>Update Codebase</Button>
            <Button onClick={toggleCleanInterface}>{cleanInterface ? "Show UI" : "Hide UI"}</Button>
          </div>
        </div>
      )}
      {!cleanInterface && showControls && (
        <>
          <div className="space-y-2">
            <label htmlFor="hover-size" className="block text-sm font-medium text-gray-200">
              Hover Size: {hoverSize}
            </label>
            <Slider
              id="hover-size"
              min={4}
              max={8}
              step={0.1}
              value={[hoverSize]}
              onValueChange={(value) => setHoverSize(value[0])}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gap-size" className="block text-sm font-medium text-gray-200">
              Gap Size: {gapSize}px
            </label>
            <Slider
              id="gap-size"
              min={0}
              max={20}
              step={1}
              value={[gapSize]}
              onValueChange={(value) => setGapSize(value[0])}
            />
          </div>
        </>
      )}
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4)
          const col = Math.floor(frame.defaultPos.x / 4)
          const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                video={frame.video}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls && !cleanInterface}
                label={`Frame ${frame.id}`}
                showFrame={showFrames}
                autoplayMode={autoplayMode}
                isHovered={
                  hovered?.row === Math.floor(frame.defaultPos.y / 4) &&
                  hovered?.col === Math.floor(frame.defaultPos.x / 4)
                }
                onClick={() => handleFrameClick(frame)}
              />
            </motion.div>
          )
        })}
      </div>
      {selectedFrame && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-light text-white mb-2">{selectedFrame.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>{selectedFrame.category}</span>
                    <span>•</span>
                    <span>{selectedFrame.year}</span>
                    {selectedFrame.client && (
                      <>
                        <span>•</span>
                        <span>{selectedFrame.client}</span>
                      </>
                    )}
                  </div>
                </div>
                <button onClick={closeModal} className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <video
                  className="w-full h-80 object-cover rounded-lg"
                  src={selectedFrame.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Description</h3>
                  <p className="text-white/70 leading-relaxed">{parseDescription(selectedFrame.description)}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFrame.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ImageGallery images={selectedFrame.images} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
