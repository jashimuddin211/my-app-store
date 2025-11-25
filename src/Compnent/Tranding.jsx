import React, { Suspense, use } from 'react';
import TrandingCard from './TrandingCard.jsx/TrandingCard';

const trendingData =fetch('tranding.json').then(res => res.json())

const Tranding = () => {
    const data =use(trendingData)
    return (
       <div className='bg-gray-200'>
         <div className='max-w-[1280px] mx-auto pt-8'>
            <h1 className='font-bold text-3xl text-center'>Trending Apps</h1>
            <p className='text-center pb-8'>Explore All Trending Apps on the Market developed by us</p>
<div className='grid grid-cols-4 gap-6 rounded-xl'>
    <Suspense >
        {
        data.map(e =>(
            <TrandingCard e={e}></TrandingCard>
        ))
    }
    </Suspense>
</div>
        </div>
       </div>
    );
};

export default Tranding;