import React from 'react'
import FooterForm from './FooterForm/FooterForm'
import Footer from './Footer/Footer'
import Input from './Input/Input'
import classes from './Container.module.css'

const Container = () => {
    return (
        <div className={classes.container}>
            <Input title={'Email address'} type={'text'}/>
            <Input title={'Password'} type={'password'}/>
            <FooterForm/>
            <Footer/>
        </div>
    )
}

export default Container
