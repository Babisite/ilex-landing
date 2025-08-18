'use client';

const ContactInfoSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
      {/* Blobs décoratifs - optimisés mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-br from-orange-200 to-yellow-200 opacity-15 sm:opacity-25"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-yellow-200 to-orange-200 opacity-12 sm:opacity-20"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
        {/* Header - optimisé mobile */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
              <span className="sm:hidden">Support</span>
              <span className="hidden sm:inline">Support client</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 lg:mb-8">
            <span className="text-gray-900">Besoin</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              <span className="sm:hidden">d'Aide ?</span>
              <span className="hidden sm:inline">d'Aide ?</span>
            </span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            <span className="hidden sm:inline">Notre équipe support est disponible pour répondre à toutes vos questions</span>
            <span className="sm:hidden">Notre équipe répond à toutes vos questions</span>
          </p>
        </div>
 

        {/* FAQ Section - optimisée mobile */}
        <div className="bg-white/60 backdrop-blur-sm border border-orange-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">
            <span className="sm:hidden">Questions fréquentes</span>
            <span className="hidden sm:inline">Questions fréquemment posées</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                q: 'Comment passer une commande ?',
                qMobile: 'Comment commander ?',
                a: 'Téléchargez l\'app, choisissez vos produits et validez.',
                aMobile: 'App → produits → validation'
              },
              {
                q: 'Quels sont les délais de livraison ?',
                qMobile: 'Délais de livraison ?',
                a: 'Express: 30min, Normal: même jour, selon le service.',
                aMobile: 'Express: 30min, Normal: jour J'
              },
              {
                q: 'Comment devenir livreur ILEX ?',
                qMobile: 'Devenir livreur ?',
                a: 'Remplissez le formulaire sur notre page recrutement.',
                aMobile: 'Formulaire page recrutement'
              },
              {
                q: 'Quels moyens de paiement acceptez-vous ?',
                qMobile: 'Moyens de paiement ?',
                a: 'Espèces, Mobile Money, cartes bancaires.',
                aMobile: 'Espèces, Mobile Money, CB'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                  <span className="sm:hidden">❓ {faq.qMobile}</span>
                  <span className="hidden sm:inline">❓ {faq.q}</span>
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  <span className="sm:hidden">{faq.aMobile}</span>
                  <span className="hidden sm:inline">{faq.a}</span>
                </p>
              </div>
            ))}
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

export default ContactInfoSection;