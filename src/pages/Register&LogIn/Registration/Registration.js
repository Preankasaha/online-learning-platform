import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [error, setError] = useState();
    const { user, createUser, updateUserProfile } = useContext(AuthContext);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('please provide at least one uppercase letter')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            toast.error('please provide at least one special character')
            return;
        }

        console.log(name, photoURL, email, password)

        //registration
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL)

                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register Now!</h1>
                        <p className="py-6">If you are new to this site, please register first</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Fullname</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Enter photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" name='password'>Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />

                            </div>
                            <div> {error} </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                            {/* <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover text-xl">cSign In now</Link>
                            </label> */}
                            <label className="label">
                                <span>Already have an account! Plz</span>
                                <Link to='/registration' className="label-text-alt link link-hover text-xl bg-accent rounded">Register</Link>
                            </label>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;