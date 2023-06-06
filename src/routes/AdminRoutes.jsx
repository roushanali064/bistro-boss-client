import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import loadingImg from '../assets/others/loader2.gif'
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const AdminRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading]=useAdmin()
    if (loading || isAdminLoading) {
        return <>
            <div className="flex justify-center items-center h-full w-full">
                <img src={loadingImg} alt="" />
            </div>
        </>
    }

    if (user && isAdmin?.admin) {
        return children
    }

    return <Navigate to='/*'  replace></Navigate>
};

export default AdminRoutes;