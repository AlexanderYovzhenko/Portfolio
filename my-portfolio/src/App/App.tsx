import React from 'react'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Skills from '../components/skills/Skills'
import styles from './App.module.scss'

function App() {
  return (
    <div className={`${styles.App} ${styles._container}`}>
      <About />
      <Skills />
      <Education />
    </div>
  )
}

export default App
