import logoimage from '../../src/assets/logo.png'
import moment from 'moment';
const HeaderImage = () => {
    return (
        <div >

            <div className=' w-full'>
                <img className='mx-auto' src={logoimage} alt="" />
                <div className='text-center pt-3'>
                    <p className='text-[18px] py-2'>Journalism Without Fear or Favour</p>
                    <p className='text-xl font-medium font-poppins'>{moment().format("dddd, MMMM ,d, YYYY")}</p>
                </div>
            </div>


        </div>
    );
};

export default HeaderImage;