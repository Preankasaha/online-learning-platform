import React from 'react';

const CourseSummary = ({ course }) => {
    console.log(course);
    const { name, image, duration } = course;
    return (
        <div className='grid cols-span-2 my-8'>
            <div className="card w-96 bg-base-100 shadow-xl shadow-violet-800 image-full border-none">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold tracking-wide">Course Title: {name}</h2>
                    <p className='text-xl font-semibold '>Course Duration: {duration}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSummary;