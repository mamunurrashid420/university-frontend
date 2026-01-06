'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronDown } from 'lucide-react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    admissionYear: '',
    semester: '',
    department: '',
    program: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    hearAboutUs: '',
    assistedBy: '',
    ssc: '',
    hsc: '',
    honors: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full flex justify-center p-5 max-md:p-3 max-sm:p-2">
      {/* Main Form Container */}
      <div className="relative w-[880px] min-h-[996px] bg-white border border-[#CCCCCC] drop-shadow-[0px_0px_8px_rgba(0,0,0,0.25)] rounded-2xl overflow-hidden max-[920px]:w-full max-[920px]:max-w-[880px] max-md:rounded-xl max-sm:rounded-lg">
        {/* Header Section */}
        <div className="relative w-full h-[100px] min-h-[100px] bg-gradient-to-br from-[#0A418F] to-[#072C5F] rounded-t-2xl flex items-center justify-between px-4 overflow-hidden max-[920px]:flex-col max-[920px]:h-auto max-[920px]:min-h-auto max-[920px]:p-4 max-[920px]:gap-4 max-md:rounded-t-xl max-sm:rounded-t-lg max-sm:px-3 max-sm:py-4">
          {/* Background decorative elements */}
          <div className="absolute w-[315.14px] h-[297.14px] top-1/2 -translate-y-1/2 left-[-60px] opacity-[0.12] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pointer-events-none max-md:hidden before:content-[''] before:absolute before:w-[210.11px] before:h-[210.11px] before:bg-[#0A418F] before:rotate-[-45deg] before:left-[-42px] before:top-[-99px] after:content-[''] after:absolute after:w-[210.11px] after:h-[210.11px] after:bg-[#072C5F] after:rotate-[-45deg] after:left-[-60px] after:top-[-99px]"></div>
          <div className="absolute w-[315.14px] h-[297.14px] top-1/2 -translate-y-1/2 -scale-x-100 right-[-60px] opacity-[0.12] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pointer-events-none max-md:hidden before:content-[''] before:absolute before:w-[210.11px] before:h-[210.11px] before:bg-[#0A418F] before:rotate-[-45deg] before:left-[-42px] before:top-[-99px] after:content-[''] after:absolute after:w-[210.11px] after:h-[210.11px] after:bg-[#072C5F] after:rotate-[-45deg] after:left-[-60px] after:top-[-99px]"></div>
          
          {/* Logo and Institute Name */}
          <div className="flex flex-row items-center gap-3 z-10 max-md:gap-2 max-sm:flex-col max-sm:items-center max-sm:text-center">
            <div className="w-12 h-12 rounded-[40px] overflow-hidden shrink-0 max-sm:w-10 max-sm:h-10">
              <Image
                src="/images/logo/logo.jpg"
                alt="AIFT Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div className="w-[124px] h-auto font-['Merriweather'] font-bold text-sm leading-5 text-white flex items-center max-md:text-xs max-sm:w-full max-sm:justify-center max-sm:text-center">
              Apparel Institute of Fashion & Technology
            </div>
          </div>

          {/* Admission Open Section */}
          <div className="flex flex-col items-center gap-[1px] z-10 max-[920px]:order-[-1] max-md:gap-0.5">
            <div className="w-auto max-w-[240px] h-auto font-['Outfit'] font-bold text-[28px] leading-10 text-[#27A239] text-center max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7">ADMISSION OPEN</div>
            <div className="w-auto max-w-[240px] h-auto font-['Merriweather'] italic font-bold text-xl leading-7 text-center text-[#EE5E11] max-md:text-lg max-sm:text-base">Spring 2026</div>
          </div>

          {/* Scholarship Section */}
          <div className="flex flex-col items-center z-10 max-md:items-center">
            <div className="flex flex-row items-center gap-[17px] max-md:gap-3">
              <span className="w-auto h-auto font-['Outfit'] font-semibold text-base leading-5 text-white max-md:text-sm">Upto</span>
              <span className="w-auto h-auto font-['Outfit'] font-semibold text-2xl leading-8 text-[#EE5E11] max-md:text-xl">100%</span>
            </div>
            <div className="w-auto h-auto font-['Outfit'] font-semibold text-base leading-5 text-white max-md:text-sm">SCHOLARSHIP</div>
            <div className="w-auto h-auto font-['Outfit'] font-semibold text-sm leading-6 text-center text-[#D2AF3C] max-md:text-xs">+880XXX XXX</div>
          </div>
        </div>

        {/* Form Content */}
        <div className="relative flex flex-col items-center gap-6 p-5 pt-8 max-md:pt-20 max-md:gap-5 max-md:p-4 max-sm:pt-16 max-sm:gap-4 max-sm:p-3">
          {/* Form Title */}
          <div className="flex flex-col items-center gap-5 w-full max-w-[659px] max-md:gap-4 max-sm:gap-3">
            <h1 className="w-full h-auto font-['Merriweather'] font-normal text-xl leading-7 text-center text-[#1E2021] max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5">Online Admission Information Form</h1>
            
            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-5 w-full max-[920px]:flex-col max-[920px]:w-full max-md:gap-3 max-sm:gap-2">
              <button className="box-border min-h-8 rounded-md font-['Outfit'] font-medium text-base leading-5 py-1.5 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center whitespace-nowrap w-[203px] border border-[#116DEE] text-[#116DEE] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                <span className="block leading-[1.2]">Tuition Fee</span>
                <span className="block leading-[1.2]">Calculator</span>
              </button>
              <button className="box-border min-h-8 rounded-md font-['Outfit'] font-medium text-base leading-5 py-1.5 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center whitespace-nowrap w-[183px] border border-[#27A239] text-[#27A239] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                <span className="block leading-[1.2]">Check Tuition</span>
                <span className="block leading-[1.2]">Fees</span>
              </button>
              <button className="box-border min-h-8 rounded-md font-['Outfit'] font-medium text-base leading-5 py-1.5 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center whitespace-nowrap w-[233px] border border-[#EE5E11] text-[#EE5E11] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                <span className="block leading-[1.2]">Scholarship</span>
                <span className="block leading-[1.2]">Opportunities</span>
              </button>
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="flex flex-col items-start gap-5 w-full max-md:gap-4 max-sm:gap-3">
            <h2 className="w-full h-auto font-['Outfit'] font-normal text-xl leading-8 text-[#4A5568] flex items-center max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">Basic Information</h2>
            
            <div className="flex flex-col items-start gap-6 w-full max-md:gap-5 max-sm:gap-4">
              {/* Row 1: Admission Year & Semester */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Admission Year<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <div className="relative w-full block">
                    <select
                      name="admissionYear"
                      value={formData.admissionYear}
                      onChange={handleChange}
                      className="box-border w-full h-11 py-3 px-4 pr-10 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white appearance-none focus:outline-none focus:border-[#116DEE]"
                    >
                      <option value="">Select option</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Semester<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <div className="relative w-full block">
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      className="box-border w-full h-11 py-3 px-4 pr-10 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white appearance-none focus:outline-none focus:border-[#116DEE]"
                    >
                      <option value="">Select option</option>
                      <option value="spring">Spring</option>
                      <option value="fall">Fall</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 2: Department & Program */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Department<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <div className="relative w-full block">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="box-border w-full h-11 py-3 px-4 pr-10 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white appearance-none focus:outline-none focus:border-[#116DEE]"
                    >
                      <option value="">Select option</option>
                      <option value="fashion">Fashion Design</option>
                      <option value="technology">Technology</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Program<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <div className="relative w-full block">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="box-border w-full h-11 py-3 px-4 pr-10 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white appearance-none focus:outline-none focus:border-[#116DEE]"
                    >
                      <option value="">Select option</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="master">Master</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Full Name & Phone Number */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Full Name<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:outline-none focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Phone Number<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:outline-none focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                </div>
              </div>

              {/* Row 4: Email & How did you hear about us */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Email<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:outline-none focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    How did you hear about us?
                  </label>
                  <div className="relative w-full block">
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="box-border w-full h-11 py-3 px-4 pr-10 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white appearance-none focus:outline-none focus:border-[#116DEE]"
                    >
                      <option value="">Select option</option>
                      <option value="website">Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 5: Who assisted you */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 w-full">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Who assisted you for your admission?
                  </label>
                  <input
                    type="text"
                    name="assistedBy"
                    value={formData.assistedBy}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:outline-none focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Academic Result Information Section */}
          <div className="flex flex-col items-start gap-5 w-full max-md:gap-4 max-sm:gap-3">
            <h2 className="w-full h-auto font-['Outfit'] font-normal text-xl leading-8 text-[#4A5568] flex items-center max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">Academic Result Information</h2>
            
            <div className="flex flex-col items-start gap-6 w-full max-md:gap-5 max-sm:gap-4">
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    SSC/Equivalent<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="ssc"
                    value={formData.ssc}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:outline-none focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    HSC/Equivalent<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="hsc"
                    value={formData.hsc}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:outline-none focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Honors/Equivalent/Other<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="honors"
                    value={formData.honors}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:outline-none focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-row justify-center items-center w-full mt-5 max-md:mt-4 max-sm:mt-3">
            <button className="w-[258px] h-12 py-3 px-8 bg-gradient-to-r from-[#0056EC] to-[#01AD9F] rounded-lg border-none font-['Outfit'] font-medium text-xl leading-6 text-white cursor-pointer transition-opacity hover:opacity-90 max-md:w-full max-md:max-w-[258px] max-md:text-lg max-sm:text-base max-sm:h-11 max-sm:py-2.5 max-sm:px-6">
              Tuition Fee Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

