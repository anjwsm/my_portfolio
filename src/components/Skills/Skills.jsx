import React from 'react' ;
import Languages from '../../data/language.json' ;
import Experience from '../../data/experience.json' ;
import styles from './Skills.module.css'


export const Skills = () => {
  return(
    <section id='skills' className={styles.container}>
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
      <div className={styles.languages}>
        {Languages.map((language , id) => {
          return (
            <div key={id} className={styles.language}>
               <div className={styles.languageImageContainer}>
                  <img src={language.imageSrc} alt={language.title}/>
               </div>
               <p>{language.title}</p>
            </div>
          )
        })}
      </div>
      <ul className={styles.experience}>
        {Experience.map((experienceItem , id) => {
          return(
            <li key={id} className={styles.experienceItem}>
              <img src={experienceItem.imageSrc}/>
              <div className={styles.experienceItemDetails}>
                <h3>{experienceItem.title}</h3>
                <p>{experienceItem.work}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>

    </section>
  )
}
