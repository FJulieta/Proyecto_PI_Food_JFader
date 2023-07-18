import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './About.module.css'

export default function About() {
  return (
    <div className={s.allAbout}>
      <img className={s.imagePerfil} src="/About.jpg" alt="img-About" />

      <NavLink to="/home">
        <button className={s.backButton}>Back</button>
      </NavLink>
      <div className={s.containerPresentation}>
        <div className={s.subcardColumRight}>
          <p className={s.textCenterP1}>Welcome to the Spicy Food application!</p>
          <p className={s.textCenterP2}>
            This application was made with the Spoonacular API, using React, Redux, Node.js, JavaScript, CSS
            technologies.
          </p>
          <h2 className={s.fontH2}>KNOW MORE ABOUT ME</h2>

          <div className={s.buttonContainer}>
            <button className={s.ButtonLinkedin}>
              <a href="https://www.linkedin.com/in/julieta-fader-13a8a3206/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedinImage.jpg" className={s.iconImageLinkedin} />
              </a>
            </button>

            <button className={s.ButtonGitHub}>
              <a href="https://github.com/FJulieta" target="_blank" rel="noopener noreferrer">
                <img src="/imageGitHub.png" className={s.iconImageGitHub} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
