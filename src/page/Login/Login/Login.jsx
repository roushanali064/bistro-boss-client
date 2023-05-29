import { useContext, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';
import img from '../../../assets/others/authentication2.png'
import imgBg from '../../../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/"
    const { loginUser } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value
        const captcha = from.captcha.value;
        if (validateCaptcha(captcha)) {
            console.log(email, password, captcha)
            loginUser(email, password)
                .then(res => {
                    const loggedUser = res.user
                    console.log(loggedUser)
                    Swal.fire(
                        'Login Successful!',
                        'You clicked the button!',
                        'success'
                    )
                    navigate(form, { replace: true });
                })
                .catch(error => {
                    console.error(error.message)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Invalid User Name Or Password!",
                    })
                })
        }
        else {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Captcha did'n match!",
            })
        }

    }
    return (
        <div style={{ backgroundImage: `url(${imgBg})` }}>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 md:w-1/2 pt-10">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="example@email.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="Enter your password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <LoadCanvasTemplate />
                                <input type="text"
                                    name="captcha"
                                    placeholder="type the captcha above" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] border-none" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-[#D1A054] pb-4 text-center text-xl'>New here? <Link to='/signUp'>Create a New Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;