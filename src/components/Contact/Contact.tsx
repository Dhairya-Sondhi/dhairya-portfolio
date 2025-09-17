'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin } from 'react-icons/fi'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants'
import { ContactForm } from '@/types'
import styles from './Contact.module.css'

const Contact = () => {
  const { ref, hasIntersected } = useIntersectionObserver()
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    

    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.title} variants={itemVariants}>
            Let&apos;s Connect
          </motion.h2>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </motion.p>

          <div className={styles.contactGrid}>

            <motion.div className={styles.contactInfo} variants={itemVariants}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Get in Touch</h3>
                
                <div className={styles.infoItem}>
                  <FiMail className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href={SOCIAL_LINKS.email} className={styles.infoValue}>
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FiMapPin className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <h4>Follow Me</h4>
                  <div className={styles.socialGrid}>
                    <motion.a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub />
                      <span>GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiLinkedin />
                      <span>LinkedIn</span>
                    </motion.a>

                    <motion.a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiTwitter />
                      <span>Twitter</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>


            <motion.div className={styles.contactForm} variants={itemVariants}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.formTextarea}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitted ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>


      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={hasIntersected ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={styles.footerContent}>
          <p>&copy; 2025 {PERSONAL_INFO.name}. Built with Next.js, TypeScript, and lots of ☕</p>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact
