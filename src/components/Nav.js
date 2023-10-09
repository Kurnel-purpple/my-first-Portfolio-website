import { useState } from 'react';
import useLocalStorage from 'use-local-storage';

import {TiWeatherSunny} from 'react-icons/ti';
import {LiaMoon} from 'react-icons/lia';
import { NavLink } from 'react-router-dom';
import mic from '../images/mic.jpg'
import { BiSearchAlt2 } from 'react-icons/bi';
import {BiSolidUserCircle} from 'react-icons/bi';
import {FaPhone} from 'react-icons/fa';
import {AiOutlineMenuFold} from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import { useEffect } from 'react';
const Nav =()=>{

  const [darkMode, setDarkMode]= useLocalStorage(false);
  useEffect(()=>{
    if(darkMode){
        document.documentElement.classList.add("dark")  
    }else{
        document.documentElement.classList.remove("dark")
    }
   
    }, [darkMode]);


    const [open, setOpen] = useState(false);
    const handleMenuItemClick=()=>{
        setOpen(false);
    }

    return(
        
        <>
            <header className=' flex flex-col pr-3 sm:pr-0 h-[5rem] bg-wheat pt-3 px-2 overflow-hidden dark:bg-stone-900 border-b border-b-gray-300 dark:border-b-0 dark:border-b-gray-700'>
                <div className='flex justify-between'>
                <NavLink to="/" className='w-[20rem] flex gap-[20px]'>
                    
                    <img src={mic} alt="logo" className='w-[40px] h-[40px] rounded-full '/>
                    <span className='bg-gradient-to-r from-rebeccapurple to-orangered text-transparent bg-clip-text text-3xl font-bold'>C.E</span>
                   
                </NavLink>

                <div onClick={()=>setOpen(!open)} className='mr-[10px] absolute text-3xl font-bold z-10 right-2 cursor-pointer md:hidden lg:right-8'>
                    
                    
                    {open ? <AiOutlineMenuUnfold  />:<AiOutlineMenuFold  />}
                </div>
                <nav id='navBar' className={`md:flex flex md:static absolute text-lg md:flex-row sm:mx-auto h-[300px] md:h-fit w-[250px]  text-center md:w-[60%] md:z-auto  md:justify-between  transition-all duration-500 ease-in md:opacity-100 opacity-0  ${open ? 'flex flex-col bg-wheat dark:bg-stone-900  p-4 rounded leading-[50px] right-0 my-auto z-10 top-20 opacity-100' : 'flex-col sticky top-[-500px] ease-out duration-200 '}`} style={{fontFamily: 'cursive'}}>

                    <NavLink onClick={handleMenuItemClick}  className={({ isActive }) =>
                        isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
                    } to="/">Home</NavLink>
                    <NavLink onClick={handleMenuItemClick}  className={({ isActive }) =>
                        isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
                    } to="/Services">Services</NavLink>
                    <NavLink onClick={handleMenuItemClick}  className={({ isActive }) =>
                         isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
                    } to="/Skills">Skills</NavLink>
                    <NavLink onClick={handleMenuItemClick}  className={({ isActive }) =>
                        isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
                    } to="/Projects">Projects</NavLink>
                    <NavLink onClick={handleMenuItemClick}  className={({ isActive }) =>
                        isActive ? "text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text  border-b-2 border-b-blue-900 font-bold" : "font-semibold hover:text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-700 bg-clip-text"
                    } to="/Contact">Contact</NavLink>
                    <div className='flex md:hidden lg:flex lg:w-[20%] my-auto mx-auto md:mx-0 w-[80%] justify-between px-2'>
                        <BiSearchAlt2 className='text-stone-500 hover:text-black text-xl hover:cursor-pointer' />
                        <BiSolidUserCircle className='text-stone-500 hover:text-black text-xl hover:cursor-pointer' />
                        <FaPhone className='text-stone-500 hover:text-black text-xl hover:cursor-pointer' />
                    </div>
                    
                </nav>
                <div className='lg:right-20 p-2 rounded-full absolute my-auto dark:bg-wheat dark:text-stone-900 text-wheat bg-stone-800 font-bold flex flex-col right-0 top-14 z-[100000] '>
                    <button onClick={()=>{
                        setDarkMode(!darkMode)
                    }}>
                        {darkMode? <TiWeatherSunny/>:<LiaMoon/>}
                        
                        
                    </button>
                    
                    </div>
                </div>
                
                <input type='search' className='mx-auto w-[60%] text-lg my-3 rounded-3xl px-3 py-1 shadow-md z-10 outline-none' placeholder= 'Search' style={{display:'none'}} />
            </header>
            
        </>
    )
};

export default Nav;