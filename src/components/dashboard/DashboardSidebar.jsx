import {
  FiHome,
  FiCreditCard,
  FiPackage,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
  FiGrid
} from 'react-icons/fi'

import {
  NavLink,
  useNavigate
} from 'react-router-dom'

import {
  useState,
  useEffect
} from 'react'

/* TOAST */

import toast
from 'react-hot-toast'

/* AUTH */

import {
  useAuth
} from '../../context/AuthContext'

function DashboardSidebar() {

  const navigate = useNavigate()

  const {
    user,
    logout
  } = useAuth()

  const [open, setOpen] =
    useState(false)

  /* PREVENT BODY SCROLL */

  useEffect(() => {

    if (open) {

      document.body.style.overflow =
        'hidden'

    } else {

      document.body.style.overflow =
        'auto'

    }

    return () => {

      document.body.style.overflow =
        'auto'

    }

  }, [open])

  /* CLOSE ON RESIZE */

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth > 992) {

        setOpen(false)

      }

    }

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {

      window.removeEventListener(
        'resize',
        handleResize
      )

    }

  }, [])

  /* LINKS */

  const links = [

    {
      title: 'الرئيسية',
      icon: <FiHome />,
      path: '/'
    },

    {
      title: 'المتجر',
      icon: <FiGrid />,
      path: '/marketplace'
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

  /* LOGOUT */

  const handleLogout = async () => {

    try {

      /* CLOSE MENU */

      setOpen(false)

      /* FIREBASE LOGOUT */

      await logout()

      /* TOAST */

      toast.success(
        'تم تسجيل الخروج بنجاح'
      )

      /* REDIRECT */

      setTimeout(() => {

        navigate('/login')

      }, 400)

    } catch (error) {

      console.log(error)

      toast.error(
        'حدث خطأ أثناء تسجيل الخروج'
      )

    }

  }

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

          <div
            className="sidebar-logo"

            onClick={() => {

              navigate('/')

              setOpen(false)

            }}

            style={{
              cursor: 'pointer'
            }}
          >

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

        {/* USER CARD */}

        <div className="sidebar-user-card">

          <div className="user-avatar">

            {user?.email
              ?.charAt(0)
              ?.toUpperCase() || 'U'
            }

          </div>

          <div>

            <h4>

              {user?.email
                ?.split('@')[0] ||
                'مستخدم'}

            </h4>

            <span>

              ID:
              {' '}
              {user?.uid
                ?.slice(0, 8) || '---'}

            </span>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="sidebar-bottom">

          <button
            onClick={handleLogout}
          >

            <FiLogOut />

            تسجيل الخروج

          </button>

        </div>

      </aside>

    </>
  )
}

export default DashboardSidebar