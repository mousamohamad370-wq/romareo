import './ServiceDetailsContent.scss'

import {
  FiStar,
  FiShield,
  FiZap,
  FiCheckCircle
} from 'react-icons/fi'

import {
  useState
} from 'react'

import {
  useParams,
  Navigate
} from 'react-router-dom'

import CheckoutDrawer from '../../components/checkout/CheckoutDrawer'

import {
  useAuth
} from '../../context/AuthContext'

import services from '../../data/services'

function ServiceDetailsContent() {

  const { id } = useParams()

  const { user } = useAuth()

  const [openCheckout, setOpenCheckout] =
    useState(false)

  const service =
    services.find(
      item =>
        item.id === Number(id)
    )

  if (!service) {
    return <Navigate to="/" />
  }

  const packages =
    service.packages || [
      {
        id: 1,
        name: service.title,
        price: service.price
      }
    ]

  const [selectedPackage, setSelectedPackage] =
    useState(packages[0])

  const totalPrice =
    selectedPackage?.price || 0

  const canPurchase =
    user &&
    (user.balance || 0) > 0

  return (
    <>

      <CheckoutDrawer
        open={openCheckout}
        setOpen={setOpenCheckout}
        service={service}
        quantity={1}
        totalPrice={totalPrice}
      />

      <section className="service-details section">

        <div className="container">

          <div className="details-grid">

            {/* LEFT SIDE */}

            <div className="details-content">

              <div className="details-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              <div className="details-info">

                <div className="details-category">

                  {service.category}

                </div>

                <h1>

                  {service.title}

                </h1>

                <div className="details-rating">

                  <FiStar />

                  <span>
                    {service.rating}
                  </span>

                  <small>
                    ({service.reviews} مراجعة)
                  </small>

                </div>

                <p className="details-description">

                  {service.description}

                </p>

                <div className="details-features">

                  {service.features.map(
                    (feature, index) => (

                      <div
                        key={index}
                        className="feature-box"
                      >

                        <FiCheckCircle />

                        <span>

                          {feature}

                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="purchase-card">

              <div className="purchase-top">

                <h3>

                  اختر الباقة

                </h3>

                <div className="purchase-price">

                  ${totalPrice}

                </div>

              </div>

              {service.category === 'الألعاب' && (

                <div className="form-group">

                  <label>

                    PUBG Player ID

                  </label>

                  <input
                    type="text"
                    placeholder="أدخل ID الحساب"
                  />

                </div>

              )}

              <div className="packages-grid">

                {packages.map(pkg => (

                  <button
                    key={pkg.id}

                    type="button"

                    className={`package-card ${
                      selectedPackage?.id === pkg.id
                        ? 'active'
                        : ''
                    }`}

                    onClick={() =>
                      setSelectedPackage(pkg)
                    }
                  >

                    <strong>

                      {pkg.name}

                    </strong>

                    <span>

                      ${pkg.price}

                    </span>

                  </button>

                ))}

              </div>

              <div className="total-price">

                <span>

                  السعر النهائي

                </span>

                <strong>

                  ${totalPrice}

                </strong>

              </div>

              <button
                className="buy-btn"

                disabled={!canPurchase}

                onClick={() => {

                  if (!canPurchase)
                    return

                  setOpenCheckout(true)

                }}
              >

                {canPurchase
                  ? 'متابعة الطلب'
                  : 'سجل الدخول وأضف رصيد'}

              </button>

              <div className="purchase-features">

                <div>

                  <FiShield />

                  <span>

                    دفع آمن

                  </span>

                </div>

                <div>

                  <FiZap />

                  <span>

                    تنفيذ فوري

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default ServiceDetailsContent