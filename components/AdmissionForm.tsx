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
    <div className="admission-form-container">
      {/* Main Form Container */}
      <div className="admission-form-wrapper">
        {/* Header Section */}
        <div className="admission-header">
          {/* Background decorative elements */}
          <div className="header-bg-group-left"></div>
          <div className="header-bg-group-right"></div>
          
          {/* Logo and Institute Name */}
          <div className="header-logo-section">
            <div className="header-logo-image">
              <Image
                src="/images/logo/logo.jpg"
                alt="AIFT Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div className="header-institute-name">
              Apparel Institute of Fashion & Technology
            </div>
          </div>

          {/* Admission Open Section */}
          <div className="header-admission-open">
            <div className="admission-open-text">ADMISSION OPEN</div>
            <div className="admission-semester">Spring 2026</div>
          </div>

          {/* Scholarship Section */}
          <div className="header-scholarship">
            <div className="scholarship-top">
              <span className="scholarship-upto">Upto</span>
              <span className="scholarship-percent">100%</span>
            </div>
            <div className="scholarship-label">SCHOLARSHIP</div>
            <div className="scholarship-phone">+880XXX XXX</div>
          </div>
        </div>

        {/* Form Content */}
        <div className="admission-form-content">
          {/* Back Link */}
          <a href="/" className="back-link">
            <ChevronLeft className="back-icon" />
            <span>Back</span>
          </a>

          {/* Form Title */}
          <div className="form-title-section">
            <h1 className="form-title">Online Admission Information Form</h1>
            
            {/* Action Buttons */}
            <div className="form-action-buttons">
              <button className="action-btn action-btn-blue">
                <span>Tuition Fee</span>
                <span>Calculator</span>
              </button>
              <button className="action-btn action-btn-green">
                <span>Check Tuition</span>
                <span>Fees</span>
              </button>
              <button className="action-btn action-btn-orange">
                <span>Scholarship</span>
                <span>Opportunities</span>
              </button>
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="form-section">
            <h2 className="section-title">Basic Information</h2>
            
            <div className="form-fields">
              {/* Row 1: Admission Year & Semester */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Admission Year<span className="required-asterisk">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      name="admissionYear"
                      value={formData.admissionYear}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select option</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                    {/* <ChevronDown className="select-chevron" /> */}
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Semester<span className="required-asterisk">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select option</option>
                      <option value="spring">Spring</option>
                      <option value="fall">Fall</option>
                    </select>
                    {/* <ChevronDown className="select-chevron" /> */}
                  </div>
                </div>
              </div>

              {/* Row 2: Department & Program */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Department<span className="required-asterisk">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select option</option>
                      <option value="fashion">Fashion Design</option>
                      <option value="technology">Technology</option>
                    </select>
                    {/* <ChevronDown className="select-chevron" /> */}
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Program<span className="required-asterisk">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select option</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="master">Master</option>
                    </select>
                    {/* <ChevronDown className="select-chevron" /> */}
                  </div>
                </div>
              </div>

              {/* Row 3: Full Name & Phone Number */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Full Name<span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Phone Number<span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Row 4: Email & How did you hear about us */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Email<span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    How did you hear about us?
                  </label>
                  <div className="select-wrapper">
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select option</option>
                      <option value="website">Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend</option>
                    </select>
                    {/* <ChevronDown className="select-chevron" /> */}
                  </div>
                </div>
              </div>

              {/* Row 5: Who assisted you */}
              <div className="form-row">
                <div className="form-field form-field-full">
                  <label className="field-label">
                    Who assisted you for your admission?
                  </label>
                  <input
                    type="text"
                    name="assistedBy"
                    value={formData.assistedBy}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Academic Result Information Section */}
          <div className="form-section">
            <h2 className="section-title">Academic Result Information</h2>
            
            <div className="form-fields">
              <div className="form-row">
                <div className="form-field form-field-third">
                  <label className="field-label">
                    SSC/Equivalent<span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="ssc"
                    value={formData.ssc}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="form-input"
                  />
                </div>

                <div className="form-field form-field-third">
                  <label className="field-label">
                    HSC/Equivalent<span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="hsc"
                    value={formData.hsc}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="form-input"
                  />
                </div>

                <div className="form-field form-field-third">
                  <label className="field-label">
                    Honors/Equivalent/Other<span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="honors"
                    value={formData.honors}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-submit-section">
            <button className="submit-button">
              Tuition Fee Calculator
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admission-form-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .admission-form-wrapper {
          position: relative;
          width: 880px;
          min-height: 996px;
          background: white;
          border: 1px solid #CCCCCC;
          filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));
          border-radius: 16px;
          overflow: hidden;
        }

        /* Header Section */
        .admission-header {
          position: relative;
          width: 100%;
          height: 100px;
          background: linear-gradient(135deg, #0A418F 0%, #072C5F 100%);
          border-radius: 16px 16px 0px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          overflow: hidden;
        }

        .header-bg-group-left,
        .header-bg-group-right {
          position: absolute;
          width: 315.14px;
          height: 297.14px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.12;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          pointer-events: none;
        }

        .header-bg-group-left {
          left: -60px;
        }

        .header-bg-group-left::before,
        .header-bg-group-left::after {
          content: '';
          position: absolute;
          width: 210.11px;
          height: 210.11px;
          background: #0A418F;
          transform: rotate(-45deg);
        }

        .header-bg-group-left::before {
          left: -42px;
          top: -99px;
        }

        .header-bg-group-left::after {
          left: -60px;
          top: -99px;
          background: #072C5F;
        }

        .header-bg-group-right {
          right: -60px;
          transform: translateY(-50%) scaleX(-1);
        }

        .header-bg-group-right::before,
        .header-bg-group-right::after {
          content: '';
          position: absolute;
          width: 210.11px;
          height: 210.11px;
          background: #0A418F;
          transform: rotate(-45deg);
        }

        .header-bg-group-right::before {
          left: -42px;
          top: -99px;
        }

        .header-bg-group-right::after {
          left: -60px;
          top: -99px;
          background: #072C5F;
        }

        .header-logo-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          z-index: 1;
        }

        .header-logo-image {
          width: 48px;
          height: 48px;
          border-radius: 40px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .header-institute-name {
          width: 124px;
          height: 60px;
          font-family: 'Merriweather', serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
        }

        .header-admission-open {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          z-index: 1;
        }

        .admission-open-text {
          width: 240px;
          height: 40px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 40px;
          color: #27A239;
          text-align: center;
        }

        .admission-semester {
          width: 240px;
          height: 28px;
          font-family: 'Merriweather', serif;
          font-style: italic;
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          text-align: center;
          color: #EE5E11;
        }

        .header-scholarship {
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
        }

        .scholarship-top {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 17px;
        }

        .scholarship-upto {
          width: 36px;
          height: 20px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF;
        }

        .scholarship-percent {
          width: 57px;
          height: 32px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          color: #EE5E11;
        }

        .scholarship-label {
          width: 110px;
          height: 20px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF;
        }

        .scholarship-phone {
          width: 110px;
          height: 24px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          text-align: center;
          color: #D2AF3C;
        }

        /* Form Content */
        .admission-form-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 20px;
          padding-top: 124px;
        }

        .back-link {
          position: absolute;
          left: 22px;
          top: -14px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          text-decoration: none;
          z-index: 10;
          width: 60px;
          height: 20px;
        }

        .back-link:hover {
          opacity: 0.7;
        }

        .back-icon {
          width: 20px;
          height: 20px;
          color: #4A5568;
          flex-shrink: 0;
        }

        .back-link span {
          width: 36px;
          height: 20px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #4A5568;
        }

        .form-title-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 100%;
          max-width: 659px;
        }

        .form-title {
          width: 100%;
          height: 28px;
          font-family: 'Merriweather', serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          text-align: center;
          color: #1E2021;
        }

        .form-action-buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          width: 100%;
        }

        .action-btn {
          box-sizing: border-box;
          min-height: 32px;
          border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          padding: 6px 24px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .action-btn span {
          display: block;
          line-height: 1.2;
        }

        .action-btn-blue {
          width: 203px;
          border: 1px solid #116DEE;
          color: #116DEE;
        }

        .action-btn-green {
          width: 183px;
          border: 1px solid #27A239;
          color: #27A239;
        }

        .action-btn-orange {
          width: 233px;
          border: 1px solid #EE5E11;
          color: #EE5E11;
        }

        .action-btn:hover {
          opacity: 0.8;
        }

        /* Form Sections */
        .form-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
        }

        .section-title {
          width: 100%;
          height: 32px;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
          color: #4A5568;
          display: flex;
          align-items: center;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          width: 100%;
        }

        .form-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 24px;
          width: 100%;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          flex: 1;
        }

        .form-field-full {
          width: 100%;
        }

        .form-field-third {
          flex: 1;
        }

        .field-label {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #4A5568;
        }

        .required-asterisk {
          width: 9px;
          height: 19px;
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #FE6675;
          margin-left: 2px;
        }

        .select-wrapper {
          position: relative;
          width: 100%;
          display: block;
        }

        .form-select,
        .form-input {
          box-sizing: border-box;
          width: 100%;
          height: 44px;
          padding: 12px 16px;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #1E2021;
          background: white;
        }

        .form-select {
          appearance: none;
          padding-right: 40px;
        }

        .form-select:focus,
        .form-input:focus {
          outline: none;
          border-color: #116DEE;
        }

        .form-input::placeholder,
        .form-select option:first-child {
          color: #ADB3BD;
        }

        .select-chevron {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #ADB3BD;
          pointer-events: none;
        }

        /* Submit Button */
        .form-submit-section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 20px;
        }

        .submit-button {
          width: 258px;
          height: 48px;
          padding: 12px 32px;
          background: linear-gradient(100.82deg, #0056EC 5.54%, #01AD9F 94.5%);
          border-radius: 8px;
          border: none;
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #FFFFFF;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .submit-button:hover {
          opacity: 0.9;
        }

        @media (max-width: 920px) {
          .admission-form-wrapper {
            width: 100%;
            max-width: 880px;
          }

          .admission-header {
            flex-direction: column;
            height: auto;
            padding: 16px;
            gap: 16px;
          }

          .header-admission-open {
            order: -1;
          }

          .form-row {
            flex-direction: column;
          }

          .form-action-buttons {
            flex-direction: column;
            width: 100%;
          }

          .action-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

