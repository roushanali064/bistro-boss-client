import { FaCalendarAlt, FaHome, FaShoppingBasket, FaShoppingCart, FaWallet } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";


const DashBoard = () => {
    const [carts]=useCarts();
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054] text-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <h1 className="text-[#151515] uppercase text-lg font-bold mt-4 mx-auto"><span className="font-black text-2xl">Bistro Boss</span><br />Restaurant</h1>
                <ul className="menu p-4 w-80 text-[#151515] uppercase">
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "text-white bg-transparent" : ""
                            }
                            to='/dashboard/home'><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-white bg-transparent" : ""
                        } to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-white bg-transparent" : ""
                        } to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-white bg-transparent" : ""
                        } to='/dashboard/mycarts'><FaShoppingCart></FaShoppingCart> My Cart <span className="badge badge-secondary">+{carts?.length || 0}</span></NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-white bg-transparent" : ""
                        } to='/'><FaHome></FaHome> HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-white bg-transparent" : ""
                        } to='/menu'><GiHamburgerMenu></GiHamburgerMenu> OUR MENU</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-white bg-transparent" : ""
                        } to='/order/salad'><FaShoppingBasket></FaShoppingBasket> ORDER FOOD</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-white bg-transparent" : ""
                        } to='/dashboard/contact'>  Contact</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;