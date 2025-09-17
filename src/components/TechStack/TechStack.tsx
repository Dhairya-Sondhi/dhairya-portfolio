'use client'

import { motion, Variants } from 'framer-motion'
import { 
  FaReact, FaNode, FaPython, FaJs, FaGit, FaDocker, FaAws, FaJava, FaCube
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, 
  SiMongodb, SiRedis, SiFigma, SiFlask, SiVuedotjs, SiBlender,
  SiVisualstudiocode, SiMysql, SiTensorflow, SiJupyter
} from 'react-icons/si'
import { 
  SketchIcon, FramerIcon, AdobeXDIcon, MiroIcon, LangChainIcon, 
  OpenAIIcon, TableauIcon, PowerBIIcon 
} from '../Icons/DesignIcons'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { techStack } from '@/data/techStack'
import styles from './TechStack.module.css'

const TechStack = () => {
  const { ref, hasIntersected } = useIntersectionObserver()

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType } = {
      // Design Tools - Custom Icons
      SiFigma: SiFigma,
      SketchIcon: SketchIcon,
      FramerIcon: FramerIcon,
      AdobeXDIcon: AdobeXDIcon,
      MiroIcon: MiroIcon,
      SiBlender: SiBlender,
      
      // Frontend
      FaReact: FaReact,
      SiNextdotjs: SiNextdotjs,
      SiVuedotjs: SiVuedotjs,
      SiTypescript: SiTypescript,
      FaJs: FaJs,
      SiTailwindcss: SiTailwindcss,
      FaCube: FaCube, // Three.js
      
      // Backend
      FaNode: FaNode,
      FaPython: FaPython,
      FaJava: FaJava,
      SiExpress: SiExpress,
      SiFlask: SiFlask,
      
      // AI/ML - Mixed custom and standard icons
      SiTensorflow: SiTensorflow,
      SiJupyter: SiJupyter,
      OpenAIIcon: OpenAIIcon,
      LangChainIcon: LangChainIcon,
      
      // Database
      SiPostgresql: SiPostgresql,
      SiMongodb: SiMongodb,
      SiRedis: SiRedis,
      SiMysql: SiMysql,
      
      // Tools
      FaGit: FaGit,
      FaDocker: FaDocker,
      FaAws: FaAws,
      SiVisualstudiocode: SiVisualstudiocode,
      TableauIcon: TableauIcon,
      PowerBIIcon: PowerBIIcon
    }
    
    const IconComponent = iconMap[iconName] || FaReact
    return <IconComponent />
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
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

  const categories = [
    { key: 'design', name: 'Design Tools', color: '#8b5cf6' },
    { key: 'frontend', name: 'Frontend Development', color: '#14b8a6' },
    { key: 'backend', name: 'Backend Development', color: '#f59e0b' },
    { key: 'ai', name: 'AI/ML & Data Science', color: '#ef4444' },
    { key: 'database', name: 'Database', color: '#06b6d4' },
    { key: 'tools', name: 'DevOps & Tools', color: '#84cc16' }
  ]

  return (
    <section className={styles.techStack} id="skills" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.title} variants={titleVariants}>
            Skills & Technologies
          </motion.h2>

          <motion.p className={styles.subtitle} variants={titleVariants}>
            A comprehensive toolkit spanning design, development, and artificial intelligence
          </motion.p>

          {categories.map((category) => {
            const categoryTech = techStack.filter(tech => tech.category === category.key)
            
            if (categoryTech.length === 0) return null
            
            return (
              <motion.div key={category.key} className={styles.category} variants={titleVariants}>
                <h3 className={styles.categoryTitle} style={{ color: category.color }}>
                  {category.name}
                </h3>
                
                <motion.div 
                  className={styles.techGrid}
                  variants={containerVariants}
                >
                  {categoryTech.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className={styles.techItem}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: `0 10px 30px ${category.color}40`,
                        borderColor: category.color
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{ 
                        borderColor: `${category.color}30`
                      }}
                    >
                      <div className={styles.techIcon} style={{ color: category.color }}>
                        {getIcon(tech.icon)}
                      </div>
                      <span className={styles.techName}>{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
