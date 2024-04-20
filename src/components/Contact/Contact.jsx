import React from 'react' 
import styles from './Contact.module.css'
import email from '../../assets/message.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import gfg from '../../assets/gfg.png'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={email} alt="Email icon" />
        <a href="mailto:anjalikushwahawsm@gmail.com" target="_blank" rel="noopener noreferrer">anjalikushwahawsm@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={linkedin}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/anjali-kush" target="_blank" rel="noopener noreferrer">linkedin.com/anjali-kush</a>
      </li>
      <li className={styles.link}>
        <img src={github} alt="Github icon" />
        <a href="https://www.github.com/anjwsm" target="_blank" rel="noopener noreferrer">github.com/anjwsm</a>
      </li>
      <li className={styles.link}>
        <img src={gfg} alt="Gfg icon" />
        <a href="https://www.geeksforgeeks.org/user/anjwsm" target="_blank" rel="noopener noreferrer">geeksforgeeks.org/user/anjwsm</a>
      </li>
    </ul>
  </footer>
  )
}
