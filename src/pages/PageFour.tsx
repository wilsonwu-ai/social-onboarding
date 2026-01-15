import { useFormContext } from '../context/FormContext';
import { targetAudienceOptions } from '../types';
import { Users, MessageCircle, BookOpen, Key, Building } from 'lucide-react';

export default function PageFour() {
  const { formData, updateFormData } = useFormContext();

  const handleAudienceToggle = (audience: string) => {
    const current = formData.targetAudience;
    if (current.includes(audience)) {
      updateFormData({ targetAudience: current.filter((a) => a !== audience) });
    } else if (current.length < 3) {
      updateFormData({ targetAudience: [...current, audience] });
    }
  };

  const handleCompetitorChange = (index: number, value: string) => {
    const updated = formData.localCompetitors.map((comp, i) =>
      i === index ? value : comp
    );
    updateFormData({ localCompetitors: updated });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Craft Your Message
        </h1>
        <p className="text-gray-600">Define your voice and connect with your audience</p>
      </div>

      {/* Primary Target Audience */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Primary Target Audience <span className="text-primary">*</span>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          Who are you trying to reach? (select up to 3)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {targetAudienceOptions.map((audience) => (
            <button
              key={audience}
              type="button"
              onClick={() => handleAudienceToggle(audience)}
              disabled={
                formData.targetAudience.length >= 3 &&
                !formData.targetAudience.includes(audience)
              }
              className={`p-3 rounded-xl border-2 text-sm transition-all text-left ${
                formData.targetAudience.includes(audience)
                  ? 'border-primary bg-secondary/30 text-primary font-medium'
                  : formData.targetAudience.length >= 3
                  ? 'border-gray-100 text-gray-400 cursor-not-allowed'
                  : 'border-gray-200 hover:border-primary/50 text-gray-700'
              }`}
            >
              {audience}
            </button>
          ))}
        </div>

        {/* Custom audience */}
        <input
          type="text"
          value={formData.customAudience}
          onChange={(e) => updateFormData({ customAudience: e.target.value })}
          placeholder="Or describe your specific target audience..."
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
        />

        {formData.targetAudience.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.targetAudience.map((audience) => (
              <span
                key={audience}
                className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-2"
              >
                {audience}
                <button
                  type="button"
                  onClick={() => handleAudienceToggle(audience)}
                  className="hover:bg-white/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Core Message */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Core Message <span className="text-primary">*</span>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          What's the one thing you want people to remember about your business?
        </p>
        <input
          type="text"
          value={formData.coreMessage}
          onChange={(e) => updateFormData({ coreMessage: e.target.value })}
          placeholder="e.g., Authentic Italian cuisine made with love"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
          maxLength={100}
        />
        <p className="text-xs text-gray-400 text-right">
          {formData.coreMessage.length}/100 characters
        </p>
      </div>

      {/* Business Story */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Your Story <span className="text-primary">*</span>
          </label>
        </div>
        <div className="p-4 bg-secondary/20 rounded-xl">
          <p className="text-sm text-gray-700 italic mb-2">
            Every business has a story. Let's tell it right.
          </p>
          <p className="text-xs text-gray-500">
            Describe your restaurant or business in a few sentences. Let us get to know your
            personality, your goals, and what makes you different.
          </p>
        </div>
        <textarea
          value={formData.businessStory}
          onChange={(e) => updateFormData({ businessStory: e.target.value })}
          placeholder="Share your journey... How did it all begin? What drives you? What experience do you want to create for your customers?"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors min-h-[150px] resize-y"
          maxLength={500}
        />
        <p className="text-xs text-gray-400 text-right">
          {formData.businessStory.length}/500 characters
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8" />

      {/* Existing Presence & Market Research Section */}
      <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-primary mb-1">
            Account Access & Market Research
          </h2>
          <p className="text-sm text-gray-600">
            Help us manage your accounts and understand your competitive landscape
          </p>
        </div>

        {/* Access & Credentials */}
        <div className="space-y-4">
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            Access & Credentials
          </label>
          <p className="text-xs text-gray-500">
            How would you like us to access your accounts?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => updateFormData({ accessPreference: 'credentials' })}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                formData.accessPreference === 'credentials'
                  ? 'border-primary bg-white shadow-soft'
                  : 'border-gray-200 hover:border-primary/50 bg-white'
              }`}
            >
              <p className="font-semibold text-gray-800">Share Login Details</p>
              <p className="text-xs text-gray-500 mt-1">
                We'll securely store your credentials
              </p>
            </button>

            <button
              type="button"
              onClick={() => updateFormData({ accessPreference: 'admin_access' })}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                formData.accessPreference === 'admin_access'
                  ? 'border-primary bg-white shadow-soft'
                  : 'border-gray-200 hover:border-primary/50 bg-white'
              }`}
            >
              <p className="font-semibold text-gray-800">Grant Admin Access</p>
              <p className="text-xs text-gray-500 mt-1">
                Via Meta Business Suite (recommended)
              </p>
            </button>
          </div>
        </div>

        {/* Local Competitors */}
        <div className="space-y-4">
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <Building className="w-5 h-5 text-primary" />
            Local Competitors
          </label>
          <p className="text-xs text-gray-500">
            Who are 1-2 businesses nearby that you admire or compete with? This helps us analyze
            what's working in your area.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={formData.localCompetitors[0]}
              onChange={(e) => handleCompetitorChange(0, e.target.value)}
              placeholder="Competitor 1 (name or social link)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary bg-white"
            />
            <input
              type="text"
              value={formData.localCompetitors[1]}
              onChange={(e) => handleCompetitorChange(1, e.target.value)}
              placeholder="Competitor 2 (name or social link)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
