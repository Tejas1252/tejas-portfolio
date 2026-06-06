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

export type Role = {
  title: string
  employmentType?: string
  period: string
  duration?: string
  location?: string
  points?: string[]
  skills?: string[]
}

export type Company = {
  company: string
  duration?: string
  location?: string
  roles: Role[]
  /** Optional path to a real logo in /public; falls back to a monogram. */
  logo?: string
  /** Monogram override + tile colour. */
  initials?: string
  accent?: string
}

export const experience: Company[] = [
  {
    company: 'Curriculum Associates',
    duration: '5 yrs 1 mo',
    initials: 'CA',
    accent: '#1a4fa0',
    roles: [
      {
        title: 'Software Engineer II',
        employmentType: 'Full-time',
        period: 'Jan 2025 – Present',
        duration: '1 yr 6 mos',
        location: 'Bengaluru, Karnataka, India · Hybrid',
        points: [
          'Developed responsive, user-friendly UI components in React and TypeScript for educational applications used by students and educators.',
          'Implemented Redux-Saga for efficient asynchronous state management.',
          'Owned custom Bar Graph and Table components used across the app; optimised Bar Graph performance, cutting load time by ~50%.',
          'Leveraged Cursor AI to accelerate development and automated system testing with Selenium and Vitest.',
          'Optimised monorepo automation (tsc --watch, pnpm, nodemon), reducing build overhead by ~50%.',
        ],
        skills: ['React', 'TypeScript', 'Redux-Saga', 'Vitest', 'Selenium'],
      },
      {
        title: 'Software Engineer I',
        employmentType: 'Full-time',
        period: 'Apr 2025 – Apr 2026',
        duration: '1 yr 1 mo',
        location: 'Bengaluru, Karnataka, India · Hybrid',
        points: [
          'Built and maintained scalable, reusable UI components aligned with Figma designs.',
          'Collaborated with design, QA, and product teams to ship high-quality user experiences.',
        ],
        skills: ['Redux-Saga', 'Communication', 'React', 'TypeScript', 'SCSS'],
      },
      {
        title: 'Frontend Developer',
        period: 'Jun 2021 – Dec 2024',
        duration: '3 yrs 7 mos',
        points: [
          'Engineered a front-end solution using TypeScript, React.js, Node.js, and Redux — eBooks and Interactive Editions for an e-learning platform serving 300,000+ users.',
          'Developed a quiz-based learning system, increasing student engagement and completion rates.',
          'Built interactive data visualisations (bar graphs, pie charts) using JSXGraph for educators.',
          'Improved accessibility to WCAG with screen-reader support (VoiceOver, JAWS, NVDA).',
        ],
      },
    ],
  },
  {
    company: 'Mitr Learning & Media Pvt. Ltd.',
    duration: '3 yrs 11 mos',
    location: 'Mumbai, Maharashtra, India',
    initials: 'ML',
    accent: '#1f7ae0',
    roles: [
      {
        title: 'Frontend Developer',
        employmentType: 'Full-time',
        period: 'Sep 2021 – Apr 2025',
        duration: '3 yrs 8 mos',
        location: 'Remote',
        points: [
          'Developed the i-Ready Connect platform used by 300K+ students with seamless cross-device compatibility.',
          'Integrated CI/CD and code-quality tooling (Jenkins, SonarQube); configured Node.js/Express backend integrations and CORS.',
        ],
        skills: ['JavaScript', 'React', 'Software Development', 'CI/CD'],
      },
      {
        title: 'Graduate Engineering Trainee',
        period: 'Jun 2021 – Aug 2021',
        duration: '3 mos',
        points: [
          'Ramped up on the codebase and contributed to UI features during the graduate program.',
        ],
        skills: ['JavaScript'],
      },
    ],
  },
  {
    company: 'Matrimonial Platform (Passion Project)',
    duration: 'Jun 2020 – Jun 2021',
    initials: 'MP',
    accent: '#db2777',
    roles: [
      {
        title: 'Full-stack Developer',
        period: 'Jun 2020 – Jun 2021',
        points: [
          'Built a full-stack matrimonial website using React, Node.js, Redux, TypeScript, and GraphQL.',
          'Created smooth animations with GSAP and used MongoDB for scalable storage.',
        ],
        skills: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'GSAP'],
      },
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
  {
    name: 'Cross-Platform Mobile App (Freelance)',
    blurb:
      'A freelance cross-platform mobile application built end-to-end with React Native and the MERN stack for a client.',
    points: [
      'Built a cross-platform mobile app with React Native backed by a MERN (MongoDB, Express, React, Node.js) stack.',
      'Implemented end-to-end features: authentication, REST APIs, and dynamic UI rendering.',
      'Optimised performance for a smooth experience across devices.',
      'Handled requirement gathering, development, and delivery independently.',
    ],
    tech: ['React Native', 'MongoDB', 'Express', 'Node.js', 'REST APIs'],
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
