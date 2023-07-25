
import bannerLogo1 from '../../assets/All Images/Vector.png'
import bannerLogo2 from '../../assets/All Images/Vector-1.png'
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import Card from './Card';
const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs'));
    return (
        <div>

            <div className='banner w-full flex justify-between'>
                <figure> <img src={bannerLogo1} alt="" /></figure>
                <figure> <img src={bannerLogo2} alt="" /></figure>
            </div>

            <div className='lg:mx-[300px] lg:mt-[227px] lg:mb-[130px] grid grid-cols-1 gap-4 '>
                {
                    appliedJobs?.map((jobItem, index) => <Card
                        key={index}
                        jobItem={jobItem}
                    ></Card>



                    )
                }



            </div>

        </div>
    );
};

export default AppliedJobs;