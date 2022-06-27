import React, { useState } from 'react'
import hobby from '../../data/hobby'
import styles from './Hobby.module.scss'

const Hobby = () => {
  const [itemOpen, setItemOpen] = useState(-1)

  return (
    <section className={styles.hobby} id={'Hobby'}>
      <div className={styles.hobby__container}>
        <h2 className={styles.hobby__title}>Hobby</h2>
        <h4 className={styles.hobby__slogan}>Add fun to your life!</h4>
        <div className={styles.hobby__content}>
          <ul className={styles.hobby__list}>
            {hobby.map(({ name, image, slogan }, index) => {
              return (
                <li
                  className={`${styles.hobby__item} ${itemOpen === index && styles['item-open']}`}
                  key={index}
                >
                  <h3 className={styles.item__title}>{name}</h3>
                  <img
                    className={styles.item__image}
                    src={image}
                    alt="picture hobby"
                    onClick={() => {
                      itemOpen === index ? setItemOpen(-1) : setItemOpen(index)
                    }}
                  />
                  <p className={styles.item__slogan}>{slogan}</p>
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
