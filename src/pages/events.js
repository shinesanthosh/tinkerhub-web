import React from 'react'
import Link from 'next/link'

import Navi from '../components/Navi'
import Circles from '../components/Circles'
import MobileNav from '../components/MobileNav'

import classes from '../Style/event.module.css'

const Events = () => {
  return (
    <section class={classes.event}>
      <div className={classes.overlay}></div>
      <Navi className={classes.nav} />

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

      <MobileNav className={classes.mobileNav} />
      <Link href="/">
        <a>
          <div className={classes.homeMain}>
            <img src="nav icons/home.png" />
          </div>
        </a>
      </Link>
    </section>
  )
}

export default Events
