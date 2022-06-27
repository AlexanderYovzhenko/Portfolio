import React, { useState } from 'react'
import projects from '../../data/projects'
import Modal from '../modal/Modal'
import styles from './Projects.module.scss'

const Projects = () => {
  const [openDescription, setOpenDescription] = useState(false)
  const [description, setDescription] = useState({})
  const [name, setName] = useState('')
  const [pageY, setPageY] = useState({ pageYTop: 0, pageYBottom: 0 })

  return (
    <section className={styles.projects} id={'Projects'}>
      <div className={styles.projects__container}>
        <h2 className={styles.projects__title}>Projects</h2>
        <div className={styles.projects__content}>
          <ul className={styles.projects__list}>
            {projects.map(({ name, deploy, screenshot, gitHub, description }, index) => {
              return (
                <li className={`${styles.projects__item} ${styles.project}`} key={index}>
                  <div className={styles.project__body}>
                    <a
                      href={deploy}
                      className={styles.project__deploy}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3 className={styles.project__title}>{name}</h3>
                      <div className={styles.project__screenshot}>
                        <img src={screenshot} alt="Screenshot project" />
                      </div>
                    </a>
                    <a
                      href={gitHub}
                      className={styles.project__gitHub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Git Hub Project
                    </a>
                    <button
                      className={styles['project__description-button']}
                      onClick={(event) => {
                        event.stopPropagation()
                        const eventTarget = event.target as HTMLElement
                        setPageY({
                          pageYTop: event.pageY - event.clientY,
                          pageYBottom: eventTarget.offsetParent?.clientHeight || 0,
                        })
                        setName(name)
                        setDescription(description)
                        setOpenDescription(!openDescription)
                      }}
                    >
                      Description
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {openDescription && (
        <Modal
          setOpenDescription={setOpenDescription}
          description={description}
          name={name}
          pageY={pageY}
        />
      )}
    </section>
  )
}

export default Projects
