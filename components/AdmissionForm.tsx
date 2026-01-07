'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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

// Zod validation schema
const admissionFormSchema = z.object({
  semester_id: z.string().min(1, 'Semester is required'),
  department_id: z.string().min(1, 'Department is required'),
  program_id: z.string().min(1, 'Program is required'),
  full_name: z.string().min(1, 'Full name is required').max(255, 'Full name must not exceed 255 characters'),
  phone_number: z.string().min(1, 'Phone number is required').max(20, 'Phone number must not exceed 20 characters'),
  email: z.string().min(1, 'Email is required').email('Email must be a valid email address').max(255, 'Email must not exceed 255 characters'),
  hear_about_us: z.string().optional(),
  father_name: z.string().max(255, 'Father name must not exceed 255 characters').optional().or(z.literal('')),
  mother_name: z.string().max(255, 'Mother name must not exceed 255 characters').optional().or(z.literal('')),
  assisted_by: z.string().max(255, 'Assisted by must not exceed 255 characters').optional().or(z.literal('')),
  // SSC fields
  ssc_roll: z.string().min(1, 'SSC roll number is required').max(50, 'SSC roll number must not exceed 50 characters'),
  ssc_registration_no: z.string().min(1, 'SSC registration number is required').max(50, 'SSC registration number must not exceed 50 characters'),
  ssc_gpa: z.string().min(1, 'SSC GPA is required').refine((val) => {
    const num = parseFloat(val);
    return !isNaN(num) && num >= 0 && num <= 5.00;
  }, 'SSC GPA must be between 0.00 and 5.00'),
  ssc_grade: z.string().max(10, 'SSC grade must not exceed 10 characters').optional().or(z.literal('')),
  ssc_board: z.string().max(100, 'SSC board must not exceed 100 characters').optional().or(z.literal('')),
  ssc_passing_year: z.string().optional().refine((val) => {
    if (!val || val === '') return true;
    const year = parseInt(val);
    return !isNaN(year) && year >= 1900 && year <= 2100;
  }, 'Passing year must be between 1900 and 2100').or(z.literal('')),
  // HSC fields (all optional)
  hsc_roll: z.string().max(50, 'HSC roll number must not exceed 50 characters').optional().or(z.literal('')),
  hsc_registration_no: z.string().max(50, 'HSC registration number must not exceed 50 characters').optional().or(z.literal('')),
  hsc_gpa: z.string().optional().refine((val) => {
    if (!val || val === '') return true;
    const num = parseFloat(val);
    return !isNaN(num) && num >= 0 && num <= 5.00;
  }, 'HSC GPA must be between 0.00 and 5.00').or(z.literal('')),
  hsc_grade: z.string().max(10, 'HSC grade must not exceed 10 characters').optional().or(z.literal('')),
  hsc_board: z.string().max(100, 'HSC board must not exceed 100 characters').optional().or(z.literal('')),
  hsc_passing_year: z.string().optional().refine((val) => {
    if (!val || val === '') return true;
    const year = parseInt(val);
    return !isNaN(year) && year >= 1900 && year <= 2100;
  }, 'Passing year must be between 1900 and 2100').or(z.literal('')),
  // Honors fields (all optional)
  honors_roll: z.string().max(50, 'Honors roll number must not exceed 50 characters').optional().or(z.literal('')),
  honors_registration_no: z.string().max(50, 'Honors registration number must not exceed 50 characters').optional().or(z.literal('')),
  honors_gpa: z.string().optional().refine((val) => {
    if (!val || val === '') return true;
    const num = parseFloat(val);
    return !isNaN(num) && num >= 0 && num <= 4.00;
  }, 'Honors GPA must be between 0.00 and 4.00').or(z.literal('')),
  honors_grade: z.string().max(50, 'Honors grade must not exceed 50 characters').optional().or(z.literal('')),
  honors_board: z.string().max(100, 'Honors board must not exceed 100 characters').optional().or(z.literal('')),
  honors_passing_year: z.string().optional().refine((val) => {
    if (!val || val === '') return true;
    const year = parseInt(val);
    return !isNaN(year) && year >= 1900 && year <= 2100;
  }, 'Passing year must be between 1900 and 2100').or(z.literal('')),
  honors_institution: z.string().max(255, 'Honors institution must not exceed 255 characters').optional().or(z.literal('')),
}).refine((data) => {
  // Validate hear_about_us if provided
  if (data.hear_about_us && data.hear_about_us !== '') {
    const validOptions = ['Website', 'Social Media', 'Friend/Relative', 'Advertisement', 'Other'];
    return validOptions.includes(data.hear_about_us);
  }
  return true;
}, {
  message: 'Please select a valid option',
  path: ['hear_about_us'],
});

