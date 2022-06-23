import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './Modal.module.scss'

interface PropsModal {
  setOpenDescription: Dispatch<SetStateAction<boolean>>
  description:
    | {
        [keys: string]: string
      }
    | object
  name: string
  pageY: {
    pageYTop: number
    pageYBottom: number
  }
}

const Modal = ({ setOpenDescription, description, name, pageY }: PropsModal) => {
  const [animationModal, setAnimationModal] = useState(false)

  return (
    <section
      className={`${styles.modal} ${animationModal && styles['modal__close-animation']}`}
      style={{ height: `${pageY.pageYBottom}px` }}
      onClick={(event) => {
        event.stopPropagation()
        const eventTarget = event.target as HTMLTextAreaElement
        if (eventTarget.localName === 'section') {
          setAnimationModal(true)
          setTimeout(() => setOpenDescription(false), 900)
        }
      }}
    >
      <div
        className={`${styles.modal__container} ${
          animationModal && styles['modal__close-animation']
        }`}
        style={{ marginTop: `${pageY.pageYTop}px` }}
      >
        <h2 className={styles.modal__title}>{name}</h2>
        <div className={styles.modal__content}>
          <ul className={styles.modal__list}>
            {Object.entries(description).map((item, index) => {
              return item[0] === 'GitHubFrontEnd' ? (
                <li className={styles.modal__item} key={index}>
                  <a href={item[1]} target={'_blank'} rel="noreferrer">
                    <p className={styles['modal__item-text']}>
                      <span className={styles['modal__item-name']}>GitHub: </span>
                      Front-End
                    </p>
                  </a>
                </li>
              ) : item[0] === 'GitHubBackEnd' ? (
                <li className={styles.modal__item} key={index}>
                  <a href={item[1]} target={'_blank'} rel="noreferrer">
                    <p className={styles['modal__item-text']}>
                      <span className={styles['modal__item-name']}>GitHub: </span>
                      Back-End
                    </p>
                  </a>
                </li>
              ) : (
                <li className={styles.modal__item} key={index}>
                  <p className={styles['modal__item-text']}>
                    <span className={styles['modal__item-name']}>{item[0]}: </span>
                    {item[1]}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
        <div
          className={styles.modal__close}
          onClick={(event) => {
            event.stopPropagation()
            setAnimationModal(true)
            setTimeout(() => setOpenDescription(false), 900)
          }}
        >
          <div className={styles['modal__close-element']}></div>
        </div>
      </div>
    </section>
  )
}

export default Modal
