import './Services.scss'

import {
  useState
} from 'react'

import {
  FiArrowLeft,
  FiStar
} from 'react-icons/fi'

import {
  useNavigate
} from 'react-router-dom'

/* DATA */

import servicesData
from '../../data/services'

const filters = [
  'الكل',
  'الألعاب',
  'اشتراكات',
  'بطاقات',
  'سوشال',
  'أرقام'
]

function Services() {

  const navigate = useNavigate()

  const [activeFilter, setActiveFilter] =
    useState('الكل')

  /* FILTERED SERVICES */

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

              onClick={() =>
                navigate(
                  `/service/${service.id}`
                )
              }

              style={{
                cursor: 'pointer'
              }}
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

                  {service.description}

                </p>

                {/* BOTTOM */}

                <div className="service-bottom">

                  <div className="price">

                    يبدأ من

                    <strong>

                      ${service.price}

                    </strong>

                  </div>

                  <button
                    onClick={(e) => {

                      e.stopPropagation()

                      navigate(
                        `/service/${service.id}`
                      )

                    }}
                  >

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