import React from 'react'
import Link from 'next/link'

import Navi from '../components/Navi'
import Circles from '../components/Circles'

import classes from '../Style/about.module.css'
// import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <section className={classes.about}>
      <Navi />

      <p className={classes.title}>About us</p>
      <p className={classes.text}>
        Welcome to Tinkerhub PCE, Tinkerhub campus community aims to improve
        knowledge of the students who are interested in the tech field and
        helping them build a better future
      </p>
      <Circles />
      <a target="_blank" href="https://instagram.com/alan__v__john">
        <div className={classes.proContainer1}>
          <img src="profile/alan.jpeg" alt="its Alan" />
          <div>Alan</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/jayasurya_jayandan">
        <div className={classes.proContainer2}>
          <img src="profile/jay.jpeg" alt="its Jayasurya" />
          <div>Jayasurya</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/aswin_anish_official">
        <div className={classes.proContainer3}>
          <img src="profile/aswin.jpeg" alt="its Aswin" />
          <div>Aswin</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/_fs0c131y_">
        <div className={classes.proContainer4}>
          <img src="profile/shine.jpeg" alt="its Shine" />
          <div>Shine</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/_jemimamathews_">
        <div className={classes.proContainer5}>
          <img src="profile/jemima.jpeg" alt="its Jemima" />
          <div>Jemima</div>
        </div>
      </a>
      <a target="_blank" href="https://instagram.com/_dayana_john_">
        <div className={classes.proContainer6}>
          <img src="profile/dayana.jpeg" alt="its Dayana" />
          <div>Dayana</div>
        </div>
      </a>

      <div className={classes.mobileNav}>
        <a href="/">
          <div className={classes.homeButton}>
            <img src="nav icons/home.png" alt="" />
          </div>
        </a>
        <a href="/about">
          <div className={classes.aboutButton}>
            <img src="nav icons/about.png" alt="" />
          </div>
        </a>
        <a href="/events">
          <div className={classes.eventButton}>
            <img src="nav icons/event.png" alt="" />
          </div>
        </a>
        <a href="/socials">
          <div className={classes.socialButton}>
            <img src="nav icons/social.png" alt="" />
          </div>
        </a>
      </div>

      <a href="/">
        <div className={classes.homeMain}>
          <img src="nav icons/home.png" />
        </div>
      </a>
    </section>
  )
}

export default Events
