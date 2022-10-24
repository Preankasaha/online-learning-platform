import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../pages/Courses/Courses';
import Header from '../pages/Shared/Header/Header';
import SideNav from '../pages/Shared/SideNav/SideNav';

const Main = () => {

    return (
        <div>
            <Header></Header>

            <div className='grid grid-cols-4 gap-4'>
                <div className='border-2 border-sky-100'>
                    <SideNav></SideNav>

                </div>
                <div className='grid col-span-3 gap-4 border-2 border-sky-100'>
                    <Courses></Courses>
                </div>

            </div>
        </div>
    );
};

export default Main;