import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './About.module.scss'
import { useAppSelector } from '../../redux-hooks/redux-hooks'
import photo from './assets/Photo_CV.png'
import CV_En from './assets/Software_Engineer_Aliaksandr_Youzhanka_En_CV.pdf'
import CV_Ru from './assets/Software_Engineer_Aliaksandr_Youzhanka_Ru_CV.pdf'

const About = () => {
  const { language } = useAppSelector((state) => state.changesPage)
  const { t } = useTranslation()

  return (
    <section className={styles.about} id={'About'}>
      <div className={styles.about__container}>
        <div className={styles['about__title-container']}>
          <h1 className={styles.about__title}>
            <span>{t('p')}</span>
            <span>{t('o')}</span>
            <span>{t('r')}</span>
            <span>{t('t')}</span>
            <span>{t('f')}</span>
            <span>{t('o')}</span>
            <span>{t('l')}</span>
            <span>{t('i')}</span>
            <span>{t('o')}</span>
          </h1>
          <h1 className={styles.about__title}>
            <span>{t('p')}</span>
            <span>{t('o')}</span>
            <span>{t('r')}</span>
            <span>{t('t')}</span>
            <span>{t('f')}</span>
            <span>{t('o')}</span>
            <span>{t('l')}</span>
            <span>{t('i')}</span>
            <span>{t('o')}</span>
          </h1>
        </div>

        <div className={styles.about__content}>
          <div className={styles.about__describe}>
            <h2 className={styles.about__name}>{t('name')}</h2>
            <p className={styles.about__text}>{t('about_Me')}</p>
            <button className={styles['about__download-CV']}>
              <a
                href={language.value === 'en' ? CV_En : CV_Ru}
                target="_blank"
                download
                rel="noreferrer"
              >
                {t('download')}
              </a>
            </button>
          </div>
          <div className={styles.about__image}>
            <img src={photo} alt="Photo person" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
