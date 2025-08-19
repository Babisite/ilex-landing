'use client';

import Image from 'next/image';
import Wave from 'react-wavify';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[40vh] sm:h-[60vh] lg:min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden pt-12 sm:pt-16 lg:pt-0">
      {/* Background avec reverse border-radius */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100"
        style={{
          borderRadius: '0 0 120px 120px',
          transform: 'scale(1.02)'
        }}
      ></div>

      {/* Blobs décoratifs organiques - optimisés mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob principal orange - réduit sur mobile */}
        <div
          className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-br from-orange-400 to-orange-300 opacity-15 sm:opacity-20"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>

        {/* Blob secondaire jaune - réduit sur mobile */}
        <div
          className="absolute top-1/3 -left-16 sm:-left-32 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-br from-yellow-400 to-yellow-300 opacity-10 sm:opacity-15"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>

        {/* Petit blob accent - caché sur très petit mobile */}
        <div
          className="hidden sm:block absolute bottom-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-20 sm:opacity-25"
          style={{
            borderRadius: '70% 30% 50% 50% / 30% 70% 50% 50%',
            animation: 'float 4s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-16 items-center w-full">
          {/* Left Content - Ultra compact sur mobile */}
          <div className="space-y-1 sm:space-y-3 lg:space-y-8 mt-4 sm:mt-8 lg:mt-0">
            <div className="space-y-0.5 sm:space-y-2 lg:space-y-6">
              <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.8]">
                <span className="block">LIVRAISON</span>
                <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  EXPRESS
                </span>
                <span className="block text-gray-800 text-xs sm:text-lg md:text-3xl lg:text-6xl xl:text-7xl">
                  EN 30 MIN
                </span>
              </h1>

              <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl text-gray-700 leading-tight font-medium">
                <span className="hidden sm:inline">Commandez, suivez en temps réel, payez à la livraison. ILEX transforme vos livraisons.</span>
               
              </p>
            </div>

            {/* App Store et Play Store badges */}
            <div className="pt-0.5 sm:pt-1 lg:pt-4">
              <div className="flex items-start">
                {/* App Store Badge - Commenté */}
                {/*
                <a
                  href="https://apps.apple.com/app/ilex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src="/images/app-store-badge.png"
                    width={120}
                    height={40}
                    alt="Télécharger sur l'App Store"
                    className="h-auto w-[100px] sm:w-[120px] lg:w-[140px]"
                  />
                </a>
                */}
                
                {/* Play Store Badge - Agrandi */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.ilex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src="/images/google-play-badge.png"
                    width={160}
                    height={50}
                    alt="Télécharger sur Google Play"
                    className="h-auto w-[130px] sm:w-[140px] lg:w-[180px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup amélioré sur mobile */}
          <div className="relative flex justify-center lg:justify-end -mt-2 sm:-mt-6 lg:-mt-32">
            <div className="relative w-full max-w-[120px] sm:max-w-[220px] lg:max-w-md mt-4">
              {/* Mockup principal */}
              <div className="relative z-20">
                <Image
                  src="/images/hero.png"
                  width={600}
                  height={50}
                  quality={100}
                  priority={true}
                  alt="Application ILEX - Interface mobile"
                  className="w-full mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Glow effect derrière le mockup - réduit sur mobile */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 opacity-10 sm:opacity-20 blur-sm sm:blur-2xl lg:blur-3xl scale-110 z-10"
                style={{ borderRadius: '40% 60% 50% 50% / 60% 40% 50% 50%' }}
              ></div>


              {/* Petits éléments décoratifs - cachés sur mobile */}
              <div className="hidden lg:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="hidden lg:block absolute top-1/4 -right-4 sm:-right-6 lg:-right-8 w-4 sm:w-6 h-4 sm:h-6 bg-orange-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Wave avec react-wavify */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48">
        {/* Wave Layer 1 - Principal */}
        <div className="absolute bottom-0 w-full h-full">
          <Wave
            fill="rgba(255,255,255,0.8)"
            paused={false}
            options={{
              height: 40,
              amplitude: 30,
              speed: 0.2,
              points: 4
            }}
          />
        </div>

        {/* Wave Layer 2 - Orange */}
        <div className="absolute bottom-0 w-full h-3/4 transform translate-y-4">
          <Wave
            fill="rgba(251,146,60,0.6)"
            paused={false}
            options={{
              height: 25,
              amplitude: 20,
              speed: 0.15,
              points: 3
            }}
          />
        </div>

        {/* Wave Layer 3 - Jaune */}
        <div className="absolute bottom-0 w-full h-1/2 transform translate-y-8">
          <Wave
            fill="rgba(234,179,8,0.4)"
            paused={false}
            options={{
              height: 15,
              amplitude: 15,
              speed: 0.25,
              points: 5
            }}
          />
        </div>

        {/* Particules flottantes */}
        <div className="absolute bottom-0 w-full h-full pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 opacity-40"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
