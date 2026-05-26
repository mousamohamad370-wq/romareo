import './Testimonials.scss'

import {
  FiStar
} from 'react-icons/fi'

const reviews = [
  {
    name: 'محمد أحمد',
    role: 'لاعب PUBG',
    review:
      'أفضل موقع تعاملت معه بالشحن، التنفيذ سريع جدًا والدعم ممتاز.',
    rating: 5
  },

  {
    name: 'سارة علي',
    role: 'صانعة محتوى',
    review:
      'طلبت ChatGPT Plus وتم التفعيل بسرعة وباحترافية.',
    rating: 5
  },

  {
    name: 'كريم حسن',
    role: 'عميل دائم',
    review:
      'الخدمات ممتازة والأسعار مناسبة جدًا والدفع سهل.',
    rating: 5
  }
]

function Testimonials() {

  return (

    <section className="testimonials section">

      <div className="container">

        {/* TITLE */}

        <div className="section-title">

          <h2>
            آراء العملاء
          </h2>

          <p>
            آلاف العملاء يثقون بخدمات Romario
          </p>

        </div>

        {/* GRID */}

        <div className="testimonials-grid">

          {reviews.map((item, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              {/* STARS */}

              <div className="stars">

                {[...Array(item.rating)].map(
                  (_, i) => (

                    <FiStar key={i} />

                  )
                )}

              </div>

              {/* REVIEW */}

              <p className="review-text">
                "{item.review}"
              </p>

              {/* USER */}

              <div className="user-info">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4>
                    {item.name}
                  </h4>

                  <span>
                    {item.role}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials