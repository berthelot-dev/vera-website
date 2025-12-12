import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';
import { galleryImages } from '@/lib/images';

export default function Home() {
  return (
    <main className="min-h-screen bg-white ">
      <Hero backgroundImage="/images/hero/main.jpg" />
      <PhotoGallery images={galleryImages} />
    </main>
  );
}
