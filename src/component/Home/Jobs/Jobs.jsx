import React from 'react';

const Jobs = ({ job }) => {
    const { _id, company_logo, company_name, fulltime_or_parttime, job_title, location, remote_or_onsite, salary } = job;

    return (
        <div className='grid grid-cols-2 gap-4'>
           <div >
           <div><img className='w-9' src={company_logo} alt="company_logo" /></div>
            <h1>{job_title}</h1>
            <p>{company_name}</p>
            <div>
                <p>{fulltime_or_parttime}</p>
                <p>{remote_or_onsite}</p>
            </div>
            <p>{location}</p>
            <p>{salary}</p>
            <button>View Details</button>
           </div>
        </div>
    );
};

export default Jobs;