import './Dashboard.scss'

import {
  FiCreditCard,
  FiArrowDownLeft,
  FiArrowUpRight,
  FiPlusCircle,
  FiCheckCircle
} from 'react-icons/fi'

const transactions = [
  {
    id: 1,
    type: 'deposit',
    title: 'إضافة رصيد',
    amount: '+$50',
    status: 'مكتملة',
    date: 'منذ ساعتين'
  },

  {
    id: 2,
    type: 'purchase',
    title: 'شراء ChatGPT Plus',
    amount: '-$20',
    status: 'مكتملة',
    date: 'اليوم'
  },

  {
    id: 3,
    type: 'deposit',
    title: 'إضافة رصيد',
    amount: '+$30',
    status: 'قيد المراجعة',
    date: 'أمس'
  }
]

function WalletContent() {

  return (

    <section className="dashboard-page section">

      <div className="container">

        {/* HEADER */}

        <div className="dashboard-header">

          <div>

            <h1>
              المحفظة
            </h1>

            <p>
              إدارة الرصيد والعمليات المالية
            </p>

          </div>

          <button className="dashboard-btn">

            <FiPlusCircle />

            إضافة رصيد

          </button>

        </div>

        {/* BALANCE CARD */}

        <div className="balance-card">

          <div className="balance-top">

            <div>

              <span>
                الرصيد الحالي
              </span>

              <h2>
                $120.00
              </h2>

            </div>

            <div className="balance-icon">

              <FiCreditCard />

            </div>

          </div>

          <div className="balance-stats">

            <div>

              <small>
                إجمالي الإيداع
              </small>

              <strong>
                $350
              </strong>

            </div>

            <div>

              <small>
                إجمالي الطلبات
              </small>

              <strong>
                $230
              </strong>

            </div>

          </div>

        </div>

        {/* TRANSACTIONS */}

        <div className="dashboard-box">

          <div className="box-top">

            <h3>
              آخر العمليات
            </h3>

          </div>

          <div className="transactions-list">

            {transactions.map(item => (

              <div
                className="transaction-item"
                key={item.id}
              >

                {/* ICON */}

                <div
                  className={`transaction-icon ${
                    item.type
                  }`}
                >

                  {item.type === 'deposit'
                    ? <FiArrowDownLeft />
                    : <FiArrowUpRight />
                  }

                </div>

                {/* INFO */}

                <div className="transaction-info">

                  <h4>
                    {item.title}
                  </h4>

                  <span>
                    {item.date}
                  </span>

                </div>

                {/* STATUS */}

                <div className="transaction-status">

                  <strong>
                    {item.amount}
                  </strong>

                  <small>

                    <FiCheckCircle />

                    {item.status}

                  </small>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default WalletContent