import { useFormContext } from '../context/FormContext';
import { typographyOptions, colorPaletteOptions } from '../types';
import { Type, Palette, Link, Plus, X } from 'lucide-react';

export default function PageThree() {
  const { formData, updateFormData } = useFormContext();

  const handleAddInspirationLink = () => {
    updateFormData({
      inspirationLinks: [...formData.inspirationLinks, ''],
    });
  };

  const handleRemoveInspirationLink = (index: number) => {
    const updated = formData.inspirationLinks.filter((_, i) => i !== index);
    updateFormData({ inspirationLinks: updated.length ? updated : [''] });
  };

  const handleInspirationLinkChange = (index: number, value: string) => {
    const updated = formData.inspirationLinks.map((link, i) =>
      i === index ? value : link
    );
    updateFormData({ inspirationLinks: updated });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Let's Create Your Look
        </h1>
        <p className="text-gray-600">Design the visual identity for your brand</p>
      </div>

      {/* Typography Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Type className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Typography Style <span className="text-primary">*</span>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          Choose a font style that reflects your brand personality
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {typographyOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => updateFormData({ selectedTypography: option.id })}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                formData.selectedTypography === option.id
                  ? 'border-primary bg-secondary/30 shadow-soft'
                  : 'border-gray-200 hover:border-primary/50 bg-white'
              }`}
            >
              <div className="space-y-3">
                <span
                  className={`text-2xl font-bold ${option.className}`}
                  style={{ fontFamily: option.font }}
                >
                  {formData.businessName || 'Your Business'}
                </span>
                <p
                  className={`text-sm ${option.className}`}
                  style={{ fontFamily: option.font }}
                >
                  Experience the finest flavors crafted with passion
                </p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="font-semibold text-primary text-sm">{option.name}</p>
                  <p className="text-xs text-gray-500">{option.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8" />

      {/* Color Palette Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Color Palette <span className="text-primary">*</span>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          Select a color scheme that represents your brand
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorPaletteOptions.map((palette) => (
            <button
              key={palette.id}
              type="button"
              onClick={() => updateFormData({ selectedColorPalette: palette.id })}
              className={`p-4 rounded-2xl border-2 transition-all text-left ${
                formData.selectedColorPalette === palette.id
                  ? 'border-primary bg-secondary/30 shadow-soft'
                  : 'border-gray-200 hover:border-primary/50 bg-white'
              }`}
            >
              <div className="space-y-3">
                {palette.id !== 'custom' ? (
                  <div className="flex gap-1 h-12">
                    {palette.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-lg first:rounded-l-xl last:rounded-r-xl"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-12 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl">
                    <span className="text-gray-400 text-sm">Upload your colors</span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-800">{palette.name}</p>
                  <p className="text-xs text-gray-500">{palette.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Custom Color Picker */}
        {formData.selectedColorPalette === 'custom' && (
          <div className="p-6 bg-secondary/20 rounded-2xl space-y-4">
            <h3 className="font-semibold text-gray-700">Customize Your Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Primary Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={formData.customColors.primary}
                    onChange={(e) =>
                      updateFormData({
                        customColors: { ...formData.customColors, primary: e.target.value },
                      })
                    }
                    className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200"
                  />
                  <input
                    type="text"
                    value={formData.customColors.primary}
                    onChange={(e) =>
                      updateFormData({
                        customColors: { ...formData.customColors, primary: e.target.value },
                      })
                    }
                    className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono uppercase"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Secondary Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={formData.customColors.secondary}
                    onChange={(e) =>
                      updateFormData({
                        customColors: { ...formData.customColors, secondary: e.target.value },
                      })
                    }
                    className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200"
                  />
                  <input
                    type="text"
                    value={formData.customColors.secondary}
                    onChange={(e) =>
                      updateFormData({
                        customColors: { ...formData.customColors, secondary: e.target.value },
                      })
                    }
                    className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono uppercase"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Accent Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={formData.customColors.accent}
                    onChange={(e) =>
                      updateFormData({
                        customColors: { ...formData.customColors, accent: e.target.value },
                      })
                    }
                    className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200"
                  />
                  <input
                    type="text"
                    value={formData.customColors.accent}
                    onChange={(e) =>
                      updateFormData({
                        customColors: { ...formData.customColors, accent: e.target.value },
                      })
                    }
                    className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono uppercase"
                  />
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="mt-4 p-4 bg-white rounded-xl">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <div className="flex gap-2 h-12">
                <div
                  className="flex-1 rounded-lg"
                  style={{ backgroundColor: formData.customColors.primary }}
                />
                <div
                  className="flex-1 rounded-lg"
                  style={{ backgroundColor: formData.customColors.secondary }}
                />
                <div
                  className="flex-1 rounded-lg"
                  style={{ backgroundColor: formData.customColors.accent }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8" />

      {/* Inspiration Links */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Link className="w-5 h-5 text-primary" />
          <label className="text-lg font-semibold text-gray-700">
            Inspiration <span className="text-gray-400">(optional)</span>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          Link any social media pages or websites that inspire you
        </p>

        <div className="space-y-3">
          {formData.inspirationLinks.map((link, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="url"
                value={link}
                onChange={(e) => handleInspirationLinkChange(index, e.target.value)}
                placeholder="https://instagram.com/example"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
              />
              {formData.inspirationLinks.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveInspirationLink(index)}
                  className="px-3 py-3 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>

        {formData.inspirationLinks.length < 5 && (
          <button
            type="button"
            onClick={handleAddInspirationLink}
            className="w-full py-3 border-2 border-dashed border-primary/50 rounded-xl text-primary hover:bg-secondary/30 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Another Link
          </button>
        )}
      </div>
    </div>
  );
}
