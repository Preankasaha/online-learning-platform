import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
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
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">e-Learning</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='mr-4' to='/'>Courses</Link>
                        <Link className='mr-4' to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>

                <div className="navbar-end">

                    {
                        user?.uid ?
                            <Link onClick={handleLogOut} to='/login' className="btn btn-outline btn-accent text-xl">Sign Out</Link>
                            :
                            <>
                                <Link to='/registration' className="btn btn-outline btn-accent text-xl mx-2">Registration</Link>

                                <Link to='/login' className="btn btn-outline btn-accent text-xl">Sign In</Link>
                            </>
                    }



                </div>
            </div>
        </div>
    );
};

export default Header;