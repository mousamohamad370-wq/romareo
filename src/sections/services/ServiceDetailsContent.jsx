import './ServiceDetailsContent.scss'

import {
  FiStar,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiMinus,
  FiPlus
} from 'react-icons/fi'

import {
  useState
} from 'react'

import {
  useParams
} from 'react-router-dom'

function ServiceDetailsContent() {

  const { id } = useParams()

  const [quantity, setQuantity] =
    useState(1)

  /* MOCK DATA */

  const service = {
    id,

    title: 'شحن PUBG UC',

    category: 'الألعاب',

    price: 5,

    rating: 4.9,

    reviews: 1248,

    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20',

    description:
      'خدمة شحن PUBG UC بشكل فوري وآمن لجميع الباقات مع دعم سريع وتنفيذ مضمون.',

    features: [
      'تنفيذ سريع وفوري',
      'دعم متواصل 24/7',
      'شحن آمن ومضمون',
      'أفضل الأسعار المتوفرة'
    ]
  }

  const totalPrice =
    quantity * service.price

  return (

    <section className="service-details section">

      <div className="container">

        <div className="details-grid">

          {/* LEFT SIDE */}

          <div className="details-content">

            {/* IMAGE */}

            <div className="details-image">

              <img
                src={service.image}
                alt={service.title}
              />

            </div>

            {/* INFO */}

            <div className="details-info">

              <div className="details-category">

                {service.category}

              </div>

              <h1>
                {service.title}
              </h1>

              {/* RATING */}

              <div className="details-rating">

                <FiStar />

                <span>
                  {service.rating}
                </span>

                <small>
                  ({service.reviews} مراجعة)
                </small>

              </div>

              {/* DESCRIPTION */}

              <p className="details-description">

                {service.description}

              </p>

              {/* FEATURES */}

              <div className="details-features">

                {service.features.map(
                  (feature, index) => (

                    <div
                      className="feature-box"
                      key={index}
                    >

                      <FiCheckCircle />

                      <span>
                        {feature}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="purchase-card">

            {/* TOP */}

            <div className="purchase-top">

              <h3>
                ابدأ الطلب الآن
              </h3>

              <div className="purchase-price">

                ${service.price}

              </div>

            </div>

            {/* QUANTITY */}

            <div className="quantity-box">

              <span>
                الكمية
              </span>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    setQuantity(
                      quantity > 1
                        ? quantity - 1
                        : 1
                    )
                  }
                >

                  <FiMinus />

                </button>

                <strong>
                  {quantity}
                </strong>

                <button
                  onClick={() =>
                    setQuantity(
                      quantity + 1
                    )
                  }
                >

                  <FiPlus />

                </button>

              </div>

            </div>

            {/* TOTAL */}

            <div className="total-price">

              <span>
                السعر الإجمالي
              </span>

              <strong>
                ${totalPrice}
              </strong>

            </div>

            {/* BUTTON */}

            <button className="buy-btn">

              اطلب الآن

            </button>

            {/* FEATURES */}

            <div className="purchase-features">

              <div>

                <FiShield />

                <span>
                  دفع آمن
                </span>

              </div>

              <div>

                <FiZap />

                <span>
                  تنفيذ سريع
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ServiceDetailsContent