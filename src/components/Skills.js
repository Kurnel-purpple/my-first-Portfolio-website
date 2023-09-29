import desk1 from '../illustrations/Coding-desk.webp';


const Skills =()=>{
    const myskills=[{heroImg:desk1},[{sKill:'Semantic HTML'},{Skill:'CSS'},{Skill:'javaScript'},{Skill:'Tailwindcss'}, {Skill:'React-js'}]]
    return(
        <secton id="skills" className="Flex section">
            <h1 className="text-2xl font-bold text-center bg-red-500">My Programming Languages</h1>
            

            {myskills.map((mySkill, index)=>{
                <div>
                    <img src={mySkill.heroImg} />

                    <ul>
                        {mySkill.map((eachSkill)=>{
                            <li>{eachSkill.Skill}</li>
                        })}
                        
                    </ul>
                    
                </div>    
            })}
            
            
        </secton>
    )
};
export default Skills;