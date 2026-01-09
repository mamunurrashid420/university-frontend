'use client';

interface Program {
  name: string;
  duration?: string;
  totalSemester?: number;
  totalCredit?: number;
  admissionFee: number;
  registrationFee?: number;
  formFillUpFee?: number;
  tuitionFee: number;
  feePerCredit?: number;
  payableDuringAdmission?: number;
  totalCreditFee?: number;
  totalCost?: number;
  scholarshipOffer?: string;
  scholarshipMaxCost?: number;
}

interface School {
  name: string;
  abbreviation: string;
  programs: Program[];
}

const tuitionData: School[] = [
  {
    name: 'Bachelor\'s Program',
    abbreviation: 'Bachelor',
    programs: [
      {
        name: 'BSc in Fashion Design and Technology (FDT)',
        duration: '4 years × 8 Semesters',
        totalSemester: 8,
        totalCredit: 164,
        admissionFee: 10000,
        registrationFee: 24000,
        tuitionFee: 315000,
      },
      {
        name: 'BSc in Apparel Manufacturing and Technology (AMT)',
        duration: '4 years × 8 Semesters',
        totalSemester: 8,
        totalCredit: 160,
        admissionFee: 10000,
        registrationFee: 24000,
        tuitionFee: 315000,
      },
      {
        name: 'BSc in Computer Science and Engineering (CSE)',
        duration: '4 years × 8 Semesters',
        totalSemester: 8,
        totalCredit: 152,
        admissionFee: 10000,
        registrationFee: 24000,
        tuitionFee: 210000,
      },
      {
        name: 'Bachelor of Business Administration (BBA)',
        duration: '4 years × 8 Semesters',
        totalSemester: 8,
        totalCredit: 126,
        admissionFee: 10000,
        registrationFee: 24000,
        tuitionFee: 170000,
      },
    ],
  },
  {
    name: 'Master\'s Program',
    abbreviation: 'Master',
    programs: [
      {
        name: 'MBA in Fashion Design and Technology (FDT)',
        duration: '2 years × 4 Semesters',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 10000,
        registrationFee: 18670,
        tuitionFee: 145000,
      },
      {
        name: 'MBA in Apparel Merchandising (AM)',
        duration: '2 years × 4 Semesters',
        totalSemester: 4,
        totalCredit: 60,
        admissionFee: 10000,
        registrationFee: 18670,
        tuitionFee: 130000,
      },
      {
        name: 'Ex-MBA in Apparel Merchandising (AM)',
        duration: '1 Year × 2 Semesters',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 10000,
        registrationFee: 4000,
        tuitionFee: 95000,
      },
    ],
  },
  {
    name: 'Diploma Program\'s',
    abbreviation: 'Diploma',
    programs: [
      {
        name: 'Diploma in Fashion Design (DFD)',
        duration: '1 year × 2 Semesters',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 10000,
        tuitionFee: 55000,
      },
      {
        name: 'Diploma in Apparel Merchandising (DAM)',
        duration: '1 year × 2 Semesters',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 10000,
        tuitionFee: 50000,
      },
      {
        name: 'Diploma in Supply Chain Management',
        duration: '1 year × 2 Semesters',
        totalSemester: 2,
        totalCredit: 36,
        admissionFee: 10000,
        tuitionFee: 55000,
      },
    ],
  },
  {
    name: '4 years Diploma Course (Under Bangladesh Technical Education Board)',
    abbreviation: 'BTEB Diploma',
    programs: [
      {
        name: 'Diploma in Computer Science and Technology',
        duration: '4 years × 8 Semester',
        totalSemester: 8,
        admissionFee: 3000,
        formFillUpFee: 2500,
        tuitionFee: 80000,
      },
      {
        name: 'Diploma in Textile Engineering',
        duration: '4 years × 8 Semester',
        totalSemester: 8,
        admissionFee: 3000,
        formFillUpFee: 2500,
        tuitionFee: 80000,
      },
      {
        name: 'Diploma in Electrical Engineering',
        duration: '4 years × 8 Semester',
        totalSemester: 8,
        admissionFee: 3000,
        formFillUpFee: 2500,
        tuitionFee: 80000,
      },
    ],
  },
  {
    name: 'Certificate Courses (Under BTEB and NSDA)',
    abbreviation: 'Certificate',
    programs: [
      {
        name: 'Apparel Merchandising',
        duration: '6 month',
        admissionFee: 10000,
        tuitionFee: 21000,
      },
      {
        name: 'Fashion Design',
        duration: '6 month',
        admissionFee: 10000,
        tuitionFee: 25000,
      },
      {
        name: 'Industrial Engineering and Work Study (IE)',
        duration: '6 month',
        admissionFee: 10000,
        tuitionFee: 25000,
      },
      {
        name: 'Pattern CAD',
        duration: '3 Month',
        admissionFee: 10000,
        tuitionFee: 18000,
      },
      {
        name: 'Pattern CAD',
        duration: '6 Month',
        admissionFee: 10000,
        tuitionFee: 25000,
      },
      {
        name: 'Supply Chain Management',
        duration: '4 Month',
        admissionFee: 10000,
        tuitionFee: 21000,
      },
      {
        name: 'Block & Batiks',
        duration: '3 Month',
        admissionFee: 10000,
        tuitionFee: 15000,
      },
      {
        name: 'Graphics Design',
        duration: '3 Month',
        admissionFee: 10000,
        tuitionFee: 80000,
      },
      {
        name: 'Graphics Design',
        duration: '6 Month',
        admissionFee: 10000,
        tuitionFee: 15000,
      },
      {
        name: 'Sewing Machine Operation',
        duration: '2 Month',
        admissionFee: 2000,
        tuitionFee: 2000,
      },
      {
        name: 'Quality Management System (QMS)',
        duration: '3 month',
        admissionFee: 10000,
        tuitionFee: 20000,
      },
    ],
  },
];

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-BD', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getSchoolColor = (schoolName: string): { bg: string; text: string } => {
  if (schoolName.includes('Bachelor')) {
    return { bg: '#6B46C1', text: '#FFFFFF' }; // purple
  } else if (schoolName.includes('Master')) {
    return { bg: '#10B981', text: '#FFFFFF' }; // green
  } else if (schoolName.includes('Diploma') && schoolName.includes('BTEB')) {
    return { bg: '#EF4444', text: '#FFFFFF' }; // red
  } else if (schoolName.includes('Diploma')) {
    return { bg: '#0EA5E9', text: '#FFFFFF' }; // skyblue
  } else if (schoolName.includes('Certificate')) {
    return { bg: '#92400E', text: '#FFFFFF' }; // brown
  }
  return { bg: '#072C5F', text: '#FFFFFF' }; // default
};

