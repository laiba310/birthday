'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const pics = Array.from({ length: 14 }, (_, i) => `/pic${i + 1}.jpg`)

const rotations = [
  '-rotate-3', 'rotate-2', '-rotate-2', 'rotate-1',
  'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3',
  'rotate-1', '-rotate-2', 'rotate-3', '-rotate-1',
  'rotate-2', 'rotate-1'
]

export default function Surprise() {
  const router = useRouter()

  useEffect(() => {
    import('canvas-confetti').then((confetti) => {
      confetti.default({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      })
    })
  }, [])

  const goToNextPage = () => {
    router.push('/letter') // 👉 Change '/letter' to whatever your next route is
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 py-12 px-4 overflow-hidden relative">
      <h1 className="text-5xl font-pacifico text-pink-600 text-center mb-4 drop-shadow-md">
        💌 Our Memories
      </h1>
      <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto text-lg italic">
        Moments stitched with giggles, sealed with pinky promises 🌸
      </p>

      <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto relative z-10">
        {pics.map((src, i) => (
          <div
            key={i}
            className={`w-36 h-44 md:w-40 md:h-48 overflow-hidden rounded-xl shadow-xl border-[3px] border-white bg-white 
              ${rotations[i]} hover:scale-110 hover:shadow-pink-300 hover:brightness-110 
              transition-all duration-500 ease-in-out`}
          >
            <img
              src={src}
              alt={`pic${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* 🎯 NEXT BUTTON */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={goToNextPage}
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-all flex items-center gap-2"
        >
          Next
          <span className="animate-bounce text-xl">➡️</span>
        </button>
      </div>

      {/* 🌟 Soft sparkle effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/sparkle.svg')] bg-repeat opacity-10 z-0 pointer-events-none" />
    </div>
  )
}
