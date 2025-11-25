import React from 'react';
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>
            <div className='flex justify-evenly mt-5'>
                <div className='flex justify-center items-center'>
                    <img className='h-8 w-8' src="/public/logo.png" alt="" />
                    <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>HERO ST.</h1>
                </div>
                <div className='flex gap-5'>
                    <a >Home</a>
                    <a >Apps</a>
                    <a >Installation</a>
                </div>
                <div >
                    <button className='flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-1 rounded-sm text-white' ><FaGithub /> Contribute</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;