
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const News = () => {
    const [allnews, setAllnews] = useState([]);
    const [slise, setslice] = useState(2);
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setAllnews(data))
    }, [])
    console.log(allnews)

    return (
        <div>
            <h2 className="text-xl font-bold">Dragon News Home</h2>
            {
                allnews.slice(0, slise).map(singelNews => (
                    <div key={singelNews._id} className='border-2 mt-10'>
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
                        <img className='px-5 pt-5' src={singelNews.image_url} alt="" />
                        <p className=' mb-5 p-5'>{singelNews.details.slice(0,260)}...<Link className='text-xl font-bold text-[#FF8C47]'>Read More</Link></p>
                        <hr />
                        <div className='flex justify-between py-8 px-5'>
                            <div className='flex gap-3'>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>{singelNews.rating.number}</p>

                            </div>
                            <div className='items-center flex gap-2'>
                                <FaEye className='text-xl '> </FaEye>
                                <p>{singelNews.total_view}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="flex justify-center py-10">
            <button onClick={()=>setslice(allnews.length)} className="btn btn-primary text-xl font-medium">Show All News</button>
            </div>
        </div>
    );
};

export default News;