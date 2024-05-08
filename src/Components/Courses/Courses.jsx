import { useEffect, useState } from "react";
import Course from "./Course/Course";


const Courses = () => {
    const[courses,setCourses]=useState([])
    useEffect(()=>{
        fetch("courses.json")
        .then(respone=>respone.json()
        .then(data=>setCourses(data))
    )
    
    },[])
    return (
       <div className="col-span-3 ">
        <div className="grid grid-flow-row grid-cols-3 gap-5">
        {
                courses.map((course)=> <Course key={course.id}  course={course}></Course>)
        }
       </div>
       </div>
           
        
    );
};

export default Courses;