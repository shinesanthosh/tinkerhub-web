import React, { useState } from 'react'

import classes from '../Style/form.module.css'

const Inp = props => {
  return (
    <div hidden={props.hidden}>
      <label>{props.label}</label>
      <input className = {classes.inpBox}
        type={props.type}
        name={props.name}
        onChange={props.changeHandler}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  )
}
export default Inp
