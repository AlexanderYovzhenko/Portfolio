import React from 'react'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import styles from './App.module.scss'

function App() {
  return (
    <div className={`${styles.App} ${styles._container}`}>
      <About />
      <Skills />
    </div>
  )
}

export default App
