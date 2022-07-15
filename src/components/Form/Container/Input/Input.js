import React from 'react'
import classes from './Input.module.css'

const Input = ({title,type}) => {
    return (
        <div className={classes.box}>
            <input className={classes.input} type={type} required></input>
            <div className={classes.grayBorder}></div>
            <div className={classes.blueBorder}></div>
            <div className={classes.placeholder} >{title}</div>
        </div>
    )
}

export default Input
