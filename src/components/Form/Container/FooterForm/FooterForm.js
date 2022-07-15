import React from 'react'
import classes from './FooterForm.module.css'

const FooterForm = () => {
    return (
        <div>
            <div className={classes.formControlCheck}>
                <input type='checkbox'/>
                <label>Remember me</label>
                <a href='/'>Forgot password?</a>
            </div>
            <input type='submit' value='SIGN IN' className={classes.btn}/>
        </div>
    )
}

export default FooterForm
