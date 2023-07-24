import { useEffect, useState } from "react";


const UseJobs = () => {
    const [jobs, setJobs] = useState([])
    const url = `/public/jobfile.json`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return [jobs];

};

export default UseJobs;