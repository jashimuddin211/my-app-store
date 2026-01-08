import React from 'react';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const TrandingCard = ({e}) => {
    return (
        <Link to={`/appDetails/${e.id}`}>
        <div className='bg-white rounded-2xl mb-8 md:mb-0'>
            <div className='p-3'>
               <div className='flex justify-center'>
                 <img className=' p-3 h-50 w-50' src={e.image} alt="" />
               </div>
                <h1 className='font-bold'>{e.title}</h1>
                <div className='flex justify-between'>
                    <p className='flex justify-center items-center text-green-400 bg-gray-200 p-1 rounded-xl'><IoMdDownload /> {e.downloads}</p>
                    <p className='flex justify-center items-center text-orange-400 bg-orange-200 p-1 rounded-xl'><FaStar /> {e.ratingAvg}</p>
                </div>
               
            </div>

        </div>
         </Link>
    );
};

export default TrandingCard;