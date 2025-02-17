import React from 'react'
import HeaderNavbarMenu from '../../component/molecules/Admin/HeaderNavbarMenu'
import SideBarMenu from '../../component/molecules/Admin/SideBarMenu'

function AdminPage() {
    return (
        <div className="wrapper">

            <nav className="main-header navbar navbar-expand navbar-white navbar-light navbar-bgcolor" >
                <HeaderNavbarMenu />
            </nav>

            {/**Menü Başlangıç */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ height: '100vh' }}>
                <SideBarMenu />
            </aside>
            {/**Menü Bitiş */}
           
        </div>
    )
}

export default AdminPage