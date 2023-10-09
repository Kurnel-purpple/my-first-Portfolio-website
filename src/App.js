
import {Routes, Route} from 'react-router-dom';



import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Error from './components/Error';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Bottomnav from './components/Bottomnav';

function App() {
  return (
    <div className='dark:bg-stone-900 w-full'>
      <body className='bg-milk md:w-[90%] mx-auto dark:text-wheat dark:bg-stone-800 duration-100'>
        {/* <div>className="  bg-gradient-to-r to-mywall via-mylylac from-mydarkblue1"</div> */}
      <Nav/>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/Skills' Component={Skills} />
        <Route path='/Projects' Component={Projects} />
        <Route path='/Contact' Component={Contact} />
        <Route  Component={Error} />
      </Routes>
      <Bottomnav/>
      
      <Footer/>
      </body>
    </div>
  );
}

export default App;
