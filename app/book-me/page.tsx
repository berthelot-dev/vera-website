import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { Mail } from 'lucide-react';

export default function BookMePage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Side */}
          <div className="lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero/book-me.jpg"
                alt="Vera"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl font-serif text-black mb-4">
                Book Me
              </h1>
              <p className="text-lg sm:text-xl text-black/70">
                Interested in booking Vera for your event? Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />

            <div className="mt-8 text-center">
              <p className="text-black/60 mb-2">Or contact directly:</p>
              <a
                href="mailto:thedeetzes@hotmail.com"
                className="inline-flex items-center gap-2 text-[#FF1493] hover:text-black transition-colors font-medium"
              >
                <Mail size={18} />
                thedeetzes@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
