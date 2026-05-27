import './CheckoutDrawer.scss'

import {
  FiX,
  FiCreditCard,
  FiAlertCircle,
  FiCheckCircle,
  FiArrowLeft
} from 'react-icons/fi'

import {
  useState
} from 'react'

import {
  Link
} from 'react-router-dom'

/* TOAST */

import toast
from 'react-hot-toast'

/* WALLET */

import {
  useWallet
} from '../../context/WalletContext'

function CheckoutDrawer({
  open,
  setOpen,
  service,
  quantity,
  totalPrice
}) {

  const {
    balance,
    purchaseService
  } = useWallet()

  const [ordered, setOrdered] =
    useState(false)

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  /* CHECK BALANCE */

  const enoughBalance =
    balance >= totalPrice

  /* HANDLE ORDER */

  const handleOrder = () => {

    /* PREVENT MULTIPLE CLICKS */

    if (loading) return

    /* VALIDATION */

    if (!enoughBalance) {

      toast.error(
        'الرصيد غير كافي'
      )

      return
    }

    setLoading(true)

    setError('')

    setTimeout(() => {

      const result =
        purchaseService(
          service,
          quantity,
          totalPrice
        )

      /* ERROR */

      if (!result.success) {

        setError(result.message)

        toast.error(
          result.message
        )

        setLoading(false)

        return

      }

      /* SUCCESS */

      toast.success(
        'تم تنفيذ الطلب بنجاح'
      )

      setOrdered(true)

      setLoading(false)

      /* AUTO CLOSE */

      setTimeout(() => {

        setOpen(false)

      }, 2500)

    }, 1000)

  }

  return (

    <div
      className={`checkout-overlay ${
        open ? 'active' : ''
      }`}
    >

      {/* BACKDROP */}

      <div
        className="checkout-backdrop"

        onClick={() =>
          setOpen(false)
        }
      ></div>

      {/* DRAWER */}

      <div
        className={`checkout-drawer ${
          open ? 'active' : ''
        }`}
      >

        {/* CLOSE */}

        <button
          className="drawer-close"

          onClick={() =>
            setOpen(false)
          }
        >

          <FiX />

        </button>

        {/* SUCCESS */}

        {ordered ? (

          <div className="checkout-success">

            <div className="success-icon">

              <FiCheckCircle />

            </div>

            <h2>
              تم إرسال الطلب
            </h2>

            <p>
              تم خصم الرصيد وإرسال
              الطلب بنجاح، يمكنك
              متابعة حالة الطلب الآن.
            </p>

            <Link to="/orders">

              متابعة الطلبات

              <FiArrowLeft />

            </Link>

          </div>

        ) : (

          <>

            {/* TOP */}

            <div className="checkout-top">

              <h2>
                تأكيد الطلب
              </h2>

              <p>
                راجع تفاصيل الطلب قبل التأكيد
              </p>

            </div>

            {/* SERVICE */}

            <div className="checkout-service">

              <img
                src={service.image}
                alt={service.title}
              />

              <div>

                <span>
                  {service.category}
                </span>

                <h3>
                  {service.title}
                </h3>

              </div>

            </div>

            {/* SUMMARY */}

            <div className="checkout-summary">

              <div>

                <span>
                  السعر
                </span>

                <strong>
                  ${service.price}
                </strong>

              </div>

              <div>

                <span>
                  الكمية
                </span>

                <strong>
                  {quantity}
                </strong>

              </div>

              <div className="total-row">

                <span>
                  الإجمالي
                </span>

                <strong>
                  ${totalPrice}
                </strong>

              </div>

            </div>

            {/* WALLET */}

            <div
              className={`wallet-check ${
                enoughBalance
                  ? 'success'
                  : 'danger'
              }`}
            >

              <div>

                <FiCreditCard />

                <span>
                  الرصيد الحالي
                </span>

              </div>

              <strong>

                ${balance}

              </strong>

            </div>

            {/* ERROR */}

            {(!enoughBalance || error) && (

              <div className="balance-error">

                <FiAlertCircle />

                <div>

                  <h4>
                    الرصيد غير كافي
                  </h4>

                  <p>

                    {error ||
                      'قم بإضافة رصيد لإكمال الطلب'}

                  </p>

                </div>

              </div>

            )}

            {/* ACTIONS */}

            <div className="checkout-actions">

              {!enoughBalance ? (

                <Link to="/wallet">

                  شحن الرصيد

                </Link>

              ) : (

                <button
                  onClick={handleOrder}

                  disabled={loading}
                >

                  {loading
                    ? 'جاري تنفيذ الطلب...'
                    : 'تأكيد الطلب'
                  }

                </button>

              )}

            </div>

          </>

        )}

      </div>

    </div>
  )
}

export default CheckoutDrawer