import React from 'react'
import classes from '../Style/home.module.css'

import Link from 'next/link'

import Layout from '../Layout/Layout'
import Navi from '../components/Navi'
const Notfound = () => {
  return (
    <section className={classes.home}>
      <div className={classes.overlay}></div>
      <Navi className={classes.nav} />

      <h3>Oops seems like that page doesn't exist</h3>

      <div className={classes.yellowCircle}></div>
      <div className={classes.greenCircle}></div>
      <div className={classes.redCircle}></div>

      <div className={classes.footer}>©Tinkerhub PCE 2021</div>
    </section>
  )
}

export default Notfound
