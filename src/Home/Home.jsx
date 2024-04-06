
import Category from "./Category";
import HeaderImage from "./HeaderImageaAndtext";
import Marque from "./Marque";
import Navber from "./Navber";
import News from "./News";
import SosalPart from "./SosalPart";

const Home = () => {
    return (
        <div className="  max-w-[90%] mx-auto py-10">
            <HeaderImage></HeaderImage>
            <Marque></Marque>
            <Navber></Navber>
            <div className="lg:block hidden  mt-10">
                <div className="flex gap-6">
                    <div className="shadow p-5 w-[25%]"> <Category></Category> </div>
                    <div className="shadow p-5 w-[50%]"> <News></News> </div>
                    <div className="shadow p-5 w-[25%]"> <SosalPart></SosalPart> </div>
                </div>
            </div>

            <div className="block lg:hidden mt-10">
            <div className="">
                <div className="flex md:flex-row flex-col gap-5 ">
                <div className="shadow p-5 w-full md:w-[50%]"> <Category></Category> </div>
                <div className="shadow p-5 w-full md:w-[50%]"> <SosalPart></SosalPart> </div>
                </div>
                <div className="shadow mt-10 p-5 w-full"> <News></News> </div>
            </div>
            </div>

        </div>
    );
};

export default Home;