import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../pages/Courses/Courses';
import Header from '../pages/Shared/Header/Header';
import SideNav from '../pages/Shared/SideNav/SideNav';

const Main = () => {

    return (
        <div>
            <Header></Header>

            <div className='bg-gray-500 mr-4 ml-4'>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-span-1'>
                        <SideNav></SideNav>

                    </div>

                    <div className='col-span-2'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;