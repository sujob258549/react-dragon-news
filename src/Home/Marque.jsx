
const Marque = () => {
    return (
        <div className="flex bg-slate-300 p-2 items-center my-8">
            <button className="btn rounded-none  text-xl font-medium text-white bg-[#D72050]">Latest</button>
            <marquee  direction="right" className="font-semibold text-[18px]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</marquee>
        </div>
    );
};

export default Marque;