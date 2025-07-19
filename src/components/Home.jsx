import React from "react";
import { Link } from "react-router-dom";
import { Download, Linkedin, Github, Phone, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import "./Home.css" ;
// import ComputersCanvas from "./canvas/Computer";

const Home = () => {
  return (
    <div className="pt-20 px-20  text-white bg-color-image">
      <div className="flex w-full">
        {/* Text and Information Section */}
        <div className="w-[30%] h-screen  ">
          <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>  

            <div className="w-1 sm:h-80 h-40 violet-gradient"></div> 
          </div>


            <div>
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 mb-3 ">
                Hi I'm <span className="text-[#915EFE]">Sandeep</span>
              </h1>

              <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 mb-3">
                I am a <span className="text-[#915EFE]">Full Stack</span><br className="sm:block hidden" />
                Web Developer
              </p>

              <button className="bg-white hover:bg-[#915EFE] text-black font-bold py-2 px-4 rounded mt-5 mb-5 text-[20px] flex items-center " type="button">
                <Download className="w-6 h-6" />
                <Link to="">Resume</Link>
              </button>

              <div className="flex space-x-4 mt-2">
                <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-1 rounded-full" >
                  <Linkedin className="w-6 h-6 " />
                </a>
                <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-1 rounded-full">
                  <Github className="w-6 h-6 hover:text-[#915EFF]" />
                </a>
                <a href="tel:+919424572893" className="bg-white text-black p-1 rounded-full">
                  <Phone className="w-6 h-6 hover:text-[#915EFF]" />
                </a>
                <a href="https://leetcode.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-500 p-1 rounded-full" >
                  <SiLeetcode className="w-6 h-6 hover:text-[#915EFF]" />
                </a>
                <a href="mailto:sandeepparmard5656@gmail.com" className="bg-white text-black p-1 rounded-full">
                  <Mail className="w-6 h-6 hover:text-[#915EFF]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Picture */}
        <div className="w-7/10 h-screen hidden lg:block ">
          {/* <ComputersCanvas /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
