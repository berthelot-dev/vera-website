import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface MediaAppearance {
  title: string;
  publication: string;
  image?: string;
  link: string;
  date?: string;
}

interface MediaCardProps {
  appearance: MediaAppearance;
}

export default function MediaCard({ appearance }: MediaCardProps) {
  return (
    <a
      href={appearance.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-black/10 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
    >
      {appearance.image && (
        <div className="relative h-48 w-full">
          <Image
            src={appearance.image}
            alt={appearance.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-serif text-black group-hover:text-[#FF1493] transition-colors">
            {appearance.title}
          </h3>
          <ExternalLink size={18} className="text-black/40 group-hover:text-[#FF1493] transition-colors flex-shrink-0 mt-1" />
        </div>
        <p className="text-black/70 font-medium mb-1">{appearance.publication}</p>
        {appearance.date && (
          <p className="text-black/50 text-sm">{appearance.date}</p>
        )}
      </div>
    </a>
  );
}

