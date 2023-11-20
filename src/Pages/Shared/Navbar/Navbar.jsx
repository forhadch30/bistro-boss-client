import { Link } from 'react-router-dom';
import img from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import img1 from '../../../assets/icon/correct.png'
const Navbar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><a >CONTACT US</a></li>
        <li><a>DASHBOARD</a></li>
        <div className='flex'>
            <li><a>OUR SHOP</a></li>
            <img className='w-10' src={img} alt="" />
        </div>
    </>
    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-lg bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <a className="btn btn-ghost text-xl">Bistro Boss</a>
                        <p className="ml-5">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">SIGN OUT</a>
                    <div className="w-10 rounded-full ml-2">
                        <img alt="Tailwind CSS Navbar component" src={img1} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;