'use client'

import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Journey from '@/components/Journey/Journey'
import TechStack from '@/components/TechStack/TechStack'
import Contact from '@/components/Contact/Contact'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <TechStack />
      <Contact />
    </main>
  )
}
