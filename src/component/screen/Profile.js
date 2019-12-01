import React, {Fragment}from 'react'
import Wrapper from '../wrapper/Wrapper'
class Profile extends React.Component {
  render () {
    return (
      <Fragment>
        <Wrapper>
      <div className="bg-image bg-image-bottom" style={{backgroundImage: 'url("assets/media/photos/photo13@2x.jpg")', marginTop : 60}}>
      <div className="bg-primary-dark-op py-30">
        <div className="content content-full text-center">
          <div className="mb-15">
            <a className="img-link" href="be_pages_generic_profile.html">
              <img className="img-avatar img-avatar96 img-avatar-thumb" src="assets/media/avatars/avatar15.jpg" alt="" />
            </a>
          </div>
          <h1 className="h3 text-white font-w700 mb-10">John Smith</h1>
          <h2 className="h5 text-white-op">
            Product Manager <a className="text-primary-light" href="javascript:void(0)">@GraphicXspace</a>
          </h2>}
          <button type="button" className="btn btn-rounded btn-hero btn-sm btn-primary mb-5">
            <i className="fa fa-github mr-2" /> Github
          </button>
    
          {/* END Actions */}
        </div>
      </div>
      </div>
   
      <div className="row mr-auto" style={{marginLeft : 120}}>
      <form action="be_pages_crypto_settings.html" method="post" onsubmit="return false;">
        <h2 className="content-heading text-black">Personal Details</h2>
        <div className="row items-push mx-auto">
          <div className="col-lg-4">
            <p className="text-muted">
              Your personal information is never shown to other users.
            </p>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="form-group row">
              <div className="col-6">
                <label htmlFor="crypto-settings-firstname">Firstname</label>
                <input type="text" className="form-control form-control-lg" id="crypto-settings-firstname" name="crypto-settings-firstname" defaultValue="John" disabled />
              </div>
              <div className="col-6">
                <label htmlFor="crypto-settings-lastname">Lastname</label>
                <input type="text" className="form-control form-control-lg" id="crypto-settings-lastname" name="crypto-settings-lastname" defaultValue="Smith" disabled />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <label htmlFor="crypto-settings-street-1">Street Address 1</label>
                <input type="text" className="form-control form-control-lg" id="crypto-settings-street-1" name="crypto-settings-street-1" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <label htmlFor="crypto-settings-street-2">Street Address 2</label>
                <input type="text" className="form-control form-control-lg" id="crypto-settings-street-2" name="crypto-settings-street-2" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <label htmlFor="crypto-settings-city">City</label>
                <input type="text" className="form-control form-control-lg" id="crypto-settings-city" name="crypto-settings-city" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6">
                <label htmlFor="crypto-settings-postal">Postal code</label>
                <input type="text" className="form-control form-control-lg" id="crypto-settings-postal" name="crypto-settings-postal" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <button type="submit" className="btn btn-alt-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
      </Wrapper>
      </Fragment>
    
    )
  }
}
export default Profile
