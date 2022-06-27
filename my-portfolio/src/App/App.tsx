import React from 'react'
import cn from 'classnames'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Experience from '../components/experience/Experience'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Hobby from '../components/hobby/Hobby'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import styles from './App.module.scss'
import { useAppSelector } from '../redux-hooks/redux-hooks'

function App() {
  const { font } = useAppSelector((state) => state.changesPage)

  return (
    <div className={cn(styles.App)} style={{ fontFamily: `${font.value}` }}>
      <Header />
      <div className={styles._container}>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Hobby />
      </div>
      <Footer />
    </div>
  )
}

export default App
