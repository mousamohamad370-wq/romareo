import './Dashboard.scss'

import {
  FiPackage,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiArrowLeft
} from 'react-icons/fi'

/* WALLET */

import {
  useWallet
} from '../../context/WalletContext'

/* UI */

import EmptyState
from '../../components/ui/EmptyState'

import Button
from '../../components/ui/Button'

function OrdersContent() {

  const {
    orders
  } = useWallet()

  /* STATUS DATA */

  const statusData = {

    'قيد التنفيذ': {
      text: 'قيد التنفيذ',
      icon: <FiClock />,
      className: 'processing'
    },

    'مكتملة': {
      text: 'مكتمل',
      icon: <FiCheckCircle />,
      className: 'completed'
    },

    'مرفوض': {
      text: 'مرفوض',
      icon: <FiXCircle />,
      className: 'rejected'
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

        {/* ORDERS */}

        <div className="dashboard-box">

          <div className="box-top">

            <h3>
              آخر الطلبات
            </h3>

          </div>

          {/* EMPTY */}

          {orders.length === 0 ? (

            <EmptyState
              icon={<FiPackage />}

              title="لا توجد طلبات حتى الآن"

              description="
              قم بطلب خدمة لتظهر
              جميع الطلبات هنا
              "

              action={

                <Button
                  variant="primary"
                  size="md"
                >

                  استكشف الخدمات

                </Button>

              }
            />

          ) : (

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
                        {order.serviceTitle}
                      </h4>

                      <span>

                        رقم الطلب:
                        {' '}
                        #{order.id}

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

                      ${order.totalPrice}

                    </strong>

                    <div
                      className={`order-status ${
                        statusData[
                          order.status
                        ]?.className
                      }`}
                    >

                      {
                        statusData[
                          order.status
                        ]?.icon
                      }

                      {
                        statusData[
                          order.status
                        ]?.text
                      }

                    </div>

                    <Button
                      variant="secondary"
                      size="sm"

                      icon={<FiArrowLeft />}
                    >

                      التفاصيل

                    </Button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </section>
  )
}

export default OrdersContent