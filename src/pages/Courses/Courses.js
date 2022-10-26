import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Shared/CourseSummary/CourseSummary';


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/courses`)
    //         .then(res => res.json())
    //         .then(data => setCourses(data))

    // }
    //     , [])
    return (
        
        <div className='grid grid-cols-2 gap-x-4 ml-8 mr-8'>
            {courses.map(course => <CourseSummary key={course.id} course={course}></CourseSummary>)}

        </div>
    );
};

export default Courses;