import React from 'react' ;
import styles from './About.module.css' ;
import girlsitting from '../../assets/girlsitting.png';
import fronticon from '../../assets/fronticon.png';
import uiicon from '../../assets/uiicon.png'


export const About = () => {
  return (
     <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
           <img 
            src={girlsitting} alt='Me sitting with a laptop'
            className={styles.aboutImage}
           />
           <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
              <img src={fronticon} alt='fronticon'/>
               <div className={styles.aboutItemText}>
                 <h3>Frontend Developer</h3>
                 <p>Armed with extensive knowledge of HTML, CSS,JavaScript and React, I breathe life into designs, ensuring they not only look exceptional but also perform flawlessly across various devices and platforms. </p>
               </div>
              </li>
              <li className={styles.aboutItem}>
              <img src={uiicon}  alt='UI icon'/>
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
