'use client';

import Image from 'next/image';
import {
  NotebookPen,
  GraduationCap,
  Presentation,
  ScrollText,
} from 'lucide-react';

const stats = [
  {
    icon: NotebookPen,
    number: '94532',
    label: 'Students',
  },
  {
    icon: GraduationCap,
    number: '60483',
    label: 'Graduates',
  },
  {
    icon: Presentation,
    number: '35',
    label: 'Teachers',
  },
  {
    icon: ScrollText,
    number: '1560',
    label: 'Courses Published',
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full h-[380px] md:h-[420px] flex items-start py-5 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[380px]">
        <Image
          src="/images/about/stats-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = '#000000';
          }}
        />
        {/* Dark Overlay - opacity 0.7 as per Figma */}
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.7 }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-[375px]">
          <div className="relative h-[297px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const isLast = index === stats.length - 1;

              return (
                <div
                  key={index}
                  className="relative flex-1 flex flex-col items-center w-full md:w-auto"
                >
                  {/* Vertical Border (not for last item, hidden on mobile) */}
                  {!isLast && (
                    <div className="hidden md:block absolute right-0 w-px h-[187px] bg-white" />
                  )}

                  {/* Icon - 80x80px as per Figma */}
                  <div className="mb-[29px] flex items-center justify-center">
                    <IconComponent
                      size={80}
                      strokeWidth={2}
                      className="text-white"
                      stroke="currentColor"
                      fill="none"
                    />
                  </div>

                  {/* Number - 28px, font-weight 600, Roboto */}
                  <div
                    className="text-[28px] leading-[28px] text-white mb-[8px] text-center whitespace-nowrap"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 600,
                      fontSize: '28px',
                      lineHeight: '28px',
                    }}
                  >
                    {stat.number}
                  </div>

                  {/* Label - 18px, font-weight 400, Roboto */}
                  <div
                    className="text-[18px] leading-[30px] text-white text-center"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '30px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

