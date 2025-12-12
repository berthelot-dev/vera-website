import Image from 'next/image';

export const metadata = {
  title: 'Bio | Vera',
  description: 'Learn about Vera, Miss Capital Pride 2024 and Ottawa Drag Race Winner 2019',
};

export default function BioPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Side */}
          <div className="lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero/bio.jpg"
                alt="Vera"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h1 className="text-5xl sm:text-6xl font-serif text-black mb-8">
              Bio
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-6">
                A fixture of the National Capital Region&apos;s nightlife, Vera has established herself as one of Ottawa&apos;s most polished and sought-after drag performers. Known for her impeccable style and sophisticated stage persona, she creates an atmosphere of timeless glamour wherever she performs.
              </p>
              
              <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-6">
                In 2024, Vera&apos;s contributions to the community were cemented when she was crowned Miss Capital Pride, a title reflecting both her artistry and her leadership within the Ottawa queer scene. She is a resident powerhouse at The Lookout Bar & Nightclub, where she hosts weekly events like Saturday Night Drag, frequently sharing the stage with fellow icons like Kimmy Couture and Saltina Shaker.
              </p>
              
              <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-6">
                Beyond the nightclub, Vera is a versatile entertainer who brings warmth, wit, and high-fashion energy to every venue, from brunch spots to festival stages. She is not &quot;Just Vera&quot;—she is an experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
