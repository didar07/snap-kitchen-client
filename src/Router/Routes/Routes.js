import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllService from "../../Pages/Home/Services/AllService";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservice',
                element: <AllService></AllService>
            },
            {
                path: 'servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/allservice/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default router