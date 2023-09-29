
// import HPServices from "./HPServices";
import { useState } from 'react';
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
    const [position, setPosition] = useState('left')
    const myArray =[{title:'Web Design and Developement',
                    description:'With close to two years experience in web developement, we offer precise, thoughtout, futuristic and excellent website designs and developement from start to finish.',
                    heroImg:download,
                    examples:'Here are some projects we have worked on.',
                    images:[{pic:codingImg1,label:'P.E.C Official Website'},{pic:services3, label:'My portfolio website'},{pic:blog, label:'Sabi.com official website'}]
                    },
                    {title:'I.C.T Instruction',
                    description:'With a teaching and tutoring experience that spans seven years and counting, and an I.C.T instruction experience of over three years, we are confident in our ability to introduce I.C.T to first timers, nuture them, and keep our students up-to-date with the new innovations in I.C.T as they are released.', 
                    heroImg:classroom,
                    examples:'we are presently incharge of the I.C.T curriculum in the following establishments.',
                    images:[{pic:teaching,label:'I.C.T Instructor at Reading Rainbow Schools Ikorodu'},{pic:training, label:'I.C.T Instructor at SEATOS Schools Ikorodu'}]
                    },
                    {
                        title:'Network adminstration',
                        description:'we created, configured and administered the internal network setup of the following establishments, ',
                        images:[{pic:desk1, label:'SEATOS Schools'}, {pic:networkHero, label:'Reading Rainbow Schools'}],
                        heroImg:erpService

                    }
                ]
      
                
    return(
        <div >
            <div className="flex flex-col">
                <h1 className="mx-auto font-bold text-3xl">OUR SERVICES</h1>
                <div>
                    <p>Cornelius Egberameiye renders a variety of services, due to the vast range of experiences and knowledge ammased over the years. these services include</p>
                    
                        {myArray.map((service, index)=>(
                            <div>
                                <div className='grid grid-cols-5 grid-rows-10 z-10 mt-4 mb-4'>
                                    <h3 className='row-start-1 row-end-2 col-span-full mr-4 font-semibold text-2xl bg-stone-700 px-3 py-1 w-fit text-wheat' style={{fontFamily:'cursive'}} >{service.title}</h3>

                                </div>
                                
                                
                    
                                <div>
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