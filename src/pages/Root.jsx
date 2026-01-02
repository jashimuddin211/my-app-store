import React from 'react';
import Navbar from '../Compnent/Navbar';
import Banner from '../Compnent/Banner';
import Total from '../Compnent/Total';
import Tranding from '../Compnent/Tranding';
import Footer from '../Compnent/Footer';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
           
           <Outlet></Outlet>
           
           <Footer></Footer>
           
        </div>
    );
};

export default Root;