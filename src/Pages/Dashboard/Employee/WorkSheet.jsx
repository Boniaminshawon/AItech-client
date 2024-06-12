import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";



const WorkSheet = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [workInfos, setWorkInfos] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: workInfo = [], refetch } = useQuery({
        queryKey: ['workInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee-work-info/${user?.email}`);
            return setWorkInfos(res.data.reverse(workInfo));
        },

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const date = startDate;
        const task = form.task.value;
        const hour = form.hour.value;
        const email = user?.email;
        const name= user?.displayName;
        const info = { date, task, hour,email, name }
        try {
            const { data } = await axiosSecure.post('/employee-work-info', info);

            if (data.insertedId) {
                swal("Wow!", "Registered successfully!  ", "success");
                refetch();

            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div >
            <div className=" font-primary">
                <div className=" flex justify-center flex-col items-center">
                    <p className="text-center text-3xl font-semibold  text-[#263045] "> <span className=" text-[#2d4a8a] font-secondary"><i>Work Sheet Form </i></span></p>
                    <p className="border-[3px]  rounded-b-lg border-[#2D4A8A] w-[100px] mt-4"></p>
                </div>
                <form onSubmit={handleSubmit} className="flex justify-between items-end mt-10">

                    <label>
                        <span className="text-xl font-bold">Date</span>
                        <br />
                        <DatePicker className="border pl-4 text-xl py-[9px] mt-2" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </label>

                    <label >
                        <span className="text-xl font-bold">Task</span>
                        <select defaultValue={'default'} required name="task"

                            className="select select-bordered w-full text-xl  rounded mt-2">
                            <option disabled value={'default'} className="text-xl ">Select One</option>
                            <option value="Sales">Sales</option>
                            <option value="Support">Support</option>
                            <option value="Content">Content</option>
                            <option value="Paper-Work">Paper-Work</option>
                        </select>
                    </label>
                    <label>
                        <span className="text-xl font-bold">Worked Hour</span><br />
                        <input required className="input input-bordered rounded mt-2" min={0} type="number" name="hour" id="" placeholder="Hours" />
                    </label>

                    <input className="input input-bordered rounded btn text-white bg-[#2D4A8A]" type="submit" value="Submit" />
                </form>
            </div>

            <div className="divider my-12"></div>
            {/* work sheet table */}
            <div>
                <div className=" flex justify-center flex-col items-center">
                    <p className="text-center text-3xl font-semibold  text-[#263045] "> <span className=" text-[#2d4a8a] font-secondary"><i>Work Sheet Table </i></span></p>
                    <p className="border-[3px]  rounded-b-lg border-[#2D4A8A] w-[100px] mt-4"></p>
                </div>
                <div>
                    <div className="overflow-x-auto mt-8">
                        <table className="table text-base">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-bold font-primary">
                                    <th></th>
                                    <th>Date</th>
                                    <th>Task</th>
                                    <th>Worked Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    workInfos.map((item, index) => <tr key={item._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>
                                            {new Date(item.date).toLocaleDateString()}</td>
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

export default WorkSheet;