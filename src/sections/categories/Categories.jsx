import './Categories.scss'

import {
  FiMonitor,
  FiSmartphone,
  FiCreditCard,
  FiGlobe,
  FiPlay,
  FiShoppingBag
} from 'react-icons/fi'

const categories = [
  {
    icon: <FiPlay />,
    title: 'شحن الألعاب',
    description: 'PUBG - Free Fire - Valorant'
  },

  {
    icon: <FiCreditCard />,
    title: 'البطاقات الرقمية',
    description: 'Google Play - iTunes - Steam'
  },

  {
    icon: <FiMonitor />,
    title: 'الاشتراكات',
    description: 'Netflix - Shahid - Spotify'
  },

  {
    icon: <FiGlobe />,
    title: 'خدمات السوشال',
    description: 'TikTok - Instagram - YouTube'
  },

  {
    icon: <FiSmartphone />,
    title: 'أرقام أجنبية',
    description: 'أرقام تفعيل لجميع التطبيقات'
  },

  {
    icon: <FiShoppingBag />,
    title: 'خدمات متنوعة',
    description: 'ChatGPT Plus وغيرها'
  }
]

function Categories() {
  return (
    <section className="categories section">

      <div className="container">

        {/* TITLE */}

        <div className="section-title">

          <h2>
            تصفح الخدمات بسهولة
          </h2>

          <p>
            جميع الخدمات الرقمية التي تحتاجها بمكان واحد
          </p>

        </div>

        {/* GRID */}

        <div className="categories-grid">

          {categories.map((item, index) => (

            <div
              className="category-card"
              key={index}
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