import React from "react";
import { skills } from "./Skills";



const Technologies = () => {
  return (
    <div className='py-16 px-6 md:px-8 lg:px-12 w-full text-white bg-gradient-to-br from-gray-900 to-slate-900 '>
      <div className="max-w-6xl mx-auto">
       <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technologies & Skills
          </h2>

         </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <a 
                href={skill.link}
                className="flex flex-col items-center space-y-3 w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                  /> 
                </div>
                <span className="text-xs md:text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </a>
            </div>
          ))}
        </div>
        
      </div>   
    </div>
  );
};

export default Technologies;