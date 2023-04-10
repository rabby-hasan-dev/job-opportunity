import React from 'react';
import './jobCatagory.css'

const JobCatagory = () => {
    return (
        <>
            <div className="job-heading text-center">
                <h1 className='text-5xl mb-4'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="job-category grid grid-cols-4 gap-6  mt-8">
             <div className='card p-10 rounded-lg bg'>
                <img src="/src/assets/Icons/accounts 1.png" alt="" />
                <h3 className='text-xl mt-4'>Account & Finance</h3>
                <p>300 Jobs Available</p>
             </div>
             <div className='card p-10 rounded-lg bg'>
                <img src="/src/assets/Icons/business 1.png" alt="" />
                <h3 className='text-xl mt-4'>Creative Design</h3>
                <p>100+ Jobs Available</p>
             </div>
             <div className='card p-10 rounded-lg bg'>
                <img src="/src/assets/Icons/social-media 1.png" alt="" />
                <h3 className='text-xl mt-4'>Marketing & Sales</h3>
                <p>150 Jobs Available</p>
             </div>
             <div className='card p-10 rounded-lg bg'>
                <img src="/src/assets/Icons/chip 1.png" alt="" />
                <h3 className='text-xl mt-4'>Engineering Job</h3>
                <p>224 Jobs Available</p>
             </div>
            </div>
        </>
    );
};

export default JobCatagory;