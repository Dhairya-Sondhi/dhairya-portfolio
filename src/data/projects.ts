import { Project } from '@/types';

export const projects: Project[] = [
  // Full Stack + AI/ML Projects
  {
    id: '1',
    title: 'AI-Powered Collaborative IDE',
    description: 'Intelligent real-time collaborative IDE with AI code completion, automated testing suggestions, and smart debugging. Features include ML-powered code analysis, collaborative editing with conflict resolution, and integrated deployment pipeline.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'Socket.io', 'AWS Lambda', 'OpenAI API'],
    image: '/images/projects/ai-collaborative-ide.jpg',
    liveUrl: 'code-lab-ide.vercel.app',
    githubUrl: 'https://github.com/Dhairya-Sondhi/CodeLab-IDE',
    featured: true,
    type: 'development',
    category: ['fullstack', 'ai']
  },
  {
    id: '2',
    title: 'Intelligent Stock Sentiment Platform',
    description: 'ML-powered financial platform combining sentiment analysis, technical indicators, and predictive modeling. Features real-time NLP processing, automated trading signals, and comprehensive market analysis dashboard.',
    technologies: ['Python', 'TensorFlow', 'React', 'FinBERT', 'LSTM', 'Streamlit', 'Docker', 'AWS'],
    image: '/images/projects/intelligent-stock-platform.png',
    githubUrl: 'https://github.com/Dhairya-Sondhi/indian-stock-sentiment-analytics',
    featured: true,
    type: 'development',
    category: ['ai', 'fullstack']
  },
  {
    id: '3',
    title: 'DAAM - AI Asset Management System',
    description: 'Autonomous AI agent for decentralized asset management using advanced LLMs and blockchain integration. Features intelligent portfolio optimization, risk assessment, and automated decision-making algorithms.',
    technologies: ['Python', 'LangChain', 'Llama 3', 'Blockchain', 'Web3', 'Machine Learning', 'Solidity'],
    image: '/images/projects/daam-ai-system.jpg',
    githubUrl: 'https://github.com/Dhairya-Sondhi/project-daam',
    featured: true,
    type: 'development',
    category: ['ai', 'blockchain']
  },
  {
    id: '4',
    title: 'Reliance Industries Financial Dashboard',
    description: 'Comprehensive financial analysis platform with ML-powered forecasting, automated DCF modeling, and intelligent risk assessment. Includes real-time data pipelines, scenario analysis, and interactive dashboards.',
    technologies: ['Python', 'Scikit-learn', 'Tableau', 'SQL', 'Pandas', 'NumPy', 'Yahoo Finance API'],
    image: '/images/projects/ml-financial-suite.jpg',
    githubUrl: 'https://github.com/Dhairya-Sondhi/reliance-financial-dashboard',
    featured: true,
    type: 'development',
    category: ['ai', 'data']
  },
  
  // UX/UI Design Projects
  {
    id: '5',
    title: 'FinTech Mobile App Design',
    description: 'Complete UX/UI design for a next-generation fintech mobile application. Includes user research, journey mapping, wireframing, high-fidelity prototypes, and comprehensive design system with accessibility guidelines.',
    technologies: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility', 'User Testing'],
    image: '/images/projects/fintech-mobile-design.jpg',
    liveUrl: 'https://www.figma.com/proto/JWIj85LW9yaYhZXyCP0WEc/Finance?node-id=0-1&t=60aMH9U77q3llaHt-1',
    githubUrl: '',
    featured: true,
    type: 'design',
    category: ['ux']
  }
];
