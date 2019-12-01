import React from 'react'
import {Link} from 'react-router-dom'
class Appheader extends React.Component {
  render () {
    return (
      <header id='page-header' className='bg-primary-light
      '>
        <div className='content-header'>
          <div className='content-header-section'>
            <div className='content-header-item'>
              <Link to={'/'} className='link-effect font-w700' to='/'>
                <img className='mr-4' alt='Logo' width={51} src='' />
                <span className='font-size-xl text-dual-primary-dark'>MyHire</span>
              </Link>
    
   
            </div>
          </div>
          <div className='content-header-section'>
            <Link to={'/login'} className='btn btn-light min-width-125 mr-2'>Login</Link>
            <Link to={'/register'} className='btn btn-outline-primary min-width-125'>Register</Link>
            
            
            <div className="btn-group" role="group">
        <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-user d-sm-none" />
          <span className="d-none d-sm-inline-block">J. Smith</span>
          <i className="fa fa-angle-down ml-5" />
        </button>
        <div className="dropdown-menu dropdown-menu-right min-width-200" aria-labelledby="page-header-user-dropdown">
          <Link to={'/profile'} className="dropdown-item">
            <i className="si si-user mr-5" /> Profile
          </Link>
          <div className="dropdown-divider" />
          {/* Toggle Side Overlay */}
          {/* Layout API, functionality initialized in Template._uiApiLayout() */}
          <Link to={'/formengineer'} className="dropdown-item"data-toggle="layout" data-action="side_overlay_toggle">
            <i className="si si-wrench mr-5" /> Settings
          </Link>
          {/* END Side Overlay */}
          <div className="dropdown-divider" />
          <Link to={'/login'} className="dropdown-item" >
            <i className="si si-logout mr-5" />Sign Out
          </Link>
        </div>
      </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Appheader
