// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Pacifico } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: 'Happy Birthday Bestie 🎉',
  description: 'A heartfelt surprise full of memories 💖',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable} ${pacifico.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
