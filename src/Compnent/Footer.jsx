import React from 'react';
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
       <div className='bg-[#001931] p-7'>
         <div className='max-w-[1280px] mx-auto'>
             <div className='flex justify-between'>
                 <div className='flex justify-center items-center'>
                    <img className='h-8 w-8' src="/public/logo.png" alt="" />
                    <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>HERO ST.</h1>
                </div>
                <div>
                    <h1 className='text-white'>Social Links</h1>
                    <div className='flex gap-3 text-white'>
                       <RiTwitterXFill />
                       <CiLinkedin />
<FaFacebookF />
                    </div>
                </div>
             </div>
        </div>
        <h1 className='text-white text-center mt-7'>Copyright © 2025 - All right reserved</h1>
       </div>
    );
};

export default Footer;