import desk1 from '../illustrations/Coding-desk.webp';

const Skills = () => {
  const myskills = [
    { heroImg: desk1 },
    [
      { Skill: 'Semantic HTML' },
      { Skill: 'CSS' },
      { Skill: 'JavaScript' },
      { Skill: 'React.js' },
      { Skill: 'TailwindCss' },
      { Skill: 'SCRATCH' },
      { Skill: 'Figma' },
      { Skill: 'wix' },
      { Skill: 'Wordpress' },
      { Skill: 'canva' },
      
    ],
  ];

  return (
    <section id="skills" className="flex flex-col section">
      <h1 className="mx-auto text-[40px] md:text-[70px] text-mydarkblue2 font-bold mt-[20px] mb-10 border-b border-b-slate-300 dark:text-white">
        My Arsenal
      </h1>

      <div className='lg:flex justify-between my-4'>
        <img src={myskills[0].heroImg} alt="Coding Desk" className=' dark:rounded-r-full dark:rounded-bl-full' />

        <div className='my-1 flex lg:w-[50%] flex-col py-[70px] justify-center'>
            <p style={{fontFamily:"cursive"}} className=' text-2xl text-center'>I am currently proficient in using the following programming Languages and low-code tools</p>
            
            <ul className='grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 text-center my-2 px-3 py-2 '>
            {myskills[1].map((eachSkill, index) => (
              <li key={index} className="font-bold px-2 rounded py-1 shadow-myShadow2 dark:shadow-myShadow3 dark:text-white whitespace-nowrap text-xl text-center my-3 mx-2 ">  {eachSkill.Skill} </li>
            ))}
          </ul>

        </div>
       
      </div>
    </section>
  );
};

export default Skills;
