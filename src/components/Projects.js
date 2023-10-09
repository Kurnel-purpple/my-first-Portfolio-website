import Project from './Project.jsx';
import PEClogo from '../images/PEC-img-1.jpeg';
import frontEndImg from '../illustrations/frontEnd-sign.jpg'
import sabiLogo from '../images/mic.jpg';
import CELogo from '../images/sax.jpg';
import ictLab from '../illustrations/ICT-lab.jpg';
import ICTclass from '../illustrations/ICT-classroom.jpg';
import ICTclass2 from '../illustrations/ICT-Classroom2.jpg';

const Projects =()=>{
    const projectArray =
                [
                    {   
                        title:'FrontEnd projects', 
                        heroImg:frontEndImg, 
                        description:"The following are a number of projects in which we handled the front-end aspect.", 
                        project:[
                            {pic:PEClogo, 
                                label:'Phronema Educational Consults official website design and developement', 
                                link:'Vist site..'}, 
                            {pic:sabiLogo, 
                                label:'Sabi.com official website', 
                                link:'Vist site..'}, 
                            {pic:CELogo, 
                                label:'Cornelius Egberameiye portfolio website', link:'Vist site..'}
                        ]
                    },
                    {
                        title:'ICT Tutoring and Mentorship',
                        heroImg:ictLab,
                        description:"We are currently charged with tutoring and nuturing young minds in ICT. this task entails, ehancing school ICT syllabus based on the State approved scheme of work, setting up and maintaining the school's ICT lab and netwok, teaching students ICT and Data processing and building projects with the students. Our reach Includes:-",
                        project:[
                            {pic:ICTclass, 
                                label:'Reading Rainbow Schools Ikd',
                                link:'Email',
                                },
                            {pic:ICTclass2,
                                label:'SEATOS Schools Ikd',
                                link:'Email',
                                }
                        ]
                    }
                ]
    return(
        <section id="projects" className="flex flex-col section transition-all duration-500">
            <h1 className="mx-auto text-[40px] md:text-[70px] text-mydarkblue2 font-bold mt-[20px] mb-10 border-b border-b-slate-300 dark:text-white">Our Works</h1>

            {projectArray.map((eachProject, index)=>(
                <Project
                projectArray={projectArray}
                key={index}
                title={eachProject.title}
                heroImg={eachProject.heroImg}
                project={eachProject.project}
                description={eachProject.description}
                isOrderSwitched= {index % 2 === 1}
                />
            ))}
            
        </section>
    )
};
export default Projects;