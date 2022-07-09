import React from 'react'

const FooterForm = () => {
  return (
    <div>
      <div className='form-control-check'>
        <input type='checkbox' />
        <label>Remember me</label>
        <a href='/'>Forgot password?</a>
      </div>
      <input type='submit' value='SIGN IN' className='btn btn-block'/>
    </div>
  )
}

export default FooterForm
