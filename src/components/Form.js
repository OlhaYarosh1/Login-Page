const Form = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <input type='text' required/>
              <label className='email' for=''>Email address</label>
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
