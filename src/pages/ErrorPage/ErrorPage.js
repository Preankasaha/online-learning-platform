import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center '>

                <button className='btn btn-warning text-blue-800 text-xl border-none mt-8'><Link to='/'>Back to Home</Link></button>
                <div className='mt-14'>
                    <img className='w-72 lg:w-96 rounded-xl' src="https://png.pngtree.com/png-vector/20220103/ourlarge/pngtree-404-error-page-not-found-png-image_4181763.png" alt="" />
                </div>

                {/* <div className='lg:text-3xl text-blue-800 '>
                    <p className=' font-extrabold'>OPPS!</p>
                    <p className='font-bold'>The Page you requested couldn't be found or doesn't exist</p>
                </div> */}

            </div>



        </div>
    );
};

export default ErrorPage;