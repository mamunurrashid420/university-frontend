'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import TuitionFeesTable from '@/components/TuitionFeesTable';

export default function TuitionFeesPage() {
  return (
    <div className="tuition-fees-page">
      {/* Header Section with Blue Background */}
      <div className="tuition-header">
        {/* Background decorative elements */}
        <div className="header-bg-container">
          <div className="header-bg-group header-bg-group-1">
            <div className="bg-image-placeholder"></div>
            <div className="bg-image-placeholder"></div>
          </div>
          <div className="header-bg-group header-bg-group-2">
            <div className="bg-image-placeholder"></div>
            <div className="bg-image-placeholder"></div>
          </div>
        </div>

        {/* Header Content */}
        <div className="header-content">
          <div className="header-title-section">
            <h1 className="header-title">Tuition & Fees</h1>
            <div className="breadcrumbs">
              <span>Home</span>
              <span>/</span>
              <span>Admission</span>
              <span>/</span>
              <span>Tuition Fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="announcement-section">
        <div className="announcement-header">
          <Link href="/admission" className="back-button">
            <ArrowLeft className="back-icon" />
            <span>Back</span>
          </Link>
          <h2 className="announcement-title">
            Admission Open for Education and Admission Fair Spring 2026 (January - April)
          </h2>
        </div>
        <div className="announcement-content">
          <p className="announcement-text">
            Please Contact the Admission Office for Admission Details.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Mail:</span>
                <span className="contact-value">info@aift.edu.bd</span>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Hotline:</span>
                <span className="contact-value">088 9640 888272</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tuition Fees Table */}
      <div className="tuition-table-container">
        <TuitionFeesTable />
      </div>

      <style jsx>{`
        .tuition-fees-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
        }

        /* Header Section */
        .tuition-header {
          position: relative;
          width: 100%;
          height: 120px;
          background: #072C5F;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Background decorative elements */
        .header-bg-container {
          position: absolute;
          width: 100%;
          height: 480.17px;
          top: -160px;
          left: 0;
          display: flex;
          flex-direction: row;
          opacity: 0.08;
          pointer-events: none;
        }

        .header-bg-group {
          width: 960.33px;
          height: 480.17px;
          position: relative;
        }

        .header-bg-group-1 {
          left: 0;
        }

        .header-bg-group-2 {
          left: 960.33px;
        }

        .bg-image-placeholder {
          position: absolute;
          width: 480.17px;
          height: 480.17px;
          background: linear-gradient(135deg, rgba(7, 44, 95, 0.3) 0%, rgba(10, 65, 143, 0.3) 100%);
          background-size: cover;
          background-position: center;
        }

        .header-bg-group-1 .bg-image-placeholder:first-child {
          left: 0;
          top: 0;
        }

        .header-bg-group-1 .bg-image-placeholder:last-child {
          left: 480.17px;
          top: 0;
        }

        .header-bg-group-2 .bg-image-placeholder:first-child {
          left: 0;
          top: 0;
        }

        .header-bg-group-2 .bg-image-placeholder:last-child {
          left: 480.17px;
          top: 0;
        }

        /* Header Content */
        .header-content {
          position: relative;
          width: 100%;
          max-width: 1920px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 320px;
          z-index: 1;
          margin: 0 auto;
        }

        .header-title-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          width: 246px;
          height: 72px;
        }

        .header-title {
          width: 246px;
          height: 40px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 40px;
          color: #FFFFFF;
          margin: 0;
        }

        .breadcrumbs {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          width: 246px;
          height: 20px;
        }

        .breadcrumbs span {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF !important;
        }

        .breadcrumbs a {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF !important;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .breadcrumbs a:hover {
          opacity: 0.8;
        }

        /* Announcement Header */
        .announcement-header {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }

        /* Back Button */
        .back-button {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .back-button:hover {
          opacity: 0.7;
        }

        .back-icon {
          width: 20px;
          height: 20px;
          transform: rotate(-90deg);
          color: #4A5568;
          flex-shrink: 0;
        }

        .back-button span {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #4A5568;
        }

        /* Announcement Section */
        .announcement-section {
          position: relative;
          width: 100%;
          max-width: 930px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          z-index: 10;
          padding: 0 20px;
        }

        .announcement-title {
          flex: 1;
          height: auto;
          min-height: 32px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0.04em;
          color: #000000;
          text-align: center;
          margin: 0;
        }

        .announcement-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 413px;
          height: auto;
          min-height: 48px;
        }

        .announcement-text {
          width: 100%;
          height: auto;
          min-height: 20px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #000000;
          text-align: center;
          margin: 0;
        }

        .contact-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 24px;
          width: 301px;
          height: 16px;
        }

        .contact-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
        }

        .contact-icon {
          width: 16px;
          height: 16px;
          color: #666666;
          flex-shrink: 0;
        }

        .contact-details {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2px;
        }

        .contact-label {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          line-height: 16px;
          color: #666666;
        }

        .contact-value {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          line-height: 16px;
          color: #666666;
        }

        /* Tuition Table Container */
        .tuition-table-container {
          position: relative;
          width: 100%;
          max-width: 1920px;
          margin: 40px auto 0;
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }

        /* Responsive Design */
        @media (max-width: 1920px) {
          .header-content {
            padding-left: max(20px, calc((100% - 1280px) / 2 + 20px));
          }

          .announcement-section {
            width: 90%;
            max-width: 930px;
          }

          .announcement-title {
            width: 100%;
            font-size: 20px;
          }

          .announcement-content {
            width: 100%;
            max-width: 413px;
          }

          .contact-info {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            width: auto;
            height: auto;
          }
        }

        @media (max-width: 768px) {
          .tuition-header {
            height: auto;
            min-height: 120px;
            padding: 20px;
          }

          .header-content {
            padding-left: 0;
            justify-content: center;
          }

          .header-title-section {
            width: 100%;
            align-items: center;
            text-align: center;
          }

          .header-title {
            font-size: 24px;
            width: 100%;
          }

          .breadcrumbs {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }

          .header-content {
            padding-left: 20px;
          }

          .announcement-section {
            margin: 20px auto 0;
            width: 90%;
          }

          .announcement-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .back-button {
            align-self: flex-start;
          }

          .announcement-title {
            text-align: left;
            width: 100%;
            font-size: 18px;
            line-height: 1.4;
          }

          .announcement-title {
            font-size: 18px;
            line-height: 1.4;
          }

          .tuition-table-container {
            margin-top: 40px;
            padding: 0 10px;
          }
        }
      `}</style>
    </div>
  );
}

