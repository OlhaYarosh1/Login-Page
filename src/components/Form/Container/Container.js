import React from 'react'
import Checkbox from './Checkbox/Checkbox'
import RegistrationLink from './Footer/RegistrationLink'
import Input from './Input/Input'
import classes from './Container.module.css'

const Container = () => {
    return (
        <div className={classes.container}>
            <Input title={'Email address'} type={'text'}/>
            <Input title={'Password'} type={'password'}/>
            <Checkbox/>
            <RegistrationLink/>
        </div>
    )
}

export default Container
