import './Dashboard.scss'

import {
  FiPackage,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiArrowLeft
} from 'react-icons/fi'

const orders = [
  {
    id: '#1025',
    service: 'شحن PUBG UC',
    price: '$15',
    status: 'completed',
    date: 'منذ ساعتين'
  },

  {
    id: '#1024',
    service: 'ChatGPT Plus',
    price: '$20',
    status: 'processing',
    date: 'اليوم'
  },

  {
    id: '#1023',
    service: 'Netflix Premium',
    price: '$8',
    status: 'rejected',
    date: 'أمس'
  }
]

function OrdersContent() {

  const statusData = {
    completed: {
      text: 'مكتمل',
      icon: <FiCheckCircle />
    },

    processing: {
      text: 'قيد التنفيذ',
      icon: <FiClock />
    },

    rejected: {
      text: 'مرفوض',
      icon: <FiXCircle />
    }
  }

  return (

    <section className="dashboard-page section">

      <div className="container">

        {/* HEADER */}

        <div className="dashboard-header">

          <div>

            <h1>
              الطلبات
            </h1>

            <p>
              متابعة جميع الطلبات والخدمات
            </p>

          </div>

        </div>

        {/* ORDERS LIST */}

        <div className="dashboard-box">

          <div className="box-top">

            <h3>
              آخر الطلبات
            </h3>

          </div>

          <div className="orders-list">

            {orders.map(order => (

              <div
                className="order-item"
                key={order.id}
              >

                {/* LEFT */}

                <div className="order-left">

                  <div className="order-icon">

                    <FiPackage />

                  </div>

                  <div className="order-info">

                    <h4>
                      {order.service}
                    </h4>

                    <span>
                      رقم الطلب:
                      {' '}
                      {order.id}
                    </span>

                  </div>

                </div>

                {/* CENTER */}

                <div className="order-date">

                  {order.date}

                </div>

                {/* RIGHT */}

                <div className="order-right">

                  <strong>
                    {order.price}
                  </strong>

                  <div
                    className={`order-status ${
                      order.status
                    }`}
                  >

                    {statusData[
                      order.status
                    ].icon}

                    {
                      statusData[
                        order.status
                      ].text
                    }

                  </div>

                  <button>

                    التفاصيل

                    <FiArrowLeft />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default OrdersContent