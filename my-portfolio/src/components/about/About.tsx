import React from 'react'
import styles from './About.module.scss'
import photo from './assets/Photo_CV.png'

const About = () => {
  return (
    <section className={styles.about} id={'About'}>
      <div className={styles.about__container}>
        <div className={styles.about__describe}>
          <h1 className={styles.about__title}>Aliaksandr Youzhanka</h1>
          <p className={styles.about__text}>
            Hi! I am a web developer. I have good knowledge of JavaScript, TypeScript, NodeJS,
            React, HTML, CSS. In programming, I like many ways to solve a problem and find the best
            solution. Ready to solve the tasks assigned to the company, work in a team and find the
            best solution together. I continue to learn and develop in order to achieve high results
            in programming. I will be glad to join your team.
          </p>
          <button className={styles['about__download-CV']}>Download CV</button>
        </div>
        <div className={styles.about__image}>
          <img src={photo} alt="Photo person" />
        </div>
      </div>
    </section>
  )
}

export default About
