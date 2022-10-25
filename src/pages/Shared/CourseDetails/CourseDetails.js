import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const { name, description, duration, image, lesson, price, rating } = singleCourse;
    return (
        <div className='my-5 ml-4 mr-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='border-8 border-accent rounded-l-sm h-full' src={image} alt="Album" /></figure>
                <div className="card-body bg-neutral text-accent">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <span>Total Lessons: {lesson}</span>
                        <span>Course Duration: {duration}</span>
                        <span> Price: {price}</span>
                        <span> Rating: {rating.rate}</span>
                    </div>

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;