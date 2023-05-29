import { Link } from "react-router-dom";
import img from '../../assets/others/authentication2.png'
import imgBg from '../../assets/others/authentication.png'
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const {CreateUserWithEmail}=useContext(AuthContext)
    const onSubmit = data => {
        CreateUserWithEmail(data.email,data.password)
        .then(res=>{
            const loggedUser= res.user;
            console.log(loggedUser)
            Swal.fire(
                'Account Create SuccessFuly!',
                'You clicked the button!',
                'success'
              )

        })
        .catch(error=>{
            toast(error.message)
        })
        reset()
    };
    return (
        <div style={{ backgroundImage: `url(${imgBg})` }}>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <ToastContainer/>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                       <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 md:w-1/2 pt-4">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Type here" className="input input-bordered"
                                    {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="example@email.com" className="input input-bordered" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-red-600">email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="Enter your password" className="input input-bordered" 
                                    {...register("password",{ required: true,
                                     minLength: 6,
                                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    />
                                    {errors.password && <span className="text-red-600">Password field is required</span>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be six character .</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must one uppercase, and on lower case, and one number and special character.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] border-none" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-[#D1A054] pb-4 text-center text-xl'>Already registered? <Link to='/login'>Go to log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;