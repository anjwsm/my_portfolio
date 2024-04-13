import React from 'react' 
import styles from './Contact.module.css'
import email from '../../assets/message.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

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
        <a href="mailto:anjalikushwahawsm@gmail.com">anjalikushwahawsm@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={linkedin}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/anjali-kush">linkedin.com/anjali-kush</a>
      </li>
      <li className={styles.link}>
        <img src={github} alt="Github icon" />
        <a href="https://www.github.com/anjwsm">github.com/anjwsm</a>
      </li>
    </ul>
  </footer>
  )
}
