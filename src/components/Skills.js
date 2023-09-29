import desk1 from '../illustrations/Coding-desk.webp';

const Skills = () => {
  const myskills = [
    { heroImg: desk1 },
    [
      { Skill: 'Semantic HTML' },
      { Skill: 'CSS' },
      { Skill: 'JavaScript' },
      { Skill: 'TailwindCss' },
      { Skill: 'React.js' },
    ],
  ];

  return (
    <section id="skills" className="flex flex-col section">
      <h1 className="text-2xl font-bold text-center mt-4">
        My Programming Languages
      </h1>

      <div className='flex justify-between my-4'>
        <img src={myskills[0].heroImg} alt="Coding Desk" className='' />

        <div className='my-6 bg-red-500 flex flex-col py-[100px]'>
            <p style={{fontFamily:"cursive"}} className='font-bold text-2xl'>I am currently proficient in using the following programming Languages</p>
            
            <ul className='flex m-auto'>
            {myskills[1].map((eachSkill, index) => (
              <li key={index} className="font-semibold text-xl flex "> - {eachSkill.Skill} - </li>
            ))}
          </ul>

        </div>
       
      </div>
    </section>
  );
};

export default Skills;
