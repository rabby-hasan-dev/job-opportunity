
import { useEffect, useState } from 'react';
import './jobCatagory.css'
import Details from './Details/Details';


const JobCatagory = () => {

    const [jobcategorys, setJobCategorys] = useState([]);


    useEffect(() => {
        fetch('jobcategory.json')
            .then(res => res.json())
            .then(data => setJobCategorys(data))

    }, [])




    return (
        <div className='lg:m-[100px]' >
            <div className="job-heading text-center mb-6">
                <h1 className='text-5xl mb-4'>Job Category List </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=' grid lg:grid-cols-4 gap-4 '>
                {
                    jobcategorys.map(jobCategory => <Details
                        key={jobCategory._id}
                        jobCategory={jobCategory}
                    ></Details>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;