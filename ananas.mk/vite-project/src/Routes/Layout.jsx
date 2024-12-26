import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import HeaderComponent from '../Components/HeaderComponent'
import { useEffect } from 'react'
import LoginPage from './LoginPage'
import Navbar from '../Components/Navbar'
import { Footer } from '../Components/Footer'


const Layout = () => {

    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    useEffect(() => {

        if (!username) {
            navigate("/login");
        }

    }, [username])





    return (
        <div className='bg-gray-100'>
            <HeaderComponent />
            <Navbar />

            <Outlet />
            <Footer />

        </div>
    )
}

export default Layout