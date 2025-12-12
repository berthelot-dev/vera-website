import Image from 'next/image';
import { ShoppingBag, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Merch | Vera',
  description: 'Shop Vera merchandise',
};

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side - Full visible image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white">
              <Image
                src="/images/hero/merch.jpg"
                alt="Vera Merch"
                width={2444}
                height={3479}
                className="w-full h-auto object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-serif text-black mb-6">
              Merch
            </h1>
            
            <div className="mb-8">
              <ShoppingBag size={64} className="mx-auto lg:mx-0 text-black/20 mb-6" />
              <p className="text-lg sm:text-xl text-black/70 mb-8 max-w-2xl mx-auto lg:mx-0">
                Show your support for Vera with exclusive merchandise featuring the Pop Art Vera design.
              </p>
            </div>

            <a
              href="https://paulberthelot.threadless.com/designs/pop-art-vera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-[#FF1493] transition-colors rounded-full font-medium text-lg group"
            >
              <span>Shop Now</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-8 p-6 bg-black/5 rounded-lg">
              <p className="text-black/60 text-sm">
                All merchandise is available through Threadless. Click the button above to browse the collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
