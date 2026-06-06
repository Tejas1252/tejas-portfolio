import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiReduxsaga,
  SiHtml5,
  SiCss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiAxios,
  SiPostman,
  SiVite,
  SiGit,
  SiGithub,
  SiEslint,
  SiPrettier,
  SiNpm,
  SiPnpm,
  SiDocker,
  SiFigma,
  SiStorybook,
  SiSelenium,
  SiVitest,
  SiTestinglibrary,
  SiClaude,
  SiGithubcopilot,
  SiMongodb,
  SiGreensock,
} from 'react-icons/si'
import {
  TbApi,
  TbAccessible,
  TbDeviceMobile,
  TbBrowserCheck,
  TbTestPipe,
  TbChartBar,
  TbBrandReactNative,
  TbVectorBezier2,
  TbPointer,
  TbCode,
  TbMessageDots,
  TbInfinity,
  TbSparkles,
} from 'react-icons/tb'

type IconDef = { Icon: IconType; color?: string }

// `color` omitted → renders in the current accent/text color.
const ICONS: Record<string, IconDef> = {
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  React: { Icon: SiReact, color: '#61DAFB' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'JavaScript (ES6+)': { Icon: SiJavascript, color: '#F7DF1E' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  'Redux-Saga': { Icon: SiReduxsaga, color: '#999999' },
  HTML5: { Icon: SiHtml5, color: '#E34F26' },
  CSS3: { Icon: SiCss, color: '#1572B6' },
  SCSS: { Icon: SiSass, color: '#CC6699' },
  'Accessibility (WCAG)': { Icon: TbAccessible },
  'React Native': { Icon: TbBrandReactNative, color: '#61DAFB' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { Icon: SiExpress },
  GraphQL: { Icon: SiGraphql, color: '#E10098' },
  'REST APIs': { Icon: TbApi },
  Axios: { Icon: SiAxios, color: '#5A29E4' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
  'React Testing Library': { Icon: SiTestinglibrary, color: '#E33332' },
  Vitest: { Icon: SiVitest, color: '#6E9F18' },
  Selenium: { Icon: SiSelenium, color: '#43B02A' },
  Playwright: { Icon: TbTestPipe },
  Nightwatch: { Icon: TbTestPipe },
  'System Testing': { Icon: TbTestPipe },
  Vite: { Icon: SiVite, color: '#646CFF' },
  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub },
  ESLint: { Icon: SiEslint, color: '#4B32C3' },
  Prettier: { Icon: SiPrettier, color: '#F7B93E' },
  NPM: { Icon: SiNpm, color: '#CB3837' },
  pnpm: { Icon: SiPnpm, color: '#F69220' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
  'Responsive Design': { Icon: TbDeviceMobile },
  'Cross-browser Compatibility': { Icon: TbBrowserCheck },
  Storybook: { Icon: SiStorybook, color: '#FF4785' },
  Claude: { Icon: SiClaude, color: '#D97757' },
  'Cursor AI': { Icon: TbPointer },
  'GitHub Copilot': { Icon: SiGithubcopilot },
  JSXGraph: { Icon: TbChartBar },
  'Canvas (Create.js)': { Icon: TbVectorBezier2 },
  // Experience-only chips
  Communication: { Icon: TbMessageDots },
  'Software Development': { Icon: TbCode },
  'CI/CD': { Icon: TbInfinity },
  MERN: { Icon: TbCode },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  GSAP: { Icon: SiGreensock, color: '#0AE448' },
  AI: { Icon: TbSparkles },
}

const FALLBACK: IconDef = { Icon: TbCode }

type SkillIconProps = {
  name: string
  className?: string
}

export default function SkillIcon({ name, className }: Readonly<SkillIconProps>) {
  const { Icon, color } = ICONS[name] ?? FALLBACK
  return (
    <Icon
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    />
  )
}
