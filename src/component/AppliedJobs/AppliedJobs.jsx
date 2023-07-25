import React, { useState } from 'react';
import banner from '../../assets/All Images/banner.png'
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
const AppliedJobs = () => {
    const [jobs, setJobs]=useState([])
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs'));
   
    return (
        <div>

            <div className='banner contents'>
                {/* <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>
               
                 */}
                <figure> <img src={banner} alt="banner" /></figure>
            </div>

            <div className='lg:mx-[300px] lg:mt-[227px] lg:mb-[130px] grid grid-cols-1 gap-4'>
                {
                    appliedJobs?.map(jobItem =>
                        <div 
                        key={jobItem._id}
                        className="card card-side rounded-none  bg-inherit shadow-xl">
                            <figure className='border border-2'><img src={jobItem?.company_logo} className='max-w-[240px] max-h-[240px] min-w-full' alt="image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{jobItem?.job_title}</h2>
                                <p>{jobItem?.company_name}</p>
                                <div className='flex '>
                                    <button className='... ring-2 ring-blue-500/50 p-2 text-blue-400 ' >{jobItem?.fulltime_or_parttime}</button>
                                    <button className='... ring-2 ring-blue-500/50 p-2 text-blue-400  ml-2'>{jobItem?.remote_or_onsite}</button>
                                </div>
                                <div className='flex'>
                                    <p className=''> <FaMapMarkerAlt></FaMapMarkerAlt> {jobItem?.location} </p>
                                    <p><FaDollarSign></FaDollarSign>
                                        {jobItem?.salary}
                                    </p>


                                </div>
                            </div>
                            <div className="card-actions justify-end items-center">

                                <button className="btn bg-[#7E90FE] mx-4">View Details</button>
                            </div>
                        </div>


                    )
                }



            </div>

        </div>
    );
};

export default AppliedJobs;