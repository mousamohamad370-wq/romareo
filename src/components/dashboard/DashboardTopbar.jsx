import './DashboardTopbar.scss'

import {
  FiBell,
  FiSearch,
  FiPlus,
  FiCreditCard
} from 'react-icons/fi'

import {
  useNavigate
} from 'react-router-dom'

/* AUTH */

import {
  useAuth
} from '../../context/AuthContext'

/* WALLET */

import {
  useWallet
} from '../../context/WalletContext'

function DashboardTopbar() {

  const navigate = useNavigate()

  const {
    user
  } = useAuth()

  const {
    balance
  } = useWallet()

  return (

    <div className="dashboard-topbar">

      {/* LEFT */}

      <div className="topbar-left">

        <div className="topbar-search">

          <FiSearch />

          <input
            type="text"
            placeholder="ابحث عن خدمة..."
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="topbar-right">

        {/* BALANCE */}

        <button
          className="balance-btn"

          onClick={() =>
            navigate('/wallet')
          }
        >

          <FiCreditCard />

          <span>

            ${balance}

          </span>

        </button>

        {/* ADD BALANCE */}

        <button
          className="add-balance-btn"

          onClick={() =>
            navigate('/wallet')
          }
        >

          <FiPlus />

          إضافة رصيد

        </button>

        {/* NOTIFICATIONS */}

        <button className="icon-btn">

          <FiBell />

          <span className="notification-dot"></span>

        </button>

        {/* USER */}

        <div className="topbar-user">

          <div className="user-avatar">

            {user?.name?.charAt(0) || 'U'}

          </div>

          <div>

            <h4>

              {user?.name || 'User'}

            </h4>

            <span>

              {user?.id || 'RM-000000'}

            </span>

          </div>

        </div>

      </div>

    </div>

  )
}

export default DashboardTopbar