import './Auth.scss'

import {
  FiMail,
  FiLock,
  FiArrowLeft
} from 'react-icons/fi'

import {
  Link
} from 'react-router-dom'

function LoginContent() {

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

            <form className="auth-form">

              {/* EMAIL */}

              <div className="input-group">

                <label>
                  البريد الإلكتروني
                </label>

                <div className="input-box">

                  <FiMail />

                  <input
                    type="email"
                    placeholder="example@email.com"
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div className="input-group">

                <label>
                  كلمة المرور
                </label>

                <div className="input-box">

                  <FiLock />

                  <input
                    type="password"
                    placeholder="********"
                  />

                </div>

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="auth-btn"
              >

                تسجيل الدخول

                <FiArrowLeft />

              </button>

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