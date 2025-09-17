import React from 'react'

interface IconProps {
  className?: string;
  [key: string]: any;
}

export const SketchIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12 2L4.3 7.2l7.7 12.8 7.7-12.8L12 2zm0 2.3L17 8H7l5-3.7zM6.8 9h10.4L12 18.5 6.8 9z"/>
  </svg>
)

export const FramerIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M4 0h16v8h-8L4 0zm0 8h8l8 8H4V8zm0 8h8v8l-8-8z"/>
  </svg>
)

export const AdobeXDIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.568L16.154 18l-2.58-3.42L11 18l-1.414-1.432L12.162 12 9.586 7.432 11 6l2.574 3.42L16.154 6l1.414 1.432L15.002 12l2.566 4.568z"/>
  </svg>
)

export const MiroIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx="6" cy="6" r="1.5"/>
    <circle cx="18" cy="6" r="1.5"/>
    <circle cx="6" cy="18" r="1.5"/>
    <circle cx="18" cy="18" r="1.5"/>
    <circle cx="12" cy="12" r="1.5"/>
    <path d="M7.5 6h9M6 7.5v9M18 7.5v9M7.5 18h9M10.5 10.5l3 3M13.5 10.5l-3 3" strokeWidth="1" stroke="currentColor" fill="none"/>
  </svg>
)

export const LangChainIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M4 6h4l4 6-4 6H4l4-6-4-6zm8 0h4l4 6-4 6h-4l4-6-4-6z"/>
    <circle cx="6" cy="12" r="1"/>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="18" cy="12" r="1"/>
  </svg>
)

export const OpenAIIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    <circle cx="12" cy="7" r="2"/>
    <circle cx="7" cy="12" r="1.5"/>
    <circle cx="17" cy="12" r="1.5"/>
    <circle cx="12" cy="17" r="2"/>
  </svg>
)

export const TableauIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <rect x="2" y="2" width="20" height="4" rx="1"/>
    <rect x="2" y="8" width="8" height="3" rx="0.5"/>
    <rect x="14" y="8" width="8" height="3" rx="0.5"/>
    <rect x="2" y="13" width="5" height="3" rx="0.5"/>
    <rect x="9" y="13" width="6" height="3" rx="0.5"/>
    <rect x="17" y="13" width="5" height="3" rx="0.5"/>
    <rect x="2" y="18" width="20" height="4" rx="1"/>
  </svg>
)

export const PowerBIIcon: React.FC<IconProps> = ({ className = "", ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em"
    height="1em"
    {...props}
  >
    <rect x="2" y="8" width="4" height="14" rx="1"/>
    <rect x="8" y="4" width="4" height="18" rx="1"/>
    <rect x="14" y="12" width="4" height="10" rx="1"/>
    <rect x="20" y="6" width="2" height="16" rx="1"/>
  </svg>
)
