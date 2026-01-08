
import { Suspense } from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    
    return (
        <div>
            <div className='  mt-5 md:flex justify-evenly'>
                <Link to='/'><div className='flex justify-center items-center'>
                    <img className='h-8 w-8' src="/public/logo.png" alt="" />
                    <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>HERO ST.</h1>
                </div></Link>
                <div className='flex justify-center md:flex gap-5'>
  <Suspense fallback={<span className="loading loading-bars loading-xl"></span>} >
    <NavLink
    to='/'
    className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]' : 'text-black'}
  >
    Home
  </NavLink>
  </Suspense>

  <NavLink
    to='apps'
    className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]' : 'text-black'}
  >
    Apps
  </NavLink>

  <NavLink
    to='installation'
    className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]' : 'text-black'}
  >
    Installation
  </NavLink>
</div>
                <div className="flex  md:flex justify-center p-2">
                  <a href="https://github.com/jashimuddin211">  <button className='flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-1 rounded-sm text-white' ><FaGithub /> Contribute</button></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;