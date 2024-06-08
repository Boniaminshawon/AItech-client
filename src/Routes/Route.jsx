import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/Authetication/SignIn";
import SignUp from "../Pages/Authetication/SignUp";
import BlogDetails from "../Components/Home/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory";
import EmployeeList from "../Pages/Dashboard/HR/EmployeeList";
import Progress from "../Pages/Dashboard/HR/Progress";
import AllEmployee from "../Pages/Dashboard/Admin/AllEmployee";
import EmployeeRoute from "./EmployeeRoute";
import HrRoute from "./HrRoute";
import AdminRoute from "./AdminRoute";
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
                element: <ContactUs></ContactUs>
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
                path: '/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // for employee
            {
                path: 'work-sheet',
                element: <EmployeeRoute><WorkSheet></WorkSheet></EmployeeRoute>
            },
            {
                path: 'payment-history',
                element: <EmployeeRoute><PaymentHistory></PaymentHistory></EmployeeRoute>
            },

            // for HR
            {
                path: 'employee-list',
                element: <HrRoute><EmployeeList></EmployeeList></HrRoute>
            },
            {
                path: 'progress',
                element: <HrRoute><Progress></Progress></HrRoute>
            },
            // for admin
            {
                path: 'all-employee-list',
                element: <AdminRoute><AllEmployee></AllEmployee></AdminRoute>
            }


        ]
    }
]);
export default router;