import { Link, NavLink, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Nav = () => {
    const {pathname} = useLocation();
    return (
        <div className={`navbar ${pathname === '/home'? 'bg-banner' : 'bg-transparent'} rounded-t-lg mt-8`}>
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
                        <li><NavLink to='/upcoming-products'>Upcoming Products</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className={`btn ${pathname === '/home'? 'text-white' : 'text-black'} btn-ghost text-xl`}>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/statistic'>Statistic</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='/upcoming-products'>Upcoming Products</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-6">
                    <Link to='/dashboard' className="cursor-pointer"><FaCartShopping className="p-3 h-10 w-10 bg-white rounded-full  text-black border-2 border-purple-500" /></Link>
                    <Link to='/dashboard' className="cursor-pointer"><FaHeart className="p-3 h-10 w-10 bg-white rounded-full  text-black border-2 border-purple-500" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;