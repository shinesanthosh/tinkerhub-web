import React from 'react'
import Link from 'next/link'
import classes from '../Style/home.module.css'

const Navi = (props) => {
  return (
    <div>
      <div className={classes.overlay}></div>
      <div className={classes.nav}>
        <Link href="/">
          <a className={classes.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={classes.link}>About</a>
        </Link>
        <Link href="/events">
          <a className={classes.link}>Events</a>
        </Link>
        <Link href="/socials">
          <a className={classes.link}>Social</a>
        </Link>
      </div>
    </div>
  )
}

Navi.propTypes = {}

export default Navi
