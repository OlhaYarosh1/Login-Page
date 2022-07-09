import React from 'react'
import FooterForm from './FooterForm'
import Input from './Input'
import InputForEmail from './InputForEmail'
import Footer from './Footer'

const Container = () => {
  return (
    <div className='container'>
      <InputForEmail/>
      <Input/>
      <FooterForm/>
      <Footer/>
    </div>
  )
}

export default Container
