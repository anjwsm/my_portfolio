import React from 'react' ;
import styles from "./Hero.module.css" ;
import headergirl from "../../assets/headergirl.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi , I am Anjali Kushwaha</h1>
            <p className={styles.description}>
                I am a UI/UX Designer and a Frontend Developer. With a keen eye for detail and a passion for clean, intuitive design, I specialize in transforming complex ideas into seamless, visually stunning interfaces.
            </p>
            <a href='mailto:anjalikushwahawsm@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={headergirl} alt='Hero image of me' className={styles.heroImg}/>
         <div className={styles.topBlur}/>
         <div className={styles.bottomBlur} />
    </section>
  )
}
