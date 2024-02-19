import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
        <Header/>
        <main id='main'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout