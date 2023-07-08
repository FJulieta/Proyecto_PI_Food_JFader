import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.all}>
      <div className={styles.containerLeftLanding}>
        <div className={styles.containerImgLandingpage}>
          <img className={styles.imgLandingPage} src="/bg2.jpg" alt="img-landing" />
        </div>
      </div>

      <div className={styles.containerRigthLanding}>
        <div className={styles.containerText}>
          <h2>APP FOOD</h2>
          <p>
            AQUÍ ENCONTRARÁS TODO LO QUE NECESITAS PARA SORPRENDER A TUS SERES QUERIDOS. TAMBIÉN ENCONTRARÁS RECETAS,
            TIPS CULINARIOS, RECETAS SEGÚN TUS PREFERENCIAS DIETARIAS Y MUCHO MÁS.
          </p>
        </div>
        <div className={styles.content}>
          <NavLink className={styles.navLink} to="/home">
            <button>Explorar Recetas</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
