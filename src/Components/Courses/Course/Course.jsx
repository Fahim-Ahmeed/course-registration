import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faBookOpen} from '@fortawesome/free-solid-svg-icons'


const Course =({course,handleCourses}) => {
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
        <button onClick={()=>{handleCourses(course)}} className='btn btn-primary bg-[#2F80ED] w-full'>Select</button>
        </div>
    </div>
    );
};
Course.propTypes={
    course:PropTypes.object,
    handleCourses:PropTypes.func
}
export default Course;