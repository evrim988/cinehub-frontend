import React from 'react'
import img from '../img/projects-01.jpg'
import Header from '../component/molecules/Header'
import HeaderNavbar from '../component/molecules/HeaderNavbar'
import Banner from '../component/molecules/Banner'
import ApplicationContent from '../component/molecules/ApplicationContent'
import ContentMovieCarousel from '../component/molecules/ContentMovieCarousel'

function HomePage() {

  return (
    <>
      <div className="pre-header">
        <Header />
      </div>


      <header className="header-area header-sticky">
        <HeaderNavbar />
      </header>

      <div className="main-banner" id="top">
        <Banner />
      </div>

      <div className="services section" id="services">
        < ApplicationContent />
      </div>

      <div className="projects section" id="projects">
        <ContentMovieCarousel />
      </div>

      <div className="projects section" id="projects">
      </div>

      <div className="projects section" id="projects">
     
      </div>
      <footer style={{backgroundColor: 'purple'}}>
        <div className="container">
          <div className="col-lg-12">
            <p style={{color: 'white'}}>Copyright © 2025 <a href="#" style={{color: 'white'}}>CineHub</a> . All rights reserved<br />

              Bizi Tercih Ettiğiniz İçin Teşekkür Ederiz...
            </p>
          </div>
        </div>
      </footer>
    </>


  )

}

export default HomePage