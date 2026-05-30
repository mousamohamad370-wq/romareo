import './Categories.scss'

import {
  FiMonitor,
  FiSmartphone,
  FiCreditCard,
  FiGlobe,
  FiPlay,
  FiShoppingBag
} from 'react-icons/fi'

import {
  useNavigate
} from 'react-router-dom'

const categories = [
  {
    icon: <FiPlay />,
    title: 'شحن الألعاب',
    description: 'PUBG - Free Fire - Valorant',
    slug: 'games'
  },

  {
    icon: <FiCreditCard />,
    title: 'البطاقات الرقمية',
    description: 'Google Play - iTunes - Steam',
    slug: 'cards'
  },

  {
    icon: <FiMonitor />,
    title: 'الاشتراكات',
    description: 'Netflix - Shahid - Spotify',
    slug: 'subscriptions'
  },

  {
    icon: <FiGlobe />,
    title: 'خدمات السوشال',
    description: 'TikTok - Instagram - YouTube',
    slug: 'social'
  },

  {
    icon: <FiSmartphone />,
    title: 'أرقام أجنبية',
    description: 'أرقام تفعيل لجميع التطبيقات',
    slug: 'numbers'
  },

  {
    icon: <FiShoppingBag />,
    title: 'خدمات متنوعة',
    description: 'ChatGPT Plus وغيرها',
    slug: 'other'
  }
]

function Categories() {

  const navigate = useNavigate()

  return (

    <section className="categories section">

      <div className="container">

        <div className="section-title">

          <h2>
            تصفح الخدمات بسهولة
          </h2>

          <p>
            جميع الخدمات الرقمية التي تحتاجها بمكان واحد
          </p>

        </div>

        <div className="categories-grid">

          {categories.map((item, index) => (

            <div
              className="category-card"
              key={index}

              onClick={() =>
                navigate(
                  `/category/${item.slug}`
                )
              }

              style={{
                cursor: 'pointer'
              }}
            >

              <div className="category-icon">
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

export default Categories