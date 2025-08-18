'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaTiktok,
    FaWhatsapp,
    FaYoutube
} from 'react-icons/fa';

// Import des modals
import CookiesModal from './modals/CookiesModal';
import PrivacyModal from './modals/PrivacyModal';
import TermsModal from './modals/TermsModal';
import { useModals } from '@/hooks/useModals';

const Footer: React.FC = () => {
    const {
        cookiesModalOpen,
        privacyModalOpen,
        termsModalOpen,
        openCookiesModal,
        closeCookiesModal,
        openPrivacyModal,
        closePrivacyModal,
        openTermsModal,
        closeTermsModal,
    } = useModals();

    // Écouter l'événement d'ouverture du modal cookies depuis le banner
    useEffect(() => {
        const handleOpenCookiesModal = () => {
            openCookiesModal();
        };

        window.addEventListener('openCookiesModal', handleOpenCookiesModal);
        return () => window.removeEventListener('openCookiesModal', handleOpenCookiesModal);
    }, [openCookiesModal]);

    return (
        <>
            {/* Modals */}
            <CookiesModal isOpen={cookiesModalOpen} onClose={closeCookiesModal} />
            <PrivacyModal isOpen={privacyModalOpen} onClose={closePrivacyModal} />
            <TermsModal isOpen={termsModalOpen} onClose={closeTermsModal} />

            {/* Footer */}
            <footer className="relative bg-black text-white overflow-hidden">
                {/* Blobs décoratifs organiques */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Blob principal orange */}
                    <div
                        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-10"
                        style={{
                            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                            animation: 'float 15s ease-in-out infinite'
                        }}
                    ></div>
 
                </div>

                <div className="relative z-10 max-w-10xl mx-auto px-4 py-20">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <Link href="/" className="group inline-block mb-8">
                            <Image
                                src="/images/logo.png"
                                alt="ILEX Logo"
                                width={300}
                                height={300}
                                className="transition-all duration-300 group-hover:scale-110 drop-shadow-2xl mx-auto"
                            />
                        </Link>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            La révolution de la livraison en Côte d&apos;Ivoire arrive bientôt.
                            Restez connectés pour ne rien manquer !
                        </p>
                    </div>

             
                    {/* Newsletter Signup */}
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Restez informé du lancement
                            </h3>
                            <p className="text-gray-300">
                                Soyez parmi les premiers à découvrir ILEX et bénéficiez d&apos;offres exclusives
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-400 transition-colors"
                            />
                            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 font-bold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105">
                                S&apos;inscrire
                            </button>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="text-center mb-12">
                        <h4 className="text-xl font-bold text-white mb-6">Suivez-nous</h4>
                        <div className="flex justify-center gap-4">
                            {[
                                {
                                    name: 'Facebook',
                                    icon: <FaFacebookF className="w-5 h-5" />,
                                    url: 'https://facebook.com/ilex-delivery',
                                    color: 'hover:bg-blue-600'
                                },
                                {
                                    name: 'Instagram',
                                    icon: <FaInstagram className="w-5 h-5" />,
                                    url: 'https://instagram.com/ilex-delivery',
                                    color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
                                },
                                {
                                    name: 'Twitter',
                                    icon: <FaTwitter className="w-5 h-5" />,
                                    url: 'https://twitter.com/ilex-delivery',
                                    color: 'hover:bg-blue-400'
                                },
                                {
                                    name: 'LinkedIn',
                                    icon: <FaLinkedinIn className="w-5 h-5" />,
                                    url: 'https://linkedin.com/company/ilex-delivery',
                                    color: 'hover:bg-blue-700'
                                },
                                {
                                    name: 'TikTok',
                                    icon: <FaTiktok className="w-5 h-5" />,
                                    url: 'https://tiktok.com/@ilex-delivery',
                                    color: 'hover:bg-black'
                                },
                                {
                                    name: 'WhatsApp',
                                    icon: <FaWhatsapp className="w-5 h-5" />,
                                    url: 'https://wa.me/+2250710179140',
                                    color: 'hover:bg-green-500'
                                },
                                {
                                    name: 'YouTube',
                                    icon: <FaYoutube className="w-5 h-5" />,
                                    url: 'https://youtube.com/@ilex-delivery',
                                    color: 'hover:bg-red-600'
                                },
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group w-12 h-12 bg-gray-800 ${social.color} text-white flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                    aria-label={`Suivez ILEX sur ${social.name}`}
                                >
                                    <span className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-gray-400 text-center md:text-left">
                                <p>© {new Date().getFullYear()} ILEX. Tous droits réservés.</p>
                                <p className="text-sm mt-1">
                                    Crée par Babisite
                                </p>
                            </div>

                            <div className="flex gap-6 text-sm text-gray-400">
                                <button
                                    onClick={openPrivacyModal}
                                    className="hover:text-blue-400 transition-colors cursor-pointer"
                                >
                                    Confidentialité
                                </button>
                                <button
                                    onClick={openTermsModal}
                                    className="hover:text-green-400 transition-colors cursor-pointer"
                                >
                                    Conditions
                                </button>
                                <button
                                    onClick={openCookiesModal}
                                    className="hover:text-orange-400 transition-colors cursor-pointer"
                                >
                                    Cookies
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    );
};

export default Footer;
