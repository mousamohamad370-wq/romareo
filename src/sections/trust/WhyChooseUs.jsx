import './Trust.scss'

import {
  FiShield,
  FiClock,
  FiHeadphones,
  FiCheckCircle
} from 'react-icons/fi'

const features = [
  {
    icon: <FiShield />,
    title: 'أمان كامل',
    description:
      'جميع الطلبات والمعلومات تتم مراجعتها يدويًا بأمان.'
  },

  {
    icon: <FiClock />,
    title: 'تنفيذ سريع',
    description:
      'تنفيذ الطلبات بسرعة بعد تأكيد عملية الدفع.'
  },

  {
    icon: <FiHeadphones />,
    title: 'دعم مستمر',
    description:
      'فريق دعم جاهز دائمًا لمساعدتك عبر واتساب.'
  },

  {
    icon: <FiCheckCircle />,
    title: 'خدمات مضمونة',
    description:
      'نوفر خدمات أصلية وموثوقة بجودة عالية.'
  }
]

function WhyChooseUs() {
  return (
    <section className="trust section">

      <div className="container">

        <div className="section-title">

          <h2>
            لماذا تختار Romario؟
          </h2>

          <p>
            منصة احترافية للخدمات الرقمية بسرعة وأمان وثقة
          </p>

        </div>

        <div className="trust-grid">

          {features.map((item, index) => (

            <div
              className="trust-card"
              key={index}
            >

              <div className="trust-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs