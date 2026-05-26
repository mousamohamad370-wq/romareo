import './Auth.scss'

import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiArrowLeft
} from 'react-icons/fi'

import {
  Link
} from 'react-router-dom'

function RegisterContent() {

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

            <form className="auth-form">

              {/* NAME */}

              <div className="input-group">

                <label>
                  الاسم الكامل
                </label>

                <div className="input-box">

                  <FiUser />

                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                  />

                </div>

              </div>

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

              {/* PHONE */}

              <div className="input-group">

                <label>
                  رقم الهاتف
                </label>

                <div className="input-box">

                  <FiPhone />

                  <input
                    type="text"
                    placeholder="+961 XX XXX XXX"
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

                إنشاء الحساب

                <FiArrowLeft />

              </button>

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