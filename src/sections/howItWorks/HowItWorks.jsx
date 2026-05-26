import './HowItWorks.scss'

import {
  FiSearch,
  FiCreditCard,
  FiCheckCircle
} from 'react-icons/fi'

const steps = [
  {
    icon: <FiSearch />,
    title: 'اختر الخدمة',
    description:
      'تصفح الخدمات واختر الخدمة المناسبة لك بسهولة.'
  },

  {
    icon: <FiCreditCard />,
    title: 'حوّل الرصيد',
    description:
      'قم بتحويل المبلغ عبر Wish Money وأرسل الإيصال.'
  },

  {
    icon: <FiCheckCircle />,
    title: 'استلم الخدمة',
    description:
      'بعد مراجعة الدفع يتم تنفيذ الطلب بسرعة.'
  }
]

function HowItWorks() {
  return (
    <section className="how-it-works section">

      <div className="container">

        <div className="section-title">

          <h2>
            كيف يعمل الموقع؟
          </h2>

          <p>
            خطوات بسيطة وآمنة للحصول على خدماتك الرقمية
          </p>

        </div>

        <div className="steps-grid">

          {steps.map((step, index) => (

            <div
              className="step-card"
              key={index}
            >

              <div className="step-number">
                0{index + 1}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default HowItWorks