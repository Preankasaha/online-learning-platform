import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
   
    return (

        <div className='md:flex flex-row w-100% gap-x-48 justify-center items-center  text-blue-800 bg-accent p-3.5'>

            <div className="info-container font-semibold md:text-3xl" data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <h4>
                    <span style={{ color: 'black', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['NEVER LIMIT LEARNING!',
                                'DEEP DIG TO YOUR PASSION!', 'YOU CAN FIND HERE YOUR DESIRED COURSE']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                </h4>
                <h5>HURRY UP! GRAB NOW!</h5>
                <Link className='bg-fuchsia-500 mt-2 rounded text-center' to='/courses'>COURSES HERE</Link>
            </div>

            <div className="img-container">

                <img className='h-80 rounded-xl lg:w-full' src="https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?w=2000" alt=""
                    data-aos="flip-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                />
            </div>
            

        </div>
    );
};

export default Home;