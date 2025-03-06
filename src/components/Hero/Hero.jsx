import React from 'react'
import styles from "./Hero.module.css"

import { getImageUrl } from '../../utils'

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} > Hi, I'm Harshit Verma</h1>
            <p className={styles.description}>
            I'm a Competitive Programmer and Full-Stack Developer, passionate about crafting scalable applications and solving complex algorithmic challenges. Let's connect and collaborate to push the boundaries of technology and innovation!
            </p>
            <div className={styles.btnContainer}>
              <a className={styles.contactBtn} href="mailto:harshverma.vvip@gmail.com">Contact</a>
            <a className={styles.contactBtn} href="../../public/assets/Resume/Resume_Harshit.pdf" download>Resume</a>
            </div>
        </div>

        <img className={styles.heroImg} src={getImageUrl("hero/MyProfile.png")} alt="Hero Image of me" />

        <div className={styles.topBlur}>

        </div>
        <div className={styles.bottomBlur}>

        </div>
    </section>
  )
}

export default Hero
