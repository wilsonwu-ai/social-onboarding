import { useFormContext } from '../context/FormContext';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface NavigationProps {
  onSubmit?: () => void;
}

export default function Navigation({ onSubmit }: NavigationProps) {
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } = useFormContext();

  const handleNext = () => {
    if (isLastStep && onSubmit) {
      onSubmit();
    } else {
      nextStep();
    }
  };

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      <button
        type="button"
        onClick={prevStep}
        disabled={isFirstStep}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
          isFirstStep
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:text-primary hover:bg-secondary/30'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="text-sm text-gray-500">
        Step {currentStep} of 4
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all shadow-soft hover:shadow-hover"
      >
        {isLastStep ? (
          <>
            <span>Submit</span>
            <Send className="w-5 h-5" />
          </>
        ) : (
          <>
            <span className="hidden sm:inline">Continue</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-5 h-5" />
          </>
        )}
      </button>
    </div>
  );
}
