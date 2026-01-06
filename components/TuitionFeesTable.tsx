'use client';

interface Program {
  name: string;
  totalSemester: number;
  totalCredit: number;
  admissionFee: number;
  feePerCredit: number;
  payableDuringAdmission: number;
  totalCreditFee: number;
  totalCost: number;
  scholarshipOffer: string;
  scholarshipMaxCost: number;
}

interface School {
  name: string;
  abbreviation: string;
  programs: Program[];
}

const tuitionData: School[] = [
  {
    name: 'School of Science and Engineering',
    abbreviation: 'SoSE',
    programs: [
      {
        name: 'BSc in CSE',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
      {
        name: 'BSc in CSE (For Diploma Holder)',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
      {
        name: 'MSc in CSE',
        totalSemester: 4,
        totalCredit: 48,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 173280,
        totalCost: 255780,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 219224,
      },
      {
        name: 'BSc in EEE',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
      {
        name: 'BSc in EEE (For Diploma Holder)',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
      {
        name: 'BSc (Hons) in Mathematics',
        totalSemester: 12,
        totalCredit: 140,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 505400,
        totalCost: 713900,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 611120,
      },
      {
        name: 'MSc in Mathematics (1 Year)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 129960,
        totalCost: 212460,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 189968,
      },
      {
        name: 'MSc in Mathematics (2 Years)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 216600,
        totalCost: 299100,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 259280,
      },
      {
        name: 'MSc in Physics (1 Year)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 129960,
        totalCost: 212460,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 189968,
      },
      {
        name: 'MSc in Physics (2 Years)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 216600,
        totalCost: 299100,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 259280,
      },
    ],
  },
  {
    name: 'School of Business Administration',
    abbreviation: 'SoBA',
    programs: [
      {
        name: 'BBA',
        totalSemester: 12,
        totalCredit: 140,
        admissionFee: 17300,
        feePerCredit: 3770,
        payableDuringAdmission: 20300,
        totalCreditFee: 527800,
        totalCost: 696300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 537960,
      },
      {
        name: 'MBA Regular',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 17300,
        feePerCredit: 3770,
        payableDuringAdmission: 20300,
        totalCreditFee: 226200,
        totalCost: 308600,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 246020,
      },
      {
        name: 'MBA (For BBA Graduates)',
        totalSemester: 3,
        totalCredit: 45,
        admissionFee: 17300,
        feePerCredit: 3770,
        payableDuringAdmission: 20300,
        totalCreditFee: 169650,
        totalCost: 252050,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 204635,
      },
      {
        name: 'Executive MBA',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 17300,
        feePerCredit: 3770,
        payableDuringAdmission: 20300,
        totalCreditFee: 226200,
        totalCost: 308600,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 246020,
      },
    ],
  },
  {
    name: 'School of Civil, Environment and Industrial Engineering',
    abbreviation: 'SoCEIE',
    programs: [
      {
        name: 'BSc in Fashion Design & Technology (Merchandising/Fashion Design)',
        totalSemester: 12,
        totalCredit: 140,
        admissionFee: 16500,
        feePerCredit: 3170,
        payableDuringAdmission: 19500,
        totalCreditFee: 443800,
        totalCost: 652300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 519160,
      },
      {
        name: 'BSc in Fashion Design & Technology (Merchandising/Fashion Design) (For Diploma Holder)',
        totalSemester: 12,
        totalCredit: 140,
        admissionFee: 16500,
        feePerCredit: 3170,
        payableDuringAdmission: 19500,
        totalCreditFee: 443800,
        totalCost: 652300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 519160,
      },
      {
        name: 'MBA in Apparel Merchandising & Fashion Management (1 Year)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 16500,
        feePerCredit: 3170,
        payableDuringAdmission: 19500,
        totalCreditFee: 114120,
        totalCost: 196620,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 163634,
      },
      {
        name: 'MBA in Apparel Merchandising & Fashion Management (2 Years)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 16500,
        feePerCredit: 3170,
        payableDuringAdmission: 19500,
        totalCreditFee: 190200,
        totalCost: 272700,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 232890,
      },
      {
        name: 'BSc in Civil Engineering',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
      {
        name: 'BSc in Civil Engineering (For Diploma Holder)',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
      {
        name: 'BSc in Textile Engineering',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
      {
        name: 'BSc in Textile Engineering (For Diploma Holder)',
        totalSemester: 12,
        totalCredit: 145,
        admissionFee: 16500,
        feePerCredit: 3610,
        payableDuringAdmission: 19500,
        totalCreditFee: 523450,
        totalCost: 731950,
        scholarshipOffer: '20% + Result',
        scholarshipMaxCost: 627260,
      },
    ],
  },
  {
    name: 'School of Arts and Social Science',
    abbreviation: 'SoASS',
    programs: [
      {
        name: 'BA (Hons) in English',
        totalSemester: 12,
        totalCredit: 141,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 521700,
        totalCost: 690200,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 533690,
      },
      {
        name: 'MA in English Literature (For English Graduates)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 133200,
        totalCost: 215500,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 180850,
      },
      {
        name: 'MA in English Literature (For other disciplines)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 222000,
        totalCost: 304300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 253010,
      },
      {
        name: 'MA in English Language Teaching (For English Graduates)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 133200,
        totalCost: 215500,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 180850,
      },
      {
        name: 'MA in English Language Teaching (For other disciplines)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 222000,
        totalCost: 304300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 253010,
      },
      {
        name: 'BA (Hons) in Bangla',
        totalSemester: 12,
        totalCredit: 141,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 521700,
        totalCost: 690200,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 533690,
      },
      {
        name: 'MA in Bangla (1 Year)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 133200,
        totalCost: 215500,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 180850,
      },
      {
        name: 'MA in Bangla (2 Years)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 222000,
        totalCost: 304300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 253010,
      },
      {
        name: 'LLB (Hons)',
        totalSemester: 12,
        totalCredit: 141,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 521700,
        totalCost: 690200,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 533690,
      },
      {
        name: 'LLM (1 Year)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 133200,
        totalCost: 215500,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 180850,
      },
      {
        name: 'LLM (2 Years)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 222000,
        totalCost: 304300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 253010,
      },
      {
        name: 'BA (Hons) in Islamic Studies',
        totalSemester: 12,
        totalCredit: 141,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 521700,
        totalCost: 690200,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 533690,
      },
      {
        name: 'MA in Islamic Studies (1 Year)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 133200,
        totalCost: 215500,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 180850,
      },
      {
        name: 'MA in Islamic Studies (2 Years)',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 17300,
        feePerCredit: 3700,
        payableDuringAdmission: 20300,
        totalCreditFee: 222000,
        totalCost: 304300,
        scholarshipOffer: '30% + Result',
        scholarshipMaxCost: 253010,
      },
    ],
  },
  {
    name: 'School of Education and Physical Education',
    abbreviation: 'SoEPE',
    programs: [
      {
        name: 'Bachelor of Physical Education (BPEd)',
        totalSemester: 3,
        totalCredit: 44,
        admissionFee: 15000,
        feePerCredit: 950,
        payableDuringAdmission: 17000,
        totalCreditFee: 41800,
        totalCost: 64300,
        scholarshipOffer: '45% Flat',
        scholarshipMaxCost: 45490,
      },
      {
        name: 'Master of Physical Education (MPEd)',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 15000,
        feePerCredit: 950,
        payableDuringAdmission: 17000,
        totalCreditFee: 34200,
        totalCost: 56700,
        scholarshipOffer: '45% Flat',
        scholarshipMaxCost: 40185,
      },
    ],
  },
];

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-BD', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const getSchoolColor = (schoolName: string): { bg: string; text: string } => {
  if (schoolName.includes('Science and Engineering')) {
    return { bg: '#6B46C1', text: '#FFFFFF' }; // purple
  } else if (schoolName.includes('Business Administration')) {
    return { bg: '#10B981', text: '#FFFFFF' }; // green
  } else if (schoolName.includes('Civil, Environment and Industrial Engineering')) {
    return { bg: '#EF4444', text: '#FFFFFF' }; // red
  } else if (schoolName.includes('Arts and Social Science')) {
    return { bg: '#0EA5E9', text: '#FFFFFF' }; // skyblue
  } else if (schoolName.includes('Education and Physical Education')) {
    return { bg: '#92400E', text: '#FFFFFF' }; // brown
  }
  return { bg: '#072C5F', text: '#FFFFFF' }; // default
};

export default function TuitionFeesTable() {
  return (
    <div className="w-full max-w-[1920px] mx-auto py-10 px-5 bg-white max-md:py-5 max-md:px-2.5 max-sm:py-4 max-sm:px-2">
      {tuitionData.map((school, schoolIndex) => {
        const schoolColors = getSchoolColor(school.name);
        return (
          <div key={schoolIndex} className="mb-[60px] last:mb-0 max-md:mb-8 max-sm:mb-6">
            <div 
              className="flex items-center gap-3 mb-6 py-5 px-6 rounded-lg border-b-0 max-md:flex-col max-md:items-start max-md:gap-2 max-md:py-4 max-md:px-4 max-sm:py-3 max-sm:px-3" 
              style={{ 
                backgroundColor: schoolColors.bg, 
                color: schoolColors.text 
              }}
            >
              <h2 className="font-['Outfit'] font-semibold text-2xl leading-8 text-inherit m-0 max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-6">{school.name}</h2>
              <div className="font-['Outfit'] font-medium text-xl leading-7 text-inherit opacity-90 max-md:text-base max-sm:text-sm">({school.abbreviation})</div>
            </div>

          <div className="w-full overflow-x-auto overflow-y-visible border border-[#E5E7EB] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] max-md:rounded max-sm:shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
            <table className="w-full border-collapse font-['Outfit'] text-sm bg-white max-[1200px]:text-xs max-md:text-[11px] max-sm:text-[10px]">
              <thead className="bg-[#072C5F] text-white">
                <tr>
                  <th className="min-w-[280px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-left max-[1200px]:min-w-[240px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[200px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Program</th>
                  <th className="min-w-[100px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-center max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Total Semester</th>
                  <th className="min-w-[100px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-center max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Total Credit</th>
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Admission Fee</th>
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Fee per Credit</th>
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Payable During Admission</th>
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Total Credit Fee</th>
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Total Cost</th>
                  <th className="min-w-[140px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-center font-medium max-[1200px]:min-w-[120px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[100px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Scholarship Offer</th>
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">Scholarship (Max Cost)</th>
                </tr>
              </thead>
              <tbody>
                {school.programs.map((program, programIndex) => (
                  <tr key={programIndex} className="border-b border-[#E5E7EB] transition-colors hover:bg-[#F5F7FA] last:border-b-0">
                    <td className="min-w-[280px] font-medium text-left py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[240px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[200px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{program.name}</td>
                    <td className="min-w-[100px] text-center py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{program.totalSemester}</td>
                    <td className="min-w-[100px] text-center py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{program.totalCredit}</td>
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{formatCurrency(program.admissionFee)}</td>
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{formatCurrency(program.feePerCredit)}</td>
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{formatCurrency(program.payableDuringAdmission)}</td>
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{formatCurrency(program.totalCreditFee)}</td>
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{formatCurrency(program.totalCost)}</td>
                    <td className="min-w-[140px] text-center font-medium py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[120px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[100px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{program.scholarshipOffer}</td>
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px]">{formatCurrency(program.scholarshipMaxCost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        );
      })}
    </div>
  );
}

