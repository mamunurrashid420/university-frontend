import AdmissionForm from '@/components/AdmissionForm';

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-white py-5 px-4 max-md:py-4 max-md:px-2 max-sm:py-3 max-sm:px-1">
      <div className="flex justify-center w-full">
        <AdmissionForm />
      </div>
    </div>
  );
}

