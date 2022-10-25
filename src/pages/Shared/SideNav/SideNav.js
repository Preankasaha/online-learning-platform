import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course-options`)
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    return (
        <div className='hidden lg:block bg-neutral text-2xl font-semibold text-accent pl-5 h-96 pt-8'>
            {/* Total courses: {courses.length}; */}
            {
                courses.map(course => <p
                    key={course.id}>
                    <Link className='leading-10' to={`/courses`}>{course.name}</Link>
                </p>)
            }

        </div>
    );
};

export default SideNav;