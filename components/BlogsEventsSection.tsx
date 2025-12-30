'use client';

import { useState } from 'react';
import Image from 'next/image';

const events = [
  {
    date: '17',
    month: 'Dec',
    title: 'Fintech & Key Investment Conference',
    time: '10:00 am - 1:00 pm',
    location: 'University Grand Hall',
  },
  {
    date: '04',
    month: 'Nov',
    title: 'Sport Management Information Webinar',
    time: '10:00 am - 1:00 pm',
    location: 'University Grand Hall',
  },
  {
    date: '11',
    month: 'Sep',
    title: 'Planning and Facilitating Effective Meetings',
    time: '8:00 am - 8:00 am',
    location: 'University Grand Hall',
  },
];

export default function BlogsEventsSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-[60px] px-4 md:px-8 lg:px-[240px] bg-white">
      <div className="max-w-[1441px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight md:leading-10 font-bold text-black mb-2 font-serif">
            Blogs & Events
          </h2>
          <p className="text-sm md:text-[15px] leading-6 text-[#666666]">
            Building a vibrant community of creative and accomplished people
          </p>
        </div>

        {/* Content Grid */}
        <div className="bg-gradient-to-br from-white to-[#E7F0FD] rounded-2xl p-6 md:p-12 lg:p-[68px_80px_40px]">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
            {/* Blog Post */}
            <div className="w-full lg:w-[400px] flex flex-col gap-4 md:gap-6">
              <div className="relative w-full h-[212px] rounded">
                <Image
                  src="/images/events/blog.jpg"
                  alt="Blog Post"
                  fill
                  className="object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#E7F0FD';
                  }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl leading-8 font-bold text-[#182847] tracking-wide">
                  Freedom of Ideas
                </h3>
                <p className="text-[15px] leading-[26px] text-[#747474]">
                  The Campaign for the Apparel Institute of Fashion & Technology
                  is the largest fundraising campaign in history. With a historic
                  $1 billion goal, the campaign is expanding U of T's global
                  leadership capacity.
                </p>
                <button className="w-fit px-8 py-[18px] bg-[#116DEE] rounded-[5px] flex items-center gap-2.5 text-white text-lg font-normal hover:bg-[#0A418F] transition-colors">
                  <span>Share your Idea</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 5V15M5 10H15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="w-full lg:w-[420px] flex flex-col">
              <h3 className="text-[22px] leading-[26px] font-bold text-[#182847] mb-6">
                Upcoming Events
              </h3>
              <div className="flex flex-col gap-5 mb-6">
                {events.map((event, index) => (
                  <div key={index} className="flex gap-[18px]">
                    <div className="w-10 flex flex-col items-center">
                      <div className="text-[34px] leading-[34px] font-bold text-[#5076BD]">
                        {event.date}
                      </div>
                      <div className="text-base leading-[27px] font-bold text-[#152647] uppercase">
                        {event.month}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h4 className="text-lg leading-[22px] font-bold text-[#182847]">
                        {event.title}
                      </h4>
                      <div className="flex gap-[18px]">
                        <div className="flex items-center gap-2.5">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            className="transform rotate-180"
                          >
                            <path
                              d="M6.5 1V12M1 6.5H12"
                              stroke="#5076BD"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="text-[13px] leading-[22px] text-[#5076BD]">
                            {event.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            className="transform rotate-180"
                          >
                            <path
                              d="M6.5 1L11.5 6.5L6.5 12M1 6.5H11.5"
                              stroke="#5076BD"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[13px] leading-[22px] text-[#5076BD]">
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#all-events"
                className="text-sm leading-6 font-bold text-[#475C87] uppercase tracking-wide flex items-center gap-2 hover:underline"
              >
                View All Events
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  className="transform rotate-180"
                >
                  <path
                    d="M5 7L10 7M10 7L7.5 4.5M10 7L7.5 9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div className="w-full lg:w-[420px] h-[400px] md:h-[500px] lg:h-auto relative">
              <Image
                src="/images/events/newsletter.jpg"
                alt="Newsletter"
                fill
                className="object-cover rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#0A418F';
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
                <div className="w-[78px] h-[60px] mb-10">
                  <Image
                    src="/images/icons/envelope.png"
                    alt="Envelope"
                    width={78}
                    height={60}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-xl leading-6 font-bold text-white mb-2 text-center">
                  Subscribe To Newsletter
                </h3>
                <p className="text-base leading-[27px] text-[#96AAD3] mb-6 text-center">
                  Get updates to news & events
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="w-full max-w-[330px] flex flex-col gap-4"
                >
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[58px] px-5 bg-[#1A2742] border border-[#1A2742] text-white placeholder:text-[#94A8D1] outline-none rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full h-[54px] bg-[#408AF2] text-white text-[15px] font-bold rounded hover:bg-[#116DEE] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

