import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const EmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const { data: employeeList = [] } = useQuery({
        queryKey: ['employeeList'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('user/employee-list');
            return data;
        }
    });
    console.log(employeeList)
    return (
        <div>
            {/* work sheet table */}
            <div>
                <div className=" flex justify-center flex-col items-center">
                    <p className="text-center text-3xl font-semibold  text-[#263045] "> <span className=" text-[#2d4a8a] font-secondary"><i>Employee Information Table</i></span></p>
                    <p className="border-[3px]  rounded-b-lg border-[#2D4A8A] w-[100px] mt-4"></p>
                </div>
                <div>
                    <div className="overflow-x-auto mt-8">
                        <table className="table text-base">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-bold font-primary">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Bank Account</th>
                                    <th>Salary</th>
                                    <th>Verified</th>
                                    <th>Pay</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    workInfos.map((item, index) => <tr key={item._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>
                                            {new Date(item.date).toLocaleDateString()}</td>
                                        <td>{item.task}</td>
                                        <td>{item.hour} Hour</td>
                                    </tr>)
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeList;