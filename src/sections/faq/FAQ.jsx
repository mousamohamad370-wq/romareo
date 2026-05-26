import './FAQ.scss'

const faqs = [
  {
    question: 'كم تستغرق عملية تنفيذ الطلب؟',
    answer:
      'غالبًا يتم تنفيذ الطلبات خلال دقائق بعد تأكيد الدفع.'
  },

  {
    question: 'هل الدفع آمن؟',
    answer:
      'نعم، جميع عمليات الدفع تتم يدويًا مع مراجعة كاملة لكل عملية.'
  },

  {
    question: 'كيف أتواصل مع الدعم؟',
    answer:
      'يمكنك التواصل معنا عبر واتساب في أي وقت.'
  },

  {
    question: 'هل الخدمات مضمونة؟',
    answer:
      'نعم، جميع خدماتنا موثوقة ومجربة.'
  }
]

function FAQ() {
  return (
    <section className="faq section">

      <div className="container">

        <div className="section-title">

          <h2>
            الأسئلة الشائعة
          </h2>

          <p>
            كل ما تحتاج معرفته قبل الطلب
          </p>

        </div>

        <div className="faq-wrapper">

          {faqs.map((item, index) => (

            <div
              className="faq-item"
              key={index}
            >

              <h3>
                {item.question}
              </h3>

              <p>
                {item.answer}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default FAQ