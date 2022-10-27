import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://e-learning-server-kappa.vercel.app/course-options`)
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    return (
        <div className='bg-neutral text-2xl font-semibold text-accent pl-24 h-96 md:h-full pt-8'>
            {/* Total courses: {courses.length}; */}
            {
                courses.map(course => <p
                    key={course.id}>
                    <Link to={`/courses/${course.id}`} className='leading-10 md:py-32'>{course.name}</Link>
                </p>)
            }

        </div>
    );
};

export default SideNav;