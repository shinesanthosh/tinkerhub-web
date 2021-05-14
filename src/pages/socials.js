import React from 'react'
import Link from 'next/link'

import classes from '../Style/socials.module.css'
import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <div>
      <Layout mode="0" page="3">
        <div className={classes.cont}>
          <p className={classes.title}>OUR SOCIALS</p>
        </div>
      </Layout>
    </div>
  )
}

export default Events
