'use client';

import Link from 'next/link';
import Image from 'next/image';

const ProcessSection: React.FC = () => {
    return (
        <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
            {/* Blobs décoratifs organiques sur fond clair - réduits mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Blob principal orange - réduit mobile */}
                <div
                    className="absolute top-16 sm:top-32 left-5 sm:left-10 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-br from-orange-200 to-yellow-200 opacity-20 sm:opacity-30"
                    style={{
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        animation: 'float 10s ease-in-out infinite'
                    }}
                ></div>

                {/* Blob secondaire jaune - réduit mobile */}
                <div
                    className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-br from-yellow-200 to-orange-200 opacity-15 sm:opacity-25"
                    style={{
                        borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
                        animation: 'float 8s ease-in-out infinite reverse'
                    }}
                ></div>

                {/* Petit blob accent - caché sur mobile */}
                <div
                    className="hidden sm:block absolute top-1/3 right-1/3 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-orange-300 to-yellow-300 opacity-20"
                    style={{
                        borderRadius: '70% 30% 50% 50% / 30% 70% 50% 50%',
                        animation: 'float 12s ease-in-out infinite'
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
                {/* Header Section - optimisé mobile */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-20">
                    <div className="inline-block mb-3 sm:mb-6">
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                            <span className="sm:hidden">Étapes</span>
                            <span className="hidden sm:inline">Comment ça marche</span>
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8">
                        <span className="text-gray-900">Processus</span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                            <span className="sm:hidden">Simple</span>
                            <span className="hidden sm:inline">Ultra Simple</span>
                        </span>
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                        <span className="hidden sm:inline">Un processus simple et transparent pour vos livraisons en 4 étapes seulement</span>
                        <span className="sm:hidden">4 étapes simples pour vos livraisons</span>
                    </p>
                </div>

                {/* Process Steps - optimisé mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-20">
                    {/* Étape 1 - optimisé mobile */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 opacity-15 sm:opacity-20 blur-lg sm:blur-xl group-hover:opacity-25 sm:group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm border border-orange-200 p-3 sm:p-6 lg:p-8 text-center hover:border-orange-400 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl shadow-lg">
                            {/* Numéro avec design moderne - adapté mobile */}
                            <div className="relative mb-3 sm:mb-6 lg:mb-8">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm sm:text-xl lg:text-2xl font-black flex items-center justify-center mx-auto rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    01
                                </div>
                                {/* Ligne de connexion - cachée sur mobile */}
                                <div className="hidden lg:block absolute top-6 sm:top-8 lg:top-10 left-full w-8 h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
                            </div>

                            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                            <h3 className="text-sm sm:text-lg lg:text-2xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4">Commandez</h3>
                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                                <span className="hidden sm:inline">Choisissez vos produits et passez commande en quelques clics via notre app</span>
                                <span className="sm:hidden">Commande en 1 clic</span>
                            </p>

                            {/* Badge de temps - adapté mobile */}
                            <div className="mt-2 sm:mt-3 lg:mt-4 inline-block bg-orange-100 text-orange-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                                2 min
                            </div>
                        </div>
                    </div>

                    {/* Étape 2 - optimisé mobile */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-300 opacity-12 sm:opacity-15 blur-lg sm:blur-xl group-hover:opacity-20 sm:group-hover:opacity-25 transition-opacity duration-500"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 p-3 sm:p-6 lg:p-8 text-center hover:border-blue-400 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl shadow-lg">
                            <div className="relative mb-3 sm:mb-6 lg:mb-8">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-400 text-white text-sm sm:text-xl lg:text-2xl font-black flex items-center justify-center mx-auto rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    02
                                </div>
                                <div className="hidden lg:block absolute top-6 sm:top-8 lg:top-10 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                            </div>

                            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">📦</div>
                            <h3 className="text-sm sm:text-lg lg:text-2xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                                <span className="sm:hidden">Prépare</span>
                                <span className="hidden sm:inline">Préparation</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                                <span className="hidden sm:inline">Votre commande est gérée avec soin et professionnalisme</span>
                                <span className="sm:hidden">Préparation soignée</span>
                            </p>

                            <div className="mt-2 sm:mt-3 lg:mt-4 inline-block bg-blue-100 text-blue-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                                <span className="sm:hidden">5-10min</span>
                                <span className="hidden sm:inline">5-10 minutes</span>
                            </div>
                        </div>
                    </div>

                    {/* Étape 3 - optimisé mobile */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-300 opacity-12 sm:opacity-15 blur-lg sm:blur-xl group-hover:opacity-20 sm:group-hover:opacity-25 transition-opacity duration-500"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm border border-purple-200 p-3 sm:p-6 lg:p-8 text-center hover:border-purple-400 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl shadow-lg">
                            <div className="relative mb-3 sm:mb-6 lg:mb-8">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-purple-400 text-white text-sm sm:text-xl lg:text-2xl font-black flex items-center justify-center mx-auto rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    03
                                </div>
                                <div className="hidden lg:block absolute top-6 sm:top-8 lg:top-10 left-full w-8 h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
                            </div>

                            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">🚴‍♂️</div>
                            <h3 className="text-sm sm:text-lg lg:text-2xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4">Collecte</h3>
                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                                <span className="hidden sm:inline">Notre livreur récupère votre colis chez le marchand en temps record</span>
                                <span className="sm:hidden">Récupération rapide</span>
                            </p>

                            <div className="mt-2 sm:mt-3 lg:mt-4 inline-block bg-purple-100 text-purple-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                                <span className="sm:hidden">Live</span>
                                <span className="hidden sm:inline">Temps réel</span>
                            </div>
                        </div>
                    </div>

                    {/* Étape 4 - optimisé mobile */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-300 opacity-12 sm:opacity-15 blur-lg sm:blur-xl group-hover:opacity-20 sm:group-hover:opacity-25 transition-opacity duration-500"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm border border-green-200 p-3 sm:p-6 lg:p-8 text-center hover:border-green-400 transition-all duration-500 group-hover:transform group-hover:scale-105 rounded-2xl sm:rounded-3xl shadow-lg">
                            <div className="relative mb-3 sm:mb-6 lg:mb-8">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-green-400 text-white text-sm sm:text-xl lg:text-2xl font-black flex items-center justify-center mx-auto rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    04
                                </div>
                            </div>

                            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                            <h3 className="text-sm sm:text-lg lg:text-2xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4">Livraison</h3>
                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                                <span className="hidden sm:inline">Réception de votre commande à l'adresse indiquée, en toute sécurité</span>
                                <span className="sm:hidden">Livré chez vous</span>
                            </p>

                            <div className="mt-2 sm:mt-3 lg:mt-4 inline-block bg-green-100 text-green-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                                <span className="sm:hidden">≤30min</span>
                                <span className="hidden sm:inline">≤ 30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section Premium - optimisé mobile */}
                <div className="text-center">
                    <div className="bg-white/60 backdrop-blur-sm border border-orange-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto shadow-xl">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
                            <span className="hidden sm:inline">Prêt à vivre l'expérience ?</span>
                            <span className="sm:hidden">Prêt à tester ?</span>
                        </h3>

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
                                className="h-auto w-[150px] sm:w-[180px] lg:w-[200px] mx-auto"
                            />
                        </a>
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

export default ProcessSection;