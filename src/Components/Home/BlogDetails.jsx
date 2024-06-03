import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blog = useLoaderData();
    console.log(blog)
    return (
        <div className="min-h-screen">
            {blog.blog_title}
        </div>
    );
};

export default BlogDetails;