import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import mic from '../images/mic.jpg'
import { BiSearchAlt2 } from 'react-icons/bi';
import {BiSolidUserCircle} from 'react-icons/bi';
import {FaPhone} from 'react-icons/fa';
import {AiOutlineMenuFold} from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';

const Nav =()=>{
    const [open, setOpen] = useState(false);



    return(
        
        <>
            <header className=' flex flex-col pr-3 sm:pr-0 h-[5rem] bg-wheat pt-3 px-2 '>
                <div className='flex justify-between'>
                <NavLink to="/" className='w-[20rem] flex gap-[20px]'>
                    
                    <img src={mic} alt="logo" className='w-[40px] h-[40px] rounded-full '/>
                    <span className='bg-gradient-to-r from-rebeccapurple to-orangered text-transparent bg-clip-text text-3xl font-bold'>C.E</span>
                   
                </NavLink>

                <div onClick={()=>setOpen(!open)} className='mr-[10px] absolute text-3xl font-bold z-10 right-2 cursor-pointer lg:hidden md:right-8'>
                    
                    
                    {open ? <AiOutlineMenuUnfold  />:<AiOutlineMenuFold  />}
                </div>
                <nav id='navBar' className={`lg:flex flex-col text-lg lg:flex-row sm:margin-auto h-[300px] md:h-fit  md:w-[60%] justify-between z-10 ${open ? 'flex flex-col bg-wheat mt-10 p-4 rounded leading-[50px] right-0 my-auto' : 'hidden'}`} style={{fontFamily: 'cursive'}}>

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
                    <div className='flex w-[20%] my-auto        justify-between px-2 '>
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