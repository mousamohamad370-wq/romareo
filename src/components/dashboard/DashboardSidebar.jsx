import {
  FiHome,
  FiCreditCard,
  FiPackage,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX
} from 'react-icons/fi'

import {
  NavLink
} from 'react-router-dom'

import {
  useState
} from 'react'

function DashboardSidebar() {

  const [open, setOpen] =
    useState(false)

  const links = [
    {
      title: 'الرئيسية',
      icon: <FiHome />,
      path: '/'
    },

    {
      title: 'المحفظة',
      icon: <FiCreditCard />,
      path: '/wallet'
    },

    {
      title: 'الطلبات',
      icon: <FiPackage />,
      path: '/orders'
    },

    {
      title: 'الملف الشخصي',
      icon: <FiUser />,
      path: '/profile'
    }
  ]

  return (

    <>

      {/* MOBILE BUTTON */}

      <button
        className="dashboard-mobile-btn"

        onClick={() =>
          setOpen(!open)
        }
      >

        {open
          ? <FiX />
          : <FiMenu />
        }

      </button>

      {/* OVERLAY */}

      <div
        className={`dashboard-overlay ${
          open ? 'active' : ''
        }`}

        onClick={() =>
          setOpen(false)
        }
      ></div>

      {/* SIDEBAR */}

      <aside
        className={`dashboard-sidebar ${
          open ? 'active' : ''
        }`}
      >

        {/* TOP */}

        <div className="sidebar-top">

          <div className="sidebar-logo">

            <span>
              R
            </span>

            <h3>
              Romario
            </h3>

          </div>

        </div>

        {/* NAVIGATION */}

        <nav className="sidebar-links">

          {links.map((link, index) => (

            <NavLink
              key={index}

              to={link.path}

              onClick={() =>
                setOpen(false)
              }

              className={({ isActive }) =>
                isActive
                  ? 'active'
                  : ''
              }
            >

              {link.icon}

              <span>
                {link.title}
              </span>

            </NavLink>

          ))}

        </nav>

        {/* BOTTOM */}

        <div className="sidebar-bottom">

          <button>

            <FiLogOut />

            تسجيل الخروج

          </button>

        </div>

      </aside>

    </>
  )
}

export default DashboardSidebar