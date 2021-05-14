import React from 'react'
import Link from 'next/link'

import classes from '../Style/navi.module.css'

const Navi = (props) => {
  if (props.mode == '1') {
    return (
      <div>
        <div className={classes.navbox}>
          <Link href="/events">
            <a>EVENTS</a>
          </Link>
          <Link href="#">
            <a>MATERIALS</a>
          </Link>
          <Link href="#">
            <a>SOCIAL</a>
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className={classes.navbox2}>
          <Link href="/events">
            <a>EVENTS</a>
          </Link>
          <Link href="#">
            <a>MATERIALS</a>
          </Link>
          <Link href="#">
            <a>SOCIAL</a>
          </Link>
        </div>
      </div>
    )
  }
}

Navi.propTypes = {}

export default Navi
