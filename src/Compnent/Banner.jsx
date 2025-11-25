import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='mt-5 bg-gray-300'>
            
            <h1 className='text-center text-3xl font-bold mb-6 p-7'>We Build <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'> Productive</span> Apps</h1>
            <p className='text-center'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-9 justify-center items-center mt-6'>
                <button className='border border-1 p-2 flex justify-center items-center'><IoLogoGooglePlaystore /> Google Play</button>
                <button className='border border-1 p-2 flex justify-center items-center'>  <FaAppStoreIos /> App Store</button>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <img src="/public/hero.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;