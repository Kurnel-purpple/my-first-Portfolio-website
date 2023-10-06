import serviceImg from '../illustrations/services-2.webp';
import { NavLink } from 'react-router-dom';

const HPServices =()=>{
    return(
        
        <section className='flex flex-col'>
            <h1 className='md:left-16 mx-auto md:mx-0 relative text-3xl font-bold '>Our Services</h1>
            <div className='lg:flex'>
            <img src={serviceImg} alt="" className='h-fit lg:top-14 relative' />
            <div className='md:px-3 mb-4 z-10 flex flex-col'>
            <h1 className='text-xl font-bold mb-2 text-stone-800 mx-auto lg:mx-0'>Here're some ways we can bring your dreams alive</h1>
            <div className='flex flex-col sm:grid sm:grid-cols-2 gap-y-4 gap-4 text-lg'>
                <div className='shadow-myShadow2 mx-auto bg-pink-100/50 px-3 pt-2 pb-4 rounded-tr-[50px] rounded-bl-[20px]'>
                    <div className='bg-gradient-to-r from-mydarkblue2 via-green-400 to-violet-500 pb-1 rounded-tr-[50px] mx-2'>
                        <h4 className='font-bold text-mydarkblue2 bg-pink-100 rounded-tr-[50px]' style={{fontFamily:'cursive'}} >Web Development</h4>
                    </div>
                    <p>We build and tailor websites, that announces and retains your presence on the global market, with custom modifications that estenuate your services and its importance to the common web user and elites alike. <NavLink to='/Services' className='ml-[1rem] text-stone-400 font-semibold underline relative top-2'>More..</NavLink> </p>
                </div>
                <div className='shadow-myShadow2 mx-auto bg-pink-100/50 px-3 pt-2 pb-4 rounded-tr-[50px] rounded-bl-[20px]'>
                <div className='bg-gradient-to-r from-mydarkblue2 via-green-400 to-violet-500 pb-1 rounded-tr-[50px] mx-2'>
                        <h4 className='font-bold text-mydarkblue2 bg-pink-100 rounded-tr-[50px]' style={{fontFamily:'cursive'}} >I.C.T Instruction</h4>
                    </div>
                    <p>we've got over half a decade experience offering in-school computer science and I.C.T tutolage and mentorship from elementary to highschool level. with our extensive curriculum that ensures our wards absolute confidence and edge in the tech universe. <NavLink to='/Services' className='ml-[1rem] text-stone-400 font-semibold underline relative top-2'>More..</NavLink> </p>
                </div>
                <div className='shadow-myShadow2 mx-auto bg-pink-100/50 px-3 pt-2 pb-4 rounded-tr-[50px] rounded-bl-[20px]'>
                <div className='bg-gradient-to-r from-mydarkblue2 via-green-400 to-violet-500 pb-1 rounded-tr-[50px] mx-2'>
                        <h4 className='font-bold text-mydarkblue2 bg-pink-100 rounded-tr-[50px]' style={{fontFamily:'cursive'}} >App Development</h4>
                    </div>
                    <p>effective, customised, extensively user-friendly app development is our forte, with various programming languages and low-code tools at our disposal, we create applications that gives ideas breath. <NavLink to='/Services' className='ml-[1rem] text-stone-400 font-semibold underline relative top-2'>More..</NavLink> </p>
                </div>
                <div className='shadow-myShadow2 mx-auto bg-pink-100/50 px-3 pt-2 pb-4 rounded-tr-[50px] rounded-bl-[20px]'>
                <div className='bg-gradient-to-r from-mydarkblue2 via-green-400 to-violet-500 pb-1 rounded-tr-[50px] mx-2'>
                        <h4 className='font-bold text-mydarkblue2 bg-pink-100 rounded-tr-[50px]' style={{fontFamily:'cursive'}} >ERP Implementation</h4>
                    </div>
                    <p>With half a decade experience in using and implementing ERP softwares and MS.Navition, we can say, trust us, we've got your company's tech intention covered <NavLink to='/Services' className='ml-[1rem] text-stone-400 font-semibold underline relative top-2'>More..</NavLink> </p>
                </div>
            </div> 
            </div>
            </div>
        </section>
    )
}
export default HPServices;