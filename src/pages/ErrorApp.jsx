import React from 'react';
import Navbar from '../Compnent/Navbar';
import errorApp from '../assets/App-Error.png'

const ErrorApp = () => {
    return (
        <div>
            
            <div className='flex justify-center items-center'>
            <div  >
                <img className='' src={errorApp} alt="" />
            </div>
        </div>
        </div>
    );
};

export default ErrorApp;