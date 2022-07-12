import React from 'react'
import InputCSS from './Input.module.css'

const Input = ({title,type}) => {
  return (
    <div className={InputCSS.box}>
      <div className={InputCSS.grayBorder}>        
        <input className={InputCSS.input} type={type}></input>
      </div>
      <div className={InputCSS.blueBorder}></div>
      <div className={InputCSS.placeholder}>{title}</div>
    </div>
  )
}

export default Input
