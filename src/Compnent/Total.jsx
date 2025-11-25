import React from 'react';

const Total = () => {
    return (
        <div className='text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
            <h1 className='text-white text-3xl text-center p-5'>Trusted by Millions, Built for You</h1>
            <div className='flex justify-evenly'>
                <div className='text-center'>
                    <p>Total Downloads</p>
                    <h1 className='text-4xl font-bold'>29.6M</h1>
                    <p>21% More Than Last Month</p>
                </div>
                <div className='text-center'>
                    <p>Total Reviews</p>
                    <h1 className='text-4xl font-bold'>906K</h1>
                    <p>46% More Than Last Month</p>
                </div>
                <div className='text-center'>
                    <p>Total Downloads</p>
                    <h1 className='text-4xl font-bold'>132+</h1>
                    <p>31 More Will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Total;