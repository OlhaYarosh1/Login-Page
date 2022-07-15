import React from 'react'
import Checkbox from './Checkbox/Checkbox'
import RegistrationLink from './Link/RegistrationLink'
import Input from './Input/Input'
import classes from './Container.module.css'

const Container = () => {
    return (
        <div className={classes.container}>
            <Input title={'Email address'} type={'text'} width={'200%'}/>
            <Input title={'Password'} type={'password'}/>
            <Checkbox/>
            <RegistrationLink/>
        </div>
    )
}

export default Container
