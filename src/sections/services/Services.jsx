import './Services.scss'

const services = [
  {
    title: 'شحن PUBG UC',
    category: 'الألعاب',
    price: '$5',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20'
  },

  {
    title: 'ChatGPT Plus',
    category: 'اشتراكات',
    price: '$20',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },

  {
    title: 'Netflix Premium',
    category: 'اشتراكات',
    price: '$8',
    image:
      'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4'
  },

  {
    title: 'TikTok Followers',
    category: 'سوشال ميديا',
    price: '$10',
    image:
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb'
  },

  {
    title: 'Google Play Cards',
    category: 'بطاقات رقمية',
    price: '$15',
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da'
  },

  {
    title: 'أرقام أمريكية',
    category: 'أرقام أجنبية',
    price: '$3',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
  }
]

function Services() {
  return (
    <section className="services section">

      <div className="container">

        {/* TITLE */}

        <div className="section-title">

          <h2>
            الخدمات الأكثر طلبًا
          </h2>

          <p>
            اكتشف أكثر الخدمات استخدامًا من عملائنا
          </p>

        </div>

        {/* GRID */}

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-item"
              key={index}
            >

              {/* IMAGE */}

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              {/* CONTENT */}

              <div className="service-content">

                <span className="service-category">
                  {service.category}
                </span>

                <h3>
                  {service.title}
                </h3>

                <div className="service-bottom">

                  <div className="price">
                    يبدأ من {service.price}
                  </div>

                  <button>
                    اطلب الآن
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