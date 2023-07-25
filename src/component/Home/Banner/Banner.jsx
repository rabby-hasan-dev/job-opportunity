import React from 'react';
import './Banner.css'
import bannerPersonLogo from '../../../assets/All Images/P3OLGJ1.png'

const Banner = () => {
    return (
        <>
            <div className="banner-info">
                <h1>One Step Closer To Your <span className='heading'> Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
           <div className="banner-img">
            <img src={bannerPersonLogo} alt="person" />

           </div>
        </>
    );
};

export default Banner;