import React from 'react'

import classes from '../Style/home.module.css'

import Layout from '../Layout/Layout'

const index = () => {
  return (
    <div>
      <Layout mode="1">
        <img src="/banner.png" className={classes.bannerimg} />
        <p className={classes.cont}>WELCOME TO TINKERHUB PCE</p>
        <p className={classes.cont}>
          TinkerHub campus community aims to improve the knowledge of the
          students who are interested in tech fields which helps them to build a
          better future
        </p>
      </Layout>
    </div>
  )
}

export default index
