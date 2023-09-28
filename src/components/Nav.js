import { NavLink } from 'react-router-dom';
import mic from '../images/mic.jpg'
import { BiSearchAlt2 } from 'react-icons/bi';
import {BiSolidUserCircle} from 'react-icons/bi';
import {FaPhone} from 'react-icons/fa'

const Nav =()=>{
    // const matchHome = useMatch('/');
    // const matchServices = useMatch('/Services');
    // const matchProjects = useMatch('/Projects');
    // const matchSkills = useMatch('/Skills');
    // const matchContact = useMatch('/Contact');
    

    
    return(
        
        <>
            <header className=' flex flex-col pr-3 sm:pr-0 h-[5rem] bg-wheat pt-3 px-2 '>
                <div className='flex justify-between'>
                <NavLink to="/" className='w-[20rem] flex gap-[20px]'>
                    
                    <img src={mic} alt="logo" className='w-[40px] h-[40px] rounded-full '/>
                    <span className='bg-gradient-to-r from-rebeccapurple to-orangered text-transparent bg-clip-text text-3xl font-bold'>C.E</span>
                   
                </NavLink>
                <nav className='flex flex-col text-lg md:flex-row sm:margin-auto h-fit md:w-[60%] justify-between z-10  ' style={{fontFamily: 'cursive'}}>
                    <NavLink  className={({ isActive }) =>
              isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
            } to="/">Home</NavLink>
                    <NavLink  className={({ isActive }) =>
              isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
            } to="/Services">Services</NavLink>
                    <NavLink  className={({ isActive }) =>
              isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
            } to="/Skills">Skills</NavLink>
                    <NavLink  className={({ isActive }) =>
              isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
            } to="/Projects">Projects</NavLink>
                    <NavLink  className={({ isActive }) =>
              isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
            } to="/Contact">Contact</NavLink>
            <div className='flex w-[20%] my-auto justify-between px-2 '>
                <BiSearchAlt2 className='text-stone-500 hover:text-black text-xl hover:cursor-pointer' />
                <BiSolidUserCircle className='text-stone-500 hover:text-black text-xl hover:cursor-pointer' />
                <FaPhone className='text-stone-500 hover:text-black text-xl hover:cursor-pointer' />
            </div>
                </nav>
                </div>
                <input type='search' className='mx-auto w-[60%] text-lg my-3 rounded-3xl px-3 py-1 shadow-md z-10 outline-none' placeholder= 'Search' style={{display:'none'}} />
            </header>
            
        </>
    )
};

export default Nav;