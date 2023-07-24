
import './Home.css'
import Banner from './Banner/Banner';
import JobCatagory from './JobCatagory/JobCatagory';
import Jobs from './Jobs/Jobs';
import UseJobs from '../../hooks/UseJobs';



const Home = () => {
    const [jobs] = UseJobs();

    return (

        <main className='home ' >
            <section className='banner'>
                <Banner></Banner>
            </section>
            <section className='mt-28'>
                <JobCatagory></JobCatagory>
            </section>
            <section className='job-feature ' >
                <h1 className='text-center text-5xl bold'>Featured Jobs</h1>
                <p className='text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        jobs.map(job => <Jobs
                            key={job._id}
                            job={job}

                        ></Jobs>)
                    }
                </div>
                <div className='text-center'>
                    <button className='btn-seeAll mt-8 mx-auto'> See All Jobs</button>
                </div>

            </section>
        </main>

    );
};

export default Home;