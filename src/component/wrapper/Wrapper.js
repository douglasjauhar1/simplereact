import React from 'react'
import Appheader from './Appheader'

class Wrapper extends React.Component {
  render () {
    return (
      <div id='page-container' className='sidebar-inverse side-scroll page-header-fixed page-header-inverse main-content-boxed'>
        <Appheader />
        {/* <main id='main-container'>
          {this.props.children}
          <div className='container bg-light'>
            <div className='row bg-light'>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <Login />
          <Register />
          <Formengineer />
          <Formcompany />
          <Postproject/>
          <Profile/>
        </main> */}
        {/* <AppFooter />
        <ModalLogout

        /> */}
           {this.props.children}
      </div>
    )
  }
}
export default Wrapper
