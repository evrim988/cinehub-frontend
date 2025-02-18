import React from 'react'
import SideBarMenu from '../../component/molecules/Admin/SideBarMenu'
import HeaderNavbarMenu from '../../component/molecules/Admin/HeaderNavbarMenu'
import MovieList from '../../component/organism/MovieList'

function MovieManagementPage() {
    return (
        <>
            {/** Navbar Start */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <HeaderNavbarMenu />
            </nav>
            {/** Navbar End */}

            {/**Menü Başlangıç */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <SideBarMenu />
            </aside>
            {/**Menü Bitiş */}

            <div className="content-wrapper">
                <section className="content">
                    <MovieList />
                </section>
            </div>

        </>
    )
}

export default MovieManagementPage