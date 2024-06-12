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
        <div className="bg-[#f7f9fe] font-primary pt-6 md:pt-10 lg:pt-16">

            <div className=" flex justify-center flex-col items-center">
                <p className="text-[#2d4a8a] font-medium text-center md:text-xl text-lg mb-1 md:mb-2">We Make Connections</p>
                <p className="text-center md:text-4xl text-[26px] font-bold  text-[#263045] ">We Provide Best <span className=" text-[#2d4a8a] font-secondary"><i>Services </i></span></p>
                <p className="border-[3px]  rounded-b-xl border-[#2D4A8A] w-[110px] mt-2 md:mt-4"></p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:mt-2">
                {
                    services?.map(service => <div key={service?._id} className="md:p-4 lg:p-7 p-5 bg-[#FFFFFF] border  border-dotted hover:bg-[#2d4a8a] hover:text-[#ffffff] hover:border-white md:mt-5 lg:mt-8 mt-2">
                        <h2 className="font-bold lg:text-[26px] md:text-[22px] text-xl  ">{service?.service_name}</h2>
                        <p className="lg:text-lg text-base my-1 md:my-3">{service?.description}</p>
                        <img className="md:w-[65px] md:h-[65px] h-[52px] w-[52px] mb-4" src={service?.img} alt="" />
                        <button className="py-2 md:px-3 px-2  border hover:bg-white hover:text-[#2d4a8a] bg-[#2d4a8a] text-white rounded font-medium">Explore More</button>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Services;