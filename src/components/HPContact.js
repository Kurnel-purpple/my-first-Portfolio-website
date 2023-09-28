import {FaPhone} from 'react-icons/fa';
import {MdMarkEmailUnread} from 'react-icons/md';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import {FaGithubSquare} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';




const HPContacts =()=>{
    return(
        <div className='flex flex-col transition-transform duration-300'>
            <div className='flex justify-center flex-col w-[80%] mx-auto py-3'>
                <h1 className='mx-auto  text-3xl font-bold my-4'>Let's keep in touch</h1>
                <div className='flex justify-between px-3'>
                    <ul className='items-center my-auto'>
                        <li className='mt-4 cursor-pointer hover:text-stone-600 hover:text-xl transition-transform duration-200 font-bold'> <FaTwitterSquare/> </li>
                        <li className='mt-4 cursor-pointer hover:text-stone-600 hover:text-xl transition-transform duration-200 font-bold'> <FaInstagram/> </li>
                        <li className='mt-4 cursor-pointer hover:text-stone-600 hover:text-xl transition-transform duration-200 font-bold'> <ImLinkedin/> </li>
                        <li className='mt-4 cursor-pointer hover:text-stone-600 hover:text-xl transition-transform duration-200 font-bold'> <FaGithubSquare/> </li>
                    </ul>
                    <div className='my-auto flex flex-col justify-between' >
                        <div className='flex my-3 items-center flex-1'>
                        <FaPhone className='font-bold cursor-pointer text-xl text-slate-700'/> <span className='font-bold cursor-pointer text-xl mx-2 my-auto'>:</span> <span>08141146153</span>
                        </div>
                        <div className='flex my-3 items-center flex-1'>
                        <MdMarkEmailUnread className='font-bold cursor-pointer text-xl text-slate-700'/> <span className='font-bold cursor-pointer text-xl mx-2 my-auto'>:</span> <span>Corneliusajayi123@gmail.com</span>
                        </div>
                        <div className='flex my-3 items-center flex-1'>
                        <GrLocation className='font-bold cursor-pointer text-xl text-slate-700'/> <span className='font-bold cursor-pointer text-xl mx-2 my-auto'>:</span> <span>Lagos Nigeria</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HPContacts;