'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    'Home',
    'About',
    'Academic',
    'Department',
    'Admission',
    'Administration',
    'Teachers',
    'Gallery',
    'Alumni',
    'Career',
    'Convocation',
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full h-auto min-h-[108px] bg-[#0A418F] relative py-4">
        <div className="container-custom h-full flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-[76px] md:h-[76px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/logo/logo.jpg"
                alt="AIFT Logo"
                width={76}
                height={76}
                className="rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <h1 className="text-white font-bold text-xs md:text-lg leading-tight md:leading-7 max-w-[180px] md:w-[180px] font-serif">
              Apparel Institute of Fashion & Technology
            </h1>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex flex-col gap-2 text-white text-[11px]">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2.67 3.33L8 8.67L13.33 3.33"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Hotline:</span>
              <span>088 9640 888272</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.33C4.67 1.33 2 4 2 7.33C2 10.67 4.67 13.33 8 13.33C11.33 13.33 14 10.67 14 7.33C14 4 11.33 1.33 8 1.33Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 10.67C9.47 10.67 10.67 9.47 10.67 8C10.67 6.53 9.47 5.33 8 5.33C6.53 5.33 5.33 6.53 5.33 8C5.33 9.47 6.53 10.67 8 10.67Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Whatsapp:</span>
              <span>088 9640 888272</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2.67 4L8 9.33L13.33 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Mail:</span>
              <span>info@aift.edu.bd</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] xl:w-[468px] h-[48px] bg-[#001751] rounded-[24px] items-center px-4 xl:px-6 z-10">
            <input
              type="text"
              placeholder="Search …"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white"
            />
            <button
              type="button"
              className="w-[36px] h-[36px] bg-[#FF8835] rounded-full flex items-center justify-center hover:bg-[#FA791E] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full min-h-[72px] bg-white">
        <div className="container-custom h-full flex items-center">
          <div className="flex flex-wrap items-center gap-1 md:gap-3 py-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="px-2 md:px-[18px] py-2 md:py-3 text-xs md:text-base font-medium text-black hover:text-[#116DEE] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

