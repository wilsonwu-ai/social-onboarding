import { useFormContext } from '../context/FormContext';
import { Check } from 'lucide-react';

const steps = [
  { number: 1, title: 'Basics' },
  { number: 2, title: 'Offerings' },
  { number: 3, title: 'Design' },
  { number: 4, title: 'Message' },
];

export default function ProgressIndicator() {
  const { currentStep, setCurrentStep } = useFormContext();

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress line background */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10" />

        {/* Active progress line */}
        <div
          className="absolute top-5 left-0 h-1 bg-primary transition-all duration-500 -z-10"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step) => (
          <button
            key={step.number}
            onClick={() => setCurrentStep(step.number)}
            className="flex flex-col items-center gap-2 relative z-10"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                currentStep > step.number
                  ? 'bg-primary text-white'
                  : currentStep === step.number
                  ? 'bg-primary text-white ring-4 ring-secondary'
                  : 'bg-white border-2 border-gray-300 text-gray-400'
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-5 h-5" />
              ) : (
                step.number
              )}
            </div>
            <span
              className={`text-xs font-medium hidden sm:block ${
                currentStep >= step.number ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {step.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
