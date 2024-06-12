import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsFire } from "react-icons/bs";
import Swal from "sweetalert2";
import { useState } from "react";


const AllEmployee = () => {
    const [toggle, setToggle] = useState(true);
    const [employeeData, setEmployeeData] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { data: allEmployee = [], refetch } = useQuery({
        queryKey: ['allEmployee'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('user/employee-HR');
            return data;
        }
    });

    const handleMakeHr = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do You want to make him/her HR?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sure!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/employee/hr/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Made!",
                                text: "Your decission is Succeed.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleFired = async (id) => {

        const fired = { isFired: true };
        Swal.fire({
            title: "Are you sure?",
            text: "Do You want to fire him/her?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sure!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const { data } = await axiosSecure.patch(`/fired/${id}`, fired);
                console.log(data)
                refetch();

                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Fired!",
                        text: "Your decision is Succeed.",
                        icon: "success"
                    });
                }
            }
        });
    }
    const handleModal = async (id) => {
        document.getElementById('my_modal_1').showModal();
        const { data } = await axiosSecure.get(`/employee/${id}`)
        setEmployeeData(data);
    };
    const updateSalary = async (e) => {
        e.preventDefault();
        const updatedSalary = e.target.salary.value;
        const salary = {
            updatedSalary
        }
        const { data } = await axiosSecure.patch(`/update-salary/${employeeData._id}`, salary);
        if (data.modifiedCount) {
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Success",
                text: "Your update the salary",

            });
        }

    }

    return (
        <div>

            <div>
                <div className=" flex justify-center flex-col items-center">
                    <p className="text-center text-3xl font-semibold  text-[#263045] "> <span className=" text-[#2d4a8a] font-secondary"><i>Employee Information Table</i></span></p>
                    <p className="border-[3px]  rounded-b-lg border-[#2D4A8A] w-[100px] mt-4"></p>
                    <button onClick={() => { setToggle(!toggle) }} className="btn rounded mb-2 font-third ">{toggle ? 'Table' : 'Card'}</button>
                </div>
                <div>
                    {toggle ? <div className="overflow-x-auto mt-8">
                        <table className="table text-base">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-bold font-primary">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Designation</th>
                                    <th>Salary</th>
                                    <th>Adjust Salary</th>
                                    <th>Make HR</th>
                                    <th>Fire</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allEmployee?.map((employee, index) => <tr key={employee._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.designation}</td>
                                        <td>$ {employee.salary}</td>
                                        <td><button onClick={() => handleModal(employee._id)} className="btn btn-success btn-outline rounded">Update</button></td>
                                        <td>{employee.role === 'HR' ? <span className="text-center pl-3 ">HR</span> : <button onClick={() => handleMakeHr(employee._id)} className="btn btn-outline rounded btn-success">{employee.role}</button>
                                        } </td>

                                        <td>{!employee.isFired ? <button onClick={() => handleFired(employee._id)} className=" text-orange-600 text-xl btn"><BsFire ></BsFire></button> :
                                            <span className="pl-2">Fired</span>}
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                        :
                        <div className="grid grid-cols-3 gap-5">
                            {allEmployee.map((employee) => <div key={employee._id}
                                className="border font-primary p-4 space-y-2 bg-[#f7f9fe] shadow-lg rounded">
                                <p><span className="font-bold">Name:</span> {employee.name}</p>
                                <p><span className="font-bold">Email:</span>  {employee.email}</p>
                                <p className="text-lg"><span className="font-bold">Designation:</span> {employee.designation}</p>

                                <div className="flex justify-between items-center">
                                    <p className="text-lg"><span className="font-bold">Salary: </span> $ {employee.salary}</p>

                                    <p className="text-lg"><span className="font-bold">Adjust Salary: </span> <button onClick={() => handleModal(employee._id)} className="btn ml-1 btn-success btn-outline rounded">Update</button> </p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="text-lg"><span className="font-bold">Make HR: </span>  {employee.role === 'HR' ? <span className="text-center pl-2 ">HR</span> : <button onClick={() => handleMakeHr(employee._id)} className=" ml-1 btn btn-outline text-base rounded btn-success">{employee.role}</button>
                                    }</p>

                                    <p className="text-lg"><span className="font-bold">Is Fire:</span>{!employee.isFired ? <button onClick={() => handleFired(employee._id)} className="ml-2 text-orange-600 text-xl btn"><BsFire ></BsFire></button> :
                                        <span className="pl-2">Fired</span>} </p>
                                </div>

                            </div>)}
                        </div>
                    }
                    <div>

                    </div>
                </div>
                {/* update salary modal */}

                <dialog id="my_modal_1" className="modal font-primary">
                    <div className="modal-box">

                        <form onSubmit={updateSalary}>
                            <div className="font-bold text-lg flex gap-3 mb-5">
                                <label className="flex-1">
                                    <span>Previous Salary:</span> <br />
                                    <input readOnly value={employeeData.salary} type="text" placeholder="Type here" className="input input-bordered w-[130px] " />
                                </label>

                                <label className="flex-1">
                                    <span>Update Salary:</span> <br />
                                    <input required max={500} min={employeeData.salary} name="salary" type="number" placeholder="Type here" className="input input-bordered w-[130px] " />
                                </label>


                            </div>
                            <input className="btn rounded bg-[#17b932aa] text-white" type="submit" value="Update" />
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className=" btn  rounded bg-[#f01c1ce9] text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <div>
            </div>
        </div>
    );
};

export default AllEmployee;