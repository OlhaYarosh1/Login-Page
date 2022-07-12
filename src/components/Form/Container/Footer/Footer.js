import React from 'react'
import FooterCSS from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={FooterCSS.footer}>
      <p>Not a member?&nbsp;
        <a href='/'>Register</a>
      </p>
    </footer>
  )
}

export default Footer
