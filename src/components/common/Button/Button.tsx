'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  disabled = false,
  className 
}: ButtonProps) => {
  const buttonClass = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className,
    { [styles.disabled]: disabled }
  )

  const buttonProps = {
    className: buttonClass,
    onClick: !disabled ? onClick : undefined,
    disabled
  }

  const content = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  )

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        {...buttonProps}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...buttonProps}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {content}
    </motion.button>
  )
}

export default Button
