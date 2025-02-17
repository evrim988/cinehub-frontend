import React from 'react'
import logo from '../../img/CineHubLogo.png'
import './HeaderNavbar.css'
import { useNavigate } from 'react-router-dom'

function HeaderNavbar() {

    const navigate = useNavigate();

    const handleRegisterNavigate = () => {
        navigate('/register');
    }

    const handleLoginNavigate = () => {
        navigate('/login');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <img src={logo} style={{ width: '350px', height: '125px' }} />

                        <ul className="nav">
                            <button className='btn btn-outline-light mt-4 ms-3' style={{width: '150px', height: '50px'}} onClick={handleRegisterNavigate} >Kayıt Ol</button>
                            <button className='btn btn-outline-light mt-4 ms-3' style={{width: '150px', height: '50px'}} onClick={handleLoginNavigate}>Giriş Yap</button>
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