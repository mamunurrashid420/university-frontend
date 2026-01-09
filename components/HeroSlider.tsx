'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { id: 1, image: '/images/slider/slider-1.jpg', alt: 'Slider 1' },
  { id: 2, image: '/images/slider/slider-2.jpg', alt: 'Slider 2' },
  { id: 3, image: '/images/slider/slider-3.jpg', alt: 'Slider 3' },
  { id: 4, image: '/images/slider/slider-4.jpg', alt: 'Slider 4' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[720px] overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={slide.id === 1}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#0A418F';
                target.style.display = 'flex';
                target.style.alignItems = 'center';
                target.style.justifyContent = 'center';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Announcement Banner */}
      <div className="absolute bottom-0 left-0 right-0 min-h-[52px] bg-[#072C5F] flex items-center justify-center py-2">
        <p className="text-[#FDCC2D] text-[10px] sm:text-xs md:text-[15px] font-semibold text-center px-2 sm:px-4 break-words">
          🎓 Admission Open | Spring 2026 | Up to 100% Scholarships | Programs:
          CSE, EEE, Civil, BBA, English, Law, Fashion Design & Technology,
          Textile, Bangla, Mathematics, Islamic Studies, Physics.
        </p>
      </div>
    </div>
  );
}

