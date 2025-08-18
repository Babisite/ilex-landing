'use client';

import React from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-8 py-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-white">📋 Conditions d'Utilisation</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/20 rounded-xl"
              >
                <HiOutlineXMark className="w-8 h-8" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-8 py-6 overflow-y-auto max-h-[70vh]">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptation des conditions</h3>
                <p className="text-gray-700 leading-relaxed">
                  En utilisant l'application ILEX, vous acceptez d'être lié par ces conditions d'utilisation. 
                  Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Description du service</h3>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ILEX est une plateforme de livraison qui connecte les utilisateurs avec des livreurs pour :
                  </p>
                  <ul className="text-gray-700 list-disc list-inside space-y-2">
                    <li>Livraison express en moins de 30 minutes</li>
                    <li>Livraison standard dans la journée</li>
                    <li>Services de déménagement</li>
                    <li>Livraisons groupées</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Inscription et compte utilisateur</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-blue-600 mb-2">📱 Conditions d'inscription</h4>
                    <ul className="text-gray-700 list-disc list-inside space-y-1">
                      <li>Être âgé de 15 ans minimum</li>
                      <li>Fournir des informations exactes et à jour</li>
                      <li>Maintenir la confidentialité de votre compte</li>
                      <li>Notifier immédiatement tout usage non autorisé</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Utilisation du service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="font-bold text-green-600 mb-2">✅ Utilisations autorisées</h4>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Commandes légales uniquement</li>
                      <li>Respect des livreurs</li>
                      <li>Informations exactes</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl">
                    <h4 className="font-bold text-red-600 mb-2">❌ Utilisations interdites</h4>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Produits illégaux</li>
                      <li>Harcèlement</li>
                      <li>Fraude</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Tarifs et paiement</h3>
                <div className="bg-yellow-50 p-6 rounded-2xl">
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">💰</span>
                      <span>Les tarifs sont affichés clairement avant confirmation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">💳</span>
                      <span>Paiement sécurisé par carte ou mobile money</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🧾</span>
                      <span>Facturation automatique après livraison</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">↩️</span>
                      <span>Remboursement selon notre politique</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilités</h3>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-orange-600 mb-2">🏢 ILEX s'engage à :</h4>
                    <ul className="text-gray-700 list-disc list-inside space-y-1">
                      <li>Fournir un service de qualité</li>
                      <li>Protéger vos données personnelles</li>
                      <li>Assurer la sécurité des transactions</li>
                      <li>Offrir un support client réactif</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-blue-600 mb-2">👤 L'utilisateur s'engage à :</h4>
                    <ul className="text-gray-700 list-disc list-inside space-y-1">
                      <li>Utiliser le service de manière responsable</li>
                      <li>Fournir des informations exactes</li>
                      <li>Respecter les livreurs et partenaires</li>
                      <li>Signaler tout problème rapidement</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation de responsabilité</h3>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-gray-700 leading-relaxed">
                    ILEX ne peut être tenu responsable des dommages indirects, incidents ou consécutifs 
                    résultant de l'utilisation du service. Notre responsabilité est limitée au montant 
                    de la commande concernée.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous nous réservons le droit de modifier ces conditions à tout moment. 
                  Les utilisateurs seront notifiés des changements importants par email ou via l'application.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h3>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pour toute question concernant ces conditions d'utilisation :
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Email :</strong> 
                      <a href="mailto:legal@ilex.ci" className="text-green-600 font-bold hover:text-green-700 ml-2">
                        legal@ilex-delivery.com
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Support :</strong> +225 07 10 17 91 40
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-2xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              J'accepte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;