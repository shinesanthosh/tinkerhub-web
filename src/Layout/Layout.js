import React from 'react'
import classes from '../Style/layout.module.css'
import Navi from '../components/Navi'

const Layout = (props) => {
  if (props.mode == '1') {
    return (
      <div className={classes.layoutcont}>
        <div className={[classes.datacont, classes.rightal].join(' ')}>
          {props.children}
        </div>
        <div className={[classes.navcont, classes.leftal].join(' ')}>
          <Navi mode={props.mode} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={classes.layoutcont}>
        <div className={[classes.datacont, classes.leftal].join(' ')}>
          {props.children}
        </div>
        <div className={[classes.navcont, classes.rightal].join(' ')}>
          <Navi mode={props.mode} page={props.page} />
        </div>
      </div>
    )
  }
}

export default Layout
