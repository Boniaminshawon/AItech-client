import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// bar chart
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const EmployeeDetails = () => {
    const employee = useLoaderData();
    const { image, name, designation, email } = employee;
    const axiosSecure = useAxiosSecure();
    const { data: salaryInfo = [], refetch } = useQuery({
        queryKey: ['salary'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/salary/${email}`);
            return res.data;
        },

    });
    console.log(salaryInfo);

    const month = 'january';
    const year = '2023';
    const monthlyYear = month.slice(0, 4) + "'" + year.slice(2, 4);
    console.log(monthlyYear)




    return (
        <div className="font-primary bg-[#f7f9fe] py-10 ">
            <h1 className="md:text-3xl text-2xl font-bold text-center">Employee Profile</h1>
            <div className="flex flex-col justify-center items-center mt-5">
                <img className="rounded-full md:w-[185px] md:h-[185px] w-[130px] h-[130px] p-2 bg-white border-[4px] border-[#d5d5d5]    hover:border-[#2d4a8a]" src={image || 'https://i.ibb.co/RzH6pLn/profile-default-icon-2048x2045-u3j7s5nj.png'} alt="" />
                <p className="md:text-xl text-lg mt-4 mb-1"><span className="font-bold">Name:</span> {name}</p>
                <p className="md:text-xl text-lg"><span className="font-bold">Designation:</span> {designation}</p>

            </div>
            <div className=" pt-10">
                <p className="text-center md:text-3xl text-[22px] font-semibold mb-5  text-[#263045] "> A bar chart <span className=" text-[#2d4a8a] font-secondary"><i>Salary vs. Month </i></span></p>
                <div style={{ width: '100%', height: 500 }}>
               <ResponsiveContainer>
               <BarChart
                    width={1000}
                    height={500}
                    data={salaryInfo}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='monthlyYear' />

                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="monthlySalary" fill="#8884d8" label={{ position: 'top' }}>
                        {salaryInfo.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}
                    </Bar>

                </BarChart>
               </ResponsiveContainer>
               </div>

            </div>
        </div>
    );
};

export default EmployeeDetails;