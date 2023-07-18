import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.all}>
      <div className={`${styles.containerImgLandingpage} ${styles.landingImageContainer}`}>
        <img className={styles.imgLandingPage} src="/picFood.jpg" alt="img-landing" />
      </div>

      <div className={styles.containerRigthLanding}>
        <div className={styles.containerText}>
          <h2>SPICY FOOD</h2>
          <p>BIENVENIDO A SPICY FOOD</p>
          <p>UNA NUEVA FORMA DE APRECIAR LA GASTRONOMÍA</p>
        </div>
        <div className={styles.content}>
          <NavLink className={styles.navLink} to="/home">
            <button>H O M E</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
