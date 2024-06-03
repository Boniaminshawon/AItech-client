import Banner from "../Components/Home/Banner";
import Blog from "../Components/Home/Blog";
import Services from "../Components/Home/Services";
import Testimonial from "../Components/Home/Testimonial";
import WorkProcess from "../Components/Home/WorkProcess";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WorkProcess></WorkProcess>
            <Blog></Blog>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;