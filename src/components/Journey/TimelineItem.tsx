'use client'

import { motion, Variants, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiMapPin, FiBriefcase, FiBook } from 'react-icons/fi'
import { JourneyItem } from '@/types'
import styles from './Journey.module.css'

interface TimelineItemProps {
  item: JourneyItem
  index: number
  isVisible: boolean
}

const TimelineItem = ({ item, index, isVisible }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const isLeft = index % 2 === 0
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    isLeft ? [-100, 0, 0, -50] : [100, 0, 0, 50]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95])

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.2
      }
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
      case 'internship':
        return <FiBriefcase />
      case 'education':
        return <FiBook />
      default:
        return <FiBriefcase />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return '#06b6d4'
      case 'internship':
        return '#14b8a6'
      case 'education':
        return '#8b5cf6'
      default:
        return '#14b8a6'
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`${styles.timelineItem} ${isLeft ? styles.timelineItemLeft : styles.timelineItemRight}`}
      variants={itemVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      style={{ 
        x,
        opacity,
        scale
      }}
    >
      <div className={styles.timelineContent}>
        <motion.div 
          className={styles.timelineIcon}
          style={{ backgroundColor: getTypeColor(item.type) }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {getIcon(item.type)}
        </motion.div>

        <motion.div
          className={styles.timelineCard}
          whileHover={{ 
            y: -10,
            boxShadow: `0 20px 40px ${getTypeColor(item.type)}30`
          }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.timelineHeader}>
            <h3 className={styles.timelineTitle}>{item.title}</h3>
            <span 
              className={styles.timelineType}
              style={{ 
                backgroundColor: `${getTypeColor(item.type)}20`, 
                color: getTypeColor(item.type),
                border: `1px solid ${getTypeColor(item.type)}30`
              }}
            >
              {item.type}
            </span>
          </div>

          <div className={styles.timelineOrganization}>
            <FiMapPin className={styles.timelineOrgIcon} />
            {item.organization}
          </div>

          <div className={styles.timelinePeriod}>
            <FiCalendar className={styles.timelinePeriodIcon} />
            {item.period}
          </div>

          <p className={styles.timelineDescription}>
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TimelineItem
