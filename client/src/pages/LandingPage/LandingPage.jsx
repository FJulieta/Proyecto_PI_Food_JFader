import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={s.all}>
      <div className={`${s.containerImgLandingpage} ${s.landingImageContainer}`}>
        <img className={s.imgLandingPage} src="/picFood.jpg" alt="img-landing" />
      </div>

      <div className={s.containerRigthLanding}>
        <div className={s.containerText}>
          <h2>SPICY FOOD</h2>
          <p>BIENVENIDO A SPICY FOOD</p>
          <p>UNA NUEVA FORMA DE APRECIAR LA GASTRONOMÍA</p>
        </div>
        <div className={s.content}>
          <NavLink className={s.navLink} to="/home">
            <button>H O M E</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
