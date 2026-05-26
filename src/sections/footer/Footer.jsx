import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-content">

          <div className="footer-brand">

            <h2>
              Romario
            </h2>

            <p>
              متجر احترافي للخدمات الرقمية والشحن الفوري
            </p>

          </div>

          <div className="footer-links">

            <a href="#">
              الرئيسية
            </a>

            <a href="#">
              الخدمات
            </a>

            <a href="#">
              الدعم
            </a>

            <a href="#">
              تواصل معنا
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Romario - جميع الحقوق محفوظة
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer