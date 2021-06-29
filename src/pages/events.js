import React from 'react'
import Link from 'next/link'

import Navi from '../components/Navi'
import Circles from '../components/Circles'

import classes from '../Style/event.module.css'

const Events = () => {
  return (
    <section class={classes.event}>
      <Navi />

      <Circles />

      <div class={classes.glass}>
        <div class={classes.head}>Events</div>
        <div class={classes.eventLists}>
          <div class={classes.event0}>
            <p> - Introduction to version control</p>
            <button class={classes.register}>Watch</button>
            <button class={classes.materials}>Get Materials</button>
          </div>
          <div class={classes.event0}>
            <p> - Python3 Bootcamp</p>
            <button class={classes.register}>Register</button>
            <button class={classes.materials}>Get Materials</button>
          </div>
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

      <a href="/">
        <div class={classes.homeMain}>
          <img src="nav icons/home.png" />
        </div>
      </a>
    </section>
  )
}

export default Events
