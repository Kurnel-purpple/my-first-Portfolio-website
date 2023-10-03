
import {FaPhone} from 'react-icons/fa';
import {MdMarkEmailUnread} from 'react-icons/md';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import {FaGithubSquare} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';

const Contact =()=>{

    const contactArray = [  
        {item:<FaPhone/>, element:': 08133615311'}, 
        {item:<MdMarkEmailUnread/>, element:': corneliusajayi123@GrMail.com'},
        {item:<GrLocation/>, element:': Lagos Nigeria'},
                          
        ]
    
    const iconsArray = [{title:'Socials' },
        {socialsItem:<FaTwitterSquare/>},
        {socialsItem:<FaInstagram/>},  
        {socialsItem:<ImLinkedin/>},  
        {socialsItem:<FaGithubSquare/>},
        ]
    return(
        <section id="contact" className="Flex section">
            <h1 className="text-[70px] mt-[20px] border-b border-b-slate-300 w-fit mx-auto text-mydarkblue1  font-bold text-center">Contact Us</h1>
            
            <div className='flex flex-col'>
                <div className='flex mx-auto mt-10'>
                    <div className='max-w-[50%] m-auto pr-10 border-r-2 '>
                        <h5 className='text-3xl font-bold'>Hello there!</h5>
                        <p className='text-xl font-semibold  '>
                            We would love to Create, Innovate, Update, Build and Birth Ideas to life with you. Contact Us today.
                        </p>
                    </div>
                    <div className='my-4 justify-between px-4'>
                        {contactArray.map((contactItem,index)=>(
                        <div className='flex flex-col'>

                            <ul className='flex leading-1' key={index}>
                                <li className='flex my-2'>
                                    <span className='cursor-pointer my-auto text-xl mr-2'>{contactItem.item}</span>

                                    <span className='cursor-pointer font-semibold text-xl text-mydarkblue1'>{contactItem.element}</span>
                                </li>

                            </ul>

                        </div>
                    
                        ))}
                    </div>
                </div>
                
                
                <h3 style={{fontFamily:'cursive'}} className='mx-auto mt-7 text-2xl font-bold'>{iconsArray[0].title}</h3>

                <div className='flex mx-auto mt-7'>
                    {iconsArray.map((item)=>(
                     <li className=' mx-4 text-center list-none text-2xl cursor-pointer '>
                         {item.socialsItem}
                     </li>
                    ))}
                </div>
                
                
                
            </div>
        </section>
    )
    
};
export default Contact;