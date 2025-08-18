'use client';

import Link from 'next/link'; 

const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900  text-white overflow-hidden flex items-center justify-center">
      {/* Blobs décoratifs organiques */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob principal jaune */}
        <div
          className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-10"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>

        {/* Blob secondaire orange */}
        <div
          className="absolute bottom-32 left-10 w-64 h-64 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-8"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        ></div>

        {/* Petit blob accent */}
        <div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 opacity-6"
          style={{
            borderRadius: '70% 30% 50% 50% / 30% 70% 50% 50%',
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
       
        {/* Titre principal avec style moderne */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Sous-titre */}
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          <span className="text-white">Page</span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Introuvable
          </span>
        </h2>
 
        {/* Illustration avec emoji moderne */}
        <div className="mb-12">
          <div className="text-8xl md:text-9xl mb-6 animate-bounce">
         💨
          </div>
        
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Bouton principal */}
          <Link 
            href="/"
            className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 text-xl font-bold rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="flex items-center justify-center gap-3">
              🏠 Retour à l&apos;accueil
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          {/* Bouton secondaire */}
          <Link 
            href="/devenir-livreur"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 text-xl font-bold rounded-2xl hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Devenir livreur
          </Link>
        </div>

     
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;