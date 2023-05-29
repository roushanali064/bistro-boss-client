import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import loadingImg from '../assets/others/loader2.gif'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <>
            <div className="flex justify-center items-center h-full w-full">
                <img src={loadingImg} alt="" />
            </div>
        </>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;