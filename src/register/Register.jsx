import { Link } from "react-router-dom";
import Navber from "../Home/Navber";
import { useState } from "react";
import { FaEye ,FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [shoandHideIcone , setShoandHideIcone]= useState(false)
    return (
        <div>
            <div className="py-10 mx-auto max-w-[90%]">
                <Navber></Navber>
                <div>
                    <div className="card shadow shrink-0 w-full md:w-[50%] lg:w-[40%]  bg-base-100 mx-auto my-10">
                        <h1 className="text-[35px] font-bold text-center pt-10">Register your account</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Type your URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email address</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type={shoandHideIcone? 'text' : 'password'} placeholder="Enter your password" className="input input-bordered" required />
                                <div className="absolute right-5 bottom-4" onClick={()=>setShoandHideIcone(!shoandHideIcone)}>
                                   {
                                    shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash>:<FaEye className="text-xl"></FaEye>
                                   }
                                </div>
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Confram Password</span>
                                </label>
                                <input type={shoandHideIcone? 'text' : 'password'} placeholder="Enter your Confram password" className="input input-bordered" required />
                                <div className="absolute right-5 bottom-4" onClick={()=>setShoandHideIcone(!shoandHideIcone)}>
                                   {
                                    shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash>:<FaEye className="text-xl"></FaEye>
                                   }
                                </div>
                            </div>
                            <div className="pt-5">
                            <input type="checkbox" />
                            <span className="ml-3 font-semibold text-[16px]">Accept Term & Conditions</span>
                        </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:text-black shadow bg-[#403F3F] text-white">Register</button>
                            </div>
                        </form>
                        <p className="font-semibold text-[16px] pb-10 text-center">Alrady Have An Account ? <Link to={'/login'} className="text-[#F75B5F]">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;