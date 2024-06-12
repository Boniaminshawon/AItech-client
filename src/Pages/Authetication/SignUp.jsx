import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile, setUser } = useAuth();
    const isVarified= false;
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {

        const { name, email, role, designation, bank_Ac, salary, image, password } = data;


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character.');
            return;
        }
        // else if (!/[a-z]/.test(password)) {
        //     setRegisterError('Your password should have at least one lowercase character.');
        //     return;
        // }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError('Your password should have at least one spacial character.');
            return;
        }
        setRegisterError('');

        // image upload to imgbb
        const imageFile = { image: image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res)
        if (res.data.success) {
            const userInfo = {
                name, email, role,isVarified, designation, bank_Ac, salary, image: res.data.data.display_url
            }
       

            try {
                const result = await createUser(email, password);
                console.log('create user', result)
                const { data } = await axiosPublic.post('/user', userInfo);
                console.log(data)
                if (data.insertedId) {
                    console.log('okk')
                    const user = result.user;
                    swal("Wow!", "Registered successfully!  ", "success");


                    setTimeout(() => {
                        if (user) {
                            navigate('/')
                        }
                    }, 2000);


                }

                await updateUserProfile(name, res.data.data.display_url)
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })

                setUser({ ...result?.user, photoURL: res.data.data.display_url, displayName: name });
                // reset field
                reset();
            } catch (error) {
                swal("Oops!", "Your email already have used!", "error");

            }
        }


    };
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/V91Nj72/col-bgimage-1.jpg")' }} className=" bg-opacity-100 flex justify-center bg-no-repeat bg-center bg-cover ">

            <div className="md:hero w-full lg:min-h-screen mt-[80px] ">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0 lg:w-[620px] w-full shadow-2xl  bg-base-100 opacity-80">
                        <div className="text-center ">
                            <h1 className="md:text-4xl text-[28px] mt-5 font-bold font-primary">Sign Up now!</h1>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* ijhgi */}


                            {/* name and email */}
                            <div className="flex md:flex-row flex-col md:gap-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium">Name <span className="text-red-500 font-bold">*</span></span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium">Email <span className="text-red-500 font-bold">*</span></span>
                                    </label>
                                    <input type="email" placeholder="Your email" className="input input-bordered"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                                </div>
                            </div>



                            {/* role and designation */}
                            <div className="flex md:flex-row flex-col md:gap-8">
                                <label className="form-control w-full">
                                    <div className="label ">
                                        <span className="label-text text-lg font-medium">Your Roles <span className="text-red-500 font-bold">*</span></span>

                                    </div>
                                    <select defaultValue={'default'} required
                                        {...register("role", { required: true })}
                                        className="select select-bordered w-full ">
                                        <option disabled value={'default'}>Select a category</option>
                                        <option value="HR">HR</option>
                                        <option value="Employee">Employee</option>

                                    </select>
                                    {errors.role && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                                </label>

                                <label className="form-control w-full">
                                    <div className="label ">
                                        <span className="label-text text-lg font-medium">Your Designations <span className="text-red-500 font-bold">*</span></span>

                                    </div>
                                    <select defaultValue={'default'} required
                                        {...register("designation", { required: true })}
                                        className="select select-bordered w-full ">
                                        <option disabled value={'default'}>Select a category</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Cloud Engineer">Cloud Engineer</option>
                                        <option value="Wev Developer">Wev Developer</option>
                                        <option value="App Developer">App Developer</option>
                                        <option value="E-Commerce Developer">E-Commerce Developer</option>
                                        <option value="UI/UX designer">UI/UX designer</option>
                                        <option value="IT Consultant">IT Consultant</option>
                                        <option value="Cyber Security Engineer">Cyber Security Engineer</option>


                                    </select>
                                    {errors.designation && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                                </label>
                            </div>

                            {/*  bank account and salary */}
                            <div className="flex md:flex-row flex-col md:gap-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium">Bank Account No. <span className="text-red-500 font-bold">*</span></span>
                                    </label>
                                    <input type="number" placeholder="Your Bank AC No." className="input input-bordered"
                                        {...register("bank_Ac", { required: true })}
                                    />
                                    {errors.bank_Ac && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium">Salary <span className="text-red-500 font-bold">*</span></span>
                                    </label>
                                    <input type="number" placeholder="Your Name" className="input input-bordered" min="10" max="500"
                                        {...register("salary", { required: true })}
                                    />
                                    {errors.salary && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                                </div>
                            </div>

                            {/* row */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Photo <span className="text-red-500 font-bold">*</span></span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full "
                                    {...register("image", { required: true })} />

                                {errors.image && <span className="text-red-500 mt-2 text-lg">This field is required</span>}



                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password <span className="text-red-500 font-bold">*</span></span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input  input-bordered"
                                    {...register("password", { required: true })}
                                />
                                <div className="relative">
                                    <span className="text-2xl absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }

                                    </span>
                                </div>

                                {registerError && <p className="text-red-500  font-primary text-lg mt-1">{registerError}</p>}

                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className=" text-white font-secondary text-2xl  font-bold btn hover:bg-[#525fd7] bg-[#2d4a8a] " value="Registration" />
                            </div>
                        </form>
                        <div className="md:px-8 px-4 pb-7 font-primary text-center font-medium text-lg md:text-2xl">
                            <p>Already have account? Please <Link className="underline text-[#2d4a8a] font-semibold text-xl md:text-2xl" to={'/signIn'}>Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;