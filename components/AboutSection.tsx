'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-[100px] px-4 md:px-6 lg:px-[320px] bg-white overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]">
          {/* Images Group: about-1 on left, about-2 and about-3 on right */}
          <div className="flex gap-0 w-full lg:w-auto">
            {/* Left: about-1 Image */}
            <div className="w-full lg:w-auto">
              <div className="relative w-full lg:w-[327px] h-[300px] md:h-[400px] lg:h-[554px]">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="AIFT Building"
                  fill
                  className="object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#E7F0FD';
                  }}
                />
              </div>
            </div>

            {/* Right: about-2 and about-3 Images Collage */}
            <div className="w-full lg:w-auto">
              <div className="flex flex-col w-full lg:w-[327px]">
                <div className="relative w-full h-[150px] md:h-[200px] lg:h-[277px]">
                  <Image
                    src="/images/about/about-2.jpg"
                    alt="Student"
                    fill
                    className="object-cover rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#F1F7FF';
                    }}
                  />
                </div>
                <div className="relative w-full h-[150px] md:h-[200px] lg:h-[277px]">
                  <Image
                    src="/images/about/about-3.jpg"
                    alt="Classroom"
                    fill
                    className="object-cover rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#E7F0FD';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-full lg:max-w-[528px]">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-2.5 px-4 py-1 border-l-4 border-[#116DEE]">
                  <span className="text-[#FF8835] text-base md:text-xl font-normal">
                    About Us
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-[40px] leading-tight md:leading-[52px] font-bold text-[#021E40] font-serif">
                History of <br />
                Apparel Institute of Fashion & Technology
                </h2>
                <p className="text-base leading-8 text-[#696868]">
                  A well-organized file structure can save time and make your team
                  more efficient. Learn about some of our favorite organizational
                  workflows, including tips on where to start. A well-organized
                  file structure can save time and make your team more efficient.
                  Learn about some of our favorite organizational workflows,
                  including tips on where to start.
                </p>
              </div>
              <button className="w-fit px-8 py-[18px] bg-[#116DEE] rounded-[5px] flex items-center gap-2.5 text-white text-lg font-normal hover:bg-[#0A418F] transition-colors">
                <span>Know About Us</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  // className="transform rotate-180"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
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
      </div>
    </section>
  );
}

