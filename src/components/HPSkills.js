import skillsImg from '../illustrations/rightDesk-2.webp';
import { NavLink } from 'react-router-dom';

const HPSkills =()=>{
    return(
        <div className='my-20'>
            <div className='flex flex-col px-4'>
                <h1 className='mx-auto font-bold text-4xl '>Skills</h1>
                <div className='lg:flex justify-between '>
                    <div className='flex flex-col justify-around lg:w-[50%] mb-[20px] lg:mb-0'>
                        <div className='shadow-myShadow2 my-2 flex py-3 px-2 flex-col'>
                            <h3 className='font-semibold mx-auto underline text-xl text-mydarkblue2' style={{fontFamily:'cursive'}}>Programing Languages</h3>
                            <ul className='grid gap-4 list-disc px-4 font-semibold grid-cols-3'>
                                <li>Reactjs</li>
                                <li>javaScript</li>
                                <li>Tailwindcss</li>
                                <li>CSS</li>
                                <li>Semantic HTML</li>
                            </ul>
                        </div>
                        <div className='shadow-myShadow2 my-2 flex py-3 px-2 flex-col'>
                            <h3 className='font-semibold mx-auto underline text-xl text-mydarkblue2' style={{fontFamily:'cursive'}}>Low-Code Tools</h3>
                            <ul className='grid gap-4 list-disc px-4 font-semibold grid-cols-3'>
                                <li>Figma</li>
                                <li>Wix</li>
                                <li>Blogger</li>
                                <li>Canva</li>
                                <li>WordPress</li>
                                <li>SCRATCH</li>
                            </ul>
                        </div>
                        <button className="bg-gradient-to-r shadow-myShadow2 text-wheat from-mywall to-stone-500 px-[20px] py-1 text-xl font-semibold rounded-3xl w-fit  mx-auto my-4 " ><NavLink to="/Skills">See More</NavLink> </button>
                    </div>
                    <img src={skillsImg} alt="skills image" />
                </div>
            </div>
        </div>
    )
}
export default HPSkills;