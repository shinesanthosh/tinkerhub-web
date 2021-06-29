import React from 'react'
import Navi from '../components/Navi'
import Circles from '../components/Circles'

import classes from '../Style/home.module.css'

const index = () => {
  return (
    <section className={classes.home}>
      <Navi />

      <img
        src="TinkerHub_PCE Chengannur.png"
        alt="Logo :)"
        className={classes.logo}
      />

      <Circles />

      <div className={classes.footer}>©Tinkerhub PCE 2021</div>
    </section>
  )
}

export default index
