'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-[100px] px-4 md:px-8 lg:px-[316px] bg-white">
      <div className="max-w-[1290px] mx-auto flex flex-col lg:flex-row">
        {/* Scholarship Card */}
        <div className="w-[322.5px] flex flex-col">
          <div className="relative h-[285px] bg-white rounded overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F1F7FF] -z-10" />
            <div className="absolute -left-[198px] -top-[222px] w-[497px] h-[497px] bg-gradient-to-br from-white via-white to-[#F1F7FF] rounded-full" />
            <div className="relative p-6 h-full flex flex-col justify-between">
              <div className="flex items-center px-4 py-1 border-l-4 border-[#116DEE]">
                <span className="text-[#FF8835] text-xl font-normal">
                  Financial Aid
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl leading-7 font-bold text-[#021E40]">
                  Scholarship Facilities
                </h3>
                <p className="text-base leading-[30px] text-[#696868]">
                  If you've been researching exactly what skill you want to
                  learn, you will be rewarded
                </p>
              </div>
              <a
                href="#scholarship"
                className="text-[#021E40] text-lg font-medium flex items-center hover:text-[#116DEE] transition-colors"
              >
                Learn More
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none">
                  <path
                    d="M5 7.5L18 7.5M18 7.5L13 2.5M18 7.5L13 12.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative h-[285px]">
            <Image
              src="/images/events/scholarship.png"
              alt="Scholarship"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#E7F0FD';
              }}
            />
          </div>
        </div>

        {/* E-Learning Card */}
        <div className="w-[322.5px] flex flex-col">
          <div className="relative h-[285px]">
            <Image
              src="/images/events/elearning.png"
              alt="E-Learning"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#FA791E';
              }}
            />
          </div>
          <div className="relative h-[285px] bg-[#FA791E] p-9 flex flex-col justify-between">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="transform rotate-180"
              >
                <path
                  d="M10 5L25 15L10 25V5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[21.3px] leading-[31px] font-bold text-white mb-4 font-serif">
                E - Learning
              </h3>
              <p className="text-base leading-[30px] text-white mb-6">
                If you've been researching exactly what skill you want to
                learn,
              </p>
              <a
                href="#elearning"
                className="text-white text-lg font-medium flex items-center hover:opacity-80 transition-opacity"
              >
                Learn More
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none">
                  <path
                    d="M5 7.5L18 7.5M18 7.5L13 2.5M18 7.5L13 12.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Admission Card */}
        <div className="w-full lg:w-[645px] h-[400px] md:h-[500px] lg:h-auto relative">
          <Image
            src="/images/events/admission.jpg"
            alt="Admission"
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#1D3F6B';
            }}
          />
          <div className="absolute inset-0 bg-[#1D3F6B] opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-[100px]">
            <h3 className="text-[40.5px] leading-[52px] font-bold text-white mb-8 font-serif max-w-[427px]">
              Access An Affordable Education & Pursue Your Passion.
            </h3>
            <button className="px-[35px] py-4 bg-[#116DEE] rounded text-white text-base font-semibold flex items-center hover:bg-[#0A418F] transition-colors">
              <span>Apply To Admission</span>
              <svg width="23" height="15" viewBox="0 0 23 15" fill="none">
                <path
                  d="M5 7.5L18 7.5M18 7.5L13 2.5M18 7.5L13 12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

