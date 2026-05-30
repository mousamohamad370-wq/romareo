import './Auth.scss'

import {
  FiMail,
  FiLock,
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

function LoginContent() {

  const navigate = useNavigate()

  const {
    login
  } = useAuth()

  const [loading, setLoading] =
    useState(false)

  /* FORM STATE */

  const [formData, setFormData] =
    useState({
      email: '',
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

  /* HANDLE LOGIN */

  const handleLogin = async (e) => {

    e.preventDefault()

    /* VALIDATION */

    if (
      !formData.email ||
      !formData.password
    ) {

      toast.error(
        'يرجى تعبئة جميع الحقول'
      )

      return
    }

    try {

      setLoading(true)

      /* FIREBASE LOGIN */

      await login(
        formData.email,
        formData.password
      )

      /* SUCCESS */

      toast.success(
        'تم تسجيل الدخول بنجاح'
      )

      /* REDIRECT */

      setTimeout(() => {

        navigate('/profile')

      }, 500)

    } catch (error) {

      console.log(error)

      /* FIREBASE ERRORS */

      if (
        error.code ===
        'auth/user-not-found'
      ) {

        toast.error(
          'الحساب غير موجود'
        )

      } else if (
        error.code ===
        'auth/wrong-password'
      ) {

        toast.error(
          'كلمة المرور غير صحيحة'
        )

      } else if (
        error.code ===
        'auth/invalid-credential'
      ) {

        toast.error(
          'البريد أو كلمة المرور غير صحيحة'
        )

      } else if (
        error.code ===
        'auth/invalid-email'
      ) {

        toast.error(
          'البريد الإلكتروني غير صالح'
        )

      } else {

        toast.error(
          'حدث خطأ أثناء تسجيل الدخول'
        )

      }

    } finally {

      setLoading(false)

    }

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
              منصة رقمية موثوقة
            </div>

            <h1>
              سجل دخولك
              وابدأ باستخدام
              خدمات Romario
            </h1>

            <p>
              ادخل إلى حسابك للوصول
              إلى طلباتك، رصيدك،
              والخدمات الرقمية بسهولة.
            </p>

            <div className="auth-features">

              <div>
                ✓ تنفيذ سريع وآمن
              </div>

              <div>
                ✓ دعم متواصل 24/7
              </div>

              <div>
                ✓ خدمات موثوقة
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="auth-card">

            <div className="auth-card-top">

              <h2>
                تسجيل الدخول
              </h2>

              <p>
                قم بتسجيل الدخول للمتابعة
              </p>

            </div>

            {/* FORM */}

            <form
              className="auth-form"
              onSubmit={handleLogin}
            >

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

              {/* FORGOT */}

              <div className="forgot-password">

                <button type="button">

                  نسيت كلمة المرور؟

                </button>

              </div>

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
                  ? 'جاري تسجيل الدخول...'
                  : 'تسجيل الدخول'
                }

              </Button>

            </form>

            {/* FOOTER */}

            <div className="auth-footer">

              ليس لديك حساب؟

              <Link to="/register">

                إنشاء حساب

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default LoginContent