import React from 'react';
// import bannerLogo1 from '../../assets/All Images/Vector.png'
// import bannerLogo2 from '../../assets/All Images/Vector-1.png'
import banner from '../../assets/All Images/banner.png'

const Statistic = () => {
    return (
        <div>
            <div className='banner contents'>
                {/* <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>
               
                 */}
                  <figure> <img  src={banner} alt="" /></figure>
            </div>

        </div>
    );
};

export default Statistic;