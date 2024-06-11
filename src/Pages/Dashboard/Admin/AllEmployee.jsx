import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsFire } from "react-icons/bs";
import Swal from "sweetalert2";
import { space } from "postcss/lib/list";


const AllEmployee = () => {

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



        // const fired = { isFired: true };
        // const { data } = await axiosSecure.patch(`/fired/${id}`, fired);
        // console.log(data)
        // refetch();
        // if (data.modifiedCount) {
        //     Swal.fire({
        //         position: "center",
        //         icon: "success",
        //         title: "Your work has been saved",
        //         showConfirmButton: false,
        //         timer: 2000
        //     });
        // }
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
                                    <th>Designation</th>
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

                                        <td>{employee.role === 'HR' ? <span className="text-center pl-3 ">HR</span> : <button onClick={() => handleMakeHr(employee._id)} className="btn btn-outline  btn-success">{employee.role}</button>
                                        } </td>

                                        <td>{!employee.isFired ? <button onClick={() => handleFired(employee._id)} className=" text-orange-600 text-xl btn"><BsFire ></BsFire></button> :
                                            <span className="pl-2">Fired</span>}
                                        </td>




                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
            <div>
            </div>
        </div>
    );
};

export default AllEmployee;