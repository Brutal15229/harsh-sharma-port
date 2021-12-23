
/*This is App.js file which comes with src folder this is the main 
javascript file. 

Here onlywe import our other components*/
 
import logo from './logo.svg';
import './App.css';

import Intro from "./Components/Intro";
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Contact from './Components/Contact_Me';
//These are the files I have made in the component folder

function App() {
  
  return (// In react we have to bound our html in our opening and 
    // closing tags, that is why we use <> ,</> these tags
    <>   
      
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Contact/>
      
    </>  

    /* As we know in HTML there are some  tags which
    does not have any closing tags so we use </>

    For eg.- img tag does not have closing tags 
    hence, we use <img/>
    */
    

  );
}

export default App;
