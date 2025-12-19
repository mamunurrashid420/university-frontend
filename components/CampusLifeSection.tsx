'use client';

import Image from 'next/image';

const campusItems = [
  {
    image: '/images/campus/campus-1.jpg',
    title: 'Student Life',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: 'Student Affairs',
  },
  {
    image: '/images/campus/campus-2.jpg',
    title: 'Student Life',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: 'Student Affairs',
  },
  {
    image: '/images/campus/campus-3.jpg',
    title: 'Student Life',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: 'Student Affairs',
  },
];

export default function CampusLifeSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-[100px] px-4 md:px-8 lg:px-[371px] bg-white">
      <div className="max-w-[1179px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight md:leading-10 font-bold text-black mb-2 font-serif">
            Campus Life
          </h2>
          <p className="text-sm md:text-[15px] leading-6 text-[#666666]">
            Building a vibrant community of creative and accomplished people
          </p>
        </div>

        {/* Gallery */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {campusItems.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col gap-5 p-2">
              <div className="relative w-full h-[244px] rounded">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#E7F0FD';
                  }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg leading-6 font-bold text-black font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#666666]">
                    {item.description}
                  </p>
                </div>
                <a
                  href="#student-affairs"
                  className="text-sm leading-5 font-bold text-[#0A418F] uppercase hover:underline"
                >
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

