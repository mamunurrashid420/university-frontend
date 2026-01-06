import Image from 'next/image';

export default function ProgramsSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-[108px] px-4 md:px-6 lg:px-[320px] bg-white overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-[54px]">
        {/* Left: Tuition Info */}
        <div className="flex-1 max-w-full lg:max-w-[386px]">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-2.5 px-4 py-1 border-l-4 border-[#116DEE]">
                <span className="text-[#FF8835] text-base md:text-xl font-normal">
                  Tuition Fees
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-[42px] leading-tight md:leading-[52px] font-bold text-[#021E40] font-serif">
                Big Opportunities, Manageable Costs
              </h2>
              <p className="text-base leading-7 text-[#696868]">
                At AIFT University, we are dedicated to offering an affordable
                education while maintaining academic excellence, ensuring
                opportunities for students from all walks of life.
              </p>
            </div>
            <button className="w-fit px-8 py-[18px] bg-[#116DEE] rounded-[5px] flex items-center gap-2.5 text-white text-lg font-normal hover:bg-[#0A418F] transition-colors">
              <span>View Details</span>
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

        {/* Right: Programs Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full lg:w-auto">
          {/* Undergraduate Programs */}
          <div className="w-full md:w-[404px] min-h-[400px] bg-[#FA791E] p-6 md:p-10 flex flex-col gap-6 md:gap-8">
            <h3 className="text-[23.5px] leading-[31px] font-bold text-white font-serif">
              Undergraduate Programs
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <h4 className="text-[19.6px] leading-[27px] font-normal text-white underline font-serif">
                  School of Humanities
                </h4>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Full-Time Tuition (per semester): $265
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Part-Time Tuition (per credit): $150
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-[19.6px] leading-[27px] font-normal text-white underline font-serif">
                  School of Engineering
                </h4>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Full-Time Tuition (per semester): $280
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Part-Time Tuition (per credit): $160
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="w-full md:w-[404px] min-h-[400px] bg-[#0A418F] p-6 md:p-10 flex flex-col gap-6 md:gap-8">
            <h3 className="text-[23.5px] leading-[31px] font-bold text-white font-serif">
              Postgraduate Programs
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <h4 className="text-[19.6px] leading-[27px] font-normal text-white underline font-serif">
                  School of Education
                </h4>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Full-Time Tuition (per semester): $320
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Part-Time Tuition (per credit): $185
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-[19.6px] leading-[27px] font-normal text-white underline font-serif">
                  Additional Fees
                </h4>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Library Access Fee (per semester): $100
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="white" />
                    </svg>
                    <span className="text-[15.7px] leading-[29px] text-white">
                      Lab Fee (for applicable courses): $85
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

