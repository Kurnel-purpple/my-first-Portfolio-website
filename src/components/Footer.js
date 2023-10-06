import {BsFillTelephoneFill} from 'react-icons/bs';
import {HiMail} from 'react-icons/hi';
import {ImLocation2} from 'react-icons/im';
import {BsTwitter} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

 const Footer = ()=>{
    return(
        <div className="  text-wheat  flex flex-col mt-4 justify-between   " style={{position: '',
            top: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            transform: '',}}>

            <svg style={{
                position: 'relative',
                display: 'block',
                width: 'calc(100% + 1.3px)',
                height: '171px',
                transform: '',
                border: 'none',
                borderColor:'#06142e'
            }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path style={{
                    fill: '#06142e',
                }} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>


            </svg>
            
            <div className='flex flex-col bg-mydarkblue2 border-none py-4 '>
                <ul className='leading-10 flex m-auto py-[30px] z-10'>
                    <li className="font-semibold flex  mx-4 mb-10 md:mb-0"><BsFillTelephoneFill className='text-[25px]'/><span className=" font-semibold text-sm text-wheat underline hidden md:flex">: 08133615311</span></li>
                    <li className="font-semibold flex  mx-4 mb-10 md:mb-0"><HiMail className='text-[25px]'/><span className=" font-semibold text-sm text-wheat underline hidden md:flex">: Corneliusajayi123@gmail.com</span></li>
                    <li className="font-semibold flex  mx-4 mb-10 md:mb-0"><ImLocation2 className='text-[25px]'/> <span className=" font-semibold text-sm text-wheat underline hidden md:flex">: 123, ABC st Gwagwalada Abuja</span></li>
                </ul>
                <ul className="text-sm my-auto flex gap-4 m-auto z-10">
                    <li className="cursor-pointer hover:font-semibold hover:text-white"><BsFacebook/></li>
                    <li className="cursor-pointer hover:font-semibold hover:text-white"><BsTwitter/></li>
                    <li className="cursor-pointer hover:font-semibold hover:text-white"><BsInstagram/></li>
                    <li className="cursor-pointer hover:font-semibold hover:text-white"><BsLinkedin/></li>
                </ul>
            </div>
            
        </div>
    )
}
export default Footer;