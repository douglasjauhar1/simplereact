import React from 'react'
import {Link} from 'react-router-dom'
class Register extends React.Component {
  render () {
    return (
      <div className='bg-primary-light'>
        <div className='hero-static content content-full animated fadeIn' data-toggle='appear'>
          {/* Header */}
          <div className="card col-lg-6 mx-auto pb-5">
          <div className='py-30 px-5 text-center'>
            <h1 className='h2 font-w700 mt-50 mb-10'>Create New Account</h1>
            <h2 className='h4 font-w400 text-muted mb-0'>Please add your details</h2>
          </div>
          <div className='row justify-content-center px-5'>
            <div className='col-lg-12'>
              <form className='js-validation-signup ' action='be_pages_auth_all.html' method='post'>
                <div className='form-group row'>
                  <div className='col-12'>
                    <div className='form-material floating'>
                      <input type='text' className='form-control' id='signup-username' name='signup-username' />
                      <label htmlFor='signup-username'>Username</label>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-12'>
                    <div className='form-material floating'>
                      <input type='email' className='form-control' id='signup-email' name='signup-email' />
                      <label htmlFor='signup-email'>Email</label>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-12'>
                    <div className='form-material floating'>
                      <input type='password' className='form-control' id='signup-password' name='signup-password' />
                      <label htmlFor='signup-password'>Password</label>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-12'>
                    <div className='form-material floating'>
                      <input type='password' className='form-control' id='signup-password-confirm' name='signup-password-confirm' />
                      <label htmlFor='signup-password-confirm'>Password Confirmation</label>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-12'>
                    <div className='form-material floating'>
                     <select className="form-control" id='signup-password-confirm'>
                       <option value="0">Register as</option>
                       <option value="1">Software engineer</option>
                       <option value="2">Company</option>
                     </select>
                    </div>
                  </div>
                </div>
                <div className='form-group row text-center' />
                <div className='form-group row gutters-tiny'>
                  <div className='col-12 mb-10'>
                    <button type='submit' className='btn btn-block btn-hero btn-noborder btn-rounded btn-success'>
                      <i className='si si-user-follow mr-2' /> Sign Up
                    </button>
                  </div>
                  <div className='col-6'>
                    <Link to={'/'} className='btn btn-block btn-noborder btn-rounded btn-secondary'data-toggle='modal' data-target='#modal-terms'>
                      <i className='si si-book-open text-muted mr-2' /> Home
                    </Link>
                  </div>
                  <div className='col-6'>
                    <a className='btn btn-block btn-noborder btn-rounded btn-secondary' href='op_auth_signin.html'>
                      <i className='si si-login text-muted mr-2' /> Sign In
                    </a>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
         
        </div>
      </div>
    )
  }
}
export default Register
