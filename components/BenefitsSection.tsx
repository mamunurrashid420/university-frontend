'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  {
    id: 'benefits',
    label: 'Benefits',
    content: {
      title: 'Why Choose AIFT?',
      paragraphs: [
        'The AIFT University Alumni Association is excited to announce the arrival of AIFT Alumni Connect. This is a new community building platform for AIFT\'s alumni. It is the only place online where you can find, and connect with, all 90,000 AIFT\'s alumni. All alumni are automatically enrolled!',
        'AIFT University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, AIFT has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.',
      ],
    },
    leftPanel: {
      type: 'image',
    },
  },
  {
    id: 'self-development',
    label: 'Self Development',
    content: {
      title: 'Self Development at AIFT',
      paragraphs: [
        'At AIFT, we believe in holistic development. Our self-development programs help students grow both personally and professionally.',
        'Through various workshops, seminars, and mentorship programs, students gain valuable skills that prepare them for success in their careers.',
      ],
    },
    leftPanel: {
      type: 'design',
      title: 'Self Development Program',
      description: 'The AIFT University Alumni Association is excited to announce the arrival of KU Alumni Connect.',
      buttonText: 'View Programs',
    },
  },
  {
    id: 'alumni',
    label: 'Alumni',
    content: {
      title: 'AIFT Alumni Network',
      paragraphs: [
        'Join our extensive network of over 90,000 alumni worldwide. Our alumni are making significant contributions in various fields.',
        'The AIFT Alumni Association provides networking opportunities, career support, and lifelong learning resources.',
      ],
    },
    leftPanel: {
      type: 'design',
      title: 'Alumni Program',
      description: 'The AIFT University Alumni Association is excited to announce the arrival of KU Alumni Connect.',
      buttonText: 'View Programs',
    },
  },
  {
    id: 'career',
    label: 'Career',
    content: {
      title: 'Career Services',
      paragraphs: [
        'Our career services department helps students and graduates find meaningful employment opportunities.',
        'We offer career counseling, resume building, interview preparation, and job placement assistance.',
      ],
    },
    leftPanel: {
      type: 'design',
      title: 'Career Program',
      description: 'The AIFT University Alumni Association is excited to announce the arrival of KU Alumni Connect.',
      buttonText: 'View Programs',
    },
  },
];

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState('benefits');
  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const activeContent = activeTabData?.content;
  const leftPanel = activeTabData?.leftPanel;

  return (
    <section className="w-full py-12 md:py-20 lg:py-[100px] px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-[316px] bg-[#E7F0FD] relative overflow-hidden">
      {/* Background Ellipse */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[rgba(231,240,253,0.7)] rounded-full opacity-50" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image or Design */}
            {leftPanel?.type === 'image' ? (
              <div className="w-full lg:w-[384px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[504px] relative">
                <Image
                  src="/images/about/benefits.png"
                  alt="Benefits"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#E7F0FD';
                  }}
                />
                {/* Play Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[84px] h-[84px] bg-white rounded-full flex items-center justify-center">
                    <svg
                      width="24"
                      height="30"
                      viewBox="0 0 24 30"
                      fill="none"
                      className="transform rotate-180"
                    >
                      <path
                        d="M8 6L20 15L8 24V6Z"
                        fill="#FF8835"
                      />
                    </svg>
                  </div>
                </div> */}
              </div>
            ) : (
              <div className="w-full lg:w-[384px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[504px] relative bg-[#F2F5FD] flex flex-col justify-between p-4 sm:p-6 md:p-8">
                {/* Top Content */}
                <div className="flex flex-col gap-4">
                  {/* Title with curved underline */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#464646] mb-2">
                      {leftPanel?.title?.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="relative inline-block">
                        {leftPanel?.title?.split(' ').slice(-1)[0]}
                        <svg
                          className="absolute bottom-[-6px] left-0 w-full"
                          height="4"
                          viewBox="0 0 100 4"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M 0,2 Q 25,0 50,2 T 100,2"
                            stroke="#FF8835"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </h2>
                  </div>
                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-[#8C8C8C] leading-relaxed">
                    {leftPanel?.description}
                  </p>
                  {/* Button */}
                  <button className="w-full sm:w-fit px-4 sm:px-6 py-2 sm:py-3 bg-[#FF8835] text-white text-sm sm:text-base font-bold rounded-lg hover:bg-[#e6772a] transition-colors mt-2">
                    {leftPanel?.buttonText}
                  </button>
                </div>
                {/* Illustration Area - Placeholder for illustration */}
                <div className="flex-1 flex items-end justify-center mt-4">
                  <div className="w-full max-w-[280px] h-[200px] relative">
                    {/* Illustration placeholder - can be replaced with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-[#8C8C8C] text-sm">
                      Illustration
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right: Tabs and Content */}
            <div className="flex-1">
              {/* Tab Headers */}
              <div className="flex flex-wrap border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-5 text-xs sm:text-sm md:text-lg font-bold transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-[#464646]'
                        : 'bg-[#F7F7F7] text-[#8D8D8D]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6 md:p-[59px] bg-white">
                <div className="w-full">
                  {/* Content */}
                  <div className="w-full">
                    <h3 className="text-base sm:text-lg md:text-[22px] leading-tight md:leading-[26px] font-bold text-[#0A418F] mb-3 sm:mb-4 md:mb-6">
                      {activeContent?.title}
                    </h3>
                    {activeContent?.paragraphs.map((para, index) => (
                      <p
                        key={index}
                        className="text-sm sm:text-base leading-6 sm:leading-[27px] text-[#8C8C8C] mb-3 sm:mb-4"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

