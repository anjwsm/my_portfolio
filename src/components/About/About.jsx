import React from 'react' ;
import styles from './About.module.css' ;

export const About = () => {
  return (
     <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
           <img 
            src='../src/assets/girlsitting.png' alt='Me sitting with a laptop'
            className={styles.aboutImage}
           />
           <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
              <img src='../src/assets/image 2.png' alt='cursor'/>
               <div className={styles.aboutItemText}>
                 <h3>Frontend Developer</h3>
                 <p>Armed with extensive knowledge of HTML, CSS, and JavaScript, I breathe life into designs, ensuring they not only look exceptional but also perform flawlessly across various devices and platforms. </p>
               </div>
              </li>
              <li className={styles.aboutItem}>
              <img src='../src/assets/image 4.png' alt='UI icon'/>
               <div  className={styles.aboutItemText}>
               <h3>UI/UX Designer</h3>
               <p>I have designed multiple landing pages and have created design systems as well. I meticulously design interfaces that prioritize user experience and elevate brand identity. Every element I create is purposeful, guiding users effortlessly through their digital journey. </p>
               </div>
              </li>

           </ul>
       
        </div>
     </section>
  )
}
