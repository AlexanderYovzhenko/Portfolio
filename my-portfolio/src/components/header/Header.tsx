import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Clock from 'react-live-clock'
import Select, { SingleValue } from 'react-select'
import cn from 'classnames'
import styles from './Header.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux-hooks/redux-hooks'
import { changeFont, changeLanguage, changeTheme } from '../../store/changesPage'
import fonts from './data/fonts'
import navigationList from './data/navigationList'
import ChangeTheme from './assets/ChangeTheme.png'
import languages from './data/languages'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const dispatch = useAppDispatch()
  const { theme, font, language } = useAppSelector((state) => state.changesPage)
  const { t } = useTranslation()

  const changeThemeFn = () => {
    theme === 'dark' ? dispatch(changeTheme('light')) : dispatch(changeTheme('dark'))
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const changeFontFn = (
    selectFont: SingleValue<{
      value: string
      label: string
    }>
  ) => {
    if (selectFont) {
      dispatch(changeFont(selectFont))
    }
  }

  const changeLanguageFn = (
    selectLanguage: SingleValue<{
      value: string
      label: string
    }>
  ) => {
    if (selectLanguage) {
      i18next.changeLanguage(selectLanguage.value)
      dispatch(changeLanguage(selectLanguage))
    }
  }

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', scrollHandler)
  }, [])

  return (
    <section className={cn(styles.header, { [styles.header__scroll]: scroll })}>
      <div className={styles.header__container}>
        <div className={styles.header__clock}>
          <Clock
            className={styles.clock}
            locale={language.value}
            format={t('ClockFormat')}
            ticking={true}
          />
        </div>
        <div className={`${styles.header__navigation} ${styles.navigation}`}>
          <ul className={styles.navigation__list}>
            {navigationList.map((section, index) => {
              return (
                <li className={styles.navigation__item} key={index}>
                  <Link
                    className={styles.navigation__link}
                    activeClass={styles['navigation__link-active']}
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-50}
                  >
                    {t(section)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={`${styles.header__changes} ${styles.changes}`}>
          <div className={styles.changes__theme} onClick={changeThemeFn}>
            <img src={ChangeTheme} alt="icon change theme" />
          </div>
          <div className={styles.changes__font}>
            <Select
              className={styles['changes__font-select']}
              options={fonts}
              defaultValue={fonts[0]}
              value={font}
              onChange={(selectFont) => changeFontFn(selectFont)}
            />
          </div>
          <div className={styles.changes__language}>
            <Select
              className={styles['changes__language-select']}
              options={languages}
              defaultValue={languages[0]}
              value={language}
              onChange={(selectLanguage) => changeLanguageFn(selectLanguage)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
