
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Sivabalan Singam | Singam Ironman Academy',
  description: 'Tamil Nadu based marathon runner, motivator, and founder of Singam Ironman Academy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased selection:bg-red-600 selection:text-white font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
