import './Hero.scss'

import {
  FiSearch,
  FiShield,
  FiZap,
  FiTrendingUp
} from 'react-icons/fi'

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <div className="hero-badge">
            منصة خدمات رقمية موثوقة وسريعة
          </div>

          <h1>
            أفضل متجر عربي للخدمات الرقمية
            والشحن الفوري
          </h1>

          <p>
            اشحن ألعاب، بطاقات رقمية، اشتراكات،
            خدمات سوشال ميديا، ChatGPT Plus،
            وأرقام أجنبية بسهولة وأمان كامل.
          </p>

          {/* SEARCH */}

          <div className="hero-search">

            <FiSearch />

            <input
              type="text"
              placeholder="ابحث عن خدمة أو لعبة..."
            />

            <button>
              بحث
            </button>

          </div>

          {/* CTA */}

          <div className="hero-buttons">

            <button className="primary-btn">
              ابدأ الآن
            </button>

            <button className="secondary-btn">
              تصفح الخدمات
            </button>

          </div>

          {/* FEATURES */}

          <div className="hero-features">

            <div className="feature-item">
              <FiShield />
              <span>دفع آمن</span>
            </div>

            <div className="feature-item">
              <FiZap />
              <span>تنفيذ سريع</span>
            </div>

            <div className="feature-item">
              <FiTrendingUp />
              <span>خدمات مضمونة</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-cards">

          <div className="service-card large">

            <div className="card-top">
              <span>الأكثر طلبًا</span>
            </div>

            <h3>شحن PUBG UC</h3>

            <p>
              شحن فوري وآمن لجميع الباقات
            </p>

            <button>
              اطلب الآن
            </button>

          </div>

          <div className="mini-cards">

            <div className="service-card">
              <h3>ChatGPT Plus</h3>
              <p>تفعيل سريع وآمن</p>
            </div>

            <div className="service-card">
              <h3>Netflix</h3>
              <p>اشتراكات أصلية</p>
            </div>

          </div>

        </div>

      </div>

      {/* BACKGROUND BLUR */}

      <div className="hero-blur blur-1"></div>
      <div className="hero-blur blur-2"></div>

    </section>
  )
}

export default Hero