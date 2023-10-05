
import {Link} from 'react-scroll';
import {BiHome} from 'react-icons/bi';
import {GiSuitcase} from 'react-icons/gi';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
const Bottomnav = ()=>{
    return(
        <div className="hidden lg:flex fixed bottom-6 w-full z-50 overflow-hidden">
            <div className='container mx-auto'>
                <div className='items-center w-full max-w-[420px] h-[90px] bg-wheat/70 backdrop-blur-2xl rounded-full mx-auto flex justify-between px-5 text-2xl'>
                    <Link smooth= {true}
                     to='home' className= {({isActive}) => isActive ? "bg-gradient-to-r from-orangered to-blue-500  hover:cursor-pointer  p-2 rounded-full items-center text-blue-500":  "hover:cursor-pointer  p-2 rounded-full items-center text-black/50 hover:text-black/90 hover:text-3xl justify-center"}>
                        <BiHome/>
                    </Link>
                    <Link smooth= {true}
                     to='projects' className= {({isActive}) => isActive ? "bg-gradient-to-r from-orangered to-blue-500  hover:cursor-pointer  p-2 rounded-full items-center text-blue-500": ' hover:cursor-pointer  p-2 rounded-full items-center text-black/50 hover:text-black/90 hover:text-3xl justify-center'}>
                        <GiSuitcase/>
                    </Link>
                    <Link smooth= {true}
                     to='services' className= {({isActive}) => isActive ? "bg-gradient-to-r from-orangered to-blue-500  hover:cursor-pointer  p-2 rounded-full items-center text-blue-500": ' hover:cursor-pointer  p-2 rounded-full items-center text-black/50 hover:text-black/90 hover:text-3xl justify-center'}>
                        <MdOutlineMiscellaneousServices/>
                    </Link>
                    <Link smooth= {true}
                     to='contact' className= {({isActive}) => isActive ? "bg-gradient-to-r from-orangered to-blue-500  hover:cursor-pointer  p-2 rounded-full items-center text-blue-500": ' hover:cursor-pointer  p-2 rounded-full items-center text-black/50 hover:text-black/90 hover:text-3xl justify-center'}>
                        <AiOutlinePhone/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Bottomnav;