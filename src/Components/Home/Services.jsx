import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Services = () => {

    const axiosPublic = useAxiosPublic();
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services')
            return res.data;
        }
    });

    return (
        <div className="bg-[#f7f9fe] font-primary pt-16">

            <div className=" flex justify-center flex-col items-center">
                <p className="text-[#2d4a8a] font-medium text-center text-xl mb-2">We Make Connections</p>
                <p className="text-center text-4xl font-bold  text-[#263045] ">We Provide Best <span className=" text-[#2d4a8a] font-secondary"><i>Services </i></span></p>
                <p className="border-[3px]  rounded-b-xl border-[#2D4A8A] w-[110px] mt-4"></p>
            </div>
            <div className="grid grid-cols-4 mt-2">
                {
                    services?.map(service => <div key={service?._id} className="p-7 bg-[#FFFFFF] border  border-dotted hover:bg-[#2d4a8a] hover:text-[#ffffff] hover:border-white  mt-8">
                        <h2 className="font-bold text-[26px]  ">{service?.service_name}</h2>
                        <p className="text-lg my-3">{service?.description}</p>
                        <img className="w-[65px] h-[65px] mb-4" src={service?.img} alt="" />
                        <button className="py-2 px-3 border hover:bg-white hover:text-[#2d4a8a] bg-[#2d4a8a] text-white rounded font-medium">Explore More</button>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Services;