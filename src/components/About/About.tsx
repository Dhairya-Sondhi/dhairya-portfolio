'use client'

import { motion, Variants } from 'framer-motion'
import { FiDownload, FiPenTool, FiCode, FiCpu, FiAward, FiTarget, FiBriefcase } from 'react-icons/fi'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { PERSONAL_INFO } from '@/utils/constants'
import styles from './About.module.css'

const About = () => {
  const { ref, hasIntersected } = useIntersectionObserver()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
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

  const expertiseAreas = [
    {
      icon: <FiPenTool />,
      title: "UX/UI Design",
      description: "Creating intuitive and delightful user experiences through research-driven design, prototyping, and comprehensive design systems with accessibility in mind.",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Figma", "Adobe XD", "Accessibility Design"],
      color: "#8b5cf6"
    },
    {
      icon: <FiCode />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern frameworks, clean architecture, and performance optimization across the entire technology stack.",
      skills: ["React/Next.js", "Node.js/Express", "TypeScript", "Python/Java", "PostgreSQL/MongoDB", "AWS/Cloud", "RESTful APIs"],
      color: "#14b8a6"
    },
    {
      icon: <FiCpu />,
      title: "AI/ML Engineering",
      description: "Developing intelligent systems with machine learning, natural language processing, and data-driven insights for automated decision-making.",
      skills: ["TensorFlow/PyTorch", "Machine Learning", "NLP/LangChain", "Data Analysis", "Python/Pandas", "Model Deployment", "OpenAI Integration", "Deep Learning", "Computer Vision", "Neural Networks", "Scikit-Learn", "Keras", "MLOps", "AutoML"],
      color: "#f59e0b"
    }
  ]

  const achievements = [
    {
      icon: <FiTarget />,
      title: "10+ Projects Completed",
      description: "Across UX design, full-stack development & AI/ML",
      color: "#14b8a6"
    },
    {
      icon: <FiBriefcase />,
      title: "Enterprise Experience",
      description: "Healthcare sector applications & financial modeling",
      color: "#8b5cf6"
    },
    {
      icon: <FiAward />,
      title: "Multi-Certified Professional",
      description: "AWS, IBM Data Analytics, BCG Gen AI certified",
      color: "#f59e0b"
    }
  ]

  const certifications = [
    "AWS Academy Graduate Certification",
    "IBM Data Analytics with Python",
    "BCG Gen AI Program",
    "JPMorgan Chase Quantitative Research",
    "Macquarie Excel Skills Specialization"
  ]

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.title} variants={itemVariants}>
            About Me
          </motion.h2>

          <motion.p className={styles.description} variants={itemVariants}>
            I'm a multidisciplinary professional who bridges the gap between design, development, and data science. 
            My unique combination of skills allows me to create comprehensive digital solutions that are 
            <span className={styles.highlight}> beautiful, functional, and intelligent</span>.
          </motion.p>

          {/* Three Expertise Areas - ALL CENTERED */}
          <div className={styles.expertiseGrid}>
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={area.title}
                className={styles.expertiseCard} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.expertiseIcon} style={{ color: area.color }}>
                  {area.icon}
                </div>
                <h3 className={styles.expertiseTitle}>{area.title}</h3>
                <p className={styles.expertiseDescription}>{area.description}</p>
                <div className={styles.expertiseSkills}>
                  {area.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={styles.skillTag}
                      style={{ 
                        backgroundColor: `${area.color}20`, 
                        color: area.color,
                        borderColor: `${area.color}30`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className={styles.achievements} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Key Achievements</h3>
            <div className={styles.achievementsGrid}>
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={achievement.title}
                  className={styles.achievementItem}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.achievementIcon} style={{ color: achievement.color }}>
                    {achievement.icon}
                  </div>
                  <div className={styles.achievementContent}>
                    <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                    <p className={styles.achievementDescription}>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          <motion.div className={styles.certifications} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Certifications & Learning</h3>
            <p className={styles.certificationsDescription}>
              Continuously learning and earning certifications from top tech companies and universities, 
              staying updated with latest technologies and industry best practices.
            </p>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  className={styles.certificationItem}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiAward className={styles.certIcon} />
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.focusSection} variants={itemVariants}>
            <div className={styles.focusContent}>
              <h3 className={styles.focusTitle}>My Personal Interests</h3>
              <div className={styles.focusPoints}>
                <div className={styles.focusPoint}>
                  <span className={styles.focusIcon}>📚</span>
                  <div>
                    <strong>Continuous Learning:</strong> Actively pursuing professional certifications and online courses from top institutions like IBM, AWS Academy, and JPMorgan Chase to stay updated with emerging technologies.
                  </div>
                </div>
                <div className={styles.focusPoint}>
                  <span className={styles.focusIcon}>🪙</span>
                  <div>
                    <strong>Numismatics & Collecting:</strong> Passionate collector of coins and currencies, which has developed my attention to detail and appreciation for historical significance and design patterns.
                  </div>
                </div>
                <div className={styles.focusPoint}>
                  <span className={styles.focusIcon}>🏃‍♂️</span>
                  <div>
                    <strong>Fitness & Wellness:</strong> Maintaining physical and mental well-being through regular exercise and mindfulness practices, which enhances productivity and creative thinking.
                  </div>
                </div>
                <div className={styles.focusPoint}>
                  <span className={styles.focusIcon}>🎨</span>
                  <div>
                    <strong>3D Design & Blender:</strong> Exploring creative 3D modeling and animation using Blender, combining technical skills with artistic expression to create visually compelling projects.
                  </div>
                </div>
                <div className={styles.focusPoint}>
                  <span className={styles.focusIcon}>📈</span>
                  <div>
                    <strong>Financial Markets:</strong> Keen interest in analyzing market trends, developing trading algorithms, and understanding economic patterns through data-driven investment strategies.
                  </div>
                </div>
                <div className={styles.focusPoint}>
                  <span className={styles.focusIcon}>🌐</span>
                  <div>
                    <strong>Open Source Contribution:</strong> Contributing to open-source projects and building personal projects that solve real-world problems, fostering community collaboration and knowledge sharing.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.resumeSection} variants={itemVariants}>
            <p className={styles.resumeText}>
              Ready to partner with a multidisciplinary professional for your next <span className={styles.highlight}>digital transformation project</span>?
            </p>
            <div className={styles.resumeButtons}>
              <motion.a
                href={PERSONAL_INFO.resumeUrl}
                download
                className={styles.resumeButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className={styles.contactButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
