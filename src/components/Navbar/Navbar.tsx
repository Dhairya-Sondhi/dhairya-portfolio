'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiLeetcode, SiFigma } from 'react-icons/si'
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/utils/constants'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollY = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
    }

    const handleScroll = () => requestAnimationFrame(updateScrollY)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.nav
      className={styles.navbar}
      variants={navVariants}
      animate={scrollY > 100 && scrollDirection === 'down' ? 'hidden' : 'visible'}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Dhairya</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {/* Navigation Links */}
          <div className={styles.navLinks}>
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={styles.navLink}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Smooth scroll behavior
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          {/* Social Links for UX/Dev/AI */}
          <div className={styles.socialLinks}>
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub - Development Portfolio"
            >
              <FiGithub />
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.figma}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Figma - Design Portfolio"
            >
              <SiFigma />
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              title="LeetCode - Problem Solving & AI Practice"
            >
              <SiLeetcode />
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn - Professional Network"
            >
              <FiLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className={styles.mobileMenuContent}>
          {/* Mobile Navigation Links */}
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={(e) => {
                e.preventDefault()
                closeMenu()
                // Smooth scroll with offset for mobile
                const element = document.querySelector(item.href)
                if (element) {
                  const offset = 80 // Account for mobile navbar height
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          
          {/* Mobile Social Links */}
          <div className={styles.mobileSocialLinks}>
            <div className={styles.mobileSocialTitle}>Connect With Me</div>
            
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
              onClick={closeMenu}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub />
              <div>
                <span className={styles.mobileSocialName}>GitHub</span>
                <span className={styles.mobileSocialDesc}>Development Portfolio</span>
              </div>
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.figma}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
              onClick={closeMenu}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <SiFigma />
              <div>
                <span className={styles.mobileSocialName}>Figma</span>
                <span className={styles.mobileSocialDesc}>Design Portfolio</span>
              </div>
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
              onClick={closeMenu}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <SiLeetcode />
              <div>
                <span className={styles.mobileSocialName}>LeetCode</span>
                <span className={styles.mobileSocialDesc}>Problem Solving</span>
              </div>
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
              onClick={closeMenu}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiLinkedin />
              <div>
                <span className={styles.mobileSocialName}>LinkedIn</span>
                <span className={styles.mobileSocialDesc}>Professional Network</span>
              </div>
            </motion.a>
          </div>
          
          {/* Mobile CTA */}
          <motion.div 
            className={styles.mobileCTA}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className={styles.mobileCtaButton}
              onClick={(e) => {
                e.preventDefault()
                closeMenu()
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          className={styles.mobileOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
        />
      )}
    </motion.nav>
  )
}

export default Navbar
