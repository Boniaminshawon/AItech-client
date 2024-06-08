import { FaPenNib } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";


const BlogDetails = () => {
    const blog = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
 
    return (
        <div>
        {/* <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center bg-[#faf7f2]  md:py-5 py-3 rounded font-heading my-6 md:my-10">Read about : {blog.blog_title}</h1> */}
        <div className="md:px-10 px-3 pt-24">
            <div className="lg:w-[55%]"> <img className="w-full h-[300px]" src={blog.img} alt="" /></div>
            <h3 className="font-third text-2xl md:text-3xl font-bold text-[#2D4A8A] my-5">{blog.blog_title}</h3>
          
            <div className="flex flex-wrap justify-between pt-3 space-x-2 font-medium text-lg dark:text-gray-600">
                <span className="flex items-center gap-1"><FaPenNib></FaPenNib> {blog.writer}</span>
                <span className="flex items-center gap-1"><MdDateRange></MdDateRange> {blog.date}</span>
            </div>
            <div className="border border-[#2D4A8A] my-4 md:my-7"></div>
            <p className="font-primary text-base md:text-lg">{blog.blog_description}</p>

            <div> <button className='text-white font-bold py-2 md:py-2 font-p my-10  bg-[#2D4A8A] rounded text-2xl w-full md:text-3xl' onClick={handleGoBack}>Go Back</button></div>
        </div>
    </div>
    );
};

export default BlogDetails;