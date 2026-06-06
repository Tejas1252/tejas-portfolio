export const profile = {
  name: 'Tejas Shinde',
  title: 'Frontend Engineer',
  tagline: 'React · TypeScript · Redux · 5 Years Experience',
  phone: '+91 8080110604',
  email: 'tejas.shinde.frontend@gmail.com',
  location: 'Mumbai / Bangalore',
  github: 'https://github.com/Tejas1252',
  linkedin: 'https://www.linkedin.com/in/tejas-shinde-284894189',
  summary:
    'Frontend Engineer with 5 years of experience building scalable, high-performance web applications using React and TypeScript. Proven track record of delivering user-centric solutions for e-learning platforms serving 300K+ users. Strong expertise in state management (Redux, Redux-Saga), performance optimisation, and reusable component architecture. Actively improving productivity using AI tools and contributing to quality through testing and automation.',
}

export const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '300K+', label: 'Users Served' },
  { value: '~50%', label: 'Faster Load Times' },
  { value: '100%', label: 'Ownership Mindset' },
]

export type SkillGroup = { category: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux',
      'Redux-Saga',
      'HTML5',
      'CSS3',
      'SCSS',
      'Accessibility (WCAG)',
    ],
  },
  { category: 'Mobile', items: ['React Native'] },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Axios', 'Postman'],
  },
  {
    category: 'Testing & Automation',
    items: [
      'React Testing Library',
      'Vitest',
      'Selenium',
      'Playwright',
      'Nightwatch',
      'System Testing',
    ],
  },
  {
    category: 'Tools & Build',
    items: ['Vite', 'Git', 'GitHub', 'ESLint', 'Prettier', 'NPM', 'pnpm', 'Docker'],
  },
  {
    category: 'UI / UX',
    items: ['Figma', 'Responsive Design', 'Cross-browser Compatibility', 'Storybook'],
  },
  {
    category: 'AI Tools',
    items: ['Claude', 'Cursor AI', 'GitHub Copilot'],
  },
  {
    category: 'Visualisation',
    items: ['JSXGraph', 'Canvas (Create.js)'],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer II',
    company: 'Curriculum Associates',
    period: 'Jan 2025 – Present',
    points: [
      'Promoted to Software Engineer II, recognising consistent high-quality delivery and impact on frontend systems.',
      'Owned and developed custom Bar Graph and Table components used across the application.',
      'Optimised Bar Graph performance, reducing loading time by ~50% and improving user experience.',
      'Built and maintained scalable UI components using React and TypeScript, improving performance and consistency.',
      'Implemented Redux-Saga for managing asynchronous flows and improving state handling.',
      'Leveraged Cursor AI to accelerate development, debugging, and code optimisation workflows.',
      'Automated system testing workflows using Selenium and Vitest, improving release reliability.',
      'Optimised monorepo automation (tsc --watch, pnpm, nodemon), reducing build overhead by ~50%.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Mitr Learning & Media Pvt. Ltd (Curriculum Associates)',
    period: 'Jun 2021 – Dec 2024',
    points: [
      'Engineered a scalable e-learning platform using React, TypeScript, and Redux, serving 300K+ users.',
      'Built a quiz-based learning system, increasing student engagement and completion rates.',
      'Developed the i-Ready Connect platform used by 300K+ students with seamless cross-device compatibility.',
      'Built interactive data visualisations (bar graphs, pie charts) using JSXGraph for educators.',
      'Improved accessibility using semantic HTML and WCAG guidelines (VoiceOver, JAWS, NVDA).',
      'Integrated CI/CD workflows and code quality tools (Jenkins, SonarQube) for reliable deployment.',
      'Configured backend integrations and CORS using Node.js and Express.',
    ],
  },
  {
    role: 'Freelance Mobile App Developer',
    company: 'Self-Employed',
    period: '2024',
    points: [
      'Developed a cross-platform mobile app using React Native and the MERN stack for a client.',
      'Implemented end-to-end features including authentication, REST APIs, and dynamic UI rendering.',
      'Optimised application performance for a smooth experience across devices.',
      'Handled requirement gathering, development, and delivery independently.',
    ],
  },
  {
    role: 'Full-stack Developer (Passion Project)',
    company: 'Matrimonial Platform',
    period: 'Jun 2020 – Jun 2021',
    points: [
      'Built a full-stack matrimonial website using React, Node.js, Redux, TypeScript, and GraphQL.',
      'Created smooth animations with GSAP to enhance the visual appeal of the website.',
      'Used MongoDB for scalable data storage and Express.js for robust API development.',
    ],
  },
]

export type Project = {
  name: string
  blurb: string
  points: string[]
  tech: string[]
  live?: string
  github?: string
}

export const projects: Project[] = [
  {
    name: 'Study Buddy — AI-Powered Study Assistant',
    blurb:
      'A cloud-hosted full-stack AI app generating summaries, quizzes, flashcards, translations, and practice tests from notes and PDFs.',
    points: [
      'Architected and deployed frontend on Netlify and backend on Render.',
      'Integrated Google Gemini with multi-model fallback and retry for reliability.',
      'Implemented token-aware document chunking and server-side PDF processing.',
      'Established GitHub-driven CI/CD with secure, environment-based config.',
    ],
    tech: ['React', 'Node.js', 'Express', 'Gemini API', 'Netlify', 'Render', 'GitHub Actions'],
    live: 'https://poetic-praline-b09511.netlify.app/',
    github: 'https://github.com/Tejas1252/study-buddy',
  },
  {
    name: 'i-Ready Connect',
    blurb:
      'A large-scale quiz and learning platform used by 300K+ students across devices.',
    points: [
      'Implemented dynamic UI rendering and state management with React and Redux-Saga.',
      'Ensured cross-device compatibility and deep performance optimisation.',
      'Maintained high accessibility standards for diverse learners.',
    ],
    tech: ['React', 'TypeScript', 'Redux-Saga', 'SCSS', 'WCAG'],
  },
  {
    name: 'Data Visualisation System',
    blurb:
      'Interactive charts that turn educational data into clear, actionable insight.',
    points: [
      'Developed interactive charts using JSXGraph for educational insights.',
      'Improved data readability and engagement for students and educators.',
      'Optimised render performance for large datasets.',
    ],
    tech: ['JSXGraph', 'React', 'TypeScript', 'Canvas'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering (Computer Engineering)',
    school: 'Don Bosco Institute of Technology',
    period: '2019 – 2021',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Babasaheb Gawde Institute of Technology',
    period: '2016 – 2018',
  },
]

export const activities = [
  'Secretary, Toastmasters Club (Company) — led communication, event coordination, and team engagement.',
  'Participated in company-level hackathons (India & US), building innovative solutions under tight timelines.',
  'Experienced in Agile/Scrum environments with a focus on clean, maintainable code.',
]
