import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PayModal from "../../../Components/PayModal";




const EmployeeList = () => {
    const [isVarified, setIsVarified] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { data: employeeList = [], refetch } = useQuery({
        queryKey: ['employeeList'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('user/employee-list');
            return data;
        }
    });

    const handleToggle = async (id) => {
        setIsVarified(!isVarified);
        const verified = {
            isVarified
        }
        const { data } = await axiosSecure.patch(`user/employee-list/${id}`, verified);
        refetch();
        if (data.modifiedCount) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }
    const handleModal = () => {
        document.getElementById('my_modal_1').showModal()
    }
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
                                {
                                    employeeList.map((employee, index) => <tr key={employee._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td> {employee.bank_Ac}</td>
                                        <td>{employee.salary}</td>


                                        <td> <button className="text-center btn rounded text-xl font-bold" onClick={() => { handleToggle(employee._id) }}>
                                            {employee.isVarified ? '✅' : '❌'}
                                        </button>
                                        </td>
                                        {/*  */}

                                        {/* <td className=""><Link to={`${employee._id}`}><button disabled={!employee.isVarified} onClick={handleModal} className="btn rounded bg-[#17b932aa] text-white">Pay</button></Link></td> */}
                                        <td>
                                            {!employee.isVarified?
                                            <button disabled className="btn rounded bg-[#17b932aa] text-white">Pay</button> :

                                            <button  onClick={handleModal} className="btn rounded bg-[#17b932aa] text-white">Pay</button>
                                            // <Link to={`${employee._id}`}></Link>

                                        }
                                        </td>
                                        <td ><Link to={`${employee._id}`}><button className=" btn rounded font-semibold  bg-[#2d4a8a] text-white">Details</button></Link></td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
                <PayModal></PayModal>
            </div>
            <div>
            </div>
        </div>
    );
};

export default EmployeeList;