import React from 'react';
import bannerLogo1 from '../../assets/All Images/Vector.png'
import bannerLogo2 from '../../assets/All Images/Vector-1.png'
import Dashboard from '../Dashboard/Dashboard';

const Statistic = () => {
    return (
        <div>

            <div className='banner w-full flex justify-between'>
                <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>
            </div>
            <h2 className='text-4xl text-center my-8'>All Assignment Marks</h2>

            <Dashboard></Dashboard>
        </div>
    );
};

export default Statistic;