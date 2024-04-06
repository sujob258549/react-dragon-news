import { FaArrowLeft  } from "react-icons/fa";
import HeaderImage from "../Home/HeaderImageaAndtext";
import SosalPart from "../Home/SosalPart";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const [allnews, setAllnews] = useState([]);
    const [slise, setslice] = useState(1);
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setAllnews(data))
    }, [])
    return (
        <div className="w-[90%] mx-auto py-20">
            <HeaderImage className='shadow-2xl'></HeaderImage>
            <div className="flex md:flex-row flex-col gap-5 py-10 md:py-20">
                <div className="w-full md:w-[60%] lg:w-[70%] shadow">
                    <div>
                        <h2 className="text-xl font-bold ml-5 pt-8">Dragon News </h2>
                        {
                            allnews.slice(0, slise).map(singelNews => (
                                <div key={singelNews._id} className='border-2  m-6'>
                                    <div className='flex justify-between py-5 mb-5 bg-slate-300 items-center px-5'>
                                        <div className='flex gap-5'>
                                            <img className='w-16 rounded-full' src={singelNews.author.img} alt="" />
                                            <div>
                                                <p className='text-xl font-semibold'>{singelNews.author.name}</p>
                                                <p>{singelNews.author.published_date}</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-5'>
                                            <CiBookmark className='text-2xl'></CiBookmark> <CiShare2 className='text-2xl'></CiShare2>
                                        </div>
                                    </div>
                                    <h2 className='text-xl px-5 font-semibold'>{singelNews.title}</h2>
                                    <img className='px-5 pt-5 w-full' src={singelNews.image_url} alt="" />
                                    <p className=' mb-5 p-5'>{singelNews.details}</p>

                                    <div className="flex gap-2 bg-[#D72050] py-2 w-60 text-white ml-5 mb-5 rounded-sm px-5 items-center">
                                        <FaArrowLeft></FaArrowLeft>
                                       <Link to={'/'}>  <p className="">All news in this category</p></Link>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="flex justify-center py-10">
                            <button onClick={() => setslice(allnews.length)} className="btn btn-primary text-xl font-medium">Show All News</button>
                        </div> */}
                    </div>
                </div>
                <div className="w-full md:w-[40%] lg:w-[30%] shadow p-5"><SosalPart></SosalPart></div>
            </div>
        </div>
    );
};

export default About;