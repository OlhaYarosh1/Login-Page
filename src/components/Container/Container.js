import React from 'react'
import Checkbox from './Checkbox/Checkbox'
import RegistrationLink from './Link/RegistrationLink'
import Input from './Input/Input'
import classes from './Container.module.css'

const Container = () => {
    return (
        <div className={classes.container}>
            <Input title={'Email address'} type={'text'} widthL={'8px'} widthR={'316px'}/>
            <Input title={'Password'} type={'password'} widthL={'8px'} widthR={'348px'}/>
            <Checkbox/>
            <RegistrationLink/>
        </div>
    )
}

export default Container
