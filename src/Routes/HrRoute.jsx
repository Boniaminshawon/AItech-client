import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
import useHR from "../Hooks/useHR";


const HrRoute = ({ children }) => {
    const [isHR, isHRLoading] = useHR();
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading || isHRLoading) {
        return <Loader></Loader>
    }
    if (user && isHR) {
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;
};

export default HrRoute;