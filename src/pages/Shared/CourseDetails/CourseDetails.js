import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
// import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";

// const ref = React.createRef();
const CourseDetails = () => {
    const checkout = useLoaderData();
    console.log(checkout);
    const { name, description, duration, image, lesson, price, rating } = checkout;
   
    return (
        // <div ref={ref}>
        //     <Pdf targetRef={ref} filename="course-details.pdf">
        //         {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        //     </Pdf>
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

                        <div className="card-actions justify-end">
                            <Link to={`/checkout/${checkout.id}`}><button className="btn btn-outline btn-accent ">Get Premium Courses</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        // </div>

    );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<CourseDetails />, rootElement);
export default CourseDetails;