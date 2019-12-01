import React from 'react'
import Wrapper from '../wrapper/Wrapper'
class Formengineer extends React.Component {
  render () {
    return (
      <Wrapper>
      <div className='row'>
        <div className='col-lg-8 mx-auto'>
          <div className='block block-themed'>
            <div className='block-header bg-info'>
              <h3 className='block-title'>Register as engineer</h3>
              <div className='block-options'>
                <button type='button' className='btn-block-option' data-toggle='block-option' data-action='state_toggle' data-action-mode='demo'>
                  <i className='si si-refresh' />
                </button>
                <button type='button' className='btn-block-option' data-toggle='block-option' data-action='content_toggle' />
              </div>
            </div>
            <div className='block-content'>
              <form action='be_forms_premade.html' method='post' onsubmit='return false;'>
                <div className='form-group row bf-light'>
                  <div className='col-12'>
                    <label htmlFor='contact1-firstname'>Name</label>
                    <input type='text' className='form-control' id='contact1-firstname' name='contact1-firstname' placeholder='Enter your Name..' />
                  </div>
                  <div className='col-12 mt-2'>
                    <label htmlFor='contact1-subject'>Gender</label>
                    <select className='form-control' id='contact1-subject' name='contact1-subject' size={1}>
                      <option value={1}>Select Gender</option>
                      <option value={2}>Male</option>
                      <option value={3}>Female</option>
                    </select>
                  </div>
                  <div className='col-12 mt-2'>
                    <label htmlFor='contact1-firstname'>Date of Birth</label>
                    <input type='date' className='form-control' id='contact1-firstname' name='contact1-firstname' />
                  </div>
                  <label className='col-12 mt-2' htmlFor='contact1-email'>Email</label>
                  <div className='col-12 '>
                    <div className='input-group'>
                      <input type='email' className='form-control' id='contact1-email' name='contact1-email' placeholder='Enter your email..' />
                      <div className='input-group-append'>
                        <span className='input-group-text'>
                          <i className='fa fa-envelope-o' />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 mt-2'>
                    <label htmlFor='contact1-firstname'>Phone Number</label>
                    <input type='number' className='form-control' id='contact1-firstname' name='contact1-firstname' placeholder='Enter your phone number..' />
                  </div>
                  <div className='col-12 mt-2'>
                    <label htmlFor='contact1-firstname'>Location</label>
                    <input type='text' className='form-control' id='contact1-firstname' name='contact1-firstname' placeholder='Enter your Location..' />
                  </div>
                  <div className='col-12 mt-2'>
                    <label htmlFor='contact1-firstname'>Skills</label>
                    <input type='text' className='form-control' id='contact1-firstname' name='contact1-firstname' placeholder='Ex : Javascript, Python, Ruby....' />
                  </div>
                  <div className='col-12 mt-2'>
                    <label htmlFor='contact1-firstname'>Showcase</label>
                    <input type='text' className='form-control' id='contact1-firstname' name='contact1-firstname' placeholder='Your Link Github ..' />
                  </div>
                </div>
                <div className='form-group row'>
                  <label className='col-12' htmlFor='contact1-msg'>Description</label>
                  <div className='col-12'>
                    <textarea className='form-control' id='contact1-msg' name='contact1-msg' rows={7} placeholder='Let me know about you..' defaultValue='' />
                  </div>
                  <div className='col-12'>
                    <label className='col-12' htmlFor='contact1-msg'>Picture</label>
                    <input type='file' className='form-control' id='contact1-firstname' name='contact1-firstname' placeholder='Your Link Github ..' />
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-12'>
                    <button type='submit' className='btn btn-info'>
                      <i className='fa fa-send mr-2' /> Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
    )
  }
}
export default Formengineer
