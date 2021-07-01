import React from 'react'

import classes from '../Style/home.module.css'

import Navi from '../components/Navi'
import SEO from '../components/SEO'

const index = () => {
  return (
    <section className={classes.home}>
      <SEO
        title=""
        description="Tinkerhub Providence College of Engineering, Chengannur"
      />
      <div className={classes.overlay}></div>
      <Navi className={classes.nav} />

      <img
        src="TinkerHub_PCE Chengannur.png"
        alt="Logo :)"
        className={classes.logo}
      />

      <div className={classes.yellowCircle}></div>
      <div className={classes.greenCircle}></div>
      <div className={classes.redCircle}></div>

      <div className={classes.footer}>©Tinkerhub PCE 2021</div>
    </section>
  )
}

export default index
