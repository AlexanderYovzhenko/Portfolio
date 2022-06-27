import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Clock from 'react-live-clock'
import Select, { SingleValue } from 'react-select'
import cn from 'classnames'
import styles from './Header.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux-hooks/redux-hooks'
import { changeFont, changeTheme } from '../../store/changesPage'
import fonts from './data/fonts'
import navigationList from './data/navigationList'
import ChangeTheme from './assets/ChangeTheme.png'

const Header = () => {
  const dispatch = useAppDispatch()
  const { theme, font } = useAppSelector((state) => state.changesPage)

  const setTheme = (theme: string) => (document.documentElement.className = theme)

  const changeThemeFn = () => {
    theme === 'dark' ? dispatch(changeTheme('light')) : dispatch(changeTheme('dark'))
    setTheme(theme)
  }

  const changeFontFn = (
    value: SingleValue<{
      value: string
      label: string
    }>
  ) => {
    if (value) {
      dispatch(changeFont(value))
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
          <Clock className={styles.clock} format={'hh:mm:ssa'} ticking={true} />
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
                    {section}
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
              onChange={(value) => changeFontFn(value)}
            />
          </div>
          <div className={styles.changes__language}></div>
        </div>
      </div>
    </section>
  )
}

export default Header
