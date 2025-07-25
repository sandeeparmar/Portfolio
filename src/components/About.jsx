import React from "react";

const violetGradient = {
  background: 'linear-gradient(to right, #804dee 0%, rgba(60, 51, 80, 0) 100%)',
};



const About = () => {
  return (
    <div className='py-16 px-6 md:px-8 lg:px-12 w-full text-white bg-gradient-to-br from-gray-900 to-slate-900 '>
       <div className='mb-8'>
        <h1 className='text-6xl  font-bold text-white mb-2'>
          A Bit About Me...
        </h1>
        <div className='w-89 h-1 bg-white ' style={violetGradient}></div>
       </div> 
       
       <div className='w-[60%] space-y-6 text-lg leading-relaxed'>
        <p className='text-white '>
          I am currently pursuing my <span className='font-semibold text-white'>3<sup>rd</sup> year of Bachelor of Technology</span> at <span className='font-semibold text-white'>IET DAVV Indore</span>. My academic journey has equipped me with a strong foundation in Computer Science, complemented by hands-on experience in <span className='font-medium bg-gray-700 px-2 py-1 rounded-md text-white'>Data Structures and Algorithms (DSA)</span> and proficiency in <span className='font-medium bg-gray-700 px-2 py-1 rounded-md text-white'>MERN stack web development</span>.
        </p>
        
        <p className='text-white'>
          I am passionate about <span className='font-semibold text-white'>leveraging technology to solve real-world problems</span> and am actively seeking opportunities in <span className='font-semibold text-white'>software development engineering (SDE) roles</span>. Whether for a full-time position or internship, I am eager to apply my skills, contribute to meaningful projects, and continue learning and growing in the field of software engineering.
        </p>

       <div className='flex flex-wrap gap-3 mt-8'>
          <span className='bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium '>
            Computer Science
          </span>

          <span className='bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium '>
            MERN Stack
          </span>

          <span className='bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium '>
            DSA
          </span>

          <span className='bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium '>
            SDE Roles
          </span>
        </div>

       </div>
    </div>
  )
};

export default About;