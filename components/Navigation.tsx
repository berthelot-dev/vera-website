'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Instagram } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-3xl font-serif text-black hover:text-[#FF1493] transition-colors">
            Vera
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/bio" className="text-black hover:text-[#FF1493] transition-colors font-medium">
              Bio
            </Link>
            <Link href="/events" className="text-black hover:text-[#FF1493] transition-colors font-medium">
              Events
            </Link>
            <Link href="/book-me" className="text-black hover:text-[#FF1493] transition-colors font-medium">
              Book Me
            </Link>
            <Link href="/merch" className="text-black hover:text-[#FF1493] transition-colors font-medium">
              Merch
            </Link>
            <Link href="/" className="text-black hover:text-[#FF1493] transition-colors font-medium">
              Gallery
            </Link>
            <a
              href="https://www.instagram.com/vera.just.vera/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#FF1493] transition-colors font-medium"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="/bio"
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-[#FF1493] transition-colors font-medium"
            >
              Bio
            </Link>
            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-[#FF1493] transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              href="/book-me"
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-[#FF1493] transition-colors font-medium"
            >
              Book Me
            </Link>
            <Link
              href="/merch"
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-[#FF1493] transition-colors font-medium"
            >
              Merch
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-[#FF1493] transition-colors font-medium"
            >
              Gallery
            </Link>
            <a
              href="https://www.instagram.com/vera.just.vera/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-black hover:text-[#FF1493] transition-colors font-medium"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

