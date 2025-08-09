import React from 'react';
import ContactInfo from './ContactInfo';


export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Contact
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards]"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10">
            {/* Introduction */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">
                <div className="text-4xl">👋</div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Have a Question on your mind??
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Or just want to discuss a project? Contact me using any of the links below!
              </p>
              
              <div className="flex items-center justify-center space-x-2 mt-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>

            {/* Contact Information */}
            <ContactInfo/>

            {/* Call to action */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-white/10">
                <span className="text-gray-300">✨</span>
                <span className="text-white font-medium">I typically respond within 24 hours</span>
                <span className="text-gray-300">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}