import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faBookOpen} from '@fortawesome/free-solid-svg-icons'


const Course =({course}) => {
    const{courseDescription,courseImage,courseTitle,credit,price}=course;
    return (

     <div className="card  bg-gray-200 shadow-xl p-4 flex flex-col justify-between space-y-2">
        <figure><img src={courseImage} className='w-full' alt="Shoes" /></figure>
        <div className="space-y-4">
        <h2 className="text-2xl text-gray-950 font-bold ">
        {courseTitle}
        </h2>
        <p>{courseDescription}</p>
        <div className="card-actions justify-between">
        <div className="">
        <FontAwesomeIcon icon={faDollarSign} /> Price:{price}
        </div> 
        <div className="">
        <FontAwesomeIcon icon={faBookOpen} /> Credit:{credit} hr
        </div>
        </div>
        <button className='btn btn-primary bg-[#2F80ED] w-full'>Select</button>
        </div>
    </div>
        // <div className=''>
        //  <div>
        //     <div>
        //         <img src={courseImage} alt="" />
        //     </div>
        //     <h2>{courseTitle}</h2>
        //     <p>{courseDescription}</p>
        //     <div>
        //         <div><p>Price:{price}</p></div>
        //         <div><p>Credit:{credit}hr</p></div>
        //     </div>
        //     <button className='btn btn-primary bg-[#2F80ED] '>Select</button>
        //  </div>
        // </div>
    );
};
Course.propTypes={
    course:PropTypes.object.isRequired
}
export default Course;