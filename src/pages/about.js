import React from 'react'
import Link from 'next/link'

import classes from '../Style/about.module.css'
// import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <section class={classes.about}>
      <div class={classes.overlay}></div>
      <div class={classes.nav}>
        <a class={classes.link} href="/">Home</a>
        <a class={classes.link} href="/about">About</a>
        <a class={classes.link} href="/events">Events</a>
        <a class={classes.link} href="/socials">Social</a>
      </div>
      <p class={classes.title}>About us</p>
      <p class={classes.text}>
        Welcome to Tinkerhub PCE, Tinkerhub campus community aims to improve
        knowledge of the students who are interested in the tech field and
        helping them build a better future
      </p>
      <div class={classes.yellowCircle}></div>
      <div class={classes.greenCircle}></div>
      <div class={classes.redCircle}></div>
      <a target="_blank" href="https://instagram.com/alan__v__john">
        <div class={classes.proContainer1}>
          <img src="profile/alan.jpeg" alt="its Alan" />
          <div>Alan</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/jayasurya_jayandan">
        <div class={classes.proContainer2}>
          <img src="profile/jay.jpeg" alt="its Jayasurya" />
          <div>Jayasurya</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/aswin_anish_official">
        <div class={classes.proContainer3}>
          <img src="profile/aswin.jpeg" alt="its Aswin" />
          <div>Aswin</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/_fs0c131y_">
        <div class={classes.proContainer4}>
          <img src="profile/shine.jpeg" alt="its Shine" />
          <div>Shine</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/_jemimamathews_">
        <div class={classes.proContainer5}>
          <img src="profile/jemima.jpeg" alt="its Jemima" />
          <div>Jemima</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/_dayana_john_">
        <div class={classes.proContainer6}>
          <img src="profile/dayana.jpeg" alt="its Dayana" />
          <div>Dayana</div>
        </div>
      </a>

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
