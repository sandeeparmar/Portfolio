import React from 'react' ;
import './App.css' ;
import About from "./components/About" ;
import Education from "./components/Education" ;
import Project from "./components/Project";
import Home from "./components/Home" ;
import Contact from "./components/Contact" ;
import Navbar from "./components/Navbar" ;
import Technologies from './components/Technologies';

function App() {

  return (
    <> 
       <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <About />
        <Technologies/>
        <Education />
        <Project />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div> 
    </>
  )
}

export default App
