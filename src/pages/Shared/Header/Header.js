import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [text, setText] = useState('light');

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleToggle = () => {
        text === 'light' ?
            setText('dark')
            :
            setText('light')
    }
    return (

        <div className="navbar bg-neutral text-accent md:text-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral w-52">
                        <Link to='/courses'>Courses</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                        {
                            user?.uid ?
                                <>
                                    <Link onClick={handleLogOut} className="btn btn-outline btn-accent">Sign Out</Link>
                                </>
                                :
                                <>
                                    <Link to='/registration' className="btn  btn-xs btn-outline btn-accent mb-2">Sign Up</Link>

                                    <Link to='/login' className="btn btn-xs btn-outline btn-accent">Sign In</Link>
                                </>
                        }
                    </ul>
                </div>
                <img className='bg-accent text-accent w-4 md:w-14 rounded-full' src='https://w7.pngwing.com/pngs/21/302/png-transparent-presentation-diagram-brand-e-learning-text-service-presentation-thumbnail.png'></img>
                <Link to='/' className="btn btn-ghost hover:btn-accent normal-case md:text-2xl">e-Learning</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className='mr-4' to='/courses'>Courses</Link>
                    <Link className='mr-4' to='/faq'>FAQ</Link>
                    <Link to='/blog'>Blog</Link>
                </ul>
            </div>

            <div className="navbar-end">
                <div className='mr-2'>
                    <span className='mr-1'>{text}</span>
                    <button onClick={handleToggle} className=" rounded bg-accent text-white">Toggle</button>
                </div>
                {user?.photoURL ?
                    <div className="tooltip tooltip-left tooltip-accent" data-tip={user.displayName}>
                        <figure><img style={{ height: '30px' }} className='rounded-full mr-1' src={user?.photoURL} alt="" /></figure>
                    </div>

                    :
                    <FaUser></FaUser>
                }
                {
                    user?.uid ?
                        <>
                            <Link onClick={handleLogOut} className="btn btn-outline btn-accent text-xl hidden lg:flex">Sign Out</Link>
                        </>
                        :
                        <>
                            <Link to='/registration' className="btn  md:btn-md btn-outline btn-accent text-xl mx-2 hidden lg:flex">Sign Up</Link>

                            <Link to='/login' className="btn md:btn-md btn-outline btn-accent text-xl mx-2 hidden lg:flex">Sign In</Link>
                        </>
                }

            </div>

        </div>

    );
};

export default Header;