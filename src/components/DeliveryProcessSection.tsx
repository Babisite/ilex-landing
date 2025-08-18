'use client';

import Link from "next/link";

const DeliveryProcessSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-8 sm:py-12 lg:py-20 overflow-hidden">
      {/* Blobs sur fond noir - optimisés mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-orange-400 to-yellow-400 opacity-8 sm:opacity-10"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 12s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-40 lg:w-48 h-24 sm:h-40 lg:h-48 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-6 sm:opacity-8"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header - optimisé mobile */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 lg:mb-8">
            <span className="text-white">Comment</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              <span className="sm:hidden">Commencer ?</span>
              <span className="hidden sm:inline">Commencer ?</span>
            </span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            <span className="hidden sm:inline">Un processus simple en 3 étapes pour rejoindre l'équipe ILEX</span>
            <span className="sm:hidden">3 étapes simples pour rejoindre ILEX</span>
          </p>
        </div>

        {/* Steps - optimisés mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              step: '01',
              title: 'Candidature',
              titleMobile: 'Postuler',
              desc: 'Remplissez le formulaire en 2 minutes',
              descMobile: 'Formulaire 2min',
              icon: '📝'
            },
            {
              step: '02', 
              title: 'Validation',
              titleMobile: 'Validation',
              desc: 'Notre équipe étudie votre profil',
              descMobile: 'Étude profil',
              icon: '✅'
            },
            {
              step: '03',
              title: 'Formation',
              titleMobile: 'Formation',
              desc: 'Formation gratuite et début des livraisons',
              descMobile: 'Formation + début',
              icon: '🎓'
            }
          ].map((etape, index) => (
            <div key={index} className="text-center">
              {/* Numéro - adapté mobile */}
              <div className="relative mb-4 sm:mb-6 lg:mb-8">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-lg sm:text-xl lg:text-2xl font-black flex items-center justify-center mx-auto rounded-xl sm:rounded-2xl shadow-lg">
                  {etape.step}
                </div>
                {/* Ligne de connexion - cachée sur mobile */}
                {index < 2 && (
                  <div className="hidden sm:block absolute top-8 sm:top-9 lg:top-10 left-full w-8 h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
                )}
              </div>
              
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{etape.icon}</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                <span className="sm:hidden">{etape.titleMobile}</span>
                <span className="hidden sm:inline">{etape.title}</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="sm:hidden">{etape.descMobile}</span>
                <span className="hidden sm:inline">{etape.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA supplémentaire - optimisé mobile */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              <span className="sm:hidden">Prêt à commencer ?</span>
              <span className="hidden sm:inline">Prêt à commencer votre aventure ?</span>
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              <span className="hidden sm:inline">Rejoignez des centaines de livreurs qui ont déjà fait confiance à ILEX</span>
              <span className="sm:hidden">Rejoignez des centaines de livreurs ILEX</span>
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-xl sm:rounded-2xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <Link href="/contact">
            <span className="sm:hidden">Nous contacter</span>
            <span className="hidden sm:inline text-white">Contactez-nous maintenant</span>
            </Link>
            </button>
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
            transform: translateY(-20px) rotate(3deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default DeliveryProcessSection;