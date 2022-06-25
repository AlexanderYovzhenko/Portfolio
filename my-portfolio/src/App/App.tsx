import React from 'react'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Experience from '../components/experience/Experience'
import Footer from '../components/footer/Footer'
import Hobby from '../components/hobby/Hobby'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
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
