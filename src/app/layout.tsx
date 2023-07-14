// https://upmostly.com/next-js/how-to-level-up-your-next-js-app-with-scroll-animations

import '@/styles/index.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Wilham Georg Longen Brodwolf',
    template: '%s | Wilham Georg Longen Brodwolf'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Passionate about education and changing people's lives through programming.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <div className="flex flex-col h-screen overflow-y-scroll scroll-m-3">
        <div className="flex-shrink-0 h-[calc(100%-2rem)] bg-dark-200"></div>
        <div className="flex-shrink-0 h-20 bg-red-200"></div>
        <div className="flex-shrink-0 h-screen bg-dark-600"></div>
        <div className="flex-shrink-0 h-screen bg-dark-1000"></div>
      </div>
    </html>
  )
}