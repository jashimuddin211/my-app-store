import React from 'react';
import errorimg from "../assets/error-404.png"
import Navbar from '../Compnent/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center'>
            <div  >
                <img className='' src={errorimg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;