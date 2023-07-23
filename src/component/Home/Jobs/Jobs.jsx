
import React from 'react';
import { Link } from 'react-router-dom';
import './jobs.css'

const Jobs = ({ job }) => {

    const { _id, company_logo, company_name, fulltime_or_parttime, job_title, location, remote_or_onsite, salary } = job;



    return (
        <>
            <div className='border border-1 p-10'>
                <figure className=" w-1/4  pt-10">
                    <img src={company_logo} alt="company_logo" className="rounded-xl" />
                </figure>

                <h1 className='text-2xl'>{job_title}</h1>
                <p className='text-xl'>{company_name}</p>
                <div className='my-4'>
                    <button className='btn-info mr-4' >{fulltime_or_parttime}</button>
                    <button className='btn-info '>{remote_or_onsite}</button>
                </div>
                <div className='flex text-xl text-gray-400 '>
                    <p className='mr-5'> {location}</p>
                    <p>{salary}</p>
                </div>
                <Link to={`jobdetails/${_id}`} >
                    <button className='btn-details mt-4' >View Details </button>
                </Link>


            </div>
        </>
    );
};

export default Jobs;