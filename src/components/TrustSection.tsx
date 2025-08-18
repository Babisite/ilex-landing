'use client';

import Image from 'next/image';

const TrustSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Blobs décoratifs organiques sur fond sombre - très réduits mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob principal doré - très réduit et transparent sur mobile */}
        <div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-3 sm:opacity-6 lg:opacity-8"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 12s ease-in-out infinite'
          }}
        ></div>

        {/* Blob secondaire bleu - très réduit sur mobile */}
        <div
          className="absolute bottom-16 sm:bottom-32 right-5 sm:right-10 w-24 sm:w-48 lg:w-80 h-24 sm:h-48 lg:h-80 bg-gradient-to-br from-blue-400 to-purple-400 opacity-2 sm:opacity-4 lg:opacity-6"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 9s ease-in-out infinite reverse'
          }}
        ></div>

        {/* Petit blob accent - caché sur mobile */}
        <div
          className="hidden sm:block absolute top-1/2 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-green-400 to-teal-400 opacity-3 sm:opacity-5"
          style={{
            borderRadius: '70% 30% 50% 50% / 30% 70% 50% 50%',
            animation: 'float 15s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
        {/* Header Section - optimisé mobile */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
              <span className="sm:hidden">Engagements</span>
              <span className="hidden sm:inline">Témoignages</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8">
            <span className="text-white">Nos</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Engagements
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            <span className="hidden sm:inline">Découvrez les promesses que nous nous engageons à tenir dès le lancement</span>
            <span className="sm:hidden">Nos promesses de service</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-20">
          {/* Testimonial Premium - optimisé mobile */}
          <div className="group relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-5 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-10 sm:group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="relative">
              {/* Image - réduite sur mobile */}
              <div>
                 <Image
                    src="/images/eng.png"
                    width={400}
                    height={300}
                    quality={100}
                    priority={true}
                    alt="Application ILEX - Interface mobile"
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-md mt-8 sm:mt-20 lg:mt-40 mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
            </div>
          </div>

          {/* Promesses & Engagements - optimisé mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-5 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-15 sm:group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-3 sm:p-6 lg:p-8 text-center hover:border-yellow-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">⚡</div>
                <div className="text-sm sm:text-lg lg:text-xl font-black text-yellow-400 mb-1 sm:mb-2 lg:mb-3">
                  <span className="sm:hidden">Express</span>
                  <span className="hidden sm:inline">Livraison Express</span>
                </div>
                <div className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">En 30 minutes</div>
                <div className="text-yellow-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  <span className="sm:hidden">Garanti</span>
                  <span className="hidden sm:inline">Garanti ou remboursé</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-15 sm:group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-3 sm:p-6 lg:p-8 text-center hover:border-blue-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">🛡️</div>
                <div className="text-sm sm:text-lg lg:text-xl font-black text-blue-400 mb-1 sm:mb-2 lg:mb-3">
                  <span className="sm:hidden">Sécurité</span>
                  <span className="hidden sm:inline">Sécurité Totale</span>
                </div>
                <div className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">
                  <span className="sm:hidden">Assuré</span>
                  <span className="hidden sm:inline">Assurance incluse</span>
                </div>
                <div className="text-blue-400 text-xs sm:text-sm mt-1 sm:mt-2">Protection complète</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-400 opacity-5 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-15 sm:group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-3 sm:p-6 lg:p-8 text-center hover:border-green-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">📍</div>
                <div className="text-sm sm:text-lg lg:text-xl font-black text-green-400 mb-1 sm:mb-2 lg:mb-3">
                  <span className="sm:hidden">Suivi</span>
                  <span className="hidden sm:inline">Suivi Temps Réel</span>
                </div>
                <div className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">
                  <span className="sm:hidden">GPS</span>
                  <span className="hidden sm:inline">Géolocalisation</span>
                </div>
                <div className="text-green-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  <span className="sm:hidden">Transparent</span>
                  <span className="hidden sm:inline">Transparence totale</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-400 opacity-5 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-15 sm:group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-3 sm:p-6 lg:p-8 text-center hover:border-pink-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">💬</div>
                <div className="text-sm sm:text-lg lg:text-xl font-black text-pink-400 mb-1 sm:mb-2 lg:mb-3">
                  <span className="sm:hidden">Support</span>
                  <span className="hidden sm:inline">Support 24/7</span>
                </div>
                <div className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">
                  <span className="sm:hidden">Continu</span>
                  <span className="hidden sm:inline">Assistance continue</span>
                </div>
                <div className="text-pink-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  <span className="sm:hidden">24/7</span>
                  <span className="hidden sm:inline">Toujours disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-25px) rotate(2deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;