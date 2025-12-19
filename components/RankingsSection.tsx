'use client';

import { useState } from 'react';
import Image from 'next/image';

const rankings = [
  { id: 1, image: '/images/rankings/rur.png', alt: 'RUR' },
  { id: 2, image: '/images/rankings/wuri.png', alt: 'WURI' },
  {
    id: 3,
    image: '/images/rankings/qs.png',
    alt: 'QS World University Rankings Asia',
  },
  {
    id: 4,
    image: '/images/rankings/the.png',
    alt: 'The Times Higher Education',
  },
  { id: 5, image: '/images/rankings/image-230.png', alt: 'Ranking 5' },
  { id: 6, image: '/images/rankings/image-231.png', alt: 'Ranking 6' },
  { id: 7, image: '/images/rankings/image-232.png', alt: 'Ranking 7' },
  { id: 8, image: '/images/rankings/rur-2.png', alt: 'RUR 2' },
  { id: 9, image: '/images/rankings/image-233.png', alt: 'Ranking 9' },
  { id: 10, image: '/images/rankings/image-234.png', alt: 'Ranking 10' },
  { id: 11, image: '/images/rankings/image-235.png', alt: 'Ranking 11' },
  { id: 12, image: '/images/rankings/image-236.png', alt: 'Ranking 12' },
];

export default function RankingsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(rankings.length / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full min-h-[324px] py-12 md:py-20 px-4 md:px-8 lg:px-[371px] bg-[#F5F7FA] flex items-center">
      <div className="max-w-[1179px] mx-auto w-full">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl leading-8 text-[#0B499D] mb-4">
            Recognitions and Rankings at a Glance
          </h3>

          <div className="relative overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full flex gap-4 md:gap-6"
                >
                  {rankings
                    .slice(
                      pageIndex * itemsPerPage,
                      pageIndex * itemsPerPage + itemsPerPage
                    )
                    .map((ranking) => (
                      <div
                        key={ranking.id}
                        className="flex-1 h-[124px] md:h-[150px] rounded-[10px] p-3 md:p-4 flex items-center justify-center"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={ranking.image}
                            alt={ranking.alt}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.backgroundColor = '#F5F7FA';
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                  index === currentPage
                    ? 'bg-black opacity-75'
                    : 'bg-black opacity-25'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

