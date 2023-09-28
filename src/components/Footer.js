import {BsFillTelephoneFill} from 'react-icons/bs';
import {HiMail} from 'react-icons/hi';
import {ImLocation2} from 'react-icons/im';
import {BsTwitter} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

 const Footer = ()=>{
    return(
        <div className="bg-red-500 text-wheat px-2 py-3 flex flex-col mt-10 justify-between ">
            <ul className='leading-10 flex m-auto py-[30px]'>
                <li className="font-semibold flex gap-4 mx-4"><BsFillTelephoneFill className='text-[25px]'/><span className=" font-semibold text-sm text-stone-900 underline">: 08133615311</span></li>
                <li className="font-semibold flex gap-4 mx-4"><HiMail className='text-[25px]'/><span className=" font-semibold text-sm text-stone-900 underline">: Corneliusajayi123@gmail.com</span></li>
                <li className="font-semibold flex gap-4 mx-4"><ImLocation2 className='text-[25px]'/> <span className=" font-semibold text-sm text-stone-900 underline">: 123, ABC st Gwagwalada Abuja</span></li>
            </ul>
            <ul className="text-sm my-auto flex gap-4 m-auto">
                <li className="cursor-pointer hover:font-semibold hover:text-white"><BsFacebook/></li>
                <li className="cursor-pointer hover:font-semibold hover:text-white"><BsTwitter/></li>
                <li className="cursor-pointer hover:font-semibold hover:text-white"><BsInstagram/></li>
                <li className="cursor-pointer hover:font-semibold hover:text-white"><BsLinkedin/></li>
            </ul>
        </div>
    )
}
export default Footer;