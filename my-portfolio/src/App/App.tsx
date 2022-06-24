import React from 'react'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Experience from '../components/experience/Experience'
import Hobby from '../components/hobby/Hobby'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import styles from './App.module.scss'

function App() {
  return (
    <div className={`${styles.App} ${styles._container}`}>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Hobby />
    </div>
  )
}

export default App
