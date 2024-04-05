
import './style.css'
import { Link } from "react-router-dom";
import profile from '../assets/user.png'



const Navber = () => {
    const manuber = <>
        <Link className="text-[18px]" to={"/"}>Home</Link>
        <Link className="text-[18px]">About</Link>
        <Link className="text-[18px]" >Career</Link>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 manu z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            manuber
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 manu">
                    {
                        manuber
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-10" src={profile} alt="" />
                <Link><button className="btn px-10 ml-5 rounded-none text-xl font-semibold btn-active btn-neutral">Login</button></Link>
            </div>
        </div>
    );
};

export default Navber;