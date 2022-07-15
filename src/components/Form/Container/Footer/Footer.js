import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>Not a member?&nbsp;
                <a href='/'>Register</a>
            </p>
        </footer>
    )
}

export default Footer
