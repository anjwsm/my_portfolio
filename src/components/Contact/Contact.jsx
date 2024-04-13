import React from 'react' 
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src="../src/assets/message.png" alt="Email icon" />
        <a href="mailto:anjalikushwahawsm@gmail.com">anjalikushwahawsm@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src="../src/assets/image 13.png"
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/anjali-kush">linkedin.com/anjali-kush</a>
      </li>
      <li className={styles.link}>
        <img src="../src/assets/image 14.png" alt="Github icon" />
        <a href="https://www.github.com/anjwsm">github.com/anjwsm</a>
      </li>
    </ul>
  </footer>
  )
}
