

const MyService = ({ title, myArray,examples, description, heroImg, images, isOrderSwitched }) => {
    const containerClasses = `flex p-4 ${isOrderSwitched ? 'flex-row-reverse' : ''}`;
  return(
    <div className={containerClasses} >
        <div className="w-1/2">
          <img className="max-w-full" src={heroImg} alt="Hero Image" />
        </div>
        <div className="w-1/2 p-4 my-auto">
          <p>{description}</p>
          <h4 style={{fontFamily:'cursive'}} className="z-10 font-semibold text-xl">{examples}</h4> 
          
            <div className="flex mt-3 mx-4">
            {images.map((image, imgIndex)=>(
                <div className="mx-auto flex flex-col">
                    <img className="w-[70px] h-[70px] mx-auto rounded-full " src={image.pic} key={imgIndex} alt="" />
                    <p className="mx-auto">{image.label}</p>
                </div>
            ))}
            </div>
          
        </div>
    </div>
);
}

export default MyService;
