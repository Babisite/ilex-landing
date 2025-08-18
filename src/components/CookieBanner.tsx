'use client';

import React, { useState, useEffect } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem('ilex-cookies-accepted');
    if (!cookiesAccepted) {
      // Afficher le banner après 2 secondes
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('ilex-cookies-accepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('ilex-cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md border border-orange-200 rounded-3xl shadow-2xl p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🍪</span>
                <h3 className="text-xl font-bold text-gray-900">
                  Nous utilisons des cookies
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. En continuant à naviguer, 
                vous acceptez notre utilisation des cookies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                  ✅ Accepter tous les cookies
                </button>
                
                <button
                  onClick={declineCookies}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  ❌ Refuser
                </button>
                
                <button
                  onClick={() => {
                    // Ouvrir le modal des cookies pour plus d'infos
                    const event = new CustomEvent('openCookiesModal');
                    window.dispatchEvent(event);
                  }}
                  className="px-6 py-3 text-orange-600 font-bold hover:text-orange-700 transition-colors underline"
                >
                  En savoir plus
                </button>
              </div>
            </div>
            
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-xl flex-shrink-0"
            >
              <HiOutlineXMark className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;