'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiFigma, FiEye } from 'react-icons/fi'
import { Project } from '@/types'
import styles from './Projects.module.css'

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Detect design project by checking if technologies include Figma
  const isDesignProject = project.technologies.includes('Figma') || 
                         project.technologies.includes('UI/UX Design')
  
  // Function to get appropriate icon and text for design projects
  const getFigmaLinkInfo = (url: string) => {
    if (url.includes('/proto/')) {
      return { icon: <FiEye />, text: 'View Prototype' }
    }
    return { icon: <FiFigma />, text: 'View Design' }
  }
  
  return (
    <motion.div
      className={styles.projectCard}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.projectImage}>
        {isDesignProject && (
          <div className={styles.designBadge}>
            <FiFigma />
            Design
          </div>
        )}
        <img 
          src={project.image} 
          alt={project.title}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-project.jpg';
          }}
        />
        <div className={styles.projectOverlay}>
          <div className={styles.projectLinks}>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectLink} ${isDesignProject ? styles.designLink : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isDesignProject ? getFigmaLinkInfo(project.liveUrl).text : "Live Demo"}
              >
                {isDesignProject ? getFigmaLinkInfo(project.liveUrl).icon : <FiExternalLink />}
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Code"
              >
                <FiGithub />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          {project.featured && (
            <span className={styles.featuredBadge}>Featured</span>
          )}
        </div>

        <p className={styles.projectDescription}>
          {project.description}
        </p>

        <div className={styles.projectTechnologies}>
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className={`${styles.techTag} ${isDesignProject ? styles.designTechTag : ''}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
