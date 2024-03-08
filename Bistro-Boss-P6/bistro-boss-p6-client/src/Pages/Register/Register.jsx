import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Register = () => {

    const axiosPublic = useAxiosPublic()

    const {register,handleSubmit,reset,formState: { errors },} = useForm()

    const {createUser,updateUserProfile} = useContext(AuthContext);

    const navigate = useNavigate()
    
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photo)
                .then(()=>{
                    //create user entry in the database
                    const userInfo ={
                        name: data.name,
                        email:data.email
                    }
                    axiosPublic.post('/users',userInfo)
                    .then(res=>{
                        if(res.data.insertedId){
                            console.log('user added to the database');
                            reset()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User created successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                })
                .catch(error=>{
                    console.log(error);
                })
        })
    }
    

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} name="name" type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input {...register("photo", { required: true })} type="text" placeholder="PhotoURL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email",{ required: true })} name="email" type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password",{ required: true,
                                    minLength:6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8}/
                                 })} name="password" type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase,one number,one special characters,one lowercase</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign Up" />
                            </div>
                        </form>
                        <p className='px-6'><small>Already have an account <Link to='/login'>Login</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;