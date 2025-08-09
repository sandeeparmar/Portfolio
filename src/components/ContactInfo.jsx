import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Copy, Check } from 'lucide-react';

const ContactInfo = () => {
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
  
  const data = [ 
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
     <div>
       <div className="grid gap-6">
              
              {data.map((contact, index) => {
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
     </div>
  )
} 
export default ContactInfo ;
