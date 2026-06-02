const games = [
  {
    id: 1,
    slug: 'pubg-mobile',
    categorySlug: 'games',
    title: 'PUBG Mobile',
    category: 'الألعاب',
    rating: 4.9,
    reviews: 1248,
    popular: true,
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
    description: 'شحن UC لجميع الباقات بشكل فوري وآمن.',
    features: [
      'تنفيذ سريع وفوري',
      'دعم متواصل 24/7',
      'شحن آمن ومضمون',
      'أفضل الأسعار'
    ],
    packages: [
      { id: 1, name: '60 UC', price: 0.99 },
      { id: 2, name: '325 UC', price: 4.99 },
      { id: 3, name: '660 UC', price: 9.99 },
      { id: 4, name: '1800 UC', price: 24.99 },
      { id: 5, name: '3850 UC', price: 49.99 },
      { id: 6, name: '8100 UC', price: 99.99 }
    ]
  },

  {
    id: 7,
    slug: 'roblox',
    categorySlug: 'games',
    title: 'Roblox',
    category: 'الألعاب',
    rating: 4.8,
    reviews: 850,
    popular: true,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    description: 'شحن Robux لجميع الباقات.',
    features: [
      'تسليم فوري',
      'أسعار منافسة',
      'آمن ومضمون',
      'دعم سريع'
    ],
    packages: [
      { id: 1, name: '80 Robux', price: 0.99 },
      { id: 2, name: '400 Robux', price: 4.99 },
      { id: 3, name: '800 Robux', price: 9.99 }
    ]
  },

  {
    id: 8,
    slug: 'free-fire',
    categorySlug: 'games',
    title: 'Free Fire',
    category: 'الألعاب',
    rating: 4.8,
    reviews: 900,
    popular: true,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    description: 'شحن جواهر Free Fire بشكل فوري.',
    features: [
      'تسليم فوري',
      'شحن مضمون',
      'دعم سريع',
      'أسعار ممتازة'
    ],
    packages: [
      { id: 1, name: '100 Diamonds', price: 0.99 },
      { id: 2, name: '310 Diamonds', price: 2.99 },
      { id: 3, name: '520 Diamonds', price: 4.99 }
    ]
  },
  {
  id: 9,
  slug: 'mobile-legends',
  categorySlug: 'games',
  title: 'Mobile Legends',
  category: 'الألعاب',
  rating: 4.9,
  reviews: 1100,
  popular: true,
  image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
  description: 'شحن Diamonds للعبة Mobile Legends.',
  features: [
    'تسليم فوري',
    'دعم 24/7',
    'آمن',
    'أسعار منافسة'
  ],
  packages: [
    { id: 1, name: '86 Diamonds', price: 1.99 },
    { id: 2, name: '172 Diamonds', price: 3.99 },
    { id: 3, name: '257 Diamonds', price: 5.99 }
  ]
},

{
  id: 10,
  slug: 'fc-mobile',
  categorySlug: 'games',
  title: 'FC Mobile',
  category: 'الألعاب',
  rating: 4.7,
  reviews: 720,
  popular: true,
  image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
  description: 'شحن FC Points لجميع الباقات.',
  features: [
    'تسليم سريع',
    'أسعار مناسبة',
    'آمن',
    'دعم مستمر'
  ],
  packages: [
    { id: 1, name: '40 FC Points', price: 0.99 },
    { id: 2, name: '100 FC Points', price: 2.99 },
    { id: 3, name: '520 FC Points', price: 9.99 }
  ]
},

{
  id: 11,
  slug: 'clash-of-clans',
  categorySlug: 'games',
  title: 'Clash of Clans',
  category: 'الألعاب',
  rating: 4.9,
  reviews: 1500,
  popular: true,
  image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  description: 'شحن Gems للعبة Clash of Clans.',
  features: [
    'شحن فوري',
    'أسعار ممتازة',
    'دعم سريع',
    'آمن'
  ],
  packages: [
    { id: 1, name: '80 Gems', price: 0.99 },
    { id: 2, name: '500 Gems', price: 4.99 },
    { id: 3, name: '1200 Gems', price: 9.99 }
  ]
},

{
  id: 12,
  slug: 'clash-royale',
  categorySlug: 'games',
  title: 'Clash Royale',
  category: 'الألعاب',
  rating: 4.8,
  reviews: 980,
  popular: true,
  image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
  description: 'شحن Gems و Pass Royale.',
  features: [
    'تفعيل سريع',
    'آمن',
    'أسعار جيدة',
    'دعم مباشر'
  ],
  packages: [
    { id: 1, name: '80 Gems', price: 0.99 },
    { id: 2, name: '500 Gems', price: 4.99 },
    { id: 3, name: 'Pass Royale', price: 6.99 }
  ]
},

{
  id: 13,
  slug: 'jawaker',
  categorySlug: 'games',
  title: 'Jawaker',
  category: 'الألعاب',
  rating: 4.8,
  reviews: 600,
  popular: true,
  image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
  description: 'شحن جواكر وجميع العملات داخل اللعبة.',
  features: [
    'تسليم فوري',
    'أسعار ممتازة',
    'دعم سريع',
    'آمن'
  ],
  packages: [
    { id: 1, name: '500 Chips', price: 2.99 },
    { id: 2, name: '1000 Chips', price: 4.99 },
    { id: 3, name: '2500 Chips', price: 9.99 }
  ]
},
{
id: 14,
slug: 'hay-day',
categorySlug: 'games',
title: 'Hay Day',
category: 'الألعاب',
rating: 4.8,
reviews: 420,
popular: false,
image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
description: 'شحن Diamonds للعبة Hay Day.',
features: ['تنفيذ سريع','آمن','أسعار مناسبة','دعم مباشر'],
packages: [
{ id: 1, name: '50 Diamonds', price: 0.99 },
{ id: 2, name: '275 Diamonds', price: 4.99 },
{ id: 3, name: '570 Diamonds', price: 9.99 }
]
},

{
id: 15,
slug: 'delta-force',
categorySlug: 'games',
title: 'Delta Force',
category: 'الألعاب',
rating: 4.7,
reviews: 310,
popular: true,
image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
description: 'شحن العملات والعروض الخاصة.',
features: ['تفعيل سريع','أسعار جيدة','دعم 24/7','آمن'],
packages: [
{ id: 1, name: '60 Coins', price: 0.99 },
{ id: 2, name: '300 Coins', price: 4.99 },
{ id: 3, name: '680 Coins', price: 9.99 }
]
},

{
id: 16,
slug: '8-ball-pool',
categorySlug: 'games',
title: '8 Ball Pool',
category: 'الألعاب',
rating: 4.9,
reviews: 1200,
popular: true,
image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=800&auto=format&fit=crop',
description: 'شحن Cash و Coins للعبة 8 Ball Pool.',
features: ['تسليم سريع','أسعار ممتازة','آمن','دعم مباشر'],
packages: [
{ id: 1, name: 'Cash Pack S', price: 1.99 },
{ id: 2, name: 'Cash Pack M', price: 4.99 },
{ id: 3, name: 'Cash Pack L', price: 9.99 }
]
},

{
id: 17,
slug: 'brawl-stars',
categorySlug: 'games',
title: 'Brawl Stars',
category: 'الألعاب',
rating: 4.9,
reviews: 1400,
popular: true,
image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
description: 'شحن Gems و Brawl Pass.',
features: ['شحن فوري','أسعار ممتازة','دعم سريع','مضمون'],
packages: [
{ id: 1, name: '30 Gems', price: 1.99 },
{ id: 2, name: '80 Gems', price: 4.99 },
{ id: 3, name: '170 Gems', price: 9.99 }
]
},

{
id: 18,
slug: 'weplay',
categorySlug: 'games',
title: 'WePlay',
category: 'الألعاب',
rating: 4.6,
reviews: 250,
popular: false,
image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
description: 'شحن عملات وتعبئات WePlay.',
features: ['تنفيذ سريع','دعم مباشر','أسعار مناسبة','آمن'],
packages: [
{ id: 1, name: '100 Coins', price: 1.99 },
{ id: 2, name: '500 Coins', price: 5.99 },
{ id: 3, name: '1000 Coins', price: 9.99 }
]
}



  // كمل باقي الألعاب هون...
]

export default games