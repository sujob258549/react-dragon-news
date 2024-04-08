import { Link } from "react-router-dom";
import Navber from "../Home/Navber";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Firebase/FirebaseSetap";

const Logine = () => {
    const [success, setsucsess] = useState();
    const { handelLogin, user } = useContext(AuthContext);
    const [shoandHideIcone, setShoandHideIcone] = useState(false)
    const handelSubmitLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const passowrd = e.target.password.value;
        console.log(email, passowrd);
       
        handelLogin(email, passowrd)
            .then(result => {
                console.log(result)
                setsucsess('Succes your login')
            })
            .catch(error => console.error(error))

     
    }
    return (
        <div className="py-10 mx-auto max-w-[90%]">
            <Navber></Navber>
            <div>
                <div className="card shadow shrink-0 w-full md:w-[50%] lg:w-[40%]  bg-base-100 mx-auto my-10">
                    <h1 className="text-[35px] font-bold text-center pt-10">Login your account</h1>
                    <form className="card-body" onSubmit={handelSubmitLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email address</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>
                            </label>
                            <input type={shoandHideIcone ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                {
                                    shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                }
                            </div>
                        </div>
                       { user && <p className="text-xl font-medium text-green-500 text-center pt-4">{success}</p>}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white">Login</button>
                        </div>
                    </form>

                    <p className="font-semibold text-[16px] pb-10 text-center">Dont’t Have An Account ? <Link to={'/register'} className="text-[#F75B5F]">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Logine;