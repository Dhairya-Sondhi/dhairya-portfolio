export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  type?: 'development' | 'design';
  category?: ('ux' | 'fullstack' | 'ai' | 'blockchain' | 'data' | 'mobile' | 'web')[];
}

export interface JourneyItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'work' | 'internship' | 'freelance' | 'certification';
  skills?: string[];
  achievements?: string[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: 'design' | 'frontend' | 'backend' | 'ai' | 'database' | 'tools' | 'mobile';
  level: number;
  experience?: string; 
  projects?: number; 
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  subject?: string;
  company?: string;
  projectType?: 'design' | 'development' | 'ai' | 'consulting' | 'other';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills?: string[];
  type: 'certification' | 'course' | 'bootcamp' | 'degree';
}

export interface ExpertiseArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  skills: string[];
  experience: string;
  projects: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
  projectType: 'design' | 'development' | 'ai' | 'consulting';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
  deliverables: string[];
  category: 'design' | 'development' | 'ai' | 'consulting';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  category: 'design' | 'development' | 'ai' | 'career' | 'tutorial';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'recognition' | 'milestone' | 'publication';
  organization?: string;
  url?: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projects?: Project[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  description?: string;
  relevantCourses?: string[];
  projects?: string[];
}

export interface Skill {
  name: string;
  category: 'design' | 'frontend' | 'backend' | 'ai' | 'database' | 'tools' | 'soft';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years: number;
  verified?: boolean;
}

export interface Portfolio {
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone?: string;
    website?: string;
    avatar?: string;
  };
  social: SocialLink[];
  expertise: ExpertiseArea[];
  projects: Project[];
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certificates: Certificate[];
  achievements: Achievement[];
  testimonials: Testimonial[];
  services: Service[];
  blog?: BlogPost[];
}

export interface PortfolioSettings {
  theme: 'light' | 'dark' | 'auto';
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;
  showSocialLinks: boolean;
  showTestimonials: boolean;
  showBlog: boolean;
  showServices: boolean;
  showAchievements: boolean;
  contactFormEnabled: boolean;
  googleAnalytics?: string;
}

export interface FilterOptions {
  category?: string[];
  type?: string[];
  technology?: string[];
  featured?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface SearchOptions {
  query: string;
  filters: FilterOptions;
  sortBy: 'date' | 'name' | 'featured' | 'category';
  sortOrder: 'asc' | 'desc';
}

// Utility types
export type ProjectCategory = 'ux' | 'fullstack' | 'ai' | 'blockchain' | 'data' | 'mobile' | 'web';
export type ProjectType = 'development' | 'design';
export type ExpertiseCategory = 'design' | 'development' | 'ai' | 'consulting';
export type TechCategory = 'design' | 'frontend' | 'backend' | 'ai' | 'database' | 'tools' | 'mobile';
export type JourneyType = 'education' | 'work' | 'internship' | 'freelance' | 'certification';

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState {
  isLoading: boolean;
  isSubmitted: boolean;
  errors: ValidationError[];
  success: boolean;
}

// Analytics types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface PageView {
  page: string;
  timestamp: number;
  userAgent?: string;
  referrer?: string;
}
