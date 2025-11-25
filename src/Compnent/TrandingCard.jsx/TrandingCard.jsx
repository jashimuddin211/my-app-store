import React from 'react';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const TrandingCard = ({e}) => {
    return (
        <div className='bg-white rounded-2xl'>
            <div className='p-3'>
               <div className='flex justify-center'>
                 <img className=' p-3 h-50 w-50' src={e.image} alt="" />
               </div>
                <h1 className='font-bold'>{e.title}</h1>
                <div className='flex justify-between'>
                    <p className='flex justify-center items-center text-green-400'><IoMdDownload /> {e.downloads}</p>
                    <p className='flex justify-center items-center text-orange-400'><FaStar /> {e.ratingAvg}</p>
                </div>
            </div>
        </div>
    );
};

export default TrandingCard;