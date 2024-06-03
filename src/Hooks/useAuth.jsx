import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useAuth = () => {
    const allContext = useContext(AuthContext);
    
    return allContext;
};

export default useAuth;