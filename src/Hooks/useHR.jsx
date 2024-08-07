import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useHR = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isHR, isPending: isHRLoading } = useQuery({
        queryKey: [user?.email, 'isHR'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
          
            const res = await axiosSecure.get(`/user/HR/${user?.email}`);
            return res.data?.HR;
        }
    });
    return [isHR, isHRLoading]
};

export default useHR;