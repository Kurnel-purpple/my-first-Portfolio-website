
// import HPServices from "./HPServices";
// import { useState } from 'react';
import codingImg1 from '../illustrations/Coding-desk.webp';
import services3 from '../illustrations/servicees-3.webp';
import download from '../illustrations/download.webp';
import MyService from './MyService';
import blog from '../illustrations/blog.webp';
import classroom from '../illustrations/classroom-4.webp';
import teaching from '../illustrations/teaching.jpg';
import training from '../illustrations/training.jpg';
import desk1 from '../illustrations/rightDesk-2.webp';
import erpService from '../illustrations/services-2.webp';
import networkHero from '../illustrations/servicees-3.webp';

const Services =()=>{
    
    const myArray =[{title:'Web Design and Developement',
                    description:'With close to two years experience in web developement, we offer precise, thoughtout, futuristic and excellent website designs and developement from start to finish.',
                    heroImg:download,
                    examples:'Here are some projects we have worked on.',
                    images:[{pic:codingImg1,label:'P.E.C Website'},{pic:services3, label:'My portfolio website'},{pic:blog, label:'Sabi.com website'}]
                    },
                    {title:'I.C.T Instruction',
                    description:'With a teaching and tutoring experience that spans seven years and counting, and an I.C.T instruction experience of over three years, we are confident in our ability to introduce I.C.T to first timers, nuture them, and keep our students up-to-date with the new innovations in I.C.T as they are released.', 
                    heroImg:classroom,
                    examples:'we are presently incharge of the I.C.T curriculum in the following establishments.',
                    images:[{pic:teaching,label:'Reading Rainbow Schools Ikorodu'},{pic:training, label:'SEATOS Schools Ikorodu'}]
                    },
                    {
                        title:'Network adminstration',
                        description:'With an experience of four years and counting in this field, and as a CCNA Network Administrator, we have the know-how and wit to establish and maintain a functional, durable and efficient network for your establishment.',
                        examples:"we've created, configured and maintained the internal network setup of the following establishments",
                        images:[{pic:desk1, label:'SEATOS Schools'}, {pic:networkHero, label:'Reading Rainbow Schools'}],
                        heroImg:erpService

                    }
                ]
      
                
    return(
        <div >
            <div className="flex flex-col">
                <h1 className="mx-auto text-[70px] text-mydarkblue2 font-bold mt-[20px] mb-10 border-b border-b-slate-300">Our Services</h1>
                <div className='flex flex-col mx-auto'>
                    <p className='mx-auto text-2xl mt-2 max-w-[70%] z-10'> <span className='text-[40px] font-bold text-mydarkblue1 ' style={{fontFamily:'cursive'}}>Cornelius Egberameiye,</span> renders a variety of services, due to the range of experiences and knowledge ammased over the years. these services include:</p>
                    
                        {myArray.map((service, index)=>(
                           
                                <div className='relative -top-[100px]'>
                                    <MyService
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    heroImg={service.heroImg}
                                    examples={service.examples}
                                    myArray={myArray}
                                    images={service.images}
                                    isOrderSwitched={index % 2 === 1}
                                    />
                                </div>
                            
                        ))}
                    
                </div>
            </div>
        </div>
        // <div>
        //     <HPServices/>
        // </div>
    )
};

export default Services;