import React from 'react'
import Link from 'next/link'

import classes from '../Style/about.module.css'

const MobileNav = (props) => {
  return (
    <div className={props.className}>
      <Link href="/">
        <a>
          <div className={classes.homeButton}>
            <img src="nav icons/home.png" alt="" />
          </div>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <div className={classes.aboutButton}>
            <img src="nav icons/about.png" alt="" />
          </div>
        </a>
      </Link>
      <Link href="/events">
        <a>
          <div className={classes.eventButton}>
            <img src="nav icons/event.png" alt="" />
          </div>
        </a>
      </Link>
      <Link href="/socials">
        <a>
          <div className={classes.socialButton}>
            <img src="nav icons/social.png" alt="" />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default MobileNav
