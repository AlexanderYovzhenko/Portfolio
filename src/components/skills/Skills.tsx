import React from 'react'
import { useTranslation } from 'react-i18next'
import skills from './data/skills'
import styles from './Skills.module.scss'

const Skills = () => {
  const skillBlocks = Object.entries(skills)
  const { t } = useTranslation()

  return (
    <section className={styles.skills} id={'Skills'}>
      <div className={styles.skills__container}>
        <h2 className={styles.skills__title}>{t('Skills')}</h2>
        <div className={styles.skills__content}>
          {skillBlocks.map((skillBlock, index) => {
            return (
              <div className={`${styles.skills__base} ${styles.base}`} key={index}>
                <h3 className={styles.base__title}>{t(skillBlock[0])}</h3>
                <ul className={styles.base__list}>
                  {Object.entries(skillBlock[1]).map((skill, index) => {
                    return (
                      <li className={`${styles.base__item} ${styles.item}`} key={index}>
                        {skill[0]}
                        <div className={styles.item__progress}>
                          <div
                            style={{ width: `${(200 * skill[1]) / 100}px` }}
                            className={styles['item__progress-line']}
                          ></div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
