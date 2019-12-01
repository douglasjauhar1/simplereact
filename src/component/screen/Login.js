import React from 'react'
import Wrapper from '../wrapper/Wrapper'
class Login extends React.Component {
  render () {
    return (
      <Wrapper>
      
        <div className='hero-static content content-full bg-white animated fadeIn' data-toggle='appear'>
          {/* Header */}
          <div className='py-30 px-5 text-center'>
            <h1 className='h2 font-w700 mt-50 mb-10'>Welcome to Myhire</h1>
            <h2 className='h4 font-w400 text-muted mb-0'>Please sign in</h2>
          </div>
          {/* END Header */}
          {/* Sign In Form */}
          <div className='row justify-content-center px-5'>
            <div className='col-sm-8 col-md-6 col-xl-4'>
              {/* jQuery Validation functionality is initialized with .js-validation-signin class in js/pages/op_auth_signin.min.js which was auto compiled from _es6/pages/op_auth_signin.js */}
              {/* For more examples you can check out https://github.com/jzaefferer/jquery-validation */}
              <form className='js-validation-signin' action='be_pages_auth_all.html' method='post'>
                <div className='form-group row'>
                  <div className='col-12'>
                    <div className='form-material floating'>
                      <input type='text' className='form-control' id='login-username' name='login-username' />
                      <label htmlFor='login-username'>Username</label>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-12'>
                    <div className='form-material floating'>
                      <input type='password' className='form-control' id='login-password' name='login-password' />
                      <label htmlFor='login-password'>Password</label>
                    </div>
                  </div>
                </div>
                <div className='form-group row gutters-tiny'>
                  <div className='col-12 mb-10'>
                    <button type='submit' className='btn btn-block btn-hero btn-noborder btn-rounded btn-alt-primary'>
                      <i className='si si-login mr-10' /> Sign In
                    </button>
                  </div>
                  <div className='col-sm-6 mb-5'>
                    <a className='btn btn-block btn-noborder btn-rounded btn-alt-secondary' href='op_auth_signup.html'>
                      <i className='fa fa-plus text-muted mr-2' /> New Account
                    </a>
                  </div>
                  <div className='col-sm-6 mb-5'>
                    <a className='btn btn-block btn-noborder btn-rounded btn-alt-secondary' href='op_auth_reminder.html'>
                      <i className='fa fa-warning text-muted mr-2' /> Forgot password
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* END Sign In Form */}
        </div>
      </Wrapper>

    )
  }
}
export default Login/*  */
