import React from 'react';
import CardComponent from './CardComponent';

const ProjectData = [
   {
     image :'https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg',
     title : 'InterView' ,
     description : 'Modern interview preparation platform offering curated questions, coding challenges, HR tips, real-time feedback, and progress tracking to boost your confidence and success.' ,
     link:'https://interview-pd4s.vercel.app/'
   },{
     image :'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/337/963/datas/original.png' ,
     title : 'DevConnector' ,
     description : 'DevConnector is a modern MERN-stack social network for developers to create profiles, share posts, connect with others, showcase skills, and collaborate through a secure, interactive, and responsive platform.' 
   } ,
   {
     image :'https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg' ,
     title : 'InterView' ,
     description : 'Modern interview preparation platform offering curated questions, coding challenges, HR tips, real-time feedback, and progress tracking to boost your confidence and success.' 
   } 
];



const Project = () => {
  return (
    <div className='py-16 px-6 md:px-8 lg:px-12 w-full text-white bg-gradient-to-br from-gray-900 to-slate-900'>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2> 
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development technologies and innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
           {
            ProjectData.map((feature, index) => (
               <div key={index}>
                 <CardComponent feature={feature}/>
               </div> 
            ))
           }
        </div>
    </div>
  );
};

export default Project;