import React from 'react'
import Link from 'next/link'

import Navi from '../components/Navi'
import Circles from '../components/Circles'
import MobileNav from '../components/MobileNav'
import SEO from '../components/SEO'

import classes from '../Style/about.module.css'
// import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <section className={classes.about}>
      <SEO
        title="About"
        description="Tinkerhub Providence College of Engineering, Chengannur"
      />
      <div className={classes.overlay}></div>
      <Navi className={classes.nav} />

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
