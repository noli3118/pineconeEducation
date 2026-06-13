'use client';

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/student.jpeg',    alt: 'Tutoring session with a student' },
  { src: '/whiteboard.jpeg', alt: 'Working through problems on the whiteboard' },
];

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5" aria-hidden="true">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setCurrent((i) => (i + 1) % photos.length);

  return (
    <section className="py-10 bg-white border-b border-mist" aria-label="Photo gallery">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-md bg-mist"
          style={{ aspectRatio: '16/9' }}>

          {/* Images */}
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
              aria-hidden={i !== current}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white
              text-pine rounded-full p-2 shadow transition-colors duration-200 cursor-pointer
              focus-visible:outline-2 focus-visible:outline-pine focus-visible:outline-offset-2"
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white
              text-pine rounded-full p-2 shadow transition-colors duration-200 cursor-pointer
              focus-visible:outline-2 focus-visible:outline-pine focus-visible:outline-offset-2"
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" role="tablist">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to photo ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer
                  ${i === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
