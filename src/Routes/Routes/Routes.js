import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";

import FAQ from "../../pages/FAQ/FAQ";
import Option from "../../pages/Option/Option";
import LogIn from "../../pages/Register&LogIn/LogIn/LogIn";
import Registration from "../../pages/Register&LogIn/Registration/Registration";
import CourseDetails from "../../pages/Shared/CourseDetails/CourseDetails";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/courses`)

            },


            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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
                path: '/register',
                element: <Registration></Registration>
            },

            {
                path: '/login',
                element: <LogIn></LogIn>
            }

        ]
    }
])
