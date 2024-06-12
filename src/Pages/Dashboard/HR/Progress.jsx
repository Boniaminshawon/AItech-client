import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Progress = () => {
    const options = { month: 'long' };
    const [workInfos, setWorkInfos] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { data: workInfo = [], refetch } = useQuery({
        queryKey: ['workInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee-work-info`);
            return setWorkInfos(res.data.reverse(workInfo));
        },

    });
    console.log(workInfos)
    return (
        <div>
          
            {/* employees work record table */}
            <div>
                <div className=" flex justify-center flex-col items-center">
                    <p className="text-center text-3xl font-semibold  text-[#263045] "> <span className=" text-[#2d4a8a] font-secondary"><i>Employees Work record Table </i></span></p>
                    <p className="border-[3px]  rounded-b-lg border-[#2D4A8A] w-[100px] mt-4"></p>
                </div>
                <div>
                    <div className="overflow-x-auto mt-8">
                        <table className="table text-base">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-bold font-primary">
                                    <th></th>
                                    <th>Month</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Task</th>
                                    <th>Worked Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    workInfos.map((item, index) => <tr key={item._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>
                                        {new Date(item.date).toLocaleDateString('en-US', options)}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.task}</td>
                                        <td>{item.hour} Hour</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Progress;