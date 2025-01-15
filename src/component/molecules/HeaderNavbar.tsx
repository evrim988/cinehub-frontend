import React from 'react'
import logo from '../../img/CineHubLogo.png'

function HeaderNavbar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">

                      <div>
                      <img src={logo} style={{width: '350px', height: '100px'}} className='mt-2' />
                      </div>
                           
                    

                        <ul className="nav">

                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderNavbar