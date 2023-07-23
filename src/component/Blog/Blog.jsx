import React from 'react';
import banner from '../../assets/All Images/banner.png'
const Blog = () => {
    return (
        <div>
            <div className='banner contents'>
                {/* <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>
               
                 */}
                <figure> <img src={banner} alt="banner" /></figure>
            </div>
            <h2>Blog page</h2>
        </div>
    );
};

export default Blog;