type AdmissionFormData = z.infer<typeof admissionFormSchema>;

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

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiErrors, setApiErrors] = useState<Record<string, string[]>>({});
  const formRefs = useRef<Record<string, HTMLElement | null>>({});

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
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
    },
  });

  const departmentId = watch('department_id');

  // Reset program when department changes
  useEffect(() => {
    if (departmentId) {
      setValue('program_id', '');
    }
  }, [departmentId, setValue]);

  // Scroll to top when form is successfully submitted
  useEffect(() => {
    if (submitSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [submitSuccess]);

  // Filter programs by selected department
  const availablePrograms = data?.programs.filter(
    program => program.department_id === parseInt(departmentId || '0')
  ) || [];

  // Helper to combine register ref with formRefs
  const registerWithRef = (name: keyof AdmissionFormData) => {
    const { ref, ...rest } = register(name);
    return {
      ...rest,
      ref: (el: HTMLInputElement | null) => {
        ref(el);
        formRefs.current[name] = el;
      }
    };
  };

  // Scroll to first error
  const scrollToFirstError = () => {
    const firstErrorField = Object.keys(errors)[0] || Object.keys(apiErrors)[0];
    if (firstErrorField) {
      const errorElement = formRefs.current[firstErrorField];
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
    }
  };

  const onSubmit = async (formData: AdmissionFormData) => {
    setSubmitSuccess(false);
    setApiErrors({});

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
        reset();
      } else {
        // Handle validation errors from API
        if (responseData.errors) {
          setApiErrors(responseData.errors);
          // Scroll to first API error
          setTimeout(() => {
            const firstErrorField = Object.keys(responseData.errors)[0];
            if (firstErrorField) {
              const errorElement = formRefs.current[firstErrorField];
              if (errorElement) {
                errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                errorElement.focus();
              }
            }
          }, 100);
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      setApiErrors({ _network: ['Network error. Please try again.'] });
    }
  };

  const onError = () => {
    // Scroll to first validation error
    setTimeout(() => {
      scrollToFirstError();
    }, 100);
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
            <div className="w-auto max-w-[240px] h-auto font-['Outfit'] font-bold text-[28px] leading-10 text-[#27A239] text-center max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7" style={{
              animation: 'glow-pulse 2s ease-in-out infinite'
            }}>ADMISSION OPEN</div>
            <div className="w-auto max-w-[240px] h-auto font-['Merriweather'] italic font-bold text-xl leading-7 text-center text-[#EE5E11] max-md:text-lg max-sm:text-base" style={{
              animation: 'glow-pulse-orange 2s ease-in-out infinite 0.5s'
            }}>Spring 2026</div>
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

        {/* Success Message View - Replaces Form */}
        {submitSuccess ? (
          <div className="relative flex flex-col items-center justify-center gap-6 p-8 min-h-[600px] max-md:p-6 max-sm:p-4">
            <div className="flex flex-col items-center gap-6 max-w-[500px] text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center max-md:w-16 max-md:h-16 max-sm:w-14 max-sm:h-14">
                <svg className="w-12 h-12 text-green-600 max-md:w-10 max-md:h-10 max-sm:w-8 max-sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Success Message */}
              <div className="flex flex-col items-center gap-3">
                <h2 className="font-['Merriweather'] font-bold text-2xl leading-8 text-[#1E2021] max-md:text-xl max-sm:text-lg">
                  Application Submitted Successfully!
                </h2>
                <p className="font-['Outfit'] font-normal text-base leading-6 text-[#4A5568] max-md:text-sm max-sm:text-xs">
                  Thank you for your interest in Apparel Institute of Fashion & Technology. We have received your admission application and will review it shortly.
                </p>
                <p className="font-['Outfit'] font-normal text-base leading-6 text-[#4A5568] max-md:text-sm max-sm:text-xs">
                  Our admission team will contact you soon with further information.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit(onSubmit, onError)} className="relative flex flex-col items-center gap-6 p-5 pt-8 max-md:pt-20 max-md:gap-5 max-md:p-4 max-sm:pt-16 max-sm:gap-4 max-sm:p-3">
            {/* Form Title */}
            <div className="flex flex-col items-center gap-5 w-full max-w-[659px] max-md:gap-4 max-sm:gap-3">
              <h1 className="w-full h-auto font-['Merriweather'] font-normal text-xl leading-7 text-center text-[#1E2021] max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5">Online Admission Information Form</h1>
              
              {/* Action Buttons */}
              <div className="flex flex-row items-center gap-5 w-full max-[920px]:flex-col max-[920px]:w-full max-md:gap-3 max-sm:gap-2">
                <Button variant="outline" type="button" className="box-border min-h-[60px] rounded-md font-['Outfit'] font-medium text-base leading-5 py-2 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center w-[203px] border-2 border-[#116DEE] text-[#116DEE] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                  <span className="block leading-tight">Tuition Fee</span>
                  <span className="block leading-tight">Calculator</span>
                </Button>
                <Link href="/admission/tuition-fees" className="w-[183px] max-[920px]:w-full">
                  <Button variant="outline" type="button" className="box-border min-h-[60px] rounded-md font-['Outfit'] font-medium text-base leading-5 py-2 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center w-full border-2 border-[#27A239] text-[#27A239] hover:opacity-80 max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                    <span className="block leading-tight">Check Tuition</span>
                    <span className="block leading-tight">Fees</span>
                  </Button>
                </Link>
                <Button variant="outline" type="button" className="box-border min-h-[60px] rounded-md font-['Outfit'] font-medium text-base leading-5 py-2 px-6 bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center w-[233px] border-2 border-[#EE5E11] text-[#EE5E11] hover:opacity-80 max-[920px]:w-full max-md:py-2 max-md:text-sm max-sm:py-1.5 max-sm:text-xs">
                  <span className="block leading-tight">Scholarship</span>
                  <span className="block leading-tight">Opportunities</span>
                </Button>
              </div>
            </div>

            {/* Network Error Message */}
            {apiErrors._network && (
              <div className="w-full max-w-[659px] p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-['Outfit'] text-sm">
                {apiErrors._network[0]}
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
                    <Controller
                      name="semester_id"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value || undefined}
                          onValueChange={field.onChange}
                          disabled={isLoadingDropdowns}
                        >
                          <SelectTrigger
                            ref={(el) => {
                              formRefs.current['semester_id'] = el;
                            }}
                            className={`box-border w-full h-11 py-3 px-4 pr-10 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] ${errors.semester_id || apiErrors.semester_id ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                          >
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
                      )}
                    />
                    {(errors.semester_id || apiErrors.semester_id) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.semester_id?.message || apiErrors.semester_id?.[0]}
                      </p>
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
                    <Controller
                      name="department_id"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value || undefined}
                          onValueChange={field.onChange}
                          disabled={isLoadingDropdowns}
                        >
                          <SelectTrigger
                            ref={(el) => {
                              formRefs.current['department_id'] = el;
                            }}
                            className={`box-border w-full h-11 py-3 px-4 pr-10 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] ${errors.department_id || apiErrors.department_id ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                          >
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
                      )}
                    />
                    {(errors.department_id || apiErrors.department_id) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.department_id?.message || apiErrors.department_id?.[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Program<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <div className="relative w-full block">
                    <Controller
                      name="program_id"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value || undefined}
                          onValueChange={field.onChange}
                          disabled={isLoadingDropdowns || !departmentId}
                        >
                          <SelectTrigger
                            ref={(el) => {
                              formRefs.current['program_id'] = el;
                            }}
                            className={`box-border w-full h-11 py-3 px-4 pr-10 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] ${errors.program_id || apiErrors.program_id ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                          >
                            <SelectValue placeholder={!departmentId ? "Select department first" : "Select option"} />
                          </SelectTrigger>
                          <SelectContent>
                            {availablePrograms.map((program) => (
                              <SelectItem key={program.id} value={program.id.toString()}>
                                {program.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {(errors.program_id || apiErrors.program_id) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.program_id?.message || apiErrors.program_id?.[0]}
                      </p>
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
                    {...registerWithRef('full_name')}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.full_name || apiErrors.full_name ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {(errors.full_name || apiErrors.full_name) && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                      {errors.full_name?.message || apiErrors.full_name?.[0]}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Phone Number<span className="w-[9px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#FE6675] ml-0.5">*</span>
                  </Label>
                  <Input
                    type="tel"
                    {...registerWithRef('phone_number')}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.phone_number || apiErrors.phone_number ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {(errors.phone_number || apiErrors.phone_number) && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                      {errors.phone_number?.message || apiErrors.phone_number?.[0]}
                    </p>
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
                    {...registerWithRef('email')}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.email || apiErrors.email ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {(errors.email || apiErrors.email) && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                      {errors.email?.message || apiErrors.email?.[0]}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    How did you hear about us?
                  </Label>
                  <div className="relative w-full block">
                    <Controller
                      name="hear_about_us"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value || undefined}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            ref={(el) => {
                              formRefs.current['hear_about_us'] = el;
                            }}
                            className={`box-border w-full h-11 py-3 px-4 pr-10 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] ${errors.hear_about_us || apiErrors.hear_about_us ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                          >
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
                      )}
                    />
                    {(errors.hear_about_us || apiErrors.hear_about_us) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.hear_about_us?.message || apiErrors.hear_about_us?.[0]}
                      </p>
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
                    {...registerWithRef('father_name')}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.father_name || apiErrors.father_name ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {(errors.father_name || apiErrors.father_name) && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                      {errors.father_name?.message || apiErrors.father_name?.[0]}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 flex-1">
                  <Label className="flex flex-row items-center font-['Outfit'] font-normal text-base leading-5 text-[#4A5568]">
                    Mother Name
                  </Label>
                  <Input
                    type="text"
                    {...registerWithRef('mother_name')}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.mother_name || apiErrors.mother_name ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {(errors.mother_name || apiErrors.mother_name) && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                      {errors.mother_name?.message || apiErrors.mother_name?.[0]}
                    </p>
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
                    {...registerWithRef('assisted_by')}
                    placeholder="Write here"
                    className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.assisted_by || apiErrors.assisted_by ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {(errors.assisted_by || apiErrors.assisted_by) && (
                    <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                      {errors.assisted_by?.message || apiErrors.assisted_by?.[0]}
                    </p>
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
                      {...registerWithRef('ssc_roll')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_roll || apiErrors.ssc_roll ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.ssc_roll || apiErrors.ssc_roll) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.ssc_roll?.message || apiErrors.ssc_roll?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Registration Number</Label>
                    <Input
                      type="text"
                      {...registerWithRef('ssc_registration_no')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_registration_no || apiErrors.ssc_registration_no ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.ssc_registration_no || apiErrors.ssc_registration_no) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.ssc_registration_no?.message || apiErrors.ssc_registration_no?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">GPA</Label>
                    <Input
                      type="number"
                      {...registerWithRef('ssc_gpa')}
                      placeholder="0.00 - 5.00"
                      step="0.01"
                      min="0"
                      max="5"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_gpa || apiErrors.ssc_gpa ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.ssc_gpa || apiErrors.ssc_gpa) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.ssc_gpa?.message || apiErrors.ssc_gpa?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Grade</Label>
                    <Input
                      type="text"
                      {...registerWithRef('ssc_grade')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_grade || apiErrors.ssc_grade ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.ssc_grade || apiErrors.ssc_grade) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.ssc_grade?.message || apiErrors.ssc_grade?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Board</Label>
                    <Input
                      type="text"
                      {...registerWithRef('ssc_board')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_board || apiErrors.ssc_board ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.ssc_board || apiErrors.ssc_board) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.ssc_board?.message || apiErrors.ssc_board?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Passing Year</Label>
                    <Input
                      type="number"
                      {...registerWithRef('ssc_passing_year')}
                      placeholder="YYYY"
                      min="1900"
                      max="2100"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.ssc_passing_year || apiErrors.ssc_passing_year ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.ssc_passing_year || apiErrors.ssc_passing_year) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.ssc_passing_year?.message || apiErrors.ssc_passing_year?.[0]}
                      </p>
                    )}
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
                      {...registerWithRef('hsc_roll')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.hsc_roll || apiErrors.hsc_roll ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.hsc_roll || apiErrors.hsc_roll) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.hsc_roll?.message || apiErrors.hsc_roll?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Registration Number</Label>
                    <Input
                      type="text"
                      {...registerWithRef('hsc_registration_no')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.hsc_registration_no || apiErrors.hsc_registration_no ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.hsc_registration_no || apiErrors.hsc_registration_no) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.hsc_registration_no?.message || apiErrors.hsc_registration_no?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">GPA</Label>
                    <Input
                      type="number"
                      {...registerWithRef('hsc_gpa')}
                      placeholder="0.00 - 5.00"
                      step="0.01"
                      min="0"
                      max="5"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.hsc_gpa || apiErrors.hsc_gpa ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.hsc_gpa || apiErrors.hsc_gpa) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.hsc_gpa?.message || apiErrors.hsc_gpa?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Grade</Label>
                    <Input
                      type="text"
                      {...registerWithRef('hsc_grade')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.hsc_grade || apiErrors.hsc_grade ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.hsc_grade || apiErrors.hsc_grade) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.hsc_grade?.message || apiErrors.hsc_grade?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Board</Label>
                    <Input
                      type="text"
                      {...registerWithRef('hsc_board')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.hsc_board || apiErrors.hsc_board ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.hsc_board || apiErrors.hsc_board) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.hsc_board?.message || apiErrors.hsc_board?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Passing Year</Label>
                    <Input
                      type="number"
                      {...registerWithRef('hsc_passing_year')}
                      placeholder="YYYY"
                      min="1900"
                      max="2100"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.hsc_passing_year || apiErrors.hsc_passing_year ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.hsc_passing_year || apiErrors.hsc_passing_year) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.hsc_passing_year?.message || apiErrors.hsc_passing_year?.[0]}
                      </p>
                    )}
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
                      {...registerWithRef('honors_roll')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.honors_roll || apiErrors.honors_roll ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.honors_roll || apiErrors.honors_roll) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.honors_roll?.message || apiErrors.honors_roll?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Registration Number</Label>
                    <Input
                      type="text"
                      {...registerWithRef('honors_registration_no')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.honors_registration_no || apiErrors.honors_registration_no ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.honors_registration_no || apiErrors.honors_registration_no) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.honors_registration_no?.message || apiErrors.honors_registration_no?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">GPA</Label>
                    <Input
                      type="number"
                      {...registerWithRef('honors_gpa')}
                      placeholder="0.00 - 4.00"
                      step="0.01"
                      min="0"
                      max="4"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.honors_gpa || apiErrors.honors_gpa ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.honors_gpa || apiErrors.honors_gpa) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.honors_gpa?.message || apiErrors.honors_gpa?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Grade</Label>
                    <Input
                      type="text"
                      {...registerWithRef('honors_grade')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.honors_grade || apiErrors.honors_grade ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.honors_grade || apiErrors.honors_grade) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.honors_grade?.message || apiErrors.honors_grade?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Board</Label>
                    <Input
                      type="text"
                      {...registerWithRef('honors_board')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.honors_board || apiErrors.honors_board ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.honors_board || apiErrors.honors_board) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.honors_board?.message || apiErrors.honors_board?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Passing Year</Label>
                    <Input
                      type="number"
                      {...registerWithRef('honors_passing_year')}
                      placeholder="YYYY"
                      min="1900"
                      max="2100"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.honors_passing_year || apiErrors.honors_passing_year ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.honors_passing_year || apiErrors.honors_passing_year) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.honors_passing_year?.message || apiErrors.honors_passing_year?.[0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-2 col-span-2 max-[920px]:col-span-1">
                    <Label className="font-['Outfit'] font-normal text-sm leading-5 text-[#4A5568]">Institution</Label>
                    <Input
                      type="text"
                      {...registerWithRef('honors_institution')}
                      placeholder="Write here"
                      className={`box-border w-full h-11 py-3 px-4 border rounded font-['Roboto'] font-normal text-sm leading-5 text-[#1E2021] bg-white focus:border-[#116DEE] placeholder:text-[#ADB3BD] ${errors.honors_institution || apiErrors.honors_institution ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                    />
                    {(errors.honors_institution || apiErrors.honors_institution) && (
                      <p className="text-red-500 text-xs mt-1 font-['Outfit']">
                        {errors.honors_institution?.message || apiErrors.honors_institution?.[0]}
                      </p>
                    )}
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
        )}
      </div>
    </div>
  );
}
