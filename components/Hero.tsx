import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Award } from 'lucide-react';

interface HeroProps {
  backgroundImage?: string;
  showContent?: boolean;
}

export default function Hero({ backgroundImage, showContent = true }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 bg-white overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Vera"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      
      <div className={`relative z-10 max-w-4xl mx-auto text-center ${backgroundImage ? 'text-white' : ''}`}>
        {showContent && (
          <>
            {/* Main Name */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif mb-6 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Vera
            </h1>

            {/* Instagram Link */}
            <div className="mb-8">
              <a
                href="https://www.instagram.com/vera.just.vera/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 hover:text-[#FF1493] transition-colors text-lg sm:text-xl font-medium group ${backgroundImage ? 'text-white' : 'text-black'}`}
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                <span>@vera.just.vera</span>
              </a>
            </div>

            {/* Achievement Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
              <div className={`flex items-center gap-2 px-4 py-2 border rounded-full ${backgroundImage ? 'border-white/30 bg-white/10 backdrop-blur-sm' : 'border-black/20 bg-white'}`}>
                <Award size={20} className="text-[#FF1493]" />
                <span className={`text-sm sm:text-base font-medium ${backgroundImage ? 'text-white' : 'text-black'}`}>Miss Capital Pride 2024</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 border rounded-full ${backgroundImage ? 'border-white/30 bg-white/10 backdrop-blur-sm' : 'border-black/20 bg-white'}`}>
                <Award size={20} className="text-[#FF1493]" />
                <span className={`text-sm sm:text-base font-medium ${backgroundImage ? 'text-white' : 'text-black'}`}>Ottawa Drag Race Winner 2019</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-me"
                className="px-8 py-3 bg-black text-white hover:bg-[#FF1493] transition-colors rounded-full font-medium"
              >
                Book Me
              </Link>
              <Link
                href="/events"
                className={`px-8 py-3 border-2 rounded-full font-medium transition-colors ${
                  backgroundImage
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Upcoming Events
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
