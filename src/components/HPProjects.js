import sabi from '../illustrations/blog.webp';
import PEC from '../illustrations/office.png';
import classroom1 from '../illustrations/classroom-3.webp';
import classroom2 from '../illustrations/classroom-4.webp';
import mysite from '../illustrations/teaching.jpg';
// import mysite2 from '../illustrations/office-illustration-1.png';

const HPProjects =()=>{
    return(
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold mx-auto mb-4'> Our Works</h1>
            <div className='lg:grid grid-cols-2 grid-rows-3 '>
                <div className=' flex flex-col'>
                    <h3 className='font-bold mb-4 text-lg text-slate-700 dark:text-gray-300 cursor-pointer mx-auto ' style={{fontFamily:'cursive'}} >Sabi.com</h3>
                    <div className='mx-auto w-[400px] h-[400px]'>
                        <img className='rounded-full cursor-pointer' src={sabi} alt="" />
                    </div>
                    <p></p>
                </div>
                <div className='flex flex-col mt-7 lg:mt-0'>
                    <h3 className='font-bold mb-4 text-lg text-slate-700 dark:text-gray-300 cursor-pointer mx-auto ' style={{fontFamily:'cursive'}} >Phronema Eduction Consults official website</h3>
                    <div className='mx-auto w-[400px] h-[400px]'>
                        <img className='rounded-full cursor-pointer' src={PEC} alt="" />
                    </div>
                    <p></p>
                </div>
                <div className=' flex flex-col'>
                    <h3 className='font-bold mb-4 text-lg text-slate-700 dark:text-gray-300 cursor-pointer mx-auto ' style={{fontFamily:'cursive'}} >In-school I.C.T and computer science projects with students</h3>
                    <div className='mx-auto w-[400px] h-[400px]'>
                        <img className='rounded-full cursor-pointer' src={classroom1} alt="" />
                    </div>
                    <p></p>
                </div>
                <div className=' flex flex-col'>
                    <h3 className='font-bold mb-4 text-lg text-slate-700 dark:text-gray-300 cursor-pointer  mx-auto ' style={{fontFamily:'cursive'}} >Scratch programming with students</h3>
                    <div className='mx-auto w-[400px] h-[400px] dark:w-[300px] dark:h-[300px] '> 
                        <img className='rounded-full  dark:h-full cursor-pointer' src={classroom2} alt="" />
                    </div>
                    <p></p>
                </div>
                <div className='col-span-2  flex flex-col mt-7 lg:mt-0'>
                    <h3 className='font-bold mb-4 text-lg text-slate-700 dark:text-gray-300 cursor-pointer mx-auto' style={{fontFamily:'cursive'}} >My Portfolio</h3>
                    <div className='mx-auto w-[400px] h-[400px] '>
                        <img className='rounded-full  cursor-pointer' src={mysite} alt="" />
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
export default HPProjects;