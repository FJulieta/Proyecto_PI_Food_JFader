import React from 'react'
import { Link } from 'react-router-dom'

import s from './Footer.module.css'

function Footer() {
  return (
    <section className={s.footerContainer}>
      <div className={s.footer}>
        <p className={s.footDescription}>
          This Application was made by Juliteta Fader - 2023. All rights reserved. If you want to know more, I invite
          you to click on the About button.{' '}
        </p>
        <Link to="/about">
          <button className={s.aboutButton}>About</button>
        </Link>
      </div>
    </section>
  )
}

export default Footer
