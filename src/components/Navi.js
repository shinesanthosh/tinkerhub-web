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
          <Link href="/materials">
            <a>MATERIALS</a>
          </Link>
          <Link href="/socials">
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
            <a
              className={
                props.page == '1'
                  ? [classes.crpage, classes.nr].join(' ')
                  : classes.nr
              }
            >
              EVENTS
            </a>
          </Link>
          <Link href="/materials">
            <a
              className={
                props.page == '2'
                  ? [classes.crpage, classes.nr].join(' ')
                  : classes.nr
              }
            >
              MATERIALS
            </a>
          </Link>
          <Link href="/socials">
            <a
              className={
                props.page == '3'
                  ? [classes.crpage, classes.nr].join(' ')
                  : classes.nr
              }
            >
              SOCIAL
            </a>
          </Link>
        </div>
      </div>
    )
  }
}

Navi.propTypes = {}

export default Navi
