import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Option from "../../pages/Option/Option";
import LogIn from "../../pages/Register&LogIn/LogIn/LogIn";
import Registration from "../../pages/Register&LogIn/Registration/Registration";

;

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },

            {
                path: '/option/:id',
                element: <Option></Option>
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
            },
        ]
    }
])