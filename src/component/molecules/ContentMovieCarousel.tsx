import React from 'react'
import img from '../../img/resim.png'

function ContentMovieCarousel() {
  return (
    <>
         <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Popüler <span>Filmler</span></h2>
                <div className="line-dec" style={{width: '150px'}}></div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-features owl-carousel">
                <div className="item">
                  <img src={img} alt="" />
                  <div className="down-content">
                    <h4>Digital Agency HTML Templates</h4>

                  </div>
                </div>
                <div className="item">
                  <img src={img} alt="" />
                  <div className="down-content">
                    <h4>Admin Dashboard CSS Templates</h4>
                  </div>
                </div>
                <div className="item">
                  <img src={img} alt="" />
                  <div className="down-content">
                    <h4>Best Responsive Website Layouts</h4>
                  </div>
                </div>
                <div className="item">
                  <img src={img} alt="" />
                  <div className="down-content">
                    <h4>HTML CSS Layouts for your websites</h4>
                  </div>
                </div>
                <div className="item">
                  <img src={img} alt="" />
                  <div className="down-content">
                    <h4>Bootstrap 5 Themes for Free</h4>
                  </div>
                </div>
                <div className="item">
                  <img src={img} alt="" />
                  <div className="down-content">
                    <h4>Mobile Friendly Website Layouts</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ContentMovieCarousel