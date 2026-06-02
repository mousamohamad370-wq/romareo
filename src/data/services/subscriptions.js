const subscriptions = [

  {
    id: 200,
    slug: 'netflix-premium',
    categorySlug: 'subscriptions',
    title: 'Netflix Premium',
    category: 'الاشتراكات',
    price: 8,
    rating: 4.8,
    reviews: 710,
    popular: true,
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك Netflix Premium بجودة عالية وحسابات مضمونة.',
    features: [
      'جودة 4K',
      'حسابات أصلية',
      'تفعيل فوري',
      'دعم سريع'
    ]
  },

  {
    id: 201,
    slug: 'spotify-premium',
    categorySlug: 'subscriptions',
    title: 'Spotify Premium',
    category: 'الاشتراكات',
    price: 5,
    rating: 4.9,
    reviews: 540,
    popular: true,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop',
    description: 'استمتع بالموسيقى بدون إعلانات.',
    features: [
      'بدون إعلانات',
      'جودة عالية',
      'تفعيل سريع',
      'دعم مباشر'
    ]
  },

  {
    id: 202,
    slug: 'youtube-premium',
    categorySlug: 'subscriptions',
    title: 'YouTube Premium',
    category: 'الاشتراكات',
    price: 6,
    rating: 4.9,
    reviews: 620,
    popular: true,
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop',
    description: 'مشاهدة بدون إعلانات ومزايا Premium.',
    features: [
      'بدون إعلانات',
      'تشغيل بالخلفية',
      'تفعيل فوري',
      'دعم سريع'
    ]
  },

  {
    id: 203,
    slug: 'shahid-vip',
    categorySlug: 'subscriptions',
    title: 'Shahid VIP',
    category: 'الاشتراكات',
    price: 5,
    rating: 4.8,
    reviews: 320,
    popular: false,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك Shahid VIP الأصلي.',
    features: [
      'مشاهدة غير محدودة',
      'جودة عالية',
      'تفعيل سريع',
      'دعم مباشر'
    ]
  },

  {
    id: 204,
    slug: 'canva-pro',
    categorySlug: 'subscriptions',
    title: 'Canva Pro',
    category: 'الاشتراكات',
    price: 8,
    rating: 4.9,
    reviews: 410,
    popular: true,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    description: 'اشتراك Canva Pro للمصممين وصناع المحتوى.',
    features: [
      'جميع الأدوات المدفوعة',
      'قوالب احترافية',
      'تفعيل سريع',
      'دعم مباشر'
    ]
  }
  ,
{
  id: 205,
  slug: 'chatgpt-plus',
  categorySlug: 'subscriptions',
  title: 'ChatGPT Plus',
  category: 'الاشتراكات',
  price: 20,
  rating: 5.0,
  reviews: 932,
  popular: true,
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك ChatGPT Plus الأصلي مع تفعيل سريع.',
  features: [
    'أصلي 100%',
    'تفعيل سريع',
    'دعم مباشر',
    'تسليم مضمون'
  ]
},

{
  id: 206,
  slug: 'disney-plus',
  categorySlug: 'subscriptions',
  title: 'Disney Plus',
  category: 'الاشتراكات',
  price: 7,
  rating: 4.8,
  reviews: 250,
  popular: false,
  image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك Disney Plus الأصلي.',
  features: [
    'جودة عالية',
    'حسابات أصلية',
    'تفعيل سريع',
    'دعم مباشر'
  ]
},

{
  id: 207,
  slug: 'osn-plus',
  categorySlug: 'subscriptions',
  title: 'OSN Plus',
  category: 'الاشتراكات',
  price: 5,
  rating: 4.7,
  reviews: 180,
  popular: false,
  image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك OSN Plus.',
  features: [
    'تفعيل فوري',
    'جودة ممتازة',
    'دعم سريع',
    'حسابات أصلية'
  ]
},

{
  id: 208,
  slug: 'crunchyroll',
  categorySlug: 'subscriptions',
  title: 'Crunchyroll Premium',
  category: 'الاشتراكات',
  price: 6,
  rating: 4.8,
  reviews: 340,
  popular: true,
  image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك Crunchyroll Premium لمحبي الأنمي.',
  features: [
    'مشاهدة غير محدودة',
    'بدون إعلانات',
    'تفعيل سريع',
    'دعم مباشر'
  ]
},

{
  id: 209,
  slug: 'amazon-prime',
  categorySlug: 'subscriptions',
  title: 'Amazon Prime Video',
  category: 'الاشتراكات',
  price: 7,
  rating: 4.8,
  reviews: 290,
  popular: false,
  image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
  description: 'اشتراك Amazon Prime Video.',
  features: [
    'حسابات أصلية',
    'جودة عالية',
    'تفعيل فوري',
    'دعم مباشر'
  ]
},

]

export default subscriptions