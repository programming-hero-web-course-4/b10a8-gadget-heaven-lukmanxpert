import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Nav = () => {
    return (
        <div className="navbar bg-banner rounded-t-lg mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/statistic'>Statistic</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <a className="btn text-white btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/statistic'>Statistic</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-6">
                    <div className="cursor-pointer"><FaCartShopping className="p-3 h-10 w-10 bg-white rounded-full  text-black" /></div>
                    <div className="cursor-pointer"><FaHeart className="p-3 h-10 w-10 bg-white rounded-full  text-black" /></div>
                </div>
            </div>
        </div>
    );
};

export default Nav;