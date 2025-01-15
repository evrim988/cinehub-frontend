import React from 'react'

function HomePage() {

  return (
    <>

      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
                  <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">

                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" style={{ maxWidth: '112px' }} />
                </a>

                <ul className="nav">
                 
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>

              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>Dive <em>Into The SEO</em> World <span>With Tale</span></h4>
                <p>Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company. It is a free
                  download provided by TemplateMo. There are 3 HTML pages,</p>
                <div className="main-button scroll-to-section"></div>
                <span>or</span>
                <div className="second-button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>We Provide <em>Different Services</em> &amp;
                      <span>Features</span> For Your Agency
                    </h2>
                    <div className="line-dec"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-01.jpg" alt="discover SEO" className="templatemo-feature" />
                    </div>
                    <h4>Discover More on Latest SEO Trends</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-02.jpg" alt="data analysis" className="templatemo-feature" />
                    </div>
                    <h4>Real-Time Big Data Analysis</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-03.jpg" alt="precise data" className="templatemo-feature" />
                    </div>
                    <h4>Precise Data Analysis &amp; Prediction</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-04.jpg" alt="SEO marketing" className="templatemo-feature" />
                    </div>
                    <h4>SEO Marketing &amp; Social Media</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}

export default HomePage