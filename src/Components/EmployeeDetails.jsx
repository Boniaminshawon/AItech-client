import { useLoaderData } from "react-router-dom";


const EmployeeDetails = () => {
    const employee = useLoaderData();
    console.log(employee)
    return (
        <div>
            employesssssssssssssssss
        </div>
    );
};

export default EmployeeDetails;