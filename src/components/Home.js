import HPServices from './HPServices';
import HPSkills from './HPSkills';
import HPProjects from './HPProjects';
import HPContact from './HPContact';
import {NavLink } from 'react-router-dom';
import codingDesk1 from '../illustrations/rightDesk-3.webp';
import {TypeAnimation} from 'react-type-animation';


const Home =()=>{
    return(
        <div >
            
            <div id='home' className="section flex justify-center mt-[0px] bg-no-repeat bg-center bg-cover ">
            <div className=' flex flex-col'>
                <p className='mt-[6rem]  text-xl font-semibold mr-1 mb-0'>
                    <span className='text-3xl text-green-500'>Hi,</span><br/> I'm <span className=' font-bold align-middle text-3xl bg-gradient-to-r from-rebeccapurple via-orangered to-tahiti text-transparent bg-clip-text'>CORNELIUS EGBERAMEIYE</span><br/>
                     <TypeAnimation
                        sequence={[
                            'Web Developer.', 2000,
                            'I.C.T Instructor.',2000,
                            'App Developer.',2000,
                            'Network Administrator.',2000,
                            'ERP Implementor.', 2000,
                            

                        ]}style={{fontSize : '25px', fontWeight : '800', fontFamily:'cursive'}}
                            speed={50}
                            repeat={10000}
                        
                        />
                      <br/>
                      <span>Aiming to help nuture Ideas into reality and empower others to do so as well</span>
                </p>
                <div className='flex mx-auto my-[20px]  justify-between gap-6'>
                    <button className="bg-gradient-to-r shadow-myShadow2 text-wheat from-mywall to-stone-500 px-[20px] py-1 text-xl font-semibold rounded-3xl " ><NavLink to="/Services"> Services</NavLink> </button>
                    <button className="bg-gradient-to-r shadow-myShadow2 text-wheat from-sky-400 to-green-500 px-[20px] py-1 text-xl font-semibold rounded-3xl " ><NavLink to="/Projects"> Projects</NavLink></button>
                </div>
            </div>
            <div className=''> 
                <img src={codingDesk1} alt='Hero Image' className=' rounded-bl-[100px] rounded-tr-[100px] rounded-tl-[30px] rounded-br-[30px] hidden md:flex'  />
            </div>
            </div>
            <HPServices/>
            <HPSkills/>
            <HPProjects/>
            <HPContact/>
        </div>
        
    )
};

export default Home;