import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Blog from "../Components/Home/Blog";
import Services from "../Components/Home/Services";
import Testimonial from "../Components/Home/Testimonial";
import WorkProcess from "../Components/Home/WorkProcess";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const Home = () => {
    const { user, logOut } = useAuth();
    const axiosPublic = useAxiosPublic();
    // const axiosSecure= useAxiosSecure();
    const navigate = useNavigate();

    const { data: person = [], refetch } = useQuery({
        queryKey: ['person'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`users/${user?.email}`);
            return data;
        }
    });

    useEffect(() => {
        refetch()
        if (person.isFired === true) {

            navigate('/signIn');

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sorry! You are fired by admin!",
                footer: 'you can not open your account'
            });
            logOut();
        }

    }, [logOut, person.isFired, navigate])

    return (
        <div>
            <Helmet>
                <title>Home - AItech</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <WorkProcess></WorkProcess>
            <Blog></Blog>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;