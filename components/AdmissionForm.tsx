'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Types for API responses
interface Semester {
  id: number;
  name: string;
  year: number;
  is_active: boolean;
}

interface Department {
  id: number;
  name: string;
  code: string;
}

interface Program {
  id: number;
  department_id: number;
  name: string;
  code: string;
}

interface DropdownData {
  semesters: Semester[];
  departments: Department[];
  programs: Program[];
}

// Fetcher function for useSWR
const fetcher = async (url: string): Promise<DropdownData> => {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch dropdown data');
  }
  return res.json();
};

export default function AdmissionForm() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  const { data, error: dropdownError, isLoading: isLoadingDropdowns } = useSWR<DropdownData>(
    `${apiUrl}/public/dropdowns`,
    fetcher
  );

  const [formData, setFormData] = useState({
    semester_id: '',
    department_id: '',
    program_id: '',
    full_name: '',
    phone_number: '',
    email: '',
    hear_about_us: '',
    father_name: '',
    mother_name: '',
    assisted_by: '',
    // SSC fields
    ssc_roll: '',
    ssc_registration_no: '',
    ssc_gpa: '',
    ssc_grade: '',
    ssc_board: '',
    ssc_passing_year: '',
    // HSC fields
    hsc_roll: '',
    hsc_registration_no: '',
    hsc_gpa: '',
    hsc_grade: '',
    hsc_board: '',
    hsc_passing_year: '',
    // Honors fields
    honors_roll: '',
    honors_registration_no: '',
    honors_gpa: '',
    honors_grade: '',
    honors_board: '',
    honors_passing_year: '',
    honors_institution: '',
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Reset program when department changes
  useEffect(() => {
    if (formData.department_id) {
      setFormData(prev => ({ ...prev, program_id: '' }));
    }
  }, [formData.department_id]);

  // Clear errors when field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Filter programs by selected department
  const availablePrograms = data?.programs.filter(
    program => program.department_id === parseInt(formData.department_id)
  ) || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrors({});

    // Transform form data to API format
    const submitData: any = {
      semester_id: parseInt(formData.semester_id),
      department_id: parseInt(formData.department_id),
      program_id: parseInt(formData.program_id),
      full_name: formData.full_name,
      phone_number: formData.phone_number,
      email: formData.email,
      ssc_roll: formData.ssc_roll,
      ssc_registration_no: formData.ssc_registration_no,
      ssc_gpa: formData.ssc_gpa ? parseFloat(formData.ssc_gpa) : undefined,
    };

    // Add optional fields if they have values
    if (formData.hear_about_us) submitData.hear_about_us = formData.hear_about_us;
    if (formData.father_name) submitData.father_name = formData.father_name;
    if (formData.mother_name) submitData.mother_name = formData.mother_name;
    if (formData.assisted_by) submitData.assisted_by = formData.assisted_by;
    if (formData.ssc_grade) submitData.ssc_grade = formData.ssc_grade;
    if (formData.ssc_board) submitData.ssc_board = formData.ssc_board;
    if (formData.ssc_passing_year) submitData.ssc_passing_year = parseInt(formData.ssc_passing_year);

    // HSC fields (all optional)
    if (formData.hsc_roll) submitData.hsc_roll = formData.hsc_roll;
    if (formData.hsc_registration_no) submitData.hsc_registration_no = formData.hsc_registration_no;
    if (formData.hsc_gpa) submitData.hsc_gpa = parseFloat(formData.hsc_gpa);
    if (formData.hsc_grade) submitData.hsc_grade = formData.hsc_grade;
    if (formData.hsc_board) submitData.hsc_board = formData.hsc_board;
    if (formData.hsc_passing_year) submitData.hsc_passing_year = parseInt(formData.hsc_passing_year);

    // Honors fields (all optional)
    if (formData.honors_roll) submitData.honors_roll = formData.honors_roll;
    if (formData.honors_registration_no) submitData.honors_registration_no = formData.honors_registration_no;
    if (formData.honors_gpa) submitData.honors_gpa = parseFloat(formData.honors_gpa);
    if (formData.honors_grade) submitData.honors_grade = formData.honors_grade;
    if (formData.honors_board) submitData.honors_board = formData.honors_board;
    if (formData.honors_passing_year) submitData.honors_passing_year = parseInt(formData.honors_passing_year);
    if (formData.honors_institution) submitData.honors_institution = formData.honors_institution;

    try {
      const response = await fetch(`${apiUrl}/admissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          semester_id: '',
          department_id: '',
          program_id: '',
          full_name: '',
          phone_number: '',
          email: '',
          hear_about_us: '',
          father_name: '',
          mother_name: '',
          assisted_by: '',
          ssc_roll: '',
          ssc_registration_no: '',
          ssc_gpa: '',
          ssc_grade: '',
          ssc_board: '',
          ssc_passing_year: '',
          hsc_roll: '',
          hsc_registration_no: '',
          hsc_gpa: '',
          hsc_grade: '',
          hsc_board: '',
          hsc_passing_year: '',
          honors_roll: '',
          honors_registration_no: '',
          honors_gpa: '',
          honors_grade: '',
          honors_board: '',
          honors_passing_year: '',
          honors_institution: '',
        });
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        // Handle validation errors
        if (responseData.errors) {
          setErrors(responseData.errors);
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrors({ _network: ['Network error. Please try again.'] });
    } finally {
      setIsSubmitting(false);
    }
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
        <form onSubmit={handleSubmit} className="relative flex flex-col items-center gap-6 p-5 pt-8 max-md:pt-20 max-md:gap-5 max-md:p-4 max-sm:pt-16 max-sm:gap-4 max-sm:p-3">
          {/* Form Title */}
          <div className="flex flex-col items-center gap-5 w-full max-w-[659px] max-md:gap-4 max-sm:gap-3">
            <h1 className="w-full h-auto font-['Merriweather'] font-normal text-xl leading-7 text-center text-[#1E2021] max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5">Online Admission Information Form</h1>
            
            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-5 w-full max-[920px]:flex-col max-[920px]:w-full max-md:gap-3 max-sm:gap-2">
              <Button variant="outline" type="button" className="box-border min-h-[60px] rounded-md font-['Outfit'] font-medium text-base leading-5 py-2 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center w-[203px] border-2 border-[#116DEE] text-[#116DEE] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                <span className="block leading-tight">Tuition Fee</span>
                <span className="block leading-tight">Calculator</span>
              </Button>
              <Button variant="outline" type="button" className="box-border min-h-[60px] rounded-md font-['Outfit'] font-medium text-base leading-5 py-2 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center w-[183px] border-2 border-[#27A239] text-[#27A239] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                <span className="block leading-tight">Check Tuition</span>
                <span className="block leading-tight">Fees</span>
              </Button>
              <Button variant="outline" type="button" className="box-border min-h-[60px] rounded-md font-['Outfit'] font-medium text-base leading-5 py-2 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center w-[233px] border-2 border-[#EE5E11] text-[#EE5E11] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                <span className="block leading-tight">Scholarship</span>
                <span className="block leading-tight">Opportunities</span>
              </Button>
            </div>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="w-full max-w-[659px] p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-['Outfit'] text-sm">
              Admission form submitted successfully!
            </div>
          )}

          {/* Network Error Message */}
          {errors._network && (
            <div className="w-full max-w-[659px] p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-['Outfit'] text-sm">
              {errors._network[0]}
            </div>
          )}

          {/* Loading State for Dropdowns */}
          {isLoadingDropdowns && (
            <div className="w-full max-w-[659px] p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 font-['Outfit'] text-sm text-center">
              Loading form options...
            </div>
          )}

          {/* Dropdown Error */}
          {dropdownError && (
            <div className="w-full max-w-[659px] p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-['Outfit'] text-sm">
              Failed to load form options. Please refresh the page.
            </div>
          )}

          {/* Basic Information Section */}
          <div className="flex flex-col items-start gap-5 w-full max-md:gap-4 max-sm:gap-3">
            <h2 className="w-full h-auto font-['Outfit'] font-normal text-xl leading-8 text-[#4A5568] flex items-center max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">Basic Information</h2>
            
            <div className="flex flex-col items-start gap-6 w-full max-md:gap-5 max-sm:gap-4">
              {/* Row 1: Semester */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Semester<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <div className="relative w-full block">
                    <Select
                      value={formData.semester_id || undefined}
                      onValueChange={(value) => handleSelectChange('semester_id', value)}
                      disabled={isLoadingDropdowns}
                    >
                      <SelectTrigger className={`box-border w-full h-11 py-3 px-4 pr-10 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] ${errors.semester_id ? 'border-red-500' : 'border-[#E5E7EB]'}`}>
                        <SelectValue placeholder={isLoadingDropdowns ? "Loading..." : "Select option"} />
                      </SelectTrigger>
                      <SelectContent>
                        {data?.semesters.map((semester) => (
                          <SelectItem key={semester.id} value={semester.id.toString()}>
                            {semester.name} {semester.year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.semester_id && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.semester_id[0]}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 2: Department & Program */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Department<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <div className="relative w-full block">
                    <Select
                      value={formData.department_id || undefined}
                      onValueChange={(value) => handleSelectChange('department_id', value)}
                      disabled={isLoadingDropdowns}
                    >
                      <SelectTrigger className={`box-border w-full h-11 py-3 px-4 pr-10 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] ${errors.department_id ? 'border-red-500' : 'border-[#E5E7EB]'}`}>
                        <SelectValue placeholder={isLoadingDropdowns ? "Loading..." : "Select option"} />
                      </SelectTrigger>
                      <SelectContent>
                        {data?.departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id.toString()}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.department_id && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.department_id[0]}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Program<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <div className="relative w-full block">
                    <Select
                      value={formData.program_id || undefined}
                      onValueChange={(value) => handleSelectChange('program_id', value)}
                      disabled={isLoadingDropdowns || !formData.department_id}
                    >
                      <SelectTrigger className={`box-border w-full h-11 py-3 px-4 pr-10 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] ${errors.program_id ? 'border-red-500' : 'border-[#E5E7EB]'}`}>
                        <SelectValue placeholder={!formData.department_id ? "Select department first" : "Select option"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availablePrograms.map((program) => (
                          <SelectItem key={program.id} value={program.id.toString()}>
                            {program.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.program_id && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.program_id[0]}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 3: Full Name & Phone Number */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Full Name<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <Input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.full_name ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {errors.full_name && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.full_name[0]}</p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Phone Number<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <Input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.phone_number ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.phone_number[0]}</p>
                  )}
                </div>
              </div>

              {/* Row 4: Email & How did you hear about us */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Email<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.email ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.email[0]}</p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    How did you hear about us?
                  </Label>
                  <div className="relative w-full block">
                    <Select
                      value={formData.hear_about_us || undefined}
                      onValueChange={(value) => handleSelectChange('hear_about_us', value)}
                    >
                      <SelectTrigger className="box-border w-full h-11 py-3 px-4 pr-10 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE]">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Website">Website</SelectItem>
                        <SelectItem value="Social Media">Social Media</SelectItem>
                        <SelectItem value="Friend/Relative">Friend/Relative</SelectItem>
                        <SelectItem value="Advertisement">Advertisement</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.hear_about_us && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.hear_about_us[0]}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 5: Father Name & Mother Name */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Father Name
                  </Label>
                  <Input
                    type="text"
                    name="father_name"
                    value={formData.father_name}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                  {errors.father_name && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.father_name[0]}</p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Mother Name
                  </Label>
                  <Input
                    type="text"
                    name="mother_name"
                    value={formData.mother_name}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                  {errors.mother_name && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.mother_name[0]}</p>
                  )}
                </div>
              </div>

              {/* Row 6: Who assisted you */}
              <div className="flex flex-row items-center gap-6 w-full max-[920px]:flex-col max-[920px]:gap-4 max-sm:gap-3">
                <div className="flex flex-col items-start gap-2 w-full">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Who assisted you for your admission?
                  </Label>
                  <Input
                    type="text"
                    name="assisted_by"
                    value={formData.assisted_by}
                    onChange={handleChange}
                    placeholder="Write here"
                    className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                  />
                  {errors.assisted_by && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.assisted_by[0]}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Academic Result Information Section */}
          <div className="flex flex-col items-start gap-5 w-full max-md:gap-4 max-sm:gap-3">
            <h2 className="w-full h-auto font-['Outfit'] font-normal text-xl leading-8 text-[#4A5568] flex items-center max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">Academic Result Information</h2>
            
            <div className="flex flex-col items-start gap-6 w-full max-md:gap-5 max-sm:gap-4">
              {/* SSC Section */}
              <div className="w-full">
                <h3 className="font-['Outfit'] font-semibold text-base leading-6 text-[#4A5568] mb-4">SSC/Equivalent<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span></h3>
                <div className="grid grid-cols-2 gap-4 max-[920px]:grid-cols-1">
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Roll Number</Label>
                    <Input
                      type="text"
                      name="ssc_roll"
                      value={formData.ssc_roll}
                      onChange={handleChange}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_roll ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {errors.ssc_roll && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.ssc_roll[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Registration Number</Label>
                    <Input
                      type="text"
                      name="ssc_registration_no"
                      value={formData.ssc_registration_no}
                      onChange={handleChange}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_registration_no ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {errors.ssc_registration_no && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.ssc_registration_no[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">GPA</Label>
                    <Input
                      type="number"
                      name="ssc_gpa"
                      value={formData.ssc_gpa}
                      onChange={handleChange}
                      placeholder="0.00 - 5.00"
                      step="0.01"
                      min="0"
                      max="5"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_gpa ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {errors.ssc_gpa && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.ssc_gpa[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Grade</Label>
                    <Input
                      type="text"
                      name="ssc_grade"
                      value={formData.ssc_grade}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Board</Label>
                    <Input
                      type="text"
                      name="ssc_board"
                      value={formData.ssc_board}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Passing Year</Label>
                    <Input
                      type="number"
                      name="ssc_passing_year"
                      value={formData.ssc_passing_year}
                      onChange={handleChange}
                      placeholder="YYYY"
                      min="1900"
                      max="2100"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                </div>
              </div>

              {/* HSC Section */}
              <div className="w-full">
                <h3 className="font-['Outfit'] font-semibold text-base leading-6 text-[#4A5568] mb-4">HSC/Equivalent</h3>
                <div className="grid grid-cols-2 gap-4 max-[920px]:grid-cols-1">
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Roll Number</Label>
                    <Input
                      type="text"
                      name="hsc_roll"
                      value={formData.hsc_roll}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                    {errors.hsc_roll && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.hsc_roll[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Registration Number</Label>
                    <Input
                      type="text"
                      name="hsc_registration_no"
                      value={formData.hsc_registration_no}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                    {errors.hsc_registration_no && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.hsc_registration_no[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">GPA</Label>
                    <Input
                      type="number"
                      name="hsc_gpa"
                      value={formData.hsc_gpa}
                      onChange={handleChange}
                      placeholder="0.00 - 5.00"
                      step="0.01"
                      min="0"
                      max="5"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                    {errors.hsc_gpa && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.hsc_gpa[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Grade</Label>
                    <Input
                      type="text"
                      name="hsc_grade"
                      value={formData.hsc_grade}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Board</Label>
                    <Input
                      type="text"
                      name="hsc_board"
                      value={formData.hsc_board}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Passing Year</Label>
                    <Input
                      type="number"
                      name="hsc_passing_year"
                      value={formData.hsc_passing_year}
                      onChange={handleChange}
                      placeholder="YYYY"
                      min="1900"
                      max="2100"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                </div>
              </div>

              {/* Honors Section */}
              <div className="w-full">
                <h3 className="font-['Outfit'] font-semibold text-base leading-6 text-[#4A5568] mb-4">Honors/Equivalent/Other</h3>
                <div className="grid grid-cols-2 gap-4 max-[920px]:grid-cols-1">
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Roll Number</Label>
                    <Input
                      type="text"
                      name="honors_roll"
                      value={formData.honors_roll}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                    {errors.honors_roll && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.honors_roll[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Registration Number</Label>
                    <Input
                      type="text"
                      name="honors_registration_no"
                      value={formData.honors_registration_no}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                    {errors.honors_registration_no && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.honors_registration_no[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">GPA</Label>
                    <Input
                      type="number"
                      name="honors_gpa"
                      value={formData.honors_gpa}
                      onChange={handleChange}
                      placeholder="0.00 - 4.00"
                      step="0.01"
                      min="0"
                      max="4"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                    {errors.honors_gpa && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">{errors.honors_gpa[0]}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Grade</Label>
                    <Input
                      type="text"
                      name="honors_grade"
                      value={formData.honors_grade}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Board</Label>
                    <Input
                      type="text"
                      name="honors_board"
                      value={formData.honors_board}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Passing Year</Label>
                    <Input
                      type="number"
                      name="honors_passing_year"
                      value={formData.honors_passing_year}
                      onChange={handleChange}
                      placeholder="YYYY"
                      min="1900"
                      max="2100"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 col-span-2 max-[920px]:col-span-1">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Institution</Label>
                    <Input
                      type="text"
                      name="honors_institution"
                      value={formData.honors_institution}
                      onChange={handleChange}
                      placeholder="Write here"
                      className="box-border w-full h-11 py-3 px-4 border border-[#E5E7EB] rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-row justify-center items-center w-full mt-5 max-md:mt-4 max-sm:mt-3">
            <Button 
              type="submit"
              disabled={isSubmitting || isLoadingDropdowns}
              className="w-[258px] h-12 py-3 px-8 bg-gradient-to-r from-[#0056EC] to-[#01AD9F] rounded-lg border-none font-['Outfit'] font-medium text-xl leading-6 text-white cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed max-md:w-full max-md:max-w-[258px] max-md:text-lg max-sm:text-base max-sm:h-11 max-sm:py-2.5 max-sm:px-6"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
