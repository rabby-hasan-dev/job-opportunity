import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './jobsDetails.css'
import banner from '../../../../assets/All Images/banner.png'

import bannerLogo1 from '../../../../assets/All Images/Vector-1.png'
import bannerLogo2 from '../../../../assets/All Images/Vector.png'
const JobsDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const { _id, company_logo, company_name, fulltime_or_parttime, job_title, location, remote_or_onsite, salary, job_description, job_responsibilities, educational_requirements, experiences, contact_information
    } = details;
    console.log(details);


    const url = `/public/jobfile.json`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const findJob = data.find(job => job._id === id);
                setDetails(findJob);
            })
    }, [])

    return (


        <div className=''>

            <div className='banner flex justify-between'>
                <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>


                {/* <figure> <img src={banner} alt="banner" /></figure> */}
            </div>

            <div className='lg:flex  justify-between max-w-screen-xl my-[130px] px-[130px] mx-auto'>
                {/* description */}

                <div className='  '>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Description: </span> {job_description}</p>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Responsibilities: </span>{job_responsibilities}</p>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Requirement: </span>{educational_requirements}</p>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Experiences: </span>{experiences}</p>

                </div>

                {/* job details */}
                <div className='ml-5'>

                    <div className='jobs-details p-7 text-2xl '>
                        <h2 className='text-2xl'>Job Details</h2>
                        <hr className='divide-[#7E90FE] my-6'></hr>
                        <p>Salary:${salary}</p>
                        <p>Job Title:{job_title}</p>

                        <h2 className='text-xl'>Contact information</h2>
                        <hr className='divide-[#7E90FE] my-6'></hr>

                        <p>Phone:{contact_information?.phone}</p>
                        <p>Email:{contact_information?.email}</p>
                        <p>Address:{location}</p>
                    </div>
                    <button className='btn w-full p-2 bg-[#7E90FE] my-5 '>Apply Now</button>



                </div>
            </div>
        </div>
    );
};

export default JobsDetails;