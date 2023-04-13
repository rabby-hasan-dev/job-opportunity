import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';

import './jobCatagory.css'
import JCDetails from './jobCatagoryDetails/JCDetails';

const JobCatagory = () => {

    const [jobCategory, setJobCategory] = useState([]);
    
    useEffect(() => {
        fetch('jobcategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))

    }, [])
  
    const { category } = jobCategory;

    console.log(category);
  

    return (

        <div>
            {/* {
                category.map(ct => <JCDetails ct={ct} ></JCDetails>)
            } */}




        </div>
    );
};

export default JobCatagory;