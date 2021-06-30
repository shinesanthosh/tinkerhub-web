import React from 'react'

import Link from 'next/link'

import classes from '../Style/event.module.css'

const Event = (props) => {
  let buttons = []

  props.links.forEach((element, key) => {
    buttons.push(
      <Link href={element.url} key={key}>
        <button
          className={
            element.type == 'reg' ? classes.register : classes.materials
          }
        >
          {element.name}
        </button>
      </Link>
    )
  })

  return (
    <div className={classes.event0}>
      <p> - {props.name}</p>
      {buttons}
    </div>
  )
}

export default Event
