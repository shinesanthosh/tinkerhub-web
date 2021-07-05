import React from 'react'
import Link from 'next/link'

import Navi from '../components/Navi'
import Circles from '../components/Circles'
import MobileNav from '../components/MobileNav'
import SEO from '../components/SEO'

import classes from '../Style/social.module.css'

const Events = () => {
  const alertFun = () => {
    alert('Discord Link will be added soon!')
  }

  return (
    <section className={classes.socials}>
      <SEO
        title="Socials"
        description="Tinkerhub Providence College of Engineering, Chengannur"
      />
      <div className={classes.overlay}></div>
      <Navi className={classes.nav} />
      <Circles />

      <div className={classes.socialDiv}>
        <div className={classes.shead}>
          <p>Our Socials</p>
        </div>
        <div className={classes.sbody}>
          <a target="_blank" href="https://instagram.com/tinkerhub.pce">
            <img src="social/insta.png" alt="instagram" />
          </a>
          <a target="_blank" href="https://twitter.com/tinkerhub_pce">
            <img src="social/twitter.png" alt="Twitter" />
          </a>
          <a onClick={alertFun}>
            <img src="social/discord.png" alt="Discord" />
          </a>
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
