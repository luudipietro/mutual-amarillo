import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <>
    <Navbar/>

    <div className='layout-main-content'>
        <Outlet />
      </div>


    <Footer/>
    </>
  );
}

export default Layout;