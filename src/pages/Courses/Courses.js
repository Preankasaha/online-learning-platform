import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Shared/CourseSummary/CourseSummary';
import SideNav from '../Shared/SideNav/SideNav';


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

        <div className='mx-4'>
            <div className='flex sm:flex-none gap-8'>
                <div className='w-1/4'><SideNav></SideNav></div>
                {/* grid grid-cols-3 col-span-2 */}
                <div className='w-3/4'>
                    <div className='md:grid grid-cols-2 gap-x-4 md:ml-8 md:mr-8'>
                        {courses.map(course => <CourseSummary key={course.id} course={course}></CourseSummary>)}

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Courses;