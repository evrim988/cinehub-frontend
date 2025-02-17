import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/Admin/AdminPage'
import AdminLogin from './pages/Admin/AdminLogin'
import { useDispatch } from 'react-redux'
import { CineHubDispatch, CineHubUseSelector } from './store'
import { adminLogin } from './store/feature/adminSlice'

function RouterPage() {

    const dispatch = useDispatch<CineHubDispatch>();
    const isAdminLogin = CineHubUseSelector(state => state.admin.isAuth);

    useEffect(() => {
        const adminToken = localStorage.getItem('adminToken');

        if(adminToken) {
            dispatch(adminLogin())
        }

    }, [dispatch]);

    return (
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={ <HomePage /> } />

                <Route path='/admin' element={ isAdminLogin ? <AdminPage /> : <AdminLogin /> } />
                <Route path='/adminlogin' element={ <AdminLogin /> } />


                <Route path='/register' element={ <RegisterPage /> } />
                <Route path='/login' element={ <LoginPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPage