import React from 'react';
import './Banner.css'
import bannerPersonLogo from '../../../assets/All Images/P3OLGJ1.png'

const Banner = () => {

    // style={{ padding: "50px 80px 50px 90px" }}
    // className='lg:mx-[100px]'
    // ml-[300px] mr-[164px] pt-[60px]
    return (
        <div style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }} >
            <div className='lg:flex  lg:ml-[100px] pt-[60px] '>
                <div className='my-auto' >
                    <h1 className='text-6xl font-extrabold'>One Step <br/> Closer To Your  <br/>  <span style={{ color: "#7E90FE" }}> Dream Job</span></h1>
                    <p className='text-[18px] my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-start'>Get Started</button>
                </div>
                <div className="banner-img">
                    <img src={bannerPersonLogo} alt="person" />

                </div>
            </div>
        </div>
    );
};

export default Banner;