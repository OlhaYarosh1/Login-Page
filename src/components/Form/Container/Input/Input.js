import React from 'react'

const Input = ({title,type}) => {
  return (
    <div className='box'>
      <div className='grayBorder'>        
        <input className='input' type={type}></input>
      </div>
      <div className='blueBorder'></div>
      <div className='placeholder'>{title}</div>
    </div>
  )
}

export default Input
