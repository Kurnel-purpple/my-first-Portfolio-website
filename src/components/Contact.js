
import {FaPhone} from 'react-icons/fa';
import {MdMarkEmailUnread} from 'react-icons/md';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import {FaGithubSquare} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';

const Contact =()=>{

    const contactArray = [  {item:FaPhone, element:'08133615311'}, 
                            {item:MdMarkEmailUnread, element:'corneliusajayi123@GrMail.com'},
                            {title:'Socials', socialsIcon:[
                            {item:FaTwitterSquare},
                            {item:FaInstagram},  
                            {item:ImLinkedin},  
                            {item:FaGithubSquare},  
                            {item:GrLocation}
                            ]},
                             
                        ]
    return(
        <section id="contact" className="Flex section">
            <h1 className="text-2xl font-bold text-center bg-red-500">Contact Us</h1>
            
            <div>
                {contactArray.map((contactItem,index)=>(
                    <div>
                        
                        <ul key={index}>
                            {contactItem.item}
                            <span>{contactItem.element}</span>
                        </ul>
                        <ul>
                        <h3>{contactItem.title}</h3>
                            {contactItem[2].map((socialItem, index)=>(
                                <li>{socialItem.item}</li>
                            ))}
                        </ul>
                    </div>
                    
                ))}
                
                
            </div>
        </section>
    )
};
export default Contact;