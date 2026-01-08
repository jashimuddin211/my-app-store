import React, {  Suspense } from 'react';
import Banner from '../Compnent/Banner';

import Total from '../Compnent/Total';
import Tranding from '../Compnent/Tranding';



const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
           <Total></Total>
           <Tranding></Tranding>
        
        </div>
    );
};

export default Home;