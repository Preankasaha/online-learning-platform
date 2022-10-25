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
        <div className='hidden lg:block bg-accent rounded '>
            Total courses: {courses.length};
            {
                courses.map(course => <p
                    key={course.id}>
                    <Link to={`/courses`}>{course.name}</Link>
                </p>)
            }

        </div>
    );
};

export default SideNav;