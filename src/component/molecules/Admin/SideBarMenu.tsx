import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../img/adminLogo.webp'
import profile from '../../../img/adminProfile.avif'
import { useDispatch } from 'react-redux';
import { CineHubDispatch } from '../../../store';
import { adminLogOut } from '../../../store/feature/adminSlice';

function SideBarMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch<CineHubDispatch>();
    const navigate = useNavigate();

    const logout = () => {
         localStorage.removeItem('adminToken');
         dispatch(adminLogOut());
         navigate('/adminlogin');
    }

  return (
    <>
          <NavLink to={'/admin'} className="brand-link d-flex align-items-center"  style={{ textDecoration: 'none' }}>
                <img
                    src={logo}
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3 text-center"
                    style={{ opacity: .8, marginRight: '10px'}}
                />
                <div className="d-flex flex-column">
                    <span className="brand-text font-weight-light" style={{fontSize: '18px'}}>Admin Paneli</span>
                </div>
            </NavLink>


            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
                    <div className="image" style={{ marginRight: '10px' }}>
                        <img src={profile} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info d-flex flex-column">
                        <span className="d-block" style={{ color: 'white', fontSize: '16px' }}>Hoşgeldiniz!</span>
                        
                    </div>
                </div>

                <div className="row ">
                    <div className='d-grid'>
                        <button className='btn btn-outline-info' style={{fontSize: '15px'}} onClick={logout}>Çıkış Yap</button>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item ">
                            <a  className="nav-link">
                                <i className="fa-solid fa-list fa-sm"></i>
                                <NavLink to="/movie-list" className='ms-2'>Film Yönetimi</NavLink>
                            </a>
                        </li>
                        
                    </ul>
                </nav>

            </div>
    </>
  )
}

export default SideBarMenu