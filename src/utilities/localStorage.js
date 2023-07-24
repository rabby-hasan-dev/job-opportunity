

const addToDb = (name, _id, age) => {

    const jobsData = { name, id, age };

    const previousJobs = JSON.parse(localStorage.getItem('appliedJobs'))
    let jobs = [];
    if (previousJobs) {

        const filterJobs=jobs.filter(job=>job._id ===_id);
        if(filterJobs){
            alert('jobs already applied')
        }
        else{
            jobs.push(...previousJobs,jobsData);
            localStorage.setItem('appliedJobs', JSON.stringify(jobs))
        }


    }
    else {
        jobs.push(jobsData);
        localStorage.setItem('appliedJobs', JSON.stringify(jobs));

    }

}


const removeFromDb=(id)=>{

    const previousJobs = JSON.parse(localStorage.getItem('appliedJobs'))
    if(previousJobs){
        const restThem=previousJobs.filter(jobs=>jobs._id !==id);
        localStorage.setItem('appliedJobs', JSON.stringify(restThem))
    }
    else{
        alert(' I can not find applied jobs')
    }
    
}
