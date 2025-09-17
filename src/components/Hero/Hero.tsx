'use client'

import { motion, Variants } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { SiLeetcode, SiFigma, SiGithub } from 'react-icons/si'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants'
import styles from './Hero.module.css'

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const slideUpVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const nameVariants: Variants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div className={styles.nameContainer} variants={nameVariants}>
            <motion.span className={styles.greeting}>Hi, I'm</motion.span>
            <motion.h1 className={styles.name}>
              <span className={styles.fullName}>Dhairya Sondhi</span>
            </motion.h1>
          </motion.div>


          <motion.h2 className={styles.title} variants={slideUpVariants}>
            UX Designer • Full Stack Developer • AI/ML Engineer
          </motion.h2>


          <motion.p className={styles.description} variants={slideUpVariants}>
            I build digital solutions that bring together{' '}
            <span className={styles.highlight}>clean design,</span> robust{' '}
            <span className={styles.highlight}>full-stack development </span>and{' '}
            <span className={styles.highlight}>AI/ML</span> to create products that are practical, reliable, and easy to use.
          </motion.p>


          <motion.div className={styles.ctaContainer} variants={slideUpVariants}>
            <motion.a
              href="#projects"
              className={styles.primaryCta}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View My Work</span>
              <FiArrowRight className={styles.ctaIcon} />
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.secondaryCta}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          <motion.div className={styles.socialContainer} variants={slideUpVariants}>
            <div className={styles.socialContent}>
              <span className={styles.socialLabel}>Connect with me</span>
              <div className={styles.socialLinks}>
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="GitHub"
                >
                  <SiGithub />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Figma"
                >
                  <SiFigma />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="LeetCode"
                >
                  <SiLeetcode />
                </motion.a>
              </div>

              <motion.a
                href={PERSONAL_INFO.resumeUrl}
                download="Dhairya_Sondhi_Resume.pdf"
                className={styles.resumeLink}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
