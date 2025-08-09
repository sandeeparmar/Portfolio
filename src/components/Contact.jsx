import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const contactInfo = [
    {
      id: 'email',
      icon: Mail,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      label: 'Email',
      value: 'sandeepparmard5656@gmail.com',
      copyText: 'sandeepparmard5656@gmail.com',
      href: 'mailto:sandeepparmard5656@gmail.com@example.com'
    },
    {
      id: 'phone',
      icon: Phone,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/20',
      label: 'Phone',
      value: 'phone',
      copyText: '+9424573892',
      href: 'tel:+94245727393'
    },
    {
      id: 'location',
      icon: MapPin,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      label: 'Location',
      value: 'Indore , M.P',
      copyText: 'Indore ,M.p',
      href: 'https://www.google.com/maps/place/Institute+of+Engineering+%26+Technology,+DAVV/@22.6810145,75.8753629,17z/data=!4m10!1m2!2m1!1siet+davv+indore!3m6!1s0x3962fcc03e36712d:0xb6f3c2bf734a7c!8m2!3d22.6811529!4d75.8797821!15sCg9pZXQgZGF2diBpbmRvcmWSAQNpdXSqATcQATIeEAEiGuAoM4pQQwfvClRMmZdFDBu5hLttyedIOvM6MhMQAiIPaWV0IGRhdnYgaW5kb3Jl4AEA!16zL20vMDg3Mjlo?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

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
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const isCopied = copiedItem === contact.id;
                
                return (
                  <div
                    key={contact.id}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`${contact.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${contact.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 text-sm font-medium mb-1">{contact.label}</p>
                          <p className="text-white font-semibold text-lg">{contact.value}</p>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center space-x-2">
                        {/* Copy button */}
                        <button
                          onClick={() => handleCopy(contact.copyText, contact.id)}
                          className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Copy to clipboard"
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-300 hover:text-white" />
                          )}
                        </button>

                        {/* External link button */}
                        <a
                          href={contact.href}
                          target={contact.id === 'location' ? '_blank' : '_self'}
                          rel={contact.id === 'location' ? 'noopener noreferrer' : ''}
                          className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title={`Open ${contact.label.toLowerCase()}`}
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>

                    {/* Copied notification */}
                    {isCopied && (
                      <div className="mt-3 text-center">
                        <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                          <Check className="w-3 h-3 mr-1" />
                          Copied to clipboard!
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}