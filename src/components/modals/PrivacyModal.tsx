 'use client';

import React from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-3xl font-black text-white">🛡️ Politique de Confidentialité</h2>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h3>
                <p className="text-gray-700 leading-relaxed">
                  Chez ILEX, nous nous engageons à protéger votre vie privée et vos données personnelles. 
                  Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Données collectées</h3>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-amber-600 mb-2">📱 Informations d&apos;inscription</h4>
                    <ul className="text-gray-700 list-disc list-inside space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse de livraison</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-yellow-600 mb-2">🚚 Données de livraison</h4>
                    <ul className="text-gray-700 list-disc list-inside space-y-1">
                      <li>Historique des commandes</li>
                      <li>Préférences de livraison</li>
                      <li>Données de géolocalisation</li>
                      <li>Évaluations et commentaires</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-yellow-600 mb-2">💳 Informations de paiement</h4>
                    <p className="text-gray-700">
                      Les données de paiement sont traitées de manière sécurisée par nos partenaires certifiés PCI DSS.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Utilisation des données</h3>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <span>Traitement et suivi de vos commandes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">📞</span>
                      <span>Communication concernant vos livraisons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🔧</span>
                      <span>Amélioration de nos services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🛡️</span>
                      <span>Prévention de la fraude et sécurité</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <h4 className="font-bold text-orange-600 mb-2">✅ Droit d&apos;accès</h4>
                    <p className="text-sm text-gray-700">Consulter vos données personnelles</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <h4 className="font-bold text-yellow-600 mb-2">✏️ Droit de rectification</h4>
                    <p className="text-sm text-gray-700">Corriger vos informations</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl">
                    <h4 className="font-bold text-red-600 mb-2">🗑️ Droit à l&apos;effacement</h4>
                    <p className="text-sm text-gray-700">Supprimer vos données</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl">
                    <h4 className="font-bold text-amber-600 mb-2">📤 Droit à la portabilité</h4>
                    <p className="text-sm text-gray-700">Récupérer vos données</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sécurité</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                <div className="bg-yellow-50 p-6 rounded-2xl">
                  <ul className="text-gray-700 list-disc list-inside space-y-2">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance continue de nos systèmes</li>
                    <li>Formation régulière de nos équipes</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
                <div className="bg-amber-50 p-6 rounded-2xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pour exercer vos droits ou pour toute question concernant cette politique :
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Email :</strong> 
                      <a href="mailto:privacy@ilex.ci" className="text-amber-600 font-bold hover:text-amber-700 ml-2">
                        privacy@ilex-delivery.com
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Téléphone :</strong> +225 07 10 17 91 40
                    </p>
                    <p className="text-gray-700">
                      <strong>Adresse :</strong> Abidjan, Côte d&apos;Ivoire
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
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-2xl hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              J&apos;ai compris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;