import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="min-h-screen w-[20%] bg-[#2D4A8A]">
                {/* content */}
               
            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;