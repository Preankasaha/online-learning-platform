import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";

import FAQ from "../../pages/FAQ/FAQ";

import LogIn from "../../pages/Register&LogIn/LogIn/LogIn";
import Registration from "../../pages/Register&LogIn/Registration/Registration";
import CourseDetails from "../../pages/Shared/CourseDetails/CourseDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import { courseDataLoader } from "../../Loader/CoursesDataLoader";
import { courseDetailDataLoader } from "../../Loader/CourseDetailDataLoader";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [

            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: courseDataLoader
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: courseDetailDataLoader
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: courseDetailDataLoader
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/registration',
                element: <Registration></Registration>
            },

            {
                path: '/login',
                element: <LogIn></LogIn>
            }

        ]
    }
])
