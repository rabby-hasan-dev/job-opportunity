
import React from 'react';
import { Link } from 'react-router-dom';
import './jobs.css'
import { FaBeer, FaDollarSign, FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';
const Jobs = ({ job }) => {

    const { _id, company_logo, company_name, fulltime_or_parttime, job_title, location, remote_or_onsite, salary } = job;

    return (
        <>
            <div className='border border-2 p-10'>
                <figure className=" w-1/4  pt-10">
                    <img src={company_logo} alt="company_logo" className="rounded-xl" />
                </figure>

                <h1 className='text-2xl'>{job_title}</h1>
                <p className='text-xl'>{company_name}</p>
                <div className='my-4'>
                    <button className='... ring-2 ring-blue-500/50 p-2 text-blue-400 mr-4' >{fulltime_or_parttime}</button>
                    <button className='... ring-2 ring-blue-500/50 p-2 text-blue-400 '>{remote_or_onsite}</button>
                </div>
                <div className='flex text-xl text-gray-400 '>
                    <p className='mr-5'> <span className='mr-10'><FaMapMarkerAlt></FaMapMarkerAlt></span> {location}</p>
                    <p><span><FaDollarSign></FaDollarSign></span> {salary}</p>
                </div>
                <Link to={`/jobDetails/${job?._id}`} >
                    <button className='btn-details mt-4' >View Details </button>
                </Link>


            </div>
        </>
    );
};

export default Jobs;