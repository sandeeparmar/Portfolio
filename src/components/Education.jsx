import React from "react";

const EducationData = [
   {
      name: "B.Tech[IT]",
      instituteName: "Institute of Engineering and Technology DAVV",
      information: [
        "Learned about computer fundamentals like DSA, OOPS Principle, SQL, Database Management.",
        "Participated in various hackathons like SIH, college coding challenges.",
        "Learned MERN stack web development and developed various projects using the tech stack.",
        "Result : 8.5/10.0"
       ] 
   },
   {
      name: "Higher Secondary",
      instituteName: "Tagore Public Higher Secondary School ",
      information: [
        "Learning Mathematics and Probability concepts for analytical thinking.",
        "Programming in C++ language to understand core programming fundamentals.",
        "Studying SQL for database management and data manipulation skills.",
        "Result : 9.0/10.0"
       ]
   }
];

const Education = () => {
  return (
     <div className='py-16 px-6 md:px-8 lg:px-12 w-full text-white bg-gradient-to-br from-gray-900 to-slate-900'>
       <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
             <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
               Education & Experience
             </h1>
             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {EducationData.map((education, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {education.name}
                </h2>
              </div>
              
              <h3 className="text-base md:text-lg text-blue-300 font-medium mb-6 leading-relaxed">
                {education.instituteName}
              </h3>
              
              <div className="space-y-3">
                {education.information.map((info, index1) => (
                  <div key={index1} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {info}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Completed
                </div>
              </div>
            </div>
          ))}
        </div>

       </div>
    </div>
  );
};

export default Education;