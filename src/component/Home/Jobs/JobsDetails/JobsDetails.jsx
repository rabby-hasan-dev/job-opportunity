import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <p>{job_description}</p>
                <p>{job_responsibilities}</p>
                <p>{educational_requirements}</p>
                <p>{experiences}</p>

            </div>
            <div>

                <h2 className='text-2xl'>Job Details</h2>
                <p>Salary:${salary}</p>
                <p>Job Title:{job_title}</p>

                <h2>Contact information</h2>

                <p>Phone:{contact_information?.phone}</p>
                <p>Email:{contact_information?.email}</p>
                <p>Address:{location}</p>
                <button className='btn'>Apply Now</button>



            </div>
        </div>
    );
};

export default JobsDetails;