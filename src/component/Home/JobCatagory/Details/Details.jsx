import React from 'react';
import './Details.css'
const Details = ({ jobCategory }) => {
    const { name, logo, jobs_available, } = jobCategory;
    return (
        <>
            <div className='card p-10 rounded-lg '>
                <img className='w-[70px] h-[70px]' src={logo} alt="logo" />
                <h3 className='text-xl mt-4'>{name}</h3>
                <p>{jobs_available}</p>
            </div>
        </>
    );
};

export default Details;