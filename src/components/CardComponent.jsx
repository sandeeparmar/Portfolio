import React, { useState, useRef } from "react";

const CardComponent = ({ feature }) => {
  const [transform, setTransform] = useState('');
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform(`rotateX(0deg) rotateY(0deg)`);
  };

  return (
    <div className="[perspective:1000px]">
      <div
        ref={cardRef}
        className="w-80 h-110 group p-6 md:p-8 rounded-2xl  backdrop-blur-sm border border-white/10  hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
        style={{
          transform,
          transition: 'transform 300ms ease-out',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        <div className="h-full flex flex-col text-white">
          {/* Project Image Placeholder */}
          <div className="w-full h-32 bg-blue-200 bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
            <img src={feature.image} alt="image" />
          </div>

          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
          <p className="text-white text-opacity-90 text-sm leading-relaxed flex-grow">
            {feature.description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-3 mt-4">
            <a 
            href={feature.link}
            className="flex-1 bg-gray-900 bg-opacity-20 hover:bg-opacity-30 rounded-lg py-2 px-4 text-sm font-medium transition-all">
              View Demo
            </a>
            <a 
            href="https://github.com/sandeeparmar" 
            className="flex-1 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg py-2 px-4 text-sm font-medium transition-all">
              Source Code
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CardComponent;
