const chat = [

  {
    id: 100,
    slug: 'chatgpt-plus',
    categorySlug: 'chat',
    title: 'ChatGPT Plus',
    category: 'الدردشة',
    price: 20,
    rating: 5.0,
    reviews: 932,
    popular: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك ChatGPT Plus الأصلي مع تفعيل سريع.',
    features: [
      'تفعيل سريع',
      'اشتراك أصلي',
      'دعم متواصل',
      'تسليم مضمون'
    ]
  },

  {
    id: 101,
    slug: 'chatgpt-pro',
    categorySlug: 'chat',
    title: 'ChatGPT Pro',
    category: 'الدردشة',
    price: 200,
    rating: 5.0,
    reviews: 210,
    popular: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك ChatGPT Pro للمستخدمين المحترفين.',
    features: [
      'أداء أعلى',
      'سرعة أكبر',
      'ميزات متقدمة',
      'تفعيل سريع'
    ]
  },

  {
    id: 102,
    slug: 'claude-pro',
    categorySlug: 'chat',
    title: 'Claude Pro',
    category: 'الدردشة',
    price: 20,
    rating: 4.9,
    reviews: 180,
    popular: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك Claude Pro الأصلي.',
    features: [
      'اشتراك أصلي',
      'تفعيل سريع',
      'دعم مباشر',
      'أداء ممتاز'
    ]
  },

  {
    id: 103,
    slug: 'gemini-advanced',
    categorySlug: 'chat',
    title: 'Gemini Advanced',
    category: 'الدردشة',
    price: 20,
    rating: 4.9,
    reviews: 260,
    popular: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك Gemini Advanced الرسمي.',
    features: [
      'تفعيل فوري',
      'اشتراك أصلي',
      'دعم سريع',
      'جميع المزايا'
    ]
  },

  {
    id: 104,
    slug: 'perplexity-pro',
    categorySlug: 'chat',
    title: 'Perplexity Pro',
    category: 'الدردشة',
    price: 20,
    rating: 4.8,
    reviews: 140,
    popular: false,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك Perplexity Pro الأصلي.',
    features: [
      'بحث متقدم',
      'سرعة عالية',
      'اشتراك أصلي',
      'دعم مباشر'
    ]
  }
  ,
{
  id: 105,
  slug: 'cursor-pro',
  categorySlug: 'chat',
  title: 'Cursor Pro',
  category: 'الدردشة',
  price: 20,
  rating: 4.9,
  reviews: 120,
  popular: true,
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك Cursor Pro للمبرمجين.',
  features: [
    'AI Coding',
    'تفعيل سريع',
    'أداء عالي',
    'دعم مباشر'
  ]
},

{
  id: 106,
  slug: 'github-copilot',
  categorySlug: 'chat',
  title: 'GitHub Copilot',
  category: 'الدردشة',
  price: 10,
  rating: 4.9,
  reviews: 300,
  popular: true,
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك GitHub Copilot للمبرمجين.',
  features: [
    'اقتراحات ذكية',
    'تفعيل سريع',
    'دعم مباشر',
    'اشتراك أصلي'
  ]
},

{
  id: 107,
  slug: 'midjourney',
  categorySlug: 'chat',
  title: 'Midjourney',
  category: 'الدردشة',
  price: 10,
  rating: 4.9,
  reviews: 240,
  popular: true,
  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك Midjourney لإنشاء الصور بالذكاء الاصطناعي.',
  features: [
    'صور احترافية',
    'تفعيل سريع',
    'دعم مباشر',
    'اشتراك أصلي'
  ]
},

{
  id: 108,
  slug: 'elevenlabs',
  categorySlug: 'chat',
  title: 'ElevenLabs',
  category: 'الدردشة',
  price: 10,
  rating: 4.8,
  reviews: 110,
  popular: false,
  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك ElevenLabs لتحويل النص إلى صوت.',
  features: [
    'أصوات احترافية',
    'دعم مباشر',
    'تفعيل سريع',
    'اشتراك أصلي'
  ]
},

{
  id: 109,
  slug: 'notion-ai',
  categorySlug: 'chat',
  title: 'Notion AI',
  category: 'الدردشة',
  price: 8,
  rating: 4.8,
  reviews: 90,
  popular: false,
  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك Notion AI للإنتاجية والكتابة.',
  features: [
    'كتابة ذكية',
    'تلخيص المحتوى',
    'تفعيل سريع',
    'دعم مباشر'
  ]
},

]

export default chat