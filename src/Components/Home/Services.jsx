import { useEffect, useState } from "react";


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
        })

    },[]);
    
    return (
        <div className="bg-[#f7f9fe] font-primary pt-16">
            <p className="text-[#2d4a8a] font-medium text-center text-xl mb-1">We Make Connections</p>
            <p className="text-center text-4xl font-bold  text-[#263045]">We provide best <span className=" text-[#2d4a8a] font-secondary"><i>Services</i></span></p>
            <div className="grid grid-cols-4 mt-2">
                {
                services?.map(service=><div key={service?.service_name} className="p-7 bg-[#FFFFFF] border  border-dotted hover:bg-[#2d4a8a] hover:text-[#ffffff] hover:border-white  mt-8">
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