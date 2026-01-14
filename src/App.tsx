import { useState } from 'react';
import { FormProvider, useFormContext } from './context/FormContext';
import ProgressIndicator from './components/ProgressIndicator';
import Navigation from './components/Navigation';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import { CheckCircle } from 'lucide-react';

function OnboardingForm() {
  const { currentStep, formData } = useFormContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-14 h-14 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Thank You!</h1>
          <p className="text-gray-600">
            Your onboarding information has been submitted successfully. Our team will review your
            details and get back to you shortly.
          </p>
          <div className="p-4 bg-secondary/30 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>Business:</strong> {formData.businessName}
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-primary hover:underline text-sm"
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Social Media Onboarding</h1>
          <p className="text-gray-500 text-sm mt-1">
            Let's get your business set up for success
          </p>
        </header>

        {/* Progress */}
        <ProgressIndicator />

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-soft p-6 md:p-10">
          {/* Page Content */}
          <div className="min-h-[400px]">
            {currentStep === 1 && <PageOne />}
            {currentStep === 2 && <PageTwo />}
            {currentStep === 3 && <PageThree />}
            {currentStep === 4 && <PageFour />}
          </div>

          {/* Navigation */}
          <Navigation onSubmit={handleSubmit} />
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-sm text-gray-400">
          <p>Need help? Contact us at support@example.com</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <FormProvider>
      <OnboardingForm />
    </FormProvider>
  );
}

export default App;
