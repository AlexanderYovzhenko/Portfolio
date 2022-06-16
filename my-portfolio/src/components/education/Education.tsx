import React from 'react'
import styles from './Education.module.scss'
import certificate from '../../data/certificate'
import { FreeMode, Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const Education = () => {
  return (
    <section className={styles.education}>
      <div className={styles.education__container}>
        <h2 className={styles.education__title}>Education</h2>
        <h4 className={styles.education__subtitle}>Nov 2020 - Jun 2022</h4>
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
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            // freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, FreeMode]}
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
