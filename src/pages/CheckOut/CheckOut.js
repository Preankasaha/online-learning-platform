import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkoutDetails = useLoaderData();
    console.log(checkoutDetails);
    const { id, name, price } = checkoutDetails;
    return (
        <div className='mx-4 my-8'>

            <div className="card w-full bg-accent text-dark">
                <div className="card-body">
                    <p className='text-2xl font-bold'>Welcome!!! You have successfully enrolled for {name} course.</p>
                    <p className='text-xl'>Detail Info is here:</p>
                    <h2 className="card-title font-bold">Course Id: {id}</h2>
                    <h2 className="card-title font-bold">Course name: {name}</h2>
                    <p className='text-xl font-bold'>You have paid: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;