export default function TuitionFeesTable() {
  const hasColumnData = (programs: Program[], field: keyof Program): boolean => {
    return programs.some(program => program[field] !== undefined && program[field] !== null);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto py-10 px-5 bg-white max-md:py-5 max-md:px-2.5 max-sm:py-4 max-sm:px-2 max-xs:py-3 max-xs:px-1">
      {tuitionData.map((school, schoolIndex) => {
        const schoolColors = getSchoolColor(school.name);
        const showDuration = hasColumnData(school.programs, 'duration');
        const showSemester = hasColumnData(school.programs, 'totalSemester');
        const showCredits = hasColumnData(school.programs, 'totalCredit');
        const showRegistrationFee = hasColumnData(school.programs, 'registrationFee');
        const showFormFillUpFee = hasColumnData(school.programs, 'formFillUpFee');
        
        return (
          <div key={schoolIndex} className="mb-[60px] last:mb-0 max-md:mb-8 max-sm:mb-6 max-xs:mb-4">
            <div 
              className="flex items-center gap-3 mb-6 py-5 px-6 rounded-lg border-b-0 max-md:flex-col max-md:items-start max-md:gap-2 max-md:py-4 max-md:px-4 max-sm:py-3 max-sm:px-3 max-sm:mb-4 max-xs:py-2 max-xs:px-2 max-xs:mb-3 max-xs:gap-1.5" 
              style={{ 
                backgroundColor: schoolColors.bg, 
                color: schoolColors.text 
              }}
            >
              <h2 className="font-['Outfit'] font-semibold text-2xl leading-8 text-inherit m-0 max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-6 max-xs:text-base max-xs:leading-5">{school.name}</h2>
              <div className="font-['Outfit'] font-medium text-xl leading-7 text-inherit opacity-90 max-md:text-base max-sm:text-sm max-xs:text-xs max-xs:leading-4">({school.abbreviation})</div>
            </div>

          <div className="w-full overflow-x-auto overflow-y-visible border border-[#E5E7EB] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] max-md:rounded max-sm:shadow-[0_1px_4px_rgba(0,0,0,0.1)] max-xs:rounded-sm max-xs:shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
            <table className="w-full border-collapse font-['Outfit'] text-sm bg-white max-[1200px]:text-xs max-md:text-[11px] max-sm:text-[10px] max-xs:text-[9px]">
              <thead className="bg-[#072C5F] text-white">
                <tr>
                  <th className="min-w-[280px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-left max-[1200px]:min-w-[240px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[200px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[180px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[160px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Program Name</th>
                  {showDuration && <th className="min-w-[140px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-center max-[1200px]:min-w-[120px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[100px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[90px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[80px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Duration</th>}
                  {showSemester && <th className="min-w-[100px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-center max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[60px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[55px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Semester</th>}
                  {showCredits && <th className="min-w-[100px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-center max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[60px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[55px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Credits</th>}
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Admission Fee</th>
                  {showRegistrationFee && <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Registration Fee</th>}
                  {showFormFillUpFee && <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Form Fill Up Fee</th>}
                  <th className="min-w-[120px] font-semibold text-[13px] leading-[18px] whitespace-nowrap sticky top-0 z-10 py-4 px-3 text-right font-['Roboto'] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">Tuition Fee</th>
                </tr>
              </thead>
              <tbody>
                {school.programs.map((program, programIndex) => (
                  <tr key={programIndex} className="border-b border-[#E5E7EB] transition-colors hover:bg-[#F5F7FA] last:border-b-0">
                    <td className="min-w-[280px] font-medium text-left py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[240px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[200px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[180px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[160px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{program.name}</td>
                    {showDuration && <td className="min-w-[140px] text-center py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[120px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[100px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[90px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[80px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{program.duration || '-'}</td>}
                    {showSemester && <td className="min-w-[100px] text-center py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[60px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[55px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{program.totalSemester || '-'}</td>}
                    {showCredits && <td className="min-w-[100px] text-center py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[80px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[70px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[60px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[55px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{program.totalCredit || '-'}</td>}
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{formatCurrency(program.admissionFee)}</td>
                    {showRegistrationFee && <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{program.registrationFee ? formatCurrency(program.registrationFee) : '-'}</td>}
                    {showFormFillUpFee && <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{program.formFillUpFee ? formatCurrency(program.formFillUpFee) + ' (Per Semester)' : '-'}</td>}
                    <td className="min-w-[120px] text-right font-['Roboto'] py-3.5 px-3 text-[13px] leading-[18px] text-[#1E2021] max-[1200px]:min-w-[100px] max-[1200px]:py-3 max-[1200px]:px-2 max-[1200px]:text-xs max-md:min-w-[90px] max-md:py-2.5 max-md:px-1.5 max-md:text-[11px] max-sm:min-w-[80px] max-sm:py-2 max-sm:px-1 max-sm:text-[10px] max-xs:min-w-[70px] max-xs:py-1.5 max-xs:px-0.5 max-xs:text-[9px] max-xs:leading-4">{formatCurrency(program.tuitionFee)}</td>
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

