import React from 'react'
import styles from './Main.module.scss'
import photo from './assets/Photo_CV.png'

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__describe}>
          <h1 className={styles.main__title}>Aliaksandr Youzhanka</h1>
          <p className={styles.main__text}>
            Hello! I am a web developer. I have good knowledge of JavaScript, TypeScript, NodeJS,
            React, HTML, CSS. In programming, I like many ways to solve a problem and find the best
            solution. Ready to solve the tasks assigned to the company, work in a team and find the
            best solution together. I continue to learn and develop in order to achieve high results
            in programming. I will be glad to join your team.
          </p>
          <button className={styles['main__download-CV']}>Download CV</button>
        </div>
        <div className={styles.main__image}>
          <img src={photo} alt="Photo person" />
        </div>
      </div>
    </section>
  )
}

export default Main
