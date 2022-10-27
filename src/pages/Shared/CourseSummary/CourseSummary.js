import React from 'react';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
  
    const { name, image, duration } = course;


    return (
        <div className='grid cols-span-2 my-8'>
            <div className="card md:w-96 bg-base-800 shadow-xl hover:shadow-2xl shadow-fuchsia-300 hover:shadow-amber-500 image-full border-none" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold tracking-wide">Course Title: {name}</h2>
                    <p className='text-xl font-semibold '>Course Duration: {duration}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/courses/${course.id}`}><button className="btn btn-outline btn-accent ">Details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSummary;