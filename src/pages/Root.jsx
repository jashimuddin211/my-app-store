import React from 'react';
import Navbar from '../Compnent/Navbar';
import Banner from '../Compnent/Banner';
import Total from '../Compnent/Total';
import Tranding from '../Compnent/Tranding';


const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Total></Total>
           <Tranding></Tranding>
        </div>
    );
};

export default Root;