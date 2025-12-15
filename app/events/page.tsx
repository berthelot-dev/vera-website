import Image from 'next/image';
import { getEvents } from '@/lib/contentful';
import EventCard from '@/components/EventCard';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Upcoming Events | Vera',
  description: 'See where Vera is performing next',
};

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
// Revalidate every 60 seconds (optional - for caching)
export const revalidate = 60;

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Image Side */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/hero/calendar.jpg"
                  alt="Vera"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <h1 className="text-5xl sm:text-6xl font-serif text-black mb-8">
              Upcoming Events
            </h1>

            {events.length === 0 ? (
              <div className="text-center py-16">
                <Calendar size={64} className="mx-auto text-black/20 mb-4" />
                <p className="text-xl text-black/60 mb-2">No upcoming events scheduled</p>
                <p className="text-black/40">
                  Check back soon or{' '}
                  <a href="/book-me" className="text-[#FF1493] hover:underline">
                    book Vera for your event
                  </a>
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
