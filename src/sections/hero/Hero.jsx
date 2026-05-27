import './Hero.scss'

import {
  FiSearch,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiArrowLeft,
  FiCheckCircle
} from 'react-icons/fi'

import { motion }
from 'framer-motion'

import {
  useNavigate
} from 'react-router-dom'

function Hero() {

  const navigate = useNavigate()

  return (

    <section className="hero">

      {/* BACKGROUND EFFECTS */}

      <div className="hero-grid"></div>

      <div className="hero-blur blur-1"></div>

      <div className="hero-blur blur-2"></div>

      <div className="hero-blur blur-3"></div>

      <div className="container hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7
          }}
        >

          {/* BADGE */}

          <div className="hero-badge">

            <FiCheckCircle />

            منصة رقمية موثوقة وآمنة

          </div>

          {/* TITLE */}

          <h1>

            أفضل متجر عربي
            للخدمات الرقمية
            والشحن الفوري

          </h1>

          {/* DESCRIPTION */}

          <p>

            اشحن ألعاب، بطاقات رقمية،
            اشتراكات، خدمات سوشال ميديا،
            ChatGPT Plus، وأرقام أجنبية
            بسهولة وأمان كامل.

          </p>

          {/* SEARCH */}

          <div className="hero-search">

            <div className="search-input">

              <FiSearch />

              <input
                type="text"
                placeholder="ابحث عن خدمة أو لعبة..."
              />

            </div>

            <button
              onClick={() =>
                navigate('/marketplace')
              }
            >

              بحث

            </button>

          </div>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <button
              className="primary-btn"

              onClick={() =>
                navigate('/marketplace')
              }
            >

              ابدأ الآن

              <FiArrowLeft />

            </button>

            <button
              className="secondary-btn"

              onClick={() =>
                navigate('/marketplace')
              }
            >

              تصفح الخدمات

            </button>

          </div>

          {/* FEATURES */}

          <div className="hero-features">

            <div className="feature-item">

              <FiShield />

              <span>
                دفع آمن
              </span>

            </div>

            <div className="feature-item">

              <FiZap />

              <span>
                تنفيذ سريع
              </span>

            </div>

            <div className="feature-item">

              <FiTrendingUp />

              <span>
                خدمات مضمونة
              </span>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="hero-cards"

          initial={{
            opacity: 0,
            x: 50
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.8
          }}
        >

          {/* MAIN CARD */}

          <motion.div
            className="service-card large floating-card"

            animate={{
              y: [0, -12, 0]
            }}

            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >

            <div className="card-top">

              <span>
                الأكثر طلبًا
              </span>

            </div>

            <h3>
              شحن PUBG UC
            </h3>

            <p>
              شحن فوري وآمن لجميع الباقات
              وبأفضل الأسعار.
            </p>

            <div className="hero-card-price">

              يبدأ من

              <strong>
                $5
              </strong>

            </div>

            <button
              onClick={() =>
                navigate('/service/1')
              }
            >

              اطلب الآن

            </button>

          </motion.div>

          {/* MINI CARDS */}

          <div className="mini-cards">

            <motion.div
              className="service-card mini floating-card"

              animate={{
                y: [0, 10, 0]
              }}

              transition={{
                duration: 5,
                repeat: Infinity
              }}

              onClick={() =>
                navigate('/service/2')
              }

              style={{
                cursor: 'pointer'
              }}
            >

              <h3>
                ChatGPT Plus
              </h3>

              <p>
                تفعيل سريع وآمن
              </p>

            </motion.div>

            <motion.div
              className="service-card mini floating-card"

              animate={{
                y: [0, -10, 0]
              }}

              transition={{
                duration: 6,
                repeat: Infinity
              }}

              onClick={() =>
                navigate('/service/3')
              }

              style={{
                cursor: 'pointer'
              }}
            >

              <h3>
                Netflix Premium
              </h3>

              <p>
                اشتراكات أصلية
              </p>

            </motion.div>

          </div>

          {/* FLOATING INFO */}

          <motion.div
            className="floating-info"

            animate={{
              x: [0, 10, 0]
            }}

            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >

            <strong>
              +15K
            </strong>

            <span>
              طلب مكتمل
            </span>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero