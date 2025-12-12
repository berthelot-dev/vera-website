import Image from 'next/image';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { Event } from '@/lib/contentful';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white border border-black/10 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      {event.image && (
        <div className="relative h-64 w-full">
          <Image
            src={event.image.url}
            alt={event.image.title || event.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-serif text-black mb-4">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-black/70">
            <Calendar size={18} />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-black/70">
            <Clock size={18} />
            <span>
              {formatTime(event.date)}
              {event.endTime && ` - ${formatTime(event.endTime)}`}
            </span>
          </div>
          
          {event.address && (
            <div className="flex items-start gap-2 text-black/70">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <span>{event.address}</span>
            </div>
          )}
        </div>

        {event.description && (
          <p className="text-black/80 mb-4 leading-relaxed">{event.description}</p>
        )}

        {event.ticketLink && (
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white hover:bg-[#FF1493] transition-colors rounded-full font-medium"
          >
            <Ticket size={18} />
            Buy Tickets
          </a>
        )}
      </div>
    </div>
  );
}

