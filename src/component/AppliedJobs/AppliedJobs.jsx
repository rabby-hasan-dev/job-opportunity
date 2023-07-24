import React from 'react';
import banner from '../../assets/All Images/banner.png'
const AppliedJobs = () => {

    const appliedJobs=JSON.parse(localStorage.getItem('appliedJobs'));
    // console.log(appliedJobs);

    


     // const { _id, company_logo, company_name, fulltime_or_parttime, job_title, location, remote_or_onsite, salary, job_description, job_responsibilities, educational_requirements, experiences, contact_information
        // } = jobsData || {}

        

    return (
        <div>

            {
                appliedJobs.map(jobItem=>console.log(jobItem))
            }

            <div className='banner contents'>
                {/* <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>
               
                 */}
                <figure> <img src={banner} alt="banner" /></figure>
            </div>
            <h2>applied job page</h2>
        </div>
    );
};

export default AppliedJobs;