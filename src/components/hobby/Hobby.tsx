import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import hobby from './data/hobby'
import styles from './Hobby.module.scss'

const Hobby = () => {
  const [itemOpen, setItemOpen] = useState(-1)
  const { t } = useTranslation()

  return (
    <section className={styles.hobby} id={'Hobby'}>
      <div className={styles.hobby__container}>
        <h2 className={styles.hobby__title}>{t('Hobby')}</h2>
        <h4 className={styles.hobby__slogan}>{t('HobbySlogan')}</h4>
        <div className={styles.hobby__content}>
          <ul className={styles.hobby__list}>
            {hobby.map(({ name: nameHobby, image, slogan }, index) => {
              return (
                <li
                  className={`${styles.hobby__item} ${itemOpen === index && styles['item-open']}`}
                  key={index}
                >
                  <h3 className={styles.item__title}>{t(nameHobby)}</h3>
                  <img
                    className={styles.item__image}
                    src={image}
                    alt="picture hobby"
                    onClick={() => {
                      itemOpen === index ? setItemOpen(-1) : setItemOpen(index)
                    }}
                  />
                  <p className={styles.item__slogan}>{t(slogan)}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hobby
