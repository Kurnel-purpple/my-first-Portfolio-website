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
      <h1 className="text-3xl border-b border-b-slate-300 w-fit mx-auto py-2 font-bold text-center mt-4">
        My Arsenal
      </h1>

      <div className='flex justify-between my-4'>
        <img src={myskills[0].heroImg} alt="Coding Desk" className='' />

        <div className='my-1 flex w-[50%] flex-col py-[70px] justify-center'>
            <p style={{fontFamily:"cursive"}} className=' text-2xl text-center'>I am currently proficient in using the following programming Languages and low-code tools</p>
            
            <ul className='grid grid-cols-3 grid-rows-2 text-center my-2 px-3 py-2 '>
            {myskills[1].map((eachSkill, index) => (
              <li key={index} className="font-bold px-2 rounded py-1 shadow-myShadow2 whitespace-nowrap text-xl text-center my-3 mx-2 ">  {eachSkill.Skill} </li>
            ))}
          </ul>

        </div>
       
      </div>
    </section>
  );
};

export default Skills;
