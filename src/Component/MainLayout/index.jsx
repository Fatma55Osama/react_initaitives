import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Employeeloader from '../../getCachingData'

export default function MainLayout() {
    return (
        <div className="col-12 d-flex flex-column justify-content-between flex-grow-1" >
            <Header />
            
                <Outlet />
            
            <Employeeloader/>
            <Footer />
        </div>
    )
}
