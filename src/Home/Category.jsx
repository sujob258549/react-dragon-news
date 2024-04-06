import { useEffect, useState } from "react";
import image1 from '.././assets/1.png'
import image2 from '.././assets/2.png'
import image3 from '.././assets/3.png'
import { CiCalendar } from "react-icons/ci";
import moment from "moment";

const Category = () => {
    const [catarorys, setcatagorys] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setcatagorys(data))
    }, [])
    return (
        <div>
            <h1 className="font-bold text-xl mb-4">All Caterogy</h1>
            {
                catarorys.map(catarory => (
                    <li className="list-none text-xl font-medium py-3 rounded-sm px-5 hover:font-bold hover:bg-slate-300" key={catarory.id}>{catarory.name}</li>
                ))
            }

            <div>
                <div className="py-5">
                    <img src={image2} alt="" />
                    <p className="text-xl pt-5 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div>
                        <div className="flex justify-between my-5">
                            <p className="text-sm font-medium">Sports</p>
                            <p className="flex gap-3 text-[#9F9F9F] items-center"><CiCalendar></CiCalendar>{moment().format("MMM Do YY")}</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="py-5">
                    <img src={image3} alt="" />
                    <p className="text-xl pt-5 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div>
                        <div className="flex justify-between my-5">
                            <p className="text-sm font-medium">Sports</p>
                            <p className="flex gap-3 text-[#9F9F9F] items-center"><CiCalendar></CiCalendar>{moment().format("MMM Do YY")}</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="py-5">
                    <img src={image1} alt="" />
                    <p className="text-xl pt-5 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div>
                        <div className="flex justify-between my-5">
                            <p className="text-sm font-medium">Sports</p>
                            <p className="flex gap-3 text-[#9F9F9F] items-center"><CiCalendar></CiCalendar>{moment().format("MMM Do YY")}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Category;