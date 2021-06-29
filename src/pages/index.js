import React from 'react'

import classes from '../Style/home.module.css'

import Link from 'next/link'

import Layout from '../Layout/Layout'

const index = () => {
  return (
    <section class={classes.home}>
      <div class={classes.overlay}></div>
      <div class={classes.nav}>
        <a class={classes.link} href="/">Home</a>
        <a class={classes.link} href="/about">About</a>
        <a class={classes.link} href="/events">Events</a>
        <a class={classes.link} href="/socials">Social</a>
      </div>

      <img
        src="TinkerHub_PCE Chengannur.png"
        alt="Logo :)"
        class={classes.logo}
      />

      <div class={classes.yellowCircle}></div>
      <div class={classes.greenCircle}></div>
      <div class={classes.redCircle}></div>

      <div class={classes.footer}>©Tinkerhub PCE 2021</div>
    </section>
  )
}

export default index
