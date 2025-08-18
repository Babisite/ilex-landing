'use client';

import React, { useState } from "react";
import CustomSelect from './CustomSelect';
import { sendContactEmail } from '../lib/emailjs';

const ContactHeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactEmail(formData);

      setSubmitStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden pt-16 sm:pt-20">
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
          {/* Left Content - Informations de contact */}
          <div className="space-y-4 sm:space-y-6 mt-6 lg:space-y-8 order-1 lg:order-1">
            {/* Header - optimisé mobile */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <span className="sm:hidden">Contact</span>
                  <span className="hidden sm:inline">Contactez-nous</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">Parlons</span>
                <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  <span className="sm:hidden">Ensemble</span>
                  <span className="hidden sm:inline">Ensemble</span>
                </span>
              </h1>

              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
                <span className="hidden sm:inline">Une question, une suggestion ou besoin d'aide ? Notre équipe est là pour vous accompagner !</span>
                <span className="sm:hidden">Une question ? Notre équipe vous accompagne !</span>
              </p>
            </div>

            {/* Informations de contact rapide - optimisées mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: '📞', title: 'Téléphone', titleMobile: 'Tel', info: '+225 07 10 17 91 40', infoMobile: '07 10 17 91 40' },
                { icon: '📧', title: 'Email', titleMobile: 'Email', info: 'contact@ilex-delivery.com', infoMobile: 'contact@ilex-delivery.com' },
                { icon: '📍', title: 'Adresse', titleMobile: 'Adresse', info: 'Abidjan, Côte d\'Ivoire', infoMobile: 'Abidjan, CI' },
                { icon: '⏰', title: 'Horaires', titleMobile: 'Horaires', info: '24h/24 - 7j/7', infoMobile: '24/7' },
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-orange-200">
                  <div className="text-lg sm:text-2xl">{contact.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">
                      <span className="sm:hidden">{contact.titleMobile}</span>
                      <span className="hidden sm:inline">{contact.title}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      <span className="sm:hidden">{contact.infoMobile}</span>
                      <span className="hidden sm:inline">{contact.info}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
          </div>

          {/* Right Content - Formulaire de contact - en bas sur mobile */}
          <div className="order-2 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="sm:hidden">Écrivez-nous</span>
                <span className="hidden sm:inline">Écrivez-nous un message</span>
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
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-orange-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone (optionnel)"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-orange-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm sm:text-base"
                  />
                  <CustomSelect
                    name="sujet"
                    value={formData.sujet}
                    onChange={(value) => setFormData({...formData, sujet: value})}
                    placeholder="Choisir un sujet"
                    options={[
                      { value: "question", label: "Question générale", icon: "❓" },
                      { value: "support", label: "Support technique", icon: "🛠️" },
                      { value: "partenariat", label: "Partenariat", icon: "🤝" },
                      { value: "autre", label: "Autre", icon: "💬" }
                    ]}
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-orange-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all resize-none text-sm sm:text-base"
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Envoi...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-lg">📨</span>
                        <span className="sm:hidden">Envoyer</span>
                        <span className="hidden sm:inline">Envoyer le message</span>
                      </>
                    )}
                  </span>
                </button>

                {/* Messages de statut */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
                    <span className="flex items-center justify-center gap-2">
                      <span>✅</span>
                      <span className="sm:hidden">Message envoyé !</span>
                      <span className="hidden sm:inline">Message envoyé avec succès !</span>
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
                <span className="hidden sm:inline">Nous vous répondrons dans les plus brefs délais</span>
                <span className="sm:hidden">Réponse rapide garantie</span>
              </p>
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
            transform: translateY(-20px) rotate(3deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default ContactHeroSection;