'use client';

import Link from 'next/link';

const ServicesSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen bg-black text-white overflow-hidden">
      {/* Blobs décoratifs organiques sur fond noir - optimisés mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob principal jaune - réduit sur mobile */}
        <div
          className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-8 sm:opacity-10"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>

        {/* Blob secondaire orange - réduit sur mobile */}
        <div
          className="absolute bottom-16 sm:bottom-32 left-5 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-6 sm:opacity-8"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        ></div>

        {/* Petit blob accent - caché sur mobile */}
        <div
          className="hidden sm:block absolute top-1/2 left-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-yellow-300 to-orange-300 opacity-6"
          style={{
            borderRadius: '70% 30% 50% 50% / 30% 70% 50% 50%',
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
        {/* Header Section - optimisé mobile */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
              Nos Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Solutions
            </span>
            <br />
            <span className="text-white">Rapide</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            <span className="hidden sm:inline">Des solutions adaptées à tous vos besoins de livraison avec un service d&apos;exception</span>
            <span className="sm:hidden">Solutions de livraison rapide</span>
          </p>
        </div>

        {/* Services Grid - optimisé mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {/* Service Express - Premium - optimisé mobile */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-15 sm:opacity-20 blur-lg sm:blur-xl group-hover:opacity-25 sm:group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-3 sm:p-6 lg:p-8 text-center hover:border-yellow-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
              {/* Badge Premium - adapté mobile */}
              <div className="absolute -top-1 sm:-top-3 -right-1 sm:-right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs font-bold">
                <span className="sm:hidden">TOP</span>
                <span className="hidden sm:inline">POPULAIRE</span>
              </div>

              <div className="text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-sm sm:text-xl lg:text-2xl font-black text-yellow-400 mb-2 sm:mb-3 lg:mb-4">Express</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                <span className="hidden sm:inline">Livraison ultra-rapide en moins de 30 minutes</span>
                <span className="sm:hidden">30min chrono</span>
              </p>

              {/* Élément de confiance - simplifié mobile */}
              <div className="mb-3 sm:mb-4 lg:mb-6">
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-yellow-400 mb-1 sm:mb-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-xs sm:text-sm lg:text-base">
                    <span className="sm:hidden">Garanti</span>
                    <span className="hidden sm:inline">Garantie</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-400">Ou remboursé</div>
              </div>

              <button className="group/btn bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-bold w-full rounded-lg sm:rounded-xl lg:rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-xs sm:text-sm lg:text-base">
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <span className="sm:hidden">Express</span>
                  <span className="hidden sm:inline">Express</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Service Normal - optimisé mobile */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-500 opacity-8 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-15 sm:group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 p-3 sm:p-6 lg:p-8 text-center hover:border-gray-600 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
              <div className="text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">📦</div>
              <h3 className="text-sm sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 lg:mb-4">Normal</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                <span className="hidden sm:inline">Livraison standard dans la journée</span>
                <span className="sm:hidden">Même jour</span>
              </p>

              <div className="mb-3 sm:mb-4 lg:mb-6">
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-white mb-1 sm:mb-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold text-xs sm:text-sm lg:text-base">
                    <span className="sm:hidden">Fiable</span>
                    <span className="hidden sm:inline">Fiable & Sûr</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-400">Service éprouvé</div>
              </div>

              <button className="border-2 border-gray-600 text-gray-300 px-2 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-bold w-full rounded-lg sm:rounded-xl lg:rounded-2xl hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base">
                <span className="sm:hidden">Normal</span>
                <span className="hidden sm:inline">Normal</span>
              </button>
            </div>
          </div>

          {/* Service Déménagement - optimisé mobile */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 opacity-8 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-15 sm:group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 p-3 sm:p-6 lg:p-8 text-center hover:border-blue-500 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
              <div className="text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">🚚</div>
              <h3 className="text-sm sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 lg:mb-4">
                <span className="sm:hidden">Déménag.</span>
                <span className="hidden sm:inline">Déménagement</span>
              </h3>
              <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                <span className="hidden sm:inline">Service complet de déménagement</span>
                <span className="sm:hidden">Complet</span>
              </p>

              <div className="mb-3 sm:mb-4 lg:mb-6">
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-blue-400 mb-1 sm:mb-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-xs sm:text-sm lg:text-base">
                    <span className="sm:hidden">Assuré</span>
                    <span className="hidden sm:inline">Assurance incluse</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-400">Protection totale</div>
              </div>

              <button className="border-2 border-blue-500 text-blue-400 px-2 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-bold w-full rounded-lg sm:rounded-xl lg:rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base">
                <span className="sm:hidden">Déménag.</span>
                <span className="hidden sm:inline">Déménagement</span>
              </button>
            </div>
          </div>

          {/* Service Groupé - optimisé mobile */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-500 opacity-8 sm:opacity-10 blur-lg sm:blur-xl group-hover:opacity-15 sm:group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 p-3 sm:p-6 lg:p-8 text-center hover:border-green-500 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl">
              <div className="text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">📋</div>
              <h3 className="text-sm sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 lg:mb-4">Groupée</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                <span className="hidden sm:inline">Livraisons groupées économiques</span>
                <span className="sm:hidden">Économique</span>
              </p>

              <div className="mb-3 sm:mb-4 lg:mb-6">
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-green-400 mb-1 sm:mb-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-xs sm:text-sm lg:text-base">
                    <span className="sm:hidden">Éco</span>
                    <span className="hidden sm:inline">Éco-responsable</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-400">Impact positif</div>
              </div>

              <button className="border-2 border-green-500 text-green-400 px-2 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-bold w-full rounded-lg sm:rounded-xl lg:rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base">
                <span className="sm:hidden">Groupée</span>
                <span className="hidden sm:inline">Groupée</span>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section - optimisé mobile */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-20">
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8">
            <span className="hidden sm:inline">Besoin d&apos;un service personnalisé ?</span>
            <span className="sm:hidden">Service personnalisé ?</span>
          </p>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contactez-nous</span>
            </button>
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
    </section>
  );
};

export default ServicesSection;