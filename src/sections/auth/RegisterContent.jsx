import './Auth.scss'

import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiArrowLeft
} from 'react-icons/fi'

import {
  Link,
  useNavigate
} from 'react-router-dom'

import {
  useState
} from 'react'

/* TOAST */

import toast
from 'react-hot-toast'

/* AUTH */

import {
  useAuth
} from '../../context/AuthContext'

/* UI */

import Button
from '../../components/ui/Button'

import Input
from '../../components/ui/Input'

function RegisterContent() {

  const navigate = useNavigate()

  const {
    login
  } = useAuth()

  const [loading, setLoading] =
    useState(false)

  /* FORM STATE */

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      phone: '',
      password: ''
    })

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    })

  }

  /* HANDLE REGISTER */

  const handleRegister = (e) => {

    e.preventDefault()

    /* VALIDATION */

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {

      toast.error(
        'يرجى تعبئة جميع الحقول'
      )

      return
    }

    setLoading(true)

    setTimeout(() => {

      /* MOCK USER */

      const userData = {

        id:
          'RM-' +
          Math.floor(
            100000 +
            Math.random() * 900000
          ),

        name: formData.name,

        email: formData.email,

        phone: formData.phone,

        wallet: 0
      }

      /* LOGIN */

      login(userData)

      /* SUCCESS */

      toast.success(
        'تم إنشاء الحساب بنجاح'
      )

      setLoading(false)

      setTimeout(() => {

        navigate('/profile')

      }, 400)

    }, 1500)

  }

  return (

    <section className="auth-page">

      {/* BACKGROUND */}

      <div className="auth-blur blur-1"></div>
      <div className="auth-blur blur-2"></div>

      <div className="container">

        <div className="auth-wrapper">

          {/* LEFT SIDE */}

          <div className="auth-side">

            <div className="auth-badge">
              انضم إلى Romario
            </div>

            <h1>
              أنشئ حسابك
              وابدأ باستخدام
              أفضل الخدمات الرقمية
            </h1>

            <p>
              سجل الآن للوصول إلى
              خدمات الشحن، الاشتراكات،
              الرصيد، والطلبات بسهولة كاملة.
            </p>

            <div className="auth-features">

              <div>
                ✓ إنشاء حساب مجاني
              </div>

              <div>
                ✓ حماية كاملة للبيانات
              </div>

              <div>
                ✓ واجهة سهلة وسريعة
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="auth-card">

            <div className="auth-card-top">

              <h2>
                إنشاء حساب
              </h2>

              <p>
                أدخل معلوماتك للبدء
              </p>

            </div>

            {/* FORM */}

            <form
              className="auth-form"

              onSubmit={handleRegister}
            >

              {/* NAME */}

              <Input
                label="الاسم الكامل"

                type="text"

                name="name"

                placeholder="الاسم الكامل"

                required={true}

                value={formData.name}

                onChange={handleChange}

                icon={<FiUser />}
              />

              {/* EMAIL */}

              <Input
                label="البريد الإلكتروني"

                type="email"

                name="email"

                placeholder="example@email.com"

                required={true}

                value={formData.email}

                onChange={handleChange}

                icon={<FiMail />}
              />

              {/* PHONE */}

              <Input
                label="رقم الهاتف"

                type="text"

                name="phone"

                placeholder="+961 XX XXX XXX"

                required={true}

                value={formData.phone}

                onChange={handleChange}

                icon={<FiPhone />}
              />

              {/* PASSWORD */}

              <Input
                label="كلمة المرور"

                type="password"

                name="password"

                placeholder="********"

                required={true}

                value={formData.password}

                onChange={handleChange}

                icon={<FiLock />}
              />

              {/* BUTTON */}

              <Button
                type="submit"

                variant="primary"

                size="lg"

                fullWidth={true}

                disabled={loading}

                className="auth-btn"

                icon={
                  !loading &&
                  <FiArrowLeft />
                }
              >

                {loading
                  ? 'جاري إنشاء الحساب...'
                  : 'إنشاء الحساب'
                }

              </Button>

            </form>

            {/* FOOTER */}

            <div className="auth-footer">

              لديك حساب بالفعل؟

              <Link to="/login">

                تسجيل الدخول

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default RegisterContent