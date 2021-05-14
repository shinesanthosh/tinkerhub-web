import React from 'react'
import Link from 'next/link'

import classes from '../Style/materials.module.css'
import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <div>
      <Layout mode="0" page="2">
        <div className={classes.cont}>
          <p className={classes.title}>AVAILABLE MATERIALS</p>
          <ul className={classes.list}>
            <li>
              Python
              <Link href="#">
                <a>DOWNLOAD</a>
              </Link>
            </li>
            <li>
              JavaScript
              <Link href="#">
                <a>DOWNLOAD</a>
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default Events
