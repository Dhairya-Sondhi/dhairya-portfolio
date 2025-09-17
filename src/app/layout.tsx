import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhairya - Full Stack Developer & Data Analyst',
  description: 'Portfolio of Dhairya - Full Stack Developer specializing in React, Node.js, blockchain, and financial data analysis',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Blockchain', 'Data Analysis'],
  authors: [{ name: 'Dhairya' }],
  creator: 'Dhairya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
