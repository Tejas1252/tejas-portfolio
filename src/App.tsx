import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'
import ScrollProgress from './components/ScrollProgress'
import { useTheme } from './useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  const [route, setRoute] = useState(() => window.location.hash)

  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash)
      // Jump to top when entering the résumé view.
      if (window.location.hash === '#resume') window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '#resume') {
    return <Resume />
  }

  return (
    <>
      <ScrollProgress />
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
