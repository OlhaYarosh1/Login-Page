import { useState } from "react"
import PropTypes from 'prop-types'

const Form = () => {
    const [text, setText] = useState()
  return (
    <form className='add-form'>
        <div className='form-control'>
            <input type='text' placeholder='Email address'/>
        </div>
        <div className='form-control'>
            <input type='text' placeholder='Password'/>
        </div>
        <div className='form-control form-control-check'>
            <input type='checkbox' />
            <label>Remember me</label>
            <a href='/'>Forgot password?</a>
        </div>
        <input type='submit' value='SIGN IN' className='btn btn-block'/>
    </form>
  )
}

export default Form