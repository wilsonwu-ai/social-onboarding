export interface SocialMediaAccount {
  platform: 'instagram' | 'facebook' | 'tiktok' | 'xhs';
  link?: string;
  username?: string;
  password?: string;
}

export interface FormData {
  // Page 1 - Basics
  businessName: string;
  businessType: 'restaurant' | 'other' | '';
  otherBusinessType?: string;
  cuisine: string;
  website: string;
  hasExistingSocial: boolean | null;
  existingSocialAccounts: SocialMediaAccount[];
  preferredUsername: string;
  preferredUsernameAlt: string;
  selectedPlatforms: ('instagram' | 'facebook' | 'tiktok' | 'xhs')[];
  wantsNewSocial: boolean;

  // Page 2 - What Makes You Special
  keyOfferings: string[];
  uniqueSellingPoints: string[];
  customOffering: string;
  customUSP: string;

  // Page 3 - Create Your Look
  selectedTypography: string;
  selectedColorPalette: string;
  customColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  inspirationLinks: string[];

  // Page 4 - Craft Your Message
  targetAudience: string[];
  customAudience: string;
  coreMessage: string;
  businessStory: string;
  accessPreference: 'credentials' | 'admin_access' | '';
  localCompetitors: string[];
}

export const initialFormData: FormData = {
  // Page 1
  businessName: '',
  businessType: '',
  otherBusinessType: '',
  cuisine: '',
  website: '',
  hasExistingSocial: null,
  existingSocialAccounts: [],
  preferredUsername: '',
  preferredUsernameAlt: '',
  selectedPlatforms: [],
  wantsNewSocial: false,

  // Page 2
  keyOfferings: [],
  uniqueSellingPoints: [],
  customOffering: '',
  customUSP: '',

  // Page 3
  selectedTypography: '',
  selectedColorPalette: '',
  customColors: {
    primary: '#B02990',
    secondary: '#EECFE3',
    accent: '#333333',
  },
  inspirationLinks: [''],

  // Page 4
  targetAudience: [],
  customAudience: '',
  coreMessage: '',
  businessStory: '',
  accessPreference: '',
  localCompetitors: ['', ''],
};

export const cuisineOptions = [
  'Italian',
  'Chinese',
  'Japanese',
  'Mexican',
  'Indian',
  'Thai',
  'French',
  'American',
  'Mediterranean',
  'Korean',
  'Vietnamese',
  'Middle Eastern',
  'Greek',
  'Spanish',
  'Other',
];

export const keyOfferingOptions = [
  'Dine-in Experience',
  'Takeaway & Delivery',
  'Catering Services',
  'Private Events',
  'Happy Hour Specials',
  'Weekend Brunch',
  'Live Entertainment',
  'Outdoor Seating',
  'Family-friendly Dining',
  'Late Night Menu',
  'Seasonal Specials',
  'Chef\'s Tasting Menu',
];

export const uspOptions = [
  'Farm-to-table Fresh Ingredients',
  'Award-winning Chef',
  'Family Recipes Passed Down Generations',
  'Authentic Regional Cuisine',
  'Sustainable & Eco-friendly',
  'Locally Sourced Produce',
  'Unique Fusion Flavors',
  'Signature Cocktails & Drinks',
  'Intimate & Cozy Atmosphere',
  'Instagram-worthy Presentation',
  'Health-conscious Options',
  'Secret Family Recipe',
];

export const typographyOptions = [
  {
    id: 'modern',
    name: 'Modern & Clean',
    font: 'Poppins',
    className: 'font-poppins',
    description: 'Contemporary and professional',
  },
  {
    id: 'elegant',
    name: 'Elegant & Sophisticated',
    font: 'Playfair Display',
    className: 'font-playfair',
    description: 'Classic and refined',
  },
  {
    id: 'bold',
    name: 'Bold & Dynamic',
    font: 'Montserrat',
    className: 'font-montserrat',
    description: 'Strong and impactful',
  },
  {
    id: 'classic',
    name: 'Classic & Timeless',
    font: 'Lora',
    className: 'font-lora',
    description: 'Traditional and warm',
  },
];

export const colorPaletteOptions = [
  {
    id: 'vibrant',
    name: 'Vibrant Energy',
    colors: ['#B02990', '#EECFE3', '#FF6B6B', '#4ECDC4'],
    description: 'Bold and eye-catching',
  },
  {
    id: 'earthy',
    name: 'Earthy Warmth',
    colors: ['#8B4513', '#DEB887', '#228B22', '#F5DEB3'],
    description: 'Natural and inviting',
  },
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    colors: ['#006994', '#40E0D0', '#F0F8FF', '#4169E1'],
    description: 'Fresh and calming',
  },
  {
    id: 'midnight',
    name: 'Midnight Luxe',
    colors: ['#1a1a2e', '#16213e', '#e94560', '#0f3460'],
    description: 'Sophisticated and modern',
  },
  {
    id: 'sunset',
    name: 'Golden Sunset',
    colors: ['#FF6B35', '#F7C59F', '#EFEFEF', '#2E294E'],
    description: 'Warm and welcoming',
  },
  {
    id: 'custom',
    name: 'Custom Colors',
    colors: [],
    description: 'Upload your own palette',
  },
];

export const targetAudienceOptions = [
  'Young Professionals (25-35)',
  'Families with Children',
  'Couples & Date Night',
  'Food Enthusiasts & Foodies',
  'Health-conscious Diners',
  'Business Professionals',
  'Tourists & Travelers',
  'Students & Young Adults',
  'Senior Citizens',
  'Local Community',
];
