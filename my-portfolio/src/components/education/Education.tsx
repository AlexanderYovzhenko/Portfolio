import React, { useEffect, useState } from 'react'
import styles from './Education.module.scss'
import certificate from './data/certificate'
import { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const [slidesPerViewCount, setSlidesPerViewCount] = useState(2)
  const { t } = useTranslation()

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setSlidesPerViewCount(1)
    }
  }, [])

  return (
    <section className={styles.education} id={'Education'}>
      <div className={styles.education__container}>
        <h2 className={styles.education__title}>{t('Education')}</h2>
        <h4 className={styles.education__subtitle}>{t('dateEducation')}</h4>
        <ul className={styles.education__list}>
          <li>RS School - React</li>
          <li>EPAM UpSkill Lab - Front End</li>
          <li>RS School - NodeJS</li>
        </ul>
        <div className={`${styles.education__content} ${styles.content}`}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slidesPerViewCount}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className={`${styles.swiper} ${styles.mySwiper}`}
          >
            {certificate.map(({ title, url }, index) => {
              return (
                <SwiperSlide className={styles['swiper-slide']} key={index}>
                  <img className={styles.education__image} src={url} alt={title} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Education
