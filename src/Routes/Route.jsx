import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/Authetication/SignIn";
import SignUp from "../Pages/Authetication/SignUp";
import BlogDetails from "../Components/Home/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <PrivateRoute> <ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog/:writer',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`blog.json/${params.writer}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            
           
        ]
    }
]);
export default router;