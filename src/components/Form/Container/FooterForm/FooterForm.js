import React from 'react'
import FooterFormCSS from './FooterForm.module.css'

const FooterForm = () => {
  return (
    <div>
      <div className={FooterFormCSS.formControlCheck}>
        <input type='checkbox' />
        <label>Remember me</label>
        <a href='/'>Forgot password?</a>
      </div>
      <input type='submit' value='SIGN IN' className={FooterFormCSS.btn}/>
    </div>
  )
}

export default FooterForm
