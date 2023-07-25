import { useEffect, useState } from "react";


const UseJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('/jobfile.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return [jobs];

};

export default UseJobs;