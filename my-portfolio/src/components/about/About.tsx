import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './About.module.scss'
import photo from './assets/Photo_CV.png'

const About = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.about} id={'About'}>
      <div className={styles.about__container}>
        <div className={styles.about__describe}>
          <h1 className={styles.about__title}>{t('name')}</h1>
          <p className={styles.about__text}>{t('about_Me')}</p>
          <button className={styles['about__download-CV']}>{t('download')}</button>
        </div>
        <div className={styles.about__image}>
          <img src={photo} alt="Photo person" />
        </div>
      </div>
    </section>
  )
}

export default About
