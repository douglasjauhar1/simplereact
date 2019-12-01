import React from 'react'
import Wrapper from '../wrapper/Wrapper'
class Card extends React.Component {
  render () {
    return (
     <Wrapper>
       <div className="container">
       <div className="row bg-primary" style={{marginTop : 100}}>
      <div className='col-lg-3 animated fadeIn' data-toggle='appear'>
        {/* Property */}
        <div className='block block-rounded'>
          <div className='block-content p-0 overflow-hidden'>
            <a className='img-link' href='be_pages_real_estate_listing.html'>
              <img className='img-fluid rounded-top' src='assets/media/photos/photo35.jpg' alt='' />
            </a>
          </div>
          <div className='block-content bg-light'>
            <h4 className='font-size-h5 '>Muhammad Jauhar</h4>
            <h4 className='font-size-h5 '>Web Designer</h4>
            <p className='text-muted'>
              <i className='fa fa-map-pin mr-2' /> Jakarta, Indonesia
            </p>
          </div>
          <div className='block-content mb-5'>
            <div className='row'>
              <div className='col-6'>
                <p>
                  <i className='fa fa-fw fa-star text-muted mr-2 ' />
                  <strong>Rate</strong>
                </p>
                <strong>90% Project done</strong>
              </div>
              <div className='col-6'>
                <p>
                  <i className='fa fa-fw fa-cogs text-muted mr-2' />
                  <strong>Skills</strong>
                </p>
                <strong>PHP, HTML, CSS, JS</strong>
              </div>
            </div>
          </div>
          <div className='block-content'>
            <div className='row' style={{ marginTop: -60 }}>
              <div className='col-6'>
                <a className='btn btn-sm btn-hero btn-noborder btn-secondary btn-block' href='be_pages_real_estate_listing.html'>
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END Property */}
      </div>
      </div>
      </div>
      </Wrapper>
     

    )
  }
}
export default Card/*  */
