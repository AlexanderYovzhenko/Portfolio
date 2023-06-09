import React from 'react'
import { useTranslation } from 'react-i18next'
import contacts from './data/contacts'
import styles from './Footer.module.scss'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer} id={'Contacts'}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__list}>
          {contacts.map(({ name, icon, link }, index) => {
            return (
              <li className={`${styles.footer__item} ${styles.item}`} key={index}>
                <a className={styles.item__link} href={link} target={'_blank'} rel="noreferrer">
                  <h4 className={styles.item__title}>{t(name)}</h4>
                  <div className={styles.item__icon}>
                    <img src={icon} alt={name} />
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
