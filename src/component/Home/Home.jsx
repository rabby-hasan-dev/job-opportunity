import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import JobCatagory from './JobCatagory/JobCatagory';

const Home = () => {
    return (
      
         <main > 
            <section className='banner'>
            <Banner></Banner>
            </section>
            <section className='mt-28'>
                <JobCatagory></JobCatagory>
            </section>
         </main>
        
    );
};

export default Home;