import React from 'react'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Experience from '../components/experience/Experience'
import Skills from '../components/skills/Skills'
import styles from './App.module.scss'

function App() {
  return (
    <div className={`${styles.App} ${styles._container}`}>
      <About />
      <Skills />
      <Education />
      <Experience />
    </div>
  )
}

export default App
