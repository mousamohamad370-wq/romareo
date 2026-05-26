import './PaymentInfo.scss'

import {
  FiShield,
  FiCheck,
  FiMessageCircle
} from 'react-icons/fi'

function PaymentInfo() {
  return (
    <section className="payment-info section">

      <div className="container">

        <div className="payment-wrapper">

          {/* LEFT */}

          <div className="payment-content">

            <div className="payment-badge">
              دفع يدوي وآمن
            </div>

            <h2>
              كيف تتم عملية الدفع؟
            </h2>

            <p>
              جميع عمليات الدفع تتم يدويًا لضمان الأمان الكامل
              ومراجعة كل عملية بشكل دقيق قبل تنفيذ الطلب.
            </p>

            <div className="payment-features">

              <div className="payment-feature">
                <FiCheck />
                تحويل عبر Wish Money
              </div>

              <div className="payment-feature">
                <FiCheck />
                مراجعة يدوية للدفعات
              </div>

              <div className="payment-feature">
                <FiCheck />
                تنفيذ سريع بعد التأكيد
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="payment-card">

            <div className="payment-top">

              <FiShield />

              <span>
                نظام دفع موثوق
              </span>

            </div>

            <div className="payment-steps">

              <div className="pay-step">
                <span>1</span>
                <p>
                  قم بتحويل المبلغ عبر Wish Money
                </p>
              </div>

              <div className="pay-step">
                <span>2</span>
                <p>
                  أرسل صورة الإيصال على WhatsApp
                </p>
              </div>

              <div className="pay-step">
                <span>3</span>
                <p>
                  يتم التأكد من الدفع وإضافة الرصيد
                </p>
              </div>

            </div>

            <button className="whatsapp-btn">

              <FiMessageCircle />

              تواصل عبر واتساب

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default PaymentInfo