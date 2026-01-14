import { useFormContext } from '../context/FormContext';
import { keyOfferingOptions, uspOptions } from '../types';
import { Sparkles, Star, Plus } from 'lucide-react';

export default function PageTwo() {
  const { formData, updateFormData } = useFormContext();

  const handleOfferingToggle = (offering: string) => {
    const current = formData.keyOfferings;
    if (current.includes(offering)) {
      updateFormData({ keyOfferings: current.filter((o) => o !== offering) });
    } else {
      updateFormData({ keyOfferings: [...current, offering] });
    }
  };

  const handleUSPToggle = (usp: string) => {
    const current = formData.uniqueSellingPoints;
    if (current.includes(usp)) {
      updateFormData({ uniqueSellingPoints: current.filter((u) => u !== usp) });
    } else {
      updateFormData({ uniqueSellingPoints: [...current, usp] });
    }
  };

  const handleAddCustomOffering = () => {
    if (formData.customOffering.trim()) {
      updateFormData({
        keyOfferings: [...formData.keyOfferings, formData.customOffering.trim()],
        customOffering: '',
      });
    }
  };

  const handleAddCustomUSP = () => {
    if (formData.customUSP.trim()) {
      updateFormData({
        uniqueSellingPoints: [...formData.uniqueSellingPoints, formData.customUSP.trim()],
        customUSP: '',
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          What Makes You Special?
        </h1>
        <p className="text-gray-600">Help us understand what sets you apart</p>
      </div>

      {/* Key Offerings */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Key Offerings <span className="text-primary">*</span>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          Select all the services and experiences you offer (choose multiple)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {keyOfferingOptions.map((offering) => (
            <button
              key={offering}
              type="button"
              onClick={() => handleOfferingToggle(offering)}
              className={`p-3 rounded-xl border-2 text-sm transition-all text-left ${
                formData.keyOfferings.includes(offering)
                  ? 'border-primary bg-secondary/30 text-primary font-medium'
                  : 'border-gray-200 hover:border-primary/50 text-gray-700'
              }`}
            >
              {offering}
            </button>
          ))}
        </div>

        {/* Custom Offering Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={formData.customOffering}
            onChange={(e) => updateFormData({ customOffering: e.target.value })}
            placeholder="Add your own offering..."
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddCustomOffering();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAddCustomOffering}
            className="px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Selected offerings display */}
        {formData.keyOfferings.length > 0 && (
          <div className="p-4 bg-secondary/20 rounded-xl">
            <p className="text-sm font-medium text-gray-600 mb-2">
              Selected: {formData.keyOfferings.length}
            </p>
            <div className="flex flex-wrap gap-2">
              {formData.keyOfferings.map((offering) => (
                <span
                  key={offering}
                  className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-2"
                >
                  {offering}
                  <button
                    type="button"
                    onClick={() => handleOfferingToggle(offering)}
                    className="hover:bg-white/20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8" />

      {/* Unique Selling Points */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Unique Selling Points <span className="text-primary">*</span>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          What makes your business stand out from the competition? (choose up to 5)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {uspOptions.map((usp) => (
            <button
              key={usp}
              type="button"
              onClick={() => handleUSPToggle(usp)}
              disabled={
                formData.uniqueSellingPoints.length >= 5 &&
                !formData.uniqueSellingPoints.includes(usp)
              }
              className={`p-4 rounded-xl border-2 text-sm transition-all text-left ${
                formData.uniqueSellingPoints.includes(usp)
                  ? 'border-primary bg-secondary/30 text-primary font-medium'
                  : formData.uniqueSellingPoints.length >= 5
                  ? 'border-gray-100 text-gray-400 cursor-not-allowed'
                  : 'border-gray-200 hover:border-primary/50 text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    formData.uniqueSellingPoints.includes(usp)
                      ? 'border-primary bg-primary'
                      : 'border-gray-300'
                  }`}
                >
                  {formData.uniqueSellingPoints.includes(usp) && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </span>
                {usp}
              </span>
            </button>
          ))}
        </div>

        {/* Custom USP Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={formData.customUSP}
            onChange={(e) => updateFormData({ customUSP: e.target.value })}
            placeholder="Add your own unique selling point..."
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddCustomUSP();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAddCustomUSP}
            disabled={formData.uniqueSellingPoints.length >= 5}
            className="px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Selected USPs display */}
        {formData.uniqueSellingPoints.length > 0 && (
          <div className="p-4 bg-secondary/20 rounded-xl">
            <p className="text-sm font-medium text-gray-600 mb-2">
              Selected: {formData.uniqueSellingPoints.length}/5
            </p>
            <div className="flex flex-wrap gap-2">
              {formData.uniqueSellingPoints.map((usp) => (
                <span
                  key={usp}
                  className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-2"
                >
                  {usp}
                  <button
                    type="button"
                    onClick={() => handleUSPToggle(usp)}
                    className="hover:bg-white/20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
