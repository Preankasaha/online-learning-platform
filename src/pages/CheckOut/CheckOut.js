import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const checkoutDetails = useLoaderData();

    const { id, name, price } = checkoutDetails;
    const { user } = useContext(AuthContext);
    return (
        <div className='mx-4 my-8'>
            <div className="card w-full bg-accent text-dark"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="card-body">
                    <h2 className='text-xl font-bold'>Name: {user.displayName}</h2>
                    <p className='text-2xl font-bold'>Welcome {user.displayName}!!!</p>
                    <p className='text-2xl font-bold'>You have successfully enrolled for {name} course.</p>
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