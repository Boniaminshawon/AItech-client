import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useEmployee from "../Hooks/useEmployee";
import Loader from "../Components/Loader";


const EmployeeRoute = ({ children }) => {
    const [isEmployee, isEmployeeLoading] = useEmployee();
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading || isEmployeeLoading) {
        return <Loader></Loader>
    }
    if (user && isEmployee) {
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;
};

export default EmployeeRoute;