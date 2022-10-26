import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkoutDetails = useLoaderData();
    console.log(checkoutDetails);
    const { id, name, price } = checkoutDetails;
    return (
        <div>

            <div className="card w-full bg-accent text-primary-content">
                <div className="card-body">
                    <p className='text-2xl'>You have successfully enrolled for {name} course.Detail Info is here:</p>
                    <h2 className="card-title">Course Id: {id}</h2>
                    <h2 className="card-title">Course name: {name}</h2>
                    <p>You have paid: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;