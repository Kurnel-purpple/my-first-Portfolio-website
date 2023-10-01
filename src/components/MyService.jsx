

const MyService = ({ title, myArray,examples, description, heroImg, images, isOrderSwitched }) => {
    const containerClasses = `flex  p-4 ${isOrderSwitched ? 'flex-row-reverse bg-stone-600 text-wheat' : ''}`;
    const flipDisplay = ` ${isOrderSwitched ? ' bg-stone-600 text-wheat' : ''}`;
    const titleFlippedDisplay = `row-start-1 row-end-2 col-span-full mr-4 font-semibold text-2xl  px-3 py-1 w-fit shadow-myShadow2 m-3 ml-5 ${isOrderSwitched ? ' shadow-myShadow3 bg-stone-700 text-wheat' : ''}`;
  return(
    <div className={flipDisplay}>
      <div className='grid grid-cols-5 grid-rows-10 z-10 mt-4 mb-4'>
         <h3 className={titleFlippedDisplay} style={{fontFamily:'cursive'}} >{title}</h3>
      </div>
              
     <div className={containerClasses}>
        <div className="w-1/2">
          <img className="max-w-full rounded-full" src={heroImg} alt="Hero Image" />
        </div>
        <div className="w-1/2 p-4 my-auto">
          <p>{description}</p>
          <h4 style={{fontFamily:'cursive'}} className="z-10 font-semibold text-xl">{examples}</h4> 
          
            <div className="flex mt-3 mx-4">
            {images.map((image, imgIndex)=>(
                <div className="mx-auto flex flex-col">
                    <img className="w-[70px] h-[70px] mx-auto rounded-full " src={image.pic} key={imgIndex} alt="" />
                    <p className="mx-auto font-semibold ">{image.label}</p>
                </div>
            ))}
            </div>
          
        </div>
    </div>
    </div>
    
);
}

export default MyService;
