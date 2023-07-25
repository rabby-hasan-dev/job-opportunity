
import { useParams } from 'react-router-dom';
import './jobsDetails.css'
import bannerLogo1 from '../../../../assets/All Images/Vector-1.png'
import bannerLogo2 from '../../../../assets/All Images/Vector.png'
import { FaCalendarAlt, FaDollarSign, FaInbox, FaMapMarkerAlt, FaPhoneAlt, FaSms } from 'react-icons/fa';
import UseJobs from '../../../../hooks/UseJobs';
const JobsDetails = () => {
    const { id } = useParams();
    const [jobs] = UseJobs();

    const details = jobs.find(job => job?._id === id);
    const { _id, company_logo, company_name, fulltime_or_parttime, job_title, location, remote_or_onsite, salary, job_description, job_responsibilities, educational_requirements, experiences, contact_information
    } = details || {};

    const handleApplyJob = (jobsData) => {
        const id = jobsData?._id;
        const previousAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs'))

        let appliedJobs = [];

        if (previousAppliedJobs) {

            const filterJobs = previousAppliedJobs.find(job => job._id === id);
            if (filterJobs) {
                alert('jobs already applied')
            }
            else {
                appliedJobs.push(...previousAppliedJobs, jobsData);
                localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs))
            }


        }
        else {
            appliedJobs.push(jobsData);
            localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));

        }

    }


    return (


        <div>

            <div className='banner flex justify-between'>
                <figure> <img src={bannerLogo2} alt="" /></figure>
                <figure> <img src={bannerLogo1} alt="" /></figure>
            </div>

            <div className='lg:flex justify-between max-w-screen-xl lg:my-[130px] lg:px-[130px] mx-auto'>
                {/* description */}

                <div>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Description: </span> {job_description}</p>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Responsibilities: </span>{job_responsibilities}</p>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Requirement: </span>{educational_requirements}</p>
                    <p className='my-5 text-lg'> <span className='text-2xl text-bold '>Job Experiences: </span>{experiences}</p>

                </div>

                {/* job details */}
                <div className='lg:ml-5'>

                    <div className='jobs-details p-7 text-2xl '>
                        <h2 className='text-2xl'>Job Details</h2>
                        <hr className='divide-[#7E90FE] my-6'></hr>
                        <p> <FaDollarSign></FaDollarSign>Salary:${salary}</p>
                        <p><FaCalendarAlt></FaCalendarAlt> Job Title:{job_title}</p>

                        <h2 className='text-2xl my-4'>Contact information</h2>
                        <hr className='divide-[#7E90FE] my-6'></hr>

                        <p><span><FaPhoneAlt></FaPhoneAlt></span> Phone:{contact_information?.phone}</p>
                        <p> <FaInbox></FaInbox> Email:{contact_information?.email}</p>
                        <p> <FaMapMarkerAlt></FaMapMarkerAlt> Address:{location}</p>
                    </div>
                    <button onClick={() => handleApplyJob(details)} className='btn w-full p-2 bg-[#7E90FE] my-5 '>Apply Now</button>



                </div>
            </div>

        </div>
    );
};

export default JobsDetails;