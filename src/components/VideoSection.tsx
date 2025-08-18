'use client';

const VideoSection: React.FC = () => {
  return (
    <section className="relative h-[40vh] sm:h-[60vh] lg:h-screen overflow-hidden">
      {/* Vidéo pure en background - responsive */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          minHeight: '100%',
          minWidth: '100%'
        }}
      >
        <source src="/videos/livraison.mp4" type="video/mp4" />
      </video>

      {/* Transitions fluides avec les sections adjacentes - adaptées mobile */}
      <div
        className="absolute top-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"
        style={{
          borderRadius: '0 0 60px 60px'
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-orange-500 to-transparent pointer-events-none"
        style={{
          borderRadius: '60px 60px 0 0'
        }}
      ></div>
    </section>
  );
};

export default VideoSection;