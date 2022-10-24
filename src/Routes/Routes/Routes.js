import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../pages/Courses/Courses";
import Option from "../../pages/Option/Option";
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
        ]
    }
])