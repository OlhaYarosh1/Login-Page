const Form = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <div className='grayBorder' tabIndex='0'>
              <input className='emailInputTop' type='text'></input>
            </div>
            <input className='emailInputBottom' type='text'></input>
            <div className='blueBorder' tabIndex='0'></div>  
            <div className='placeholder'>Email address</div>   
        </div>
        <div className='form-control'> 
          <div className='grayBorderPass' tabIndex='0'>
            <input className='passwordInputTop' type='password' />
          </div>
          <input className='passwordInputBottom' type='password'></input>
          <div className='blueBorderPass' tabIndex='0'></div>  
          <div className='placeholderPass'>Password</div>
        </div>        
    </form>
  )
}

export default Form
