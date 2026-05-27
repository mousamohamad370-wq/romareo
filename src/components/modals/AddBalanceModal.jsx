import './AddBalanceModal.scss'

import {
  FiX,
  FiDollarSign,
  FiHash,
  FiUser,
  FiMessageCircle,
  FiCheckCircle
} from 'react-icons/fi'

import {
  useState
} from 'react'

/* TOAST */

import toast
from 'react-hot-toast'

/* WALLET */

import {
  useWallet
} from '../../context/WalletContext'

/* AUTH */

import {
  useAuth
} from '../../context/AuthContext'

function AddBalanceModal({
  open,
  setOpen
}) {

  const {
    addBalance
  } = useWallet()

  const {
    user
  } = useAuth()

  const [submitted, setSubmitted] =
    useState(false)

  const [loading, setLoading] =
    useState(false)

  /* FORM */

  const [formData, setFormData] =
    useState({
      amount: '',
      transactionId: ''
    })

  /* CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    })

  }

  /* RESET */

  const resetModal = () => {

    setSubmitted(false)

    setLoading(false)

    setFormData({
      amount: '',
      transactionId: ''
    })

  }

  /* CLOSE */

  const handleClose = () => {

    resetModal()

    setOpen(false)

  }

  /* SUBMIT */

  const handleSubmit = (e) => {

    e.preventDefault()

    /* PREVENT MULTIPLE CLICKS */

    if (loading) return

    /* VALIDATION */

    if (
      !formData.amount ||
      !formData.transactionId
    ) {

      toast.error(
        'يرجى تعبئة جميع الحقول'
      )

      return
    }

    if (
      Number(formData.amount) <= 0
    ) {

      toast.error(
        'أدخل مبلغ صحيح'
      )

      return
    }

    setLoading(true)

    setTimeout(() => {

      /* ADD BALANCE */

      addBalance(
        formData.amount,
        'Wish Money'
      )

      /* SUCCESS */

      toast.success(
        'تم إرسال طلب إضافة الرصيد'
      )

      setLoading(false)

      setSubmitted(true)

      /* AUTO CLOSE */

      setTimeout(() => {

        handleClose()

      }, 2500)

    }, 1200)

  }

  if (!open) return null

  return (

    <div className="balance-modal-overlay">

      <div className="balance-modal">

        {/* CLOSE */}

        <button
          className="modal-close"

          onClick={handleClose}
        >

          <FiX />

        </button>

        {/* SUCCESS */}

        {submitted ? (

          <div className="balance-success">

            <div className="success-icon">

              <FiCheckCircle />

            </div>

            <h2>
              تم إرسال الطلب
            </h2>

            <p>
              تم إرسال طلب إضافة الرصيد
              بنجاح وسيتم مراجعته يدويًا.
            </p>

            <a
              href="https://wa.me/96100000000"
              target="_blank"
              rel="noreferrer"
            >

              <FiMessageCircle />

              التواصل عبر واتساب

            </a>

          </div>

        ) : (

          <>

            {/* TOP */}

            <div className="modal-top">

              <h2>
                إضافة رصيد
              </h2>

              <p>
                قم بتحويل المبلغ عبر
                Wish Money ثم أدخل
                معلومات العملية للمراجعة.
              </p>

            </div>

            {/* FORM */}

            <form
              className="balance-form"

              onSubmit={handleSubmit}
            >

              {/* AMOUNT */}

              <div className="input-group">

                <label>
                  المبلغ
                </label>

                <div className="input-box">

                  <FiDollarSign />

                  <input
                    type="number"

                    name="amount"

                    placeholder="أدخل المبلغ"

                    required

                    value={formData.amount}

                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* TRANSACTION ID */}

              <div className="input-group">

                <label>
                  رقم العملية
                </label>

                <div className="input-box">

                  <FiHash />

                  <input
                    type="text"

                    name="transactionId"

                    placeholder="Transaction ID"

                    required

                    value={
                      formData.transactionId
                    }

                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* USER ID */}

              <div className="input-group">

                <label>
                  User ID
                </label>

                <div className="input-box">

                  <FiUser />

                  <input
                    type="text"

                    value={user?.id || ''}

                    readOnly
                  />

                </div>

              </div>

              {/* INFO */}

              <div className="payment-note">

                <strong>
                  معلومات مهمة:
                </strong>

                <p>
                  بعد التحويل عبر Wish Money،
                  سيتم مراجعة العملية يدويًا
                  وإضافة الرصيد لحسابك.
                </p>

              </div>

              {/* BUTTONS */}

              <div className="modal-actions">

                <button
                  type="button"
                  className="cancel-btn"

                  onClick={handleClose}
                >

                  إلغاء

                </button>

                <button
                  type="submit"
                  className="submit-btn"

                  disabled={loading}
                >

                  {loading
                    ? 'جاري الإرسال...'
                    : 'إرسال الطلب'
                  }

                </button>

              </div>

            </form>

          </>

        )}

      </div>

    </div>

  )
}

export default AddBalanceModal