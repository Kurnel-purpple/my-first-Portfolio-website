import React from 'react'

const Project = ({title, project,key, description, heroImg, projectArray, isOrderSwitched}) => {

  const orderSwitchClass =  `flex flex-col p-4 my-6 ${isOrderSwitched ? 'flex-row-reverse bg-stone-700 text-milk mb-20' : ''}`;
  const titleOSClass =  `px-3 py-2 rounded shadow-myShadow3 text-2xl font-bold my-4 ml-2 w-fit ${isOrderSwitched ? 'px-3 py-2 rounded shadow-myShadow2 text-2xl font-bold my-3 ml-2 w-fit ' : ''}`;
  return (
    <div className={orderSwitchClass}>
      <h2 style={{fontFamily:'cursive'}} className={titleOSClass}>{title} </h2>
      
      <div className='lg:flex justify-between'>
        <img src={heroImg} alt="" className='min-w-[50%] rounded rounded-r-full rounded-tl-md rounded-bl-full' />
        <div className='flex flex-col'>
          <p style={{fontFamily:'cursive'}} className='text-xl text-center font-semibold'>{description}</p>
          <div className='flex flex-wrap my-auto'>
            {project.map((item, itemIndex)=>(
            
                <div className='max-w-[55%] mx-auto flex flex-col'>
                  <div className='flex flex-col '>
                    <img src={item.pic} key={itemIndex} alt="" className='w-[70px] h-[70px] rounded-full mx-auto my-2 hover:opacity-50 transform duration-300 cursor-pointer' />
                    <p className='mx-auto text-sm text-center font-semibold cursor-pointer hover:opacity-50 transform duration-300'>{item.label}</p>
                  </div>
                  <a href="#" className='mx-auto text-sm text-red-400 font-bold cursor-pointer hover:opacity-50 transform duration-300'>{item.link}</a>
                </div>
            
          ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Project