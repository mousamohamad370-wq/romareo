import './Services.scss'

import {
  useState
} from 'react'

import {
  FiArrowLeft,
  FiStar
} from 'react-icons/fi'

const servicesData = [
  {
    id: 1,
    title: 'شحن PUBG UC',
    category: 'الألعاب',
    price: '$5',
    rating: '4.9',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20'
  },

  {
    id: 2,
    title: 'ChatGPT Plus',
    category: 'اشتراكات',
    price: '$20',
    rating: '5.0',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },

  {
    id: 3,
    title: 'Netflix Premium',
    category: 'اشتراكات',
    price: '$8',
    rating: '4.8',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4'
  },

  {
    id: 4,
    title: 'TikTok Followers',
    category: 'سوشال',
    price: '$10',
    rating: '4.7',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb'
  },

  {
    id: 5,
    title: 'Google Play Cards',
    category: 'بطاقات',
    price: '$15',
    rating: '4.9',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da'
  },

  {
    id: 6,
    title: 'أرقام أمريكية',
    category: 'أرقام',
    price: '$3',
    rating: '4.6',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
  }
]

const filters = [
  'الكل',
  'الألعاب',
  'اشتراكات',
  'بطاقات',
  'سوشال',
  'أرقام'
]

function Services() {

  const [activeFilter, setActiveFilter] =
    useState('الكل')

  const filteredServices =
    activeFilter === 'الكل'
      ? servicesData
      : servicesData.filter(
          service =>
            service.category === activeFilter
        )

  return (

    <section className="services section">

      <div className="container">

        {/* TITLE */}

        <div className="section-title">

          <h2>
            الخدمات الأكثر طلبًا
          </h2>

          <p>
            اكتشف أفضل الخدمات الرقمية
            الأكثر استخدامًا من عملائنا
          </p>

        </div>

        {/* FILTERS */}

        <div className="services-filters">

          {filters.map((filter, index) => (

            <button
              key={index}

              className={
                activeFilter === filter
                  ? 'active'
                  : ''
              }

              onClick={() =>
                setActiveFilter(filter)
              }
            >

              {filter}

            </button>

          ))}

        </div>

        {/* GRID */}

        <div className="services-grid">

          {filteredServices.map(service => (

            <div
              className="service-item"
              key={service.id}
            >

              {/* IMAGE */}

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}

                  loading="lazy"
                />

                {service.popular && (

                  <div className="popular-badge">

                    الأكثر طلبًا

                  </div>

                )}

              </div>

              {/* CONTENT */}

              <div className="service-content">

                {/* TOP */}

                <div className="service-top">

                  <span className="service-category">

                    {service.category}

                  </span>

                  <div className="service-rating">

                    <FiStar />

                    {service.rating}

                  </div>

                </div>

                {/* TITLE */}

                <h3>
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p>
                  خدمة رقمية سريعة وآمنة
                  بجودة عالية وتنفيذ فوري.
                </p>

                {/* BOTTOM */}

                <div className="service-bottom">

                  <div className="price">

                    يبدأ من

                    <strong>
                      {service.price}
                    </strong>

                  </div>

                  <button>

                    اطلب الآن

                    <FiArrowLeft />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services