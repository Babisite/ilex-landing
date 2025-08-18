'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomSelect from './CustomSelect';
import { sendDeliveryApplication } from '../lib/emailjs';

const DeliveryHeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    zone: '',
    vehicule: 'moto'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendDeliveryApplication(formData);
      setSubmitStatus('success');
      setFormData({
        nom: '',
        telephone: '',
        email: '',
        zone: '',
        vehicule: 'moto'
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[20vh] bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden pt-16 sm:pt-20">
      {/* Blobs décoratifs - optimisés mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-br from-orange-200 to-yellow-200 opacity-20 sm:opacity-30"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-br from-yellow-200 to-orange-200 opacity-15 sm:opacity-25"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen">
          {/* Left Content - Formulaire - optimisé mobile */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Header - optimisé mobile */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <span className="sm:hidden">Équipe</span>
                  <span className="hidden sm:inline">Rejoignez l'équipe</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">Devenez</span>
                <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  <span className="sm:hidden">Livreur</span>
                  <span className="hidden sm:inline">Livreur ILEX</span>
                </span>
              </h1>

              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
                <span className="hidden sm:inline">Rejoignez-nous et gagnez plus. Flexibilité, revenus attractifs et équipe dynamique vous attendent !</span>
                <span className="sm:hidden">Gagnez plus avec flexibilité et revenus attractifs !</span>
              </p>
            </div>

            {/* Avantages - optimisés mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: '💰', title: 'Revenus attractifs', titleMobile: 'Revenus', desc: 'Jusqu\'à 150k FCFA/mois', descMobile: '150k/mois' },
                { icon: '⏰', title: 'Horaires flexibles', titleMobile: 'Flexible', desc: 'Travaillez quand vous voulez', descMobile: 'Quand vous voulez' },
                { icon: '🛡️', title: 'Assurance incluse', titleMobile: 'Assuré', desc: 'Protection complète', descMobile: 'Protection' },
                { icon: '📱', title: 'App moderne', titleMobile: 'App', desc: 'Interface simple et efficace', descMobile: 'Simple' },
              ].map((avantage, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-orange-200">
                  <div className="text-lg sm:text-2xl">{avantage.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-base">
                      <span className="sm:hidden">{avantage.titleMobile}</span>
                      <span className="hidden sm:inline">{avantage.title}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      <span className="sm:hidden">{avantage.descMobile}</span>
                      <span className="hidden sm:inline">{avantage.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire - optimisé mobile */}
            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="sm:hidden">Candidature</span>
                <span className="hidden sm:inline">Candidature Express</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom complet"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-orange-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm sm:text-base"
                    required
                  />
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-orange-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-orange-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm sm:text-base"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="zone"
                    placeholder="Zone de livraison"
                    value={formData.zone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-orange-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm sm:text-base"
                    required
                  />
                  <CustomSelect
                    name="vehicule"
                    value={formData.vehicule}
                    onChange={(value) => setFormData({...formData, vehicule: value})}
                    placeholder="Choisir un véhicule"
                    options={[
                      { value: "moto", label: "Moto", icon: "🏍️" },
                      { value: "velo", label: "Vélo", icon: "🚴‍♂️" },
                      { value: "voiture", label: "Voiture", icon: "🚗" },
                      { value: "scooter", label: "Scooter", icon: "🛵" }
                    ]}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Envoi...</span>
                    </span>
                  ) : (
                    <>
                      <span className="sm:hidden">🚀 Postuler</span>
                      <span className="hidden sm:inline">🚀 Postuler maintenant</span>
                    </>
                  )}
                </button>

                {/* Messages de statut */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
                    <span className="flex items-center justify-center gap-2">
                      <span>✅</span>
                      <span className="sm:hidden">Candidature envoyée !</span>
                      <span className="hidden sm:inline">Candidature envoyée avec succès !</span>
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center">
                    <span className="flex items-center justify-center gap-2">
                      <span>❌</span>
                      <span className="sm:hidden">Erreur d'envoi</span>
                      <span className="hidden sm:inline">Erreur lors de l'envoi</span>
                    </span>
                  </div>
                )}
              </form>

              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center">
                Des questions ? <Link href="/contact" className="text-orange-500 font-semibold hover:underline">Contactez-nous</Link>
              </p>
            </div>
          </div>

          {/* Right Content - Illustration débordante sur desktop */}
          <div className="relative order-1 lg:order-2 lg:overflow-visible">
            <div className="relative z-20 lg:absolute lg:-top-72 lg:right-0 lg:transform lg:translate-y-0">
              <Image
                src="/images/rejoindre2.png"
                alt="Livreur ILEX - Rejoignez l'équipe"
                width={500}
                height={800}
                quality={100}
                priority={true}
                className="w-full max-w-[150px] sm:max-w-xs lg:max-w-2xl lg:h-[120vh] lg:object-cover lg:object-top mx-auto rounded-xl"
              />
            </div>

            {/* Éléments flottants - cachés sur mobile */}
            <div className="hidden lg:block absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl opacity-20 z-10"></div>
            <div className="hidden lg:block absolute top-1/3 -left-12 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-30 z-10"></div>
            <div className="hidden lg:block absolute bottom-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-xl opacity-25 z-10"></div>
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

export default DeliveryHeroSection;