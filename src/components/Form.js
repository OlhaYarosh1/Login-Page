const Form = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
          <div><input type='text' required/>
            <div className='email' for=''>Email address</div>
          </div>
        </div>
        <div className='form-control'>
          <div><input type='password' />
            <div className='password' for=''>Password</div>
          </div>
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
