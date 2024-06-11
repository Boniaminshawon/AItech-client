import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";


const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: salaryInfo = [], refetch } = useQuery({
        queryKey: ['salary'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/salary/${user?.email}`);
            return setPaymentHistory(res.data.reverse(salaryInfo));
        },

    });
    console.log(paymentHistory)
    return (
        <div>
             <div>
                <div className=" flex justify-center flex-col items-center">
                    <p className="text-center text-3xl font-semibold  text-[#263045] "> <span className=" text-[#2d4a8a] font-secondary"><i>Salary History Table </i></span></p>
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
                                    <th>Amount</th>
                                    <th>Transaction Id
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentHistory.map((item, index) => <tr key={item._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>
                                            {item.month}</td>
                                        <td>{item.monthlySalary}</td>
                                        <td>{item.transactionId} </td>
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

export default PaymentHistory;