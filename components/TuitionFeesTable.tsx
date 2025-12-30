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
    <div className="tuition-fees-table-container">
      {tuitionData.map((school, schoolIndex) => {
        const schoolColors = getSchoolColor(school.name);
        return (
          <div key={schoolIndex} className="school-section">
            <div 
              className="school-header" 
              style={{ 
                backgroundColor: schoolColors.bg, 
                color: schoolColors.text 
              }}
            >
              <h2 className="school-name">{school.name}</h2>
              <div className="school-abbreviation">({school.abbreviation})</div>
            </div>

          <div className="table-wrapper">
            <table className="tuition-table">
              <thead>
                <tr>
                  <th className="col-program">Program</th>
                  <th className="col-number">Total Semester</th>
                  <th className="col-number">Total Credit</th>
                  <th className="col-currency">Admission Fee</th>
                  <th className="col-currency">Fee per Credit</th>
                  <th className="col-currency">Payable During Admission</th>
                  <th className="col-currency">Total Credit Fee</th>
                  <th className="col-currency">Total Cost</th>
                  <th className="col-scholarship">Scholarship Offer</th>
                  <th className="col-currency">Scholarship (Max Cost)</th>
                </tr>
              </thead>
              <tbody>
                {school.programs.map((program, programIndex) => (
                  <tr key={programIndex}>
                    <td className="col-program">{program.name}</td>
                    <td className="col-number">{program.totalSemester}</td>
                    <td className="col-number">{program.totalCredit}</td>
                    <td className="col-currency">{formatCurrency(program.admissionFee)}</td>
                    <td className="col-currency">{formatCurrency(program.feePerCredit)}</td>
                    <td className="col-currency">{formatCurrency(program.payableDuringAdmission)}</td>
                    <td className="col-currency">{formatCurrency(program.totalCreditFee)}</td>
                    <td className="col-currency">{formatCurrency(program.totalCost)}</td>
                    <td className="col-scholarship">{program.scholarshipOffer}</td>
                    <td className="col-currency">{formatCurrency(program.scholarshipMaxCost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        );
      })}

      <style jsx>{`
        .tuition-fees-table-container {
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
          padding: 40px 20px;
          background: #ffffff;
        }

        .school-section {
          margin-bottom: 60px;
        }

        .school-section:last-child {
          margin-bottom: 0;
        }

        .school-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding: 20px 24px;
          border-radius: 8px;
          border-bottom: none;
        }

        .school-name {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          color: inherit;
          margin: 0;
        }

        .school-abbreviation {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          color: inherit;
          opacity: 0.9;
        }

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
          overflow-y: visible;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .tuition-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          background: #ffffff;
        }

        .tuition-table thead {
          background: #072C5F;
          color: #ffffff;
        }

        .tuition-table th {
          padding: 16px 12px;
          font-weight: 600;
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .tuition-table tbody tr {
          border-bottom: 1px solid #E5E7EB;
          transition: background-color 0.2s;
        }

        .tuition-table tbody tr:hover {
          background-color: #F5F7FA;
        }

        .tuition-table tbody tr:last-child {
          border-bottom: none;
        }

        .tuition-table td {
          padding: 14px 12px;
          color: #1E2021;
          font-size: 13px;
          line-height: 18px;
        }

        .col-program {
          min-width: 280px;
          font-weight: 500;
          text-align: left;
        }

        .col-number {
          min-width: 100px;
          text-align: center;
        }

        .col-currency {
          min-width: 120px;
          text-align: right;
          font-family: 'Roboto', sans-serif;
        }

        .col-scholarship {
          min-width: 140px;
          text-align: center;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .tuition-table {
            font-size: 12px;
          }

          .tuition-table th,
          .tuition-table td {
            padding: 12px 8px;
            font-size: 12px;
          }

          .col-program {
            min-width: 240px;
          }

          .col-number {
            min-width: 80px;
          }

          .col-currency {
            min-width: 100px;
          }

          .col-scholarship {
            min-width: 120px;
          }
        }

        @media (max-width: 768px) {
          .tuition-fees-table-container {
            padding: 20px 10px;
          }

          .school-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 16px 20px;
          }

          .school-name {
            font-size: 20px;
          }

          .school-abbreviation {
            font-size: 16px;
          }

          .table-wrapper {
            border-radius: 4px;
          }

          .tuition-table {
            font-size: 11px;
          }

          .tuition-table th,
          .tuition-table td {
            padding: 10px 6px;
            font-size: 11px;
          }

          .col-program {
            min-width: 200px;
          }

          .col-number {
            min-width: 70px;
          }

          .col-currency {
            min-width: 90px;
          }

          .col-scholarship {
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  );
}

