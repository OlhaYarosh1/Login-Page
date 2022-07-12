import React from 'react'
import FooterForm from './FooterForm'
import Footer from './Footer'
import Input from './Input/Input'

const Container = () => {
  return (
    <div className='container'>
      <Input title={'Email address'} type={'text'}/>
      <Input title={'Password'} type={'password'} />
      <FooterForm/>
      <Footer/>
    </div>
  )
}

export default Container
