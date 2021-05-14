import React from 'react'
import Link from 'next/link'

import classes from '../Style/events.module.css'
import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <div>
      <Layout mode="0" page="1">
        <div className={classes.cont}>
          <p className={classes.title}>UPCOMING</p>
          <ul className={classes.list}>
            <li>
              10 Days of Python
              <Link href="#">
                <a>REGISTER</a>
              </Link>
            </li>
            <li>
              How to Git?
              <Link href="#">
                <a>REGISTER</a>
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default Events
