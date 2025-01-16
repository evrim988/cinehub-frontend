import React from 'react'

function ApplicationContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Film Tutkunları İçin <em>Özel </em> 
                  <span> Hizmetler</span></h2>
                <div className="line-dec" style={{width: '250px'}}></div>
                <p>CineHub ile film dünyasını keşfet, favorilerini paylaş ve başkalarının önerilerini keşfet!</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src="assets/images/services-01.jpg" alt="discover SEO" className="templatemo-feature" />
                </div>
                <h4>Kendi Film Listeni Oluştur</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src="assets/images/services-02.jpg" alt="data analysis" className="templatemo-feature" />
                </div>
                <h4>İzlediğin Filmleri Favorile</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src="assets/images/services-03.jpg" alt="precise data" className="templatemo-feature" />
                </div>
                <h4>Detaylı İncelemeler ve Yorumlar</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src="assets/images/services-04.jpg" alt="SEO marketing" className="templatemo-feature" />
                </div>
                <h4>Film Önerileri Al ve Keşfet</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationContent