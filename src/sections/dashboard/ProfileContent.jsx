import './Dashboard.scss'

import {
  FiUser,
  FiMail,
  FiPhone,
  FiCreditCard,
  FiCopy,
  FiCheckCircle,
  FiEdit,
  FiMessageCircle
} from 'react-icons/fi'

function ProfileContent() {

  const user = {
    name: 'محمد أحمد',
    email: 'mohamed@email.com',
    phone: '+961 70 000 000',
    id: 'RM-102548',
    balance: '$120',
    verified: true
  }

  const activities = [
    'تمت إضافة رصيد بقيمة $50',
    'شراء خدمة ChatGPT Plus',
    'تم تنفيذ طلب PUBG UC',
    'تسجيل دخول جديد للحساب'
  ]

  const copyId = () => {
    navigator.clipboard.writeText(
      user.id
    )
  }

  return (

    <section className="dashboard-page section">

      <div className="container">

        {/* HEADER */}

        <div className="dashboard-header">

          <div>

            <h1>
              الملف الشخصي
            </h1>

            <p>
              إدارة معلومات الحساب والرصيد
            </p>

          </div>

          <button className="dashboard-btn">

            <FiEdit />

            تعديل الحساب

          </button>

        </div>

        {/* PROFILE GRID */}

        <div className="profile-grid">

          {/* USER CARD */}

          <div className="profile-card">

            {/* AVATAR */}

            <div className="profile-avatar">

              <FiUser />

            </div>

            {/* NAME */}

            <h2>
              {user.name}
            </h2>

            {/* VERIFIED */}

            <div className="profile-verified">

              <FiCheckCircle />

              حساب موثق

            </div>

            {/* USER ID */}

            <div className="profile-id">

              <span>
                User ID
              </span>

              <strong>
                {user.id}
              </strong>

              <button onClick={copyId}>

                <FiCopy />

              </button>

            </div>

            {/* BALANCE */}

            <div className="profile-balance">

              <span>
                الرصيد الحالي
              </span>

              <h3>
                {user.balance}
              </h3>

            </div>

          </div>

          {/* INFO */}

          <div className="profile-info">

            {/* INFO BOX */}

            <div className="dashboard-box">

              <div className="box-top">

                <h3>
                  معلومات الحساب
                </h3>

              </div>

              <div className="profile-info-list">

                <div className="info-item">

                  <div>

                    <FiMail />

                    <span>
                      البريد الإلكتروني
                    </span>

                  </div>

                  <strong>
                    {user.email}
                  </strong>

                </div>

                <div className="info-item">

                  <div>

                    <FiPhone />

                    <span>
                      رقم الهاتف
                    </span>

                  </div>

                  <strong>
                    {user.phone}
                  </strong>

                </div>

                <div className="info-item">

                  <div>

                    <FiCreditCard />

                    <span>
                      حالة المحفظة
                    </span>

                  </div>

                  <strong>
                    مفعلة
                  </strong>

                </div>

              </div>

            </div>

            {/* ACTIVITY */}

            <div className="dashboard-box">

              <div className="box-top">

                <h3>
                  آخر النشاطات
                </h3>

              </div>

              <div className="activity-list">

                {activities.map(
                  (item, index) => (

                    <div
                      className="activity-item"
                      key={index}
                    >

                      <FiCheckCircle />

                      <span>
                        {item}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* PAYMENT INFO */}

            <div className="dashboard-box">

              <div className="box-top">

                <h3>
                  معلومات الدفع
                </h3>

              </div>

              <div className="payment-info-box">

                <p>
                  لإضافة رصيد إلى حسابك،
                  قم بتحويل المبلغ عبر
                  Wish Money ثم أرسل
                  رقم العملية و User ID
                  عبر واتساب للمراجعة.
                </p>

                <button>

                  <FiMessageCircle />

                  التواصل عبر واتساب

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProfileContent