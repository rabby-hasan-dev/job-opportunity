import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import './Home.css'
import JobCatagory from './JobCatagory/JobCatagory';
import Jobs from './Jobs/Jobs';


const Home = () => {
    const jobData=useLoaderData()
    const {jobs}=jobData;
    
    return (
      
         <main > 
            <section className='banner'>
            <Banner></Banner>
            </section>
            <section className='mt-28'>
                <JobCatagory></JobCatagory>
            </section>
            <section className='grid grid-cols-2 gap-4'>
               {
                jobs.map(job=> <Jobs
                key={job._id}
                job={job}
                ></Jobs> )
               }
               
            </section>
         </main>
        
    );
};

export default Home;