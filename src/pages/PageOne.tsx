import { useFormContext } from '../context/FormContext';
import { cuisineOptions } from '../types';
import { Building2, Globe, Instagram, Facebook, Plus, X, Sparkles, Play, Heart } from 'lucide-react';

// TikTok icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

// XHS (Xiaohongshu) icon component
const XHSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

export default function PageOne() {
  const { formData, updateFormData } = useFormContext();

  const handlePlatformToggle = (platform: 'instagram' | 'facebook' | 'tiktok' | 'xhs') => {
    const current = formData.selectedPlatforms;
    if (current.includes(platform)) {
      updateFormData({ selectedPlatforms: current.filter(p => p !== platform) });
    } else {
      updateFormData({ selectedPlatforms: [...current, platform] });
    }
  };

  const handleAddSocialAccount = () => {
    updateFormData({
      existingSocialAccounts: [
        ...formData.existingSocialAccounts,
        { platform: 'instagram', link: '', username: '', password: '' },
      ],
    });
  };

  const handleRemoveSocialAccount = (index: number) => {
    const updated = formData.existingSocialAccounts.filter((_, i) => i !== index);
    updateFormData({ existingSocialAccounts: updated });
  };

  const handleSocialAccountChange = (
    index: number,
    field: 'platform' | 'link' | 'username' | 'password',
    value: string
  ) => {
    const updated = formData.existingSocialAccounts.map((account, i) => {
      if (i === index) {
        return { ...account, [field]: value };
      }
      return account;
    });
    updateFormData({ existingSocialAccounts: updated });
  };

  const platformIcons = {
    instagram: <Instagram className="w-5 h-5" />,
    facebook: <Facebook className="w-5 h-5" />,
    tiktok: <TikTokIcon />,
    xhs: <XHSIcon />,
  };

  const platformLabels = {
    instagram: 'Instagram',
    facebook: 'Facebook',
    tiktok: 'TikTok',
    xhs: 'XHS (+$50)',
  };

  // Sample content previews from @gosnappy.io
  const sampleContent = [
    {
      id: 1,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
      views: '12.4K',
    },
    {
      id: 2,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
      views: '8.7K',
    },
    {
      id: 3,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop',
      views: '15.2K',
    },
    {
      id: 4,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop',
      views: '6.9K',
    },
  ];

  return (
    <div className="space-y-8">
      {/* VIP Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/10 rounded-3xl p-6 md:p-8 mb-8">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary rounded-full blur-2xl" />

        <div className="relative">
          {/* Welcome Message */}
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Welcome to the Snappy Family</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            We're So Excited You're Here!
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl">
            You've made an incredible decision to elevate your brand's social presence, and we couldn't be more thrilled to partner with you on this journey.
            In just a few minutes, you'll share your story with us — and we'll transform it into scroll-stopping content that brings new guests through your doors.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>Trusted by 500+ restaurants across North America</span>
          </div>

          {/* Content Preview */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Here's a taste of what we'll create together:
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {sampleContent.map((content) => (
                <a
                  key={content.id}
                  href="https://instagram.com/gosnappy.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={content.thumbnail}
                    alt="Sample content"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-2 right-2">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1">
                    <span className="text-white text-xs font-medium drop-shadow-lg">{content.views}</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Follow us <a href="https://instagram.com/gosnappy.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@gosnappy.io</a> for more inspiration
            </p>
          </div>
        </div>
      </div>

      {/* Form Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Let's Start with the Basics
        </h1>
        <p className="text-gray-600">Tell us about your business</p>
      </div>

      {/* Business Name */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Business Name <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => updateFormData({ businessName: e.target.value })}
            placeholder="Enter your business name"
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Type of Business */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Type of Business <span className="text-primary">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => updateFormData({ businessType: 'restaurant', otherBusinessType: '' })}
            className={`p-4 rounded-xl border-2 transition-all ${
              formData.businessType === 'restaurant'
                ? 'border-primary bg-secondary/30 text-primary'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <span className="text-2xl mb-2 block">🍽️</span>
            <span className="font-semibold">Restaurant</span>
          </button>
          <button
            type="button"
            onClick={() => updateFormData({ businessType: 'other' })}
            className={`p-4 rounded-xl border-2 transition-all ${
              formData.businessType === 'other'
                ? 'border-primary bg-secondary/30 text-primary'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <span className="text-2xl mb-2 block">🏢</span>
            <span className="font-semibold">Other</span>
          </button>
        </div>
        {formData.businessType === 'other' && (
          <input
            type="text"
            value={formData.otherBusinessType}
            onChange={(e) => updateFormData({ otherBusinessType: e.target.value })}
            placeholder="Please specify your business type"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors mt-3"
          />
        )}
      </div>

      {/* Cuisine (conditional) */}
      {formData.businessType === 'restaurant' && (
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Cuisine <span className="text-gray-400">(optional)</span>
          </label>
          <select
            value={formData.cuisine}
            onChange={(e) => updateFormData({ cuisine: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors appearance-none bg-white"
          >
            <option value="">Select a cuisine type</option>
            {cuisineOptions.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 italic">
            Knowing your cuisine helps us tailor content that resonates with your target audience
          </p>
        </div>
      )}

      {/* Website */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Website <span className="text-gray-400">(optional)</span>
        </label>
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="url"
            value={formData.website}
            onChange={(e) => updateFormData({ website: e.target.value })}
            placeholder="https://www.yourbusiness.com"
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Existing Social Media */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-700">
          Do you have existing social media? <span className="text-primary">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() =>
              updateFormData({
                hasExistingSocial: true,
                wantsNewSocial: false,
                existingSocialAccounts:
                  formData.existingSocialAccounts.length === 0
                    ? [{ platform: 'instagram', link: '', username: '', password: '' }]
                    : formData.existingSocialAccounts,
              })
            }
            className={`p-4 rounded-xl border-2 transition-all ${
              formData.hasExistingSocial === true
                ? 'border-primary bg-secondary/30 text-primary'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <span className="font-semibold">Yes</span>
          </button>
          <button
            type="button"
            onClick={() =>
              updateFormData({
                hasExistingSocial: false,
                existingSocialAccounts: [],
              })
            }
            className={`p-4 rounded-xl border-2 transition-all ${
              formData.hasExistingSocial === false
                ? 'border-primary bg-secondary/30 text-primary'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <span className="font-semibold">No</span>
          </button>
        </div>

        {/* Existing Social Media Details */}
        {formData.hasExistingSocial === true && !formData.wantsNewSocial && (
          <div className="mt-6 space-y-4 p-6 bg-secondary/20 rounded-2xl">
            <h3 className="font-semibold text-gray-700">Your Social Media Accounts</h3>

            {formData.existingSocialAccounts.map((account, index) => (
              <div key={index} className="p-4 bg-white rounded-xl space-y-3 relative">
                {formData.existingSocialAccounts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveSocialAccount(index)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}

                <select
                  value={account.platform}
                  onChange={(e) =>
                    handleSocialAccountChange(
                      index,
                      'platform',
                      e.target.value as 'instagram' | 'facebook' | 'tiktok' | 'xhs'
                    )
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary"
                >
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="tiktok">TikTok</option>
                  <option value="xhs">XHS (Xiaohongshu)</option>
                </select>

                <input
                  type="url"
                  value={account.link}
                  onChange={(e) => handleSocialAccountChange(index, 'link', e.target.value)}
                  placeholder="Link to your profile"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={account.username}
                    onChange={(e) => handleSocialAccountChange(index, 'username', e.target.value)}
                    placeholder="Username"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary"
                  />
                  <input
                    type="password"
                    value={account.password}
                    onChange={(e) => handleSocialAccountChange(index, 'password', e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddSocialAccount}
              className="w-full py-3 border-2 border-dashed border-primary/50 rounded-xl text-primary hover:bg-secondary/30 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Another Account
            </button>

            <div className="pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => updateFormData({ wantsNewSocial: true })}
                className="text-sm text-primary hover:underline"
              >
                Not comfortable sharing credentials? Create new accounts instead →
              </button>
            </div>
          </div>
        )}

        {/* New Social Media Setup */}
        {(formData.hasExistingSocial === false || formData.wantsNewSocial) && (
          <div className="mt-6 space-y-4 p-6 bg-secondary/20 rounded-2xl">
            <h3 className="font-semibold text-gray-700">Set Up New Social Media</h3>

            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Preferred Username</label>
              <p className="text-xs text-gray-400">Provide a backup option in case your first choice is taken</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={formData.preferredUsername}
                  onChange={(e) => updateFormData({ preferredUsername: e.target.value })}
                  placeholder="@yourbusiness (1st choice)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary"
                />
                <input
                  type="text"
                  value={formData.preferredUsernameAlt}
                  onChange={(e) => updateFormData({ preferredUsernameAlt: e.target.value })}
                  placeholder="@yourbusiness2 (2nd choice)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Select Platforms</label>
              <div className="grid grid-cols-2 gap-3">
                {(['instagram', 'facebook', 'tiktok', 'xhs'] as const).map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => handlePlatformToggle(platform)}
                    className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      formData.selectedPlatforms.includes(platform)
                        ? 'border-primary bg-white text-primary'
                        : 'border-gray-200 hover:border-primary/50 bg-white'
                    }`}
                  >
                    {platformIcons[platform]}
                    <span className="font-medium text-sm">{platformLabels[platform]}</span>
                  </button>
                ))}
              </div>
            </div>

            {formData.wantsNewSocial && (
              <div className="pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => updateFormData({ wantsNewSocial: false })}
                  className="text-sm text-primary hover:underline"
                >
                  ← Go back to using existing accounts
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
