import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from 'react-icons/fa';
import useCarts from "../../../hooks/useCarts";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [carts] = useCarts()
    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/order/salad'>ORDER FOOD</Link></li>
    </>
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast('Log Out Successful!')
            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <>
            <ToastContainer />
            <div className="navbar fixed z-10 bg-[#15151580]  text-white max-w-screen-xl py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><h1 className="uppercase text-lg font-bold"><span className="font-black text-2xl">Bistro Boss</span><br />Restaurant</h1></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/dashboard/mycarts'>
                        <button className="btn gap-2 mr-4">
                            <FaShoppingCart />
                            <div className="badge badge-secondary">+{carts?.length || 0}</div>
                        </button>
                    </Link>
                    {user ? <><h3 className="text-2xl font-bold mr-5">{user?.displayName}</h3> <button onClick={handleLogout} className="btn">Log Out</button></> : <Link className="btn" to='/login'>Login</Link>}
                </div>
            </div>
        </>
    );
};

export default NavBar;