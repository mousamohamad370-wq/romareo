import './Dashboard.scss'

import {
  FiCreditCard,
  FiArrowDownLeft,
  FiArrowUpRight,
  FiPlusCircle,
  FiCheckCircle
} from 'react-icons/fi'

import {
  useState
} from 'react'

/* MODAL */

import AddBalanceModal
from '../../components/modals/AddBalanceModal'

/* WALLET */

import {
  useWallet
} from '../../context/WalletContext'

function WalletContent() {

  const [openModal, setOpenModal] =
    useState(false)

  const {
    balance,
    transactions
  } = useWallet()

  /* TOTALS */

  const totalDeposits =
    transactions
      .filter(
        item =>
          item.type === 'deposit'
      )
      .reduce(
        (acc, item) =>
          acc +
          Number(
            item.amount.replace(
              /[^0-9.-]+/g,
              ''
            )
          ),
        0
      )

  const totalPurchases =
    transactions
      .filter(
        item =>
          item.type === 'purchase'
      )
      .reduce(
        (acc, item) =>
          acc +
          Math.abs(
            Number(
              item.amount.replace(
                /[^0-9.-]+/g,
                ''
              )
            )
          ),
        0
      )

  return (

    <>

      {/* MODAL */}

      <AddBalanceModal
        open={openModal}
        setOpen={setOpenModal}
      />

      <section className="dashboard-page">

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

          <button
            className="dashboard-btn"

            onClick={() =>
              setOpenModal(true)
            }
          >

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

                ${balance.toFixed(2)}

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

                ${totalDeposits}

              </strong>

            </div>

            <div>

              <small>
                إجمالي الطلبات
              </small>

              <strong>

                ${totalPurchases}

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

          {/* EMPTY */}

          {transactions.length === 0 ? (

            <div className="empty-transactions">

              <p>
                لا توجد عمليات حتى الآن
              </p>

            </div>

          ) : (

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

          )}

        </div>

      </section>

    </>

  )
}

export default WalletContent