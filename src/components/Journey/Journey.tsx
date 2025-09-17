'use client'

import { motion, Variants, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { journeyItems } from '@/data/journey'
import TimelineItem from './TimelineItem'
import styles from './Journey.module.css'

const Journey = () => {
  const { ref, hasIntersected } = useIntersectionObserver()
  const timelineRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const titleVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section className={styles.journey} id="journey" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.title} variants={titleVariants}>
            My Journey
          </motion.h2>

          <motion.p className={styles.subtitle} variants={titleVariants}>
            A timeline of my educational background and professional experiences 
            that shaped my development career.
          </motion.p>

          <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.timelineLine}>
              <motion.div 
                className={styles.timelineProgress}
                style={{ height: lineHeight }}
              />
            </div>
            {journeyItems.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index}
                isVisible={hasIntersected}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Journey
