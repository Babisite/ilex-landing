'use client';

import React from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiesModal: React.FC<CookiesModalProps> = ({ isOpen, onClose }) => {
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
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-white">🍪 Politique des Cookies</h2>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que les cookies ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site web. 
                  Ils nous aident à améliorer votre expérience utilisateur et à analyser l&apos;utilisation de notre site.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Types de cookies utilisés</h3>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-orange-600 mb-2">🔧 Cookies Essentiels</h4>
                    <p className="text-gray-700">
                      Nécessaires au fonctionnement du site. Ils permettent la navigation et l&apos;utilisation des fonctionnalités de base.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-yellow-600 mb-2">📊 Cookies Analytiques</h4>
                    <p className="text-gray-700">
                      Nous aident à comprendre comment vous utilisez notre site pour l&apos;améliorer continuellement.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-blue-600 mb-2">🎯 Cookies Marketing</h4>
                    <p className="text-gray-700">
                      Utilisés pour personnaliser les publicités et mesurer l&apos;efficacité de nos campagnes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestion des cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vous pouvez contrôler et gérer les cookies dans les paramètres de votre navigateur. 
                  Notez que la désactivation de certains cookies peut affecter le fonctionnement du site.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Comment désactiver les cookies :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                    <li><strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies</li>
                    <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant notre politique des cookies, contactez-nous à : 
                  <a href="mailto:privacy@ilex-delivery.com" className="text-orange-600 font-bold hover:text-orange-700">
                    privacy@ilex-delivery.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              J&apos;ai compris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;