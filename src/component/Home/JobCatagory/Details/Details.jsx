import React from 'react';

const Details = ({ jobCategory }) => {
    const { name, logo, jobs_available, } = jobCategory;
    return (
        <>
            <div className='card p-10 rounded-lg bg'>
                <img src={logo} alt="" />
                <h3 className='text-xl mt-4'>{name}</h3>
                <p>{jobs_available}</p>
            </div>
        </>
    );
};

export default Details;