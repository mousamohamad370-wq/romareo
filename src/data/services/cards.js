const cards = [

  {
    id: 300,
    slug: 'google-play-card',
    categorySlug: 'cards',
    title: 'Google Play Card',
    category: 'البطاقات',
    price: 5,
    rating: 4.9,
    reviews: 615,
    popular: true,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop',
    description: 'بطاقات Google Play أصلية لجميع الدول.',
    features: [
      'تسليم فوري',
      'بطاقات أصلية',
      'جميع الدول',
      'دعم مباشر'
    ]
  },

  {
    id: 301,
    slug: 'itunes-card',
    categorySlug: 'cards',
    title: 'iTunes Card',
    category: 'البطاقات',
    price: 5,
    rating: 4.8,
    reviews: 410,
    popular: true,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    description: 'بطاقات iTunes و Apple Gift Card.',
    features: [
      'تسليم فوري',
      'بطاقات أصلية',
      'آمنة',
      'دعم سريع'
    ]
  },

  {
    id: 302,
    slug: 'steam-card',
    categorySlug: 'cards',
    title: 'Steam Card',
    category: 'البطاقات',
    price: 10,
    rating: 4.9,
    reviews: 520,
    popular: true,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop',
    description: 'بطاقات Steam Wallet الأصلية.',
    features: [
      'تسليم فوري',
      'أكواد أصلية',
      'جميع الفئات',
      'دعم مباشر'
    ]
  },

  {
    id: 303,
    slug: 'amazon-card',
    categorySlug: 'cards',
    title: 'Amazon Gift Card',
    category: 'البطاقات',
    price: 10,
    rating: 4.8,
    reviews: 350,
    popular: false,
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&auto=format&fit=crop',
    description: 'بطاقات Amazon Gift Card الأصلية.',
    features: [
      'بطاقات أصلية',
      'تسليم فوري',
      'جميع الفئات',
      'دعم سريع'
    ]
  },

  {
    id: 304,
    slug: 'playstation-card',
    categorySlug: 'cards',
    title: 'PlayStation Card',
    category: 'البطاقات',
    price: 10,
    rating: 4.9,
    reviews: 480,
    popular: true,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop',
    description: 'بطاقات PlayStation Store لجميع المناطق.',
    features: [
      'أكواد أصلية',
      'تسليم فوري',
      'جميع المناطق',
      'دعم مباشر'
    ]
  },

  {
    id: 305,
    slug: 'xbox-card',
    categorySlug: 'cards',
    title: 'Xbox Gift Card',
    category: 'البطاقات',
    price: 10,
    rating: 4.8,
    reviews: 290,
    popular: false,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=800&auto=format&fit=crop',
    description: 'بطاقات Xbox Gift Card الأصلية.',
    features: [
      'بطاقات أصلية',
      'تسليم سريع',
      'آمنة',
      'دعم مباشر'
    ]
  }
  ,
{
  id: 306,
  slug: 'razer-gold',
  categorySlug: 'cards',
  title: 'Razer Gold',
  category: 'البطاقات',
  price: 10,
  rating: 4.9,
  reviews: 340,
  popular: true,
  image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop',
  description: 'بطاقات Razer Gold الأصلية.',
  features: [
    'تسليم فوري',
    'بطاقات أصلية',
    'جميع الفئات',
    'دعم مباشر'
  ]
},

{
  id: 307,
  slug: 'riot-points',
  categorySlug: 'cards',
  title: 'Riot Points',
  category: 'البطاقات',
  price: 10,
  rating: 4.8,
  reviews: 280,
  popular: true,
  image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
  description: 'بطاقات Riot Points لجميع ألعاب Riot.',
  features: [
    'تسليم فوري',
    'أكواد أصلية',
    'جميع الفئات',
    'دعم سريع'
  ]
},

{
  id: 308,
  slug: 'pubg-uc-card',
  categorySlug: 'cards',
  title: 'PUBG UC Card',
  category: 'البطاقات',
  price: 5,
  rating: 4.9,
  reviews: 620,
  popular: true,
  image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
  description: 'بطاقات PUBG UC الأصلية.',
  features: [
    'تسليم فوري',
    'أصلية 100%',
    'آمنة',
    'دعم مباشر'
  ]
},

{
  id: 309,
  slug: 'free-fire-card',
  categorySlug: 'cards',
  title: 'Free Fire Card',
  category: 'البطاقات',
  price: 5,
  rating: 4.8,
  reviews: 420,
  popular: false,
  image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
  description: 'بطاقات Free Fire الأصلية.',
  features: [
    'تسليم سريع',
    'بطاقات أصلية',
    'أسعار ممتازة',
    'دعم مباشر'
  ]
},

{
  id: 310,
  slug: 'nintendo-card',
  categorySlug: 'cards',
  title: 'Nintendo eShop Card',
  category: 'البطاقات',
  price: 10,
  rating: 4.8,
  reviews: 210,
  popular: false,
  image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop',
  description: 'بطاقات Nintendo eShop الأصلية.',
  features: [
    'أكواد أصلية',
    'تسليم فوري',
    'جميع المناطق',
    'دعم سريع'
  ]
},

]

export default cards