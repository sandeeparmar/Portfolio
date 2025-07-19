import React from "react";

const About = () => {
  return (
    <div className='py-16 px-6 md:px-8 lg:px-12 w-full text-white bg-gradient-to-br from-gray-800 to-slate-900 shadow-lg'>
       <div className='mb-8'>
        <h1 className='text-5xl md:text-6xl font-bold text-white mb-2'>
          A Bit About Me...
        </h1>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full'></div>
       </div> 
       
       <div className='w-[60%] space-y-6 text-lg leading-relaxed'>
        <p className='text-gray-300 hover:text-white transition-colors duration-300'>
          I am currently pursuing my <span className='font-semibold text-white'>3<sup>rd</sup> year of Bachelor of Technology</span> at <span className='font-semibold text-white'>IET DAVV Indore</span>. My academic journey has equipped me with a strong foundation in Computer Science, complemented by hands-on experience in <span className='font-medium bg-gray-700 px-2 py-1 rounded-md text-white'>Data Structures and Algorithms (DSA)</span> and proficiency in <span className='font-medium bg-gray-700 px-2 py-1 rounded-md text-white'>MERN stack web development</span>.
        </p>
        
        <p className='text-gray-300 hover:text-white transition-colors duration-300'>
          I am passionate about <span className='font-semibold text-white'>leveraging technology to solve real-world problems</span> and am actively seeking opportunities in <span className='font-semibold text-white'>software development engineering (SDE) roles</span>. Whether for a full-time position or internship, I am eager to apply my skills, contribute to meaningful projects, and continue learning and growing in the field of software engineering.
        </p>

       <div className='flex flex-wrap gap-3 mt-8'>
          <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer'>
            Computer Science
          </span>

          <span className='bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300 cursor-pointer'>
            MERN Stack
          </span>

          <span className='bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300 cursor-pointer'>
            DSA
          </span>

          <span className='bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300 cursor-pointer'>
            SDE Roles
          </span>
        </div>

       </div>
    </div>
  )
};

export default About;