'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-orange-100'
                : 'bg-white/80 backdrop-blur-sm'
            }`}>
            <Container className="!px-0">
                <nav className="mx-auto flex justify-between items-center py-4 px-4 md:py-2">
                    {/* Logo Ultra Modern */}
                    <Link href="/" className="group flex items-center">
                        <div className="relative">
                            <Image
                                src="/images/logo.png"
                                alt="ILEX Logo"
                                width={150}
                                height={150}
                                className="transition-all duration-300 group-hover:scale-110"
                            />
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl"></div>
                        </div>
                    </Link>

                    {/* Desktop Menu Modern */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="relative text-gray-700 hover:text-orange-500 font-semibold transition-all duration-300 text-lg group">
                                    {item.text}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="https://play.google.com/console/" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 font-bold transition-all duration-300 hover:from-orange-600 hover:to-yellow-600 hover:shadow-lg rounded-xl">
                                Télécharger l'app
                            </Link>
                        </li>
                        <li>
                            <Link href="/devenir-livreur" className="border-2 border-orange-500 text-orange-500 px-6 py-3 font-bold transition-all duration-300 hover:bg-orange-500 hover:text-white rounded-xl">
                                Devenir livreur
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button Modern */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white focus:outline-none w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-2xl"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu Ultra Modern */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-300 transform"
                enterFrom="opacity-0 scale-95 -translate-y-4"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-in duration-200 transform"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 -translate-y-4"
            >
                <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-orange-100">
                    <div className="relative overflow-hidden">
                        {/* Background blob */}
                        <div
                            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 opacity-30 blur-2xl"
                            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                        ></div>

                        <ul className="relative flex flex-col space-y-4 pt-6 pb-8 px-6">
                            {menuItems.map(item => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="text-gray-700 hover:text-orange-500 font-semibold block text-lg py-2 px-4 rounded-xl hover:bg-orange-50 transition-all duration-300"
                                        onClick={toggleMenu}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4">
                                <Link
                                    href="https://play.google.com/console/"
                                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 font-bold block text-center transition-all duration-300 hover:from-orange-600 hover:to-yellow-600 rounded-xl shadow-lg"
                                    onClick={toggleMenu}
                                >
                                    Télécharger l'app
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/devenir-livreur"
                                    className="border-2 border-orange-500 text-orange-500 px-6 py-3 font-bold block text-center transition-all duration-300 hover:bg-orange-500 hover:text-white rounded-xl"
                                    onClick={toggleMenu}
                                >
                                    Devenir livreur
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
