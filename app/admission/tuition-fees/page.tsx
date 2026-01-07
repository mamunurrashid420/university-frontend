'use client';

import { Mail, Phone } from 'lucide-react';
import TuitionFeesTable from '@/components/TuitionFeesTable';

export default function TuitionFeesPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Header Section with Blue Background */}
      <div className="relative w-full h-[120px] min-h-[120px] bg-[#072C5F] flex items-center justify-center overflow-hidden max-md:h-auto max-md:min-h-[120px] max-md:py-5">
        {/* Background decorative elements */}
        <div className="absolute w-full h-[480.17px] -top-40 left-0 flex flex-row opacity-[0.08] pointer-events-none max-md:hidden">
          <div className="w-[960.33px] h-[480.17px] relative left-0">
            <div className="absolute w-[480.17px] h-[480.17px] left-0 top-0 bg-gradient-to-br from-[rgba(7,44,95,0.3)] to-[rgba(10,65,143,0.3)] bg-cover bg-center"></div>
            <div className="absolute w-[480.17px] h-[480.17px] left-[480.17px] top-0 bg-gradient-to-br from-[rgba(7,44,95,0.3)] to-[rgba(10,65,143,0.3)] bg-cover bg-center"></div>
          </div>
          <div className="w-[960.33px] h-[480.17px] relative left-[960.33px]">
            <div className="absolute w-[480.17px] h-[480.17px] left-0 top-0 bg-gradient-to-br from-[rgba(7,44,95,0.3)] to-[rgba(10,65,143,0.3)] bg-cover bg-center"></div>
            <div className="absolute w-[480.17px] h-[480.17px] left-[480.17px] top-0 bg-gradient-to-br from-[rgba(7,44,95,0.3)] to-[rgba(10,65,143,0.3)] bg-cover bg-center"></div>
          </div>
        </div>

        {/* Header Content */}
        <div className="relative w-full max-w-[1920px] h-full flex items-center justify-start pl-[320px] z-10 mx-auto max-[1920px]:pl-[max(20px,calc((100%-1280px)/2+20px))] max-md:pl-5 max-md:justify-center">
          <div className="flex flex-col items-start gap-3 w-[246px] h-auto max-md:w-full max-md:items-center max-md:text-center max-md:gap-2">
            <h1 className="w-[246px] h-auto font-['Outfit'] font-medium text-[32px] leading-10 text-white m-0 max-md:text-2xl max-md:w-full max-md:leading-8">Tuition & Fees</h1>
            <div className="flex flex-row items-center gap-2 w-[246px] h-auto max-md:w-full max-md:justify-center max-md:flex-wrap">
              <span className="font-['Outfit'] font-medium text-base leading-5 text-white max-md:text-sm">Home</span>
              <span className="font-['Outfit'] font-medium text-base leading-5 text-white max-md:text-sm">/</span>
              <span className="font-['Outfit'] font-medium text-base leading-5 text-white max-md:text-sm">Admission</span>
              <span className="font-['Outfit'] font-medium text-base leading-5 text-white max-md:text-sm">/</span>
              <span className="font-['Outfit'] font-medium text-base leading-5 text-white max-md:text-sm">Tuition Fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="relative w-full max-w-[930px] mt-10 mx-auto flex flex-col items-center gap-4 z-10 px-5 max-[1920px]:w-[90%] max-md:mt-5 max-md:w-[95%] max-md:px-4">
        <div className="w-full flex flex-row items-center gap-4 max-md:flex-col max-md:items-start max-md:gap-3">
          <h2 className="flex-1 h-auto min-h-8 font-['Outfit'] font-semibold text-2xl leading-8 tracking-[0.04em] text-black text-center m-0 whitespace-nowrap max-[1920px]:w-full max-[1920px]:text-xl max-md:text-left max-md:w-full max-md:text-lg max-md:leading-[1.4] max-md:tracking-normal max-md:whitespace-normal">
            Admission Open for Education and Admission Fair Spring 2026 (January - April)
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3 w-full max-w-[413px] h-auto min-h-12 max-[1920px]:w-full max-md:max-w-full">
          <p className="w-full h-auto min-h-5 font-['Outfit'] font-normal text-base leading-5 text-black text-center m-0 max-md:text-sm">
            Please Contact the Admission Office for Admission Details.
          </p>
          <div className="flex flex-row items-center gap-6 w-auto h-auto max-[1920px]:flex-row max-[1920px]:flex-wrap max-[1920px]:justify-center max-[1920px]:gap-3 max-md:flex-col max-md:items-center max-md:gap-2 max-md:w-full">
            <div className="flex flex-row items-center gap-1 max-md:justify-center">
              <Mail className="w-4 h-4 text-[#666666] shrink-0" />
              <div className="flex flex-row items-center gap-0.5 flex-wrap">
                <span className="font-['Outfit'] font-normal text-[11px] leading-4 text-[#666666]">Mail:</span>
                <span className="font-['Outfit'] font-normal text-[11px] leading-4 text-[#666666] break-all">info@aift.edu.bd</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-1 max-md:justify-center">
              <Phone className="w-4 h-4 text-[#666666] shrink-0" />
              <div className="flex flex-row items-center gap-0.5 flex-wrap">
                <span className="font-['Outfit'] font-normal text-[11px] leading-4 text-[#666666]">Hotline:</span>
                <span className="font-['Outfit'] font-normal text-[11px] leading-4 text-[#666666]">088 9640 888272</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tuition Fees Table */}
      <div className="relative w-full max-w-[1920px] mt-10 mx-auto flex justify-center px-5 max-md:mt-5 max-md:px-2 max-sm:px-1">
        <TuitionFeesTable />
      </div>
    </div>
  );
}

