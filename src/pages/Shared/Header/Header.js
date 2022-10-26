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
        <div className='mx-4'>
            <div className="navbar bg-neutral text-accent rounded text-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Courses</Link>
                            <Link to='/faq'>FAQ</Link>
                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <img src='https://png.pngtree.com/png-vector/20190719/ourmid/pngtree-e-learning-line-icon-online-internet-education-symbol-graduation-png-image_1550378.jpg' className='bg-accent text-accent w-14 rounded-full'></img>
                    <Link to='/' className="btn btn-ghost hover:btn-accent normal-case text-2xl">e-Learning</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='mr-4' to='/'>Courses</Link>
                        <Link className='mr-4' to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className='mr-2'>
                        <span className='mr-1'>{text}</span>
                        <button onClick={handleToggle} className="btn btn-xs btn-accent">Toggle</button>
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
                                <Link onClick={handleLogOut} className="btn btn-outline btn-accent text-xl">Sign Out</Link>
                            </>
                            :
                            <>
                                <Link to='/registration' className="btn btn-sm btn-outline btn-accent text-xl mx-2">Sign Up</Link>

                                <Link to='/login' className="btn btn-sm btn-outline btn-accent text-xl">Sign In</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;