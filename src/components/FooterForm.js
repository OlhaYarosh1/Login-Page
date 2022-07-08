import React from 'react'

const FooterForm = () => {
  return (
    <form className='add-form'>
        <div className='form-control form-control-check'>
            <input type='checkbox' />
            <label>Remember me</label>
            <a href='/'>Forgot password?</a>
        </div>
        <input type='submit' value='SIGN IN' className='btn btn-block'/>
    </form>
  )
}

export default FooterForm
