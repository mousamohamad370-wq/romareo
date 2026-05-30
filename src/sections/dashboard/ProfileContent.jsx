import './Dashboard.scss'

import {
  FiArrowUpRight,
  FiCreditCard,
  FiPackage,
  FiTrendingUp,
  FiPlusCircle,
  FiClock,
  FiCheckCircle,
  FiMessageCircle,
  FiGrid
} from 'react-icons/fi'

import {
  useNavigate
} from 'react-router-dom'

/* AUTH */

import {
  useAuth
} from '../../context/AuthContext'

/* WALLET */

import {
  useWallet
} from '../../context/WalletContext'

function ProfileContent() {

  const navigate = useNavigate()

  const {
    user
  } = useAuth()

  const {
    balance,
    orders,
    transactions
  } = useWallet()

  const latestOrders =
    orders.slice(0, 3)

  const latestTransactions =
    transactions.slice(0, 3)

  return (

    <section className="dashboard-page">

      {/* HERO */}

      <div className="dashboard-hero">

        <div className="hero-content">

          <span className="hero-badge">

            مرحبًا بعودتك 👋

          </span>

          <h1>

            أهلاً،
            {' '}
            {user?.name}

          </h1>

          <p>

            يمكنك الآن إدارة الطلبات،
            الرصيد، والخدمات الرقمية
            بسهولة كاملة من لوحة التحكم.

          </p>

          <div className="hero-actions">

            <button
              onClick={() =>
                navigate('/marketplace')
              }
            >

              <FiGrid />

              تصفح الخدمات

            </button>

            <button
              className="secondary-btn"

              onClick={() =>
                navigate('/wallet')
              }
            >

              <FiPlusCircle />

              إضافة رصيد

            </button>

          </div>

        </div>

        {/* STATS */}

        <div className="hero-stats">

          <div className="stat-card">

            <div className="stat-icon">

              <FiCreditCard />

            </div>

            <div>

              <span>
                الرصيد الحالي
              </span>

              <h3>
                ${balance}
              </h3>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon">

              <FiPackage />

            </div>

            <div>

              <span>
                إجمالي الطلبات
              </span>

              <h3>
                {orders.length}
              </h3>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon">

              <FiTrendingUp />

            </div>

            <div>

              <span>
                العمليات الأخيرة
              </span>

              <h3>
                {transactions.length}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* GRID */}

      <div className="dashboard-home-grid">

        {/* ORDERS */}

        <div className="dashboard-box">

          <div className="box-top">

            <h3>
              آخر الطلبات
            </h3>

            <button
              onClick={() =>
                navigate('/orders')
              }
            >

              عرض الكل

              <FiArrowUpRight />

            </button>

          </div>

          <div className="dashboard-list">

            {latestOrders.length === 0 ? (

              <div className="dashboard-empty">

                لا توجد طلبات حتى الآن

              </div>

            ) : (

              latestOrders.map(order => (

                <div
                  className="dashboard-list-item"
                  key={order.id}
                >

                  <div>

                    <h4>
                      {order.serviceTitle}
                    </h4>

                    <span>

                      #{order.id}

                    </span>

                  </div>

                  <strong>

                    ${order.totalPrice}

                  </strong>

                </div>

              ))

            )}

          </div>

        </div>

        {/* TRANSACTIONS */}

        <div className="dashboard-box">

          <div className="box-top">

            <h3>
              آخر العمليات
            </h3>

          </div>

          <div className="dashboard-list">

            {latestTransactions.length === 0 ? (

              <div className="dashboard-empty">

                لا توجد عمليات

              </div>

            ) : (

              latestTransactions.map(item => (

                <div
                  className="dashboard-list-item"
                  key={item.id}
                >

                  <div>

                    <h4>
                      {item.title}
                    </h4>

                    <span>

                      {item.date}

                    </span>

                  </div>

                  <strong>

                    {item.amount}

                  </strong>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}

      <div className="dashboard-box quick-actions-box">

        <div className="box-top">

          <h3>
            إجراءات سريعة
          </h3>

        </div>

        <div className="quick-actions-grid">

          <button
            onClick={() =>
              navigate('/wallet')
            }
          >

            <FiPlusCircle />

            إضافة رصيد

          </button>

          <button
            onClick={() =>
              navigate('/marketplace')
            }
          >

            <FiGrid />

            تصفح الخدمات

          </button>

          <button
            onClick={() =>
              navigate('/orders')
            }
          >

            <FiClock />

            الطلبات

          </button>

          <button>

            <FiMessageCircle />

            الدعم الفني

          </button>

        </div>

      </div>

    </section>

  )
}

export default ProfileContent