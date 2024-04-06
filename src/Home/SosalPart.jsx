import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzoon1 from '.././assets/qZone1.png'
import qzoon2 from '.././assets/qZone2.png'
import qzoon3 from '.././assets/qZone3.png'
import { Link } from "react-router-dom";
const SosalPart = () => {
    return (
        <div>
            <h1 className="font-bold text-xl mb-4">Login with</h1>
            <button className="btn btn-outline w-full text-sm">
                <FaGoogle className="text-green-500 text-xl font-bold"></FaGoogle>
                Log with Google
            </button>
            <button className="btn btn-outline w-full mt-2">
                <FaGithub className="text-xl font-bold"></FaGithub>
                Log with Google
            </button>

            <div>
                <h2 className="text-xl font-bold my-8">Find Us On</h2>
                <div className="border rounded-sm">
                    <div className=" ">
                        <p className="flex items-center w-full p-4 font-semibold ">
                            <FaFacebook className="text-4xl text-[#3B599C] bg-slate-200 p-2 rounded-full mr-3 font-bold"></FaFacebook>
                            Log with Google
                        </p>
                        <hr />
                        <p className="flex items-center w-full p-4 font-semibold ">
                            <FaTwitter className="text-4xl text-[#58A7DE] bg-slate-200 p-2 rounded-full mr-3 font-bold"></FaTwitter>
                            Log with Google
                        </p>
                        <hr />
                        <p className="flex items-center w-full p-4 font-semibold ">
                            <FaInstagram className="text-4xl bg-slate-200 p-2 bg-gradient-to-r from-[#DF2E82] to-[#FBA756] rounded-full mr-3 font-bold"></FaInstagram>
                            Log with Google
                        </p>
                    </div>
                </div>
                <div className="bg-slate-300 pb-1 rounded mt-10">
                    <h1 className="font-bold text-xl p-5 mb-4">Q-Zone</h1>
                    <div className="bg-white  m-5">
                        <img className="p-2" src={qzoon1} alt="" />
                        <h2 className="text-xl text-center pb-7 font-bold">Swimming</h2>
                    </div>
                    <div className="bg-white  m-5">
                        <img className="p-2" src={qzoon2} alt="" />
                        <h2 className="text-xl text-center pb-7 font-bold">Class</h2>
                    </div>
                    <div className="bg-white  m-5">
                        <img className="p-2" src={qzoon3} alt="" />
                        <h2 className="text-xl text-center pb-7 font-bold">Play Ground</h2>
                    </div>
                </div>
                <div className="bg-[#05001D] pb-10 pt-5">
                    <h1 className="text-4xl font-bold text-white text-center px-5 pt-5">Create an Amazing Newspaper</h1>
                    <p className="text-xl  my-9 text-white text-center px-5 ">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div className="mx-auto text-center">
                        <Link><button className="btn bg-[#D72050] px-10 rounded-none text-xl font-semibold btn-active btn-neutral">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SosalPart;