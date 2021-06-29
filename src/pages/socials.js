import React from 'react'
import Link from 'next/link'


import classes from '../Style/social.module.css'
import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <section class={classes.socials}>
      <div class={classes.overlay}></div>
      <div class={classes.nav}>
        <a class={classes.link} href="/">Home</a>
        <a class={classes.link} href="/about">About</a>
        <a class={classes.link} href="/events">Events</a>
        <a class={classes.link} href="/socials">Social</a>
      </div>
      <div class={classes.yellowCircle}></div>
      <div class={classes.greenCircle}></div>
      <div class={classes.redCircle}></div>

      <div class={classes.socialDiv}>
        <div class={classes.shead}>
          <p>Our Socials</p>
        </div>
        <div class={classes.sbody}>
          <a target="_blank" href="https://instagram.com/tinkerhub.pce">
            <img src="social/insta.png" alt="instagram" />
          </a>
          <a target="_blank" href="https://twitter.com/tinkerhub_pce">
            <img src="social/twitter.png" alt="Twitter" />
          </a>
          <a href="https://discord.gg/Hc8XMqwpcM">
            <img src="social/discord.png" alt="Discord" />
          </a>
        </div>
      </div>

      <div class={classes.mobileNav}>
        <a href="/">
          <div class={classes.homeButton}>
            <img src="nav icons/home.png" alt="" />
          </div>
        </a>
        <a href="/about">
          <div class={classes.aboutButton}>
            <img src="nav icons/about.png" alt="" />
          </div>
        </a>
        <a href="/events">
          <div class={classes.eventButton}>
            <img src="nav icons/event.png" alt="" />
          </div>
        </a>
        <a href="/socials">
          <div class={classes.socialButton}>
            <img src="nav icons/social.png" alt="" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Events
