import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../pages/Courses/Courses';
import Header from '../pages/Shared/Header/Header';
import SideNav from '../pages/Shared/SideNav/SideNav';

const Main = () => {

    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>

        </div>

    );
};

export default Main;