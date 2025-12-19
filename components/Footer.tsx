'use client';

import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  Mail,
} from 'lucide-react';

const footerLinks = {
  admission: [
    'Why Study at AIFT',
    'Entry Requirements',
    'Payment Guidelines',
    'Tuition & Fees',
  ],
  about: [
    'Contact Us',
    'News & Events',
    'Notice & Announcements',
    'Privacy Policy',
  ],
  core: ['About AIFT', 'Overview', 'Mission, Vision & Motto'],
  quick: ['Running Students', 'Result Archive', 'Library'],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#031630] text-white">
      <div className="max-w-[1280px] mx-auto px-5 py-16">
        {/* Social Media */}
        <div className="flex flex-col items-center gap-5 mb-8">
          <p className="text-lg">Social</p>
          <div className="flex items-center gap-6">
            <a
              href="#facebook"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#twitter"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#youtube"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#linkedin"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#instagram"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/15 mb-8" />

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[116px] mb-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-4">
              <Image
                src="/images/logo/logo.jpg"
                alt="AIFT Logo"
                width={60}
                height={60}
                className="rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-end gap-2">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-[15px] leading-[30px] text-[#707070]">
                  800 388 80 90
                </span>
              </div>
              <div className="flex items-end gap-[14px]">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-[15px] leading-[30px] text-[#707070]">
                  58 Howard Street #2 San Francisco
                </span>
              </div>
              <div className="flex items-end gap-2.5">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-[15px] leading-[30px] text-[#707070]">
                  contact@aift.com
                </span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-[116px]">
            <div className="flex flex-col gap-6">
              <h4 className="text-xl leading-[23px] font-medium">Admission</h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.admission.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm leading-4 text-white/80 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-xl leading-[23px] font-medium">
                About
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm leading-4 text-white/80 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-xl leading-[23px] font-medium">
                Core Links
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.core.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm leading-4 text-white/80 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-xl leading-[23px] font-medium">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.quick.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm leading-4 text-white/80 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative w-full">
        <svg
          width="100%"
          height="91"
          viewBox="0 0 1919 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <g opacity="0.72">
            <path
              d="M-4 16.8715L172.184 3.3416C201.138 1.11809 230.231 1.42123 259.132 4.24757L502.692 28.0658C537.96 31.5148 573.495 31.2046 608.698 27.1406L775.201 7.91856C810.94 3.79263 847.02 3.53602 882.814 7.15317L1141.1 33.2539L1430.91 26.9811L1657.1 6.05095C1688.3 3.16443 1719.69 3.21617 1750.88 6.20547L1919 22.3208V75.7994L-4 78V16.8715Z"
              fill="url(#paint0_linear_74_237)"
              fillOpacity="0.5"
            />
            <path
              d="M-4 35.9383L194.62 17.334C230.806 13.9445 267.255 14.5106 303.318 19.0223L449.818 37.35C494.718 42.9672 540.173 42.4633 584.938 35.8521L664.657 24.0785C710.102 17.3668 756.255 16.95 801.814 22.8397L914.062 37.3507C957.521 42.9691 1001.53 42.8497 1044.96 36.9957L1129.59 25.588C1167.42 20.4885 1205.71 19.7382 1243.71 23.3518L1384.33 36.7224C1423.7 40.4663 1463.37 39.5255 1502.52 33.9199L1610.08 18.5203C1644.99 13.5208 1680.34 12.2302 1715.53 14.67L1919 28.7778V91H-4V35.9383Z"
              fill="url(#paint1_linear_74_237)"
            />
            <path
              d="M-4 18L210.266 34.4637C237.42 36.5501 264.698 36.4146 291.83 34.0585L476.75 18L722.467 30.0468L957.5 18L1160.65 34.0806C1187.2 36.1828 1213.89 36.1592 1240.44 34.0101L1438.25 18L1677.96 27.17L1919 18V91H-4V18Z"
              fill="url(#paint2_linear_74_237)"
              fillOpacity="0.8"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_74_237"
              x1="-104.894"
              y1="38.3887"
              x2="2331.26"
              y2="38.3887"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0052D4" />
              <stop offset="0.5" stopColor="#4364F7" />
              <stop offset="1" stopColor="#6FB1FC" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_74_237"
              x1="-4"
              y1="51"
              x2="1919"
              y2="51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0052D4" />
              <stop offset="0.5" stopColor="#4364F7" />
              <stop offset="1" stopColor="#6FB1FC" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_74_237"
              x1="-4"
              y1="54.5"
              x2="1919"
              y2="54.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0052D4" />
              <stop offset="0.5" stopColor="#4364F7" />
              <stop offset="1" stopColor="#6FB1FC" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm leading-4 text-white/75 text-center">
            © 2023 AIFT | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

