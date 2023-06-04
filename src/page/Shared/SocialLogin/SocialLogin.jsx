import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/"

    const { googleLogin, facebookLogin, githubLogin } = useContext(AuthContext);
    // google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const loggedUser=res.user;
                toast('Google Login Successfully')
                const savedUser = {name: loggedUser.displayName, email: loggedUser.email}
                        fetch('https://bistro-boss-server-phi.vercel.app/user',{
                            method: 'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                navigate(form, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                toast('Something wrong')
            })
    }
    // facebook Login
    const handleFacebookLogin = () => {
        facebookLogin()
            .then((res) => {
                toast('Facebook Login Successfully')
                const loggedUser=res.user;
                toast('Google Login Successfully')
                const savedUser = {name: loggedUser.displayName, email: loggedUser.email}
                        fetch('https://bistro-boss-server-phi.vercel.app/user',{
                            method: 'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                navigate(form, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                toast('Something wrong')
            })
    }
    // github login
    const handleGithubLogin = () => {
        githubLogin()
            .then((res) => {
                toast('Github Login Successfully')
                const loggedUser=res.user;
                toast('Google Login Successfully')
                const savedUser = {name: loggedUser.displayName, email: loggedUser.email}
                        fetch('https://bistro-boss-server-phi.vercel.app/user',{
                            method: 'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                navigate(form, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                toast('Something wrong')
            })
    }
    return (
        <div>
            <ToastContainer />
            <div className="divider">OR Sign Up With</div>
            <div className="flex justify-center items-center gap-6 py-4">
                <button onClick={handleFacebookLogin} className="btn btn-circle btn-outline text-2xl">
                    <FaFacebook />
                </button>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline text-2xl">
                    <FaGoogle />
                </button>
                <button onClick={handleGithubLogin} className="btn btn-circle btn-outline text-2xl">
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;