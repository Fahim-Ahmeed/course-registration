import PropTypes from "prop-types";
import Course from "./Course/Course";


const Courses = ({courses,handleCourses}) => {    
    return (
        
       <div className="md:col-span-4 lg:col-span-4">
        <div className="grid md:grid-flow-row  md:grid-cols-2 lg:grid-cols-3 gap-5"> 
        {
                courses.map((course)=> <Course 
                    key={course.id} 
                    handleCourses={handleCourses} 
                    course={course}>
                    </Course>)
        }
       </div>
       </div>
           
        
    );
};
Courses.propTypes={
    courses:PropTypes.array,
    handleCourses:PropTypes.func,
    cart:PropTypes.array
}

export default Courses;