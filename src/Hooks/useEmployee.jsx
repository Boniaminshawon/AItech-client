import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useEmployee = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
        queryKey: [user?.email, 'isEmployee'],
        enabled: !loading,
        queryFn: async () => {

            const res = await axiosSecure.get(`/user/employee/${user?.email}`);
            return res.data?.employee;
        }
    });
    return [isEmployee, isEmployeeLoading]
};

export default useEmployee;