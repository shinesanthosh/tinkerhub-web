import React, { useState } from 'react'

import classes from '../Style/form.module.css'

const Inp = props => {
  return (
    <div className = {classes.genDiv} hidden={props.hidden}>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.changeHandler}
        value={props.value}
        placeholder={props.placeholder}
        className={classes.genInp}
      />
    </div>
  )
}
export default Inp
