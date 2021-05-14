import React from 'react'
import classes from '../Style/events.module.css'
import Layout from '../Layout/Layout'

const Events = () => {
  return (
    <div>
      <Layout mode="0" page="1">
        <div className={classes.cont}>
          <p className={classes.title}>UPCOMING</p>
        </div>
      </Layout>
    </div>
  )
}

export default Events
