'use client';

import Link from 'next/link';
import Image from 'next/image';

const CTASection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen bg-gradient-to-br from-orange-500 to-yellow-400 overflow-hidden">
      {/* Blobs décoratifs organiques sur gradient - réduits mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob principal rouge - réduit mobile */}
        <div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-br from-red-400 to-pink-400 opacity-15 sm:opacity-20"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>

        {/* Blob secondaire violet - réduit mobile */}
        <div
          className="absolute bottom-16 sm:bottom-32 left-10 sm:left-20 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-br from-purple-400 to-blue-400 opacity-10 sm:opacity-15"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>

        {/* Petit blob accent - caché sur mobile */}
        <div
          className="hidden sm:block absolute top-1/2 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-yellow-300 to-orange-300 opacity-20 sm:opacity-25"
          style={{
            borderRadius: '70% 30% 50% 50% / 30% 70% 50% 50%',
            animation: 'float 12s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-20 flex items-center min-h-[80vh] sm:min-h-screen">
        <div className="w-full">
          {/* Header Section - optimisé mobile */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-6">
              <span className="bg-black text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                <span className="sm:hidden">Bientôt</span>
                <span className="hidden sm:inline">Lancement Imminent</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 text-black leading-tight">
              <span className="block">
                <span className="sm:hidden">Prêt ?</span>
                <span className="hidden sm:inline">Prêt à vous</span>
              </span>
              <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                <span className="sm:hidden">C'est parti !</span>
                <span className="hidden sm:inline">Lancer ?</span>
              </span>
            </h2>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black/80 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              <span className="hidden sm:inline">Soyez parmi les premiers à découvrir ILEX !</span>
              <span className="sm:hidden">Découvrez ILEX en premier !</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left - CTA Buttons - optimisé mobile */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex justify-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ilex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
                  >
                    <Image
                      src="/images/google-play-badge.png"
                      width={200}
                      height={75}
                      alt="Télécharger sur Google Play"
                      className="h-auto w-[180px] sm:w-[200px] lg:w-[220px]"
                    />
                  </a>
                </div>

                <button className="group w-full border-2 sm:border-3 border-black text-black px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-sm sm:text-lg lg:text-xl font-bold transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 rounded-xl sm:rounded-2xl">
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl">🔔</span>
                    <span className="sm:hidden">Notifications</span>
                    <span className="hidden sm:inline">Être notifié du lancement</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust Elements - optimisé mobile */}
              <div className="bg-black/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-black text-white flex items-center justify-center font-bold text-xs sm:text-sm rounded-full border-1 sm:border-2 border-white"
                      >
                        {i}
                      </div>
                    ))}
                  </div> 
                </div>
                <p className="text-black/70 text-center text-xs sm:text-sm">
                  <span className="hidden sm:inline">Rejoignez la liste d'attente et bénéficiez d'avantages exclusifs</span>
                  <span className="sm:hidden">Liste d'attente avec avantages exclusifs</span>
                </p>
              </div>
            </div>

            {/* Right - Features Preview - optimisé mobile */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-4 sm:mb-6 lg:mb-8">
                <span className="sm:hidden">Nos atouts :</span>
                <span className="hidden sm:inline">Ce qui vous attend :</span>
              </h3>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {[
                  { icon: '⚡', title: 'Livraison Express', titleMobile: 'Express', desc: 'En 30 minutes chrono', descMobile: '30min' },
                  { icon: '🛡️', title: 'Sécurité Totale', titleMobile: 'Sécurité', desc: 'Assurance et protection', descMobile: 'Assuré' },
                  { icon: '📍', title: 'Suivi Temps Réel', titleMobile: 'Suivi', desc: 'Géolocalisation précise', descMobile: 'GPS' },
                  { icon: '💰', title: 'Prix Transparents', titleMobile: 'Prix', desc: 'Pas de frais cachés', descMobile: 'Transparent' },
                ].map((feature, index) => (
                  <div key={index} className="group flex items-center gap-2 sm:gap-3 lg:gap-4 bg-black/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-black/20 transition-all duration-300">
                    <div className="text-xl sm:text-2xl lg:text-3xl group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm sm:text-base lg:text-lg">
                        <span className="sm:hidden">{feature.titleMobile}</span>
                        <span className="hidden sm:inline">{feature.title}</span>
                      </div>
                      <div className="text-black/70 text-xs sm:text-sm lg:text-base">
                        <span className="sm:hidden">{feature.descMobile}</span>
                        <span className="hidden sm:inline">{feature.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats - optimisé mobile */}
          <div className="mt-8 sm:mt-12 lg:mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="bg-black/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-1 sm:mb-2">30min</div>
                <div className="text-black/70 font-medium text-xs sm:text-sm lg:text-base">
                  <span className="sm:hidden">Garanti</span>
                  <span className="hidden sm:inline">Livraison garantie</span>
                </div>
              </div>
              <div className="bg-black/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-1 sm:mb-2">24/7</div>
                <div className="text-black/70 font-medium text-xs sm:text-sm lg:text-base">
                  <span className="sm:hidden">Continu</span>
                  <span className="hidden sm:inline">Service continu</span>
                </div>
              </div>
              <div className="bg-black/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-1 sm:mb-2">Abidjan</div>
                <div className="text-black/70 font-medium text-xs sm:text-sm lg:text-base">
                  <span className="sm:hidden">Début</span>
                  <span className="hidden sm:inline">Lancement initial</span>
                </div>
              </div>
              <div className="bg-black/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-1 sm:mb-2">100%</div>
                <div className="text-black/70 font-medium text-xs sm:text-sm lg:text-base">
                  <span className="sm:hidden">Qualité</span>
                  <span className="hidden sm:inline">Satisfaction visée</span>
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
            transform: translateY(-30px) rotate(3deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;