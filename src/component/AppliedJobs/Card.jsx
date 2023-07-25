import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";


const Card = ({ jobItem }) => {
    return (
        <div className=" border border-2 flex  bg-inherit shadow-xl">
            <figure className='lg:m-7 bg-[#F4F4F4] rounded'><img src={jobItem?.company_logo} className='lg:max-w-[240px] lg:max-h-[240px] min-w-full my-auto' alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{jobItem?.job_title}</h2>
                <p>{jobItem?.company_name}</p>
                <div className='flex '>
                    <button className='... ring-2 ring-blue-500/50 p-2 text-blue-400 ' >{jobItem?.fulltime_or_parttime}</button>
                    <button className='... ring-2 ring-blue-500/50 p-2 text-blue-400  ml-2'>{jobItem?.remote_or_onsite}</button>
                </div>
                <div className='flex'>
                    <p className=''> <FaMapMarkerAlt></FaMapMarkerAlt> {jobItem?.location} </p>
                    <p><FaDollarSign></FaDollarSign>
                        {jobItem?.salary}
                    </p>


                </div>
            </div>
            <div className="card-actions justify-end items-center">

                <button className="btn bg-[#7E90FE] mx-4">View Details</button>
            </div>
        </div>
    );
};

export default Card;