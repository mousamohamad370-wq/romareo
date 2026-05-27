import './Navbar.scss'

import {
  useEffect,
  useState
} from 'react'

import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiGlobe,
  FiLogOut,
  FiCreditCard
} from 'react-icons/fi'

import {
  motion,
  AnimatePresence
} from 'framer-motion'

import {
  Link,
  NavLink,
  useNavigate
} from 'react-router-dom'

/* AUTH */

import {
  useAuth
} from '../../context/AuthContext'

function Navbar() {

  const navigate = useNavigate()

  const {
    user,
    isAuthenticated,
    logout
  } = useAuth()

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

  /* SCROLL EFFECT */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }

  }, [])

  /* CLOSE MENU ON RESIZE */

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth > 992) {
        setMenuOpen(false)
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

  /* PREVENT BODY SCROLL */

  useEffect(() => {

    if (menuOpen) {
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

  }, [menuOpen])

  /* LOGOUT */

  const handleLogout = () => {

    logout()

    navigate('/login')

    setMenuOpen(false)

  }

  /* LINKS */

  const navLinks = [
    {
      title: 'الرئيسية',
      path: '/'
    },

    {
      title: 'المتجر',
      path: '/marketplace'
    }
  ]

  return (

    <header
      className={`navbar ${
        scrolled ? 'scrolled' : ''
      }`}
    >

      <div className="container navbar-container">

        {/* LOGO */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.5
          }}
        >

          <Link
            to="/"
            className="logo"
          >

            <span>R</span>

            <h3>Romario</h3>

          </Link>

        </motion.div>

        {/* NAV LINKS */}

        <nav className="nav-links">

          {navLinks.map((link, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: -20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: index * 0.08
              }}
            >

              <NavLink
                to={link.path}
              >

                {link.title}

              </NavLink>

            </motion.div>

          ))}

        </nav>

        {/* ACTIONS */}

        <div className="navbar-actions">

          {/* SEARCH */}

          <button
            className="icon-btn"

            onClick={() =>
              navigate('/marketplace')
            }
          >

            <FiSearch />

          </button>

          {/* LANGUAGE */}

          <button className="icon-btn">

            <FiGlobe />

          </button>

          {/* AUTH */}

          {!isAuthenticated ? (

            <button
              className="login-btn"

              onClick={() =>
                navigate('/login')
              }
            >

              <FiUser />

              تسجيل الدخول

            </button>

          ) : (

            <div className="navbar-user">

              <button
                className="wallet-btn"

                onClick={() =>
                  navigate('/wallet')
                }
              >

                <FiCreditCard />

                ${user?.wallet || 0}

              </button>

              <button
                className="profile-btn"

                onClick={() =>
                  navigate('/profile')
                }
              >

                <FiUser />

                {user?.name?.split(' ')[0]}

              </button>

              <button
                className="logout-btn"

                onClick={handleLogout}
              >

                <FiLogOut />

              </button>

            </div>

          )}

          {/* MOBILE BUTTON */}

          <button
            className="menu-btn"

            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen
              ? <FiX />
              : <FiMenu />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-menu"

            initial={{
              opacity: 0,
              y: -20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0,
              y: -20
            }}

            transition={{
              duration: 0.25
            }}
          >

            {navLinks.map((link, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  x: 20
                }}

                animate={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  delay: index * 0.05
                }}
              >

                <NavLink
                  to={link.path}

                  onClick={() =>
                    setMenuOpen(false)
                  }
                >

                  {link.title}

                </NavLink>

              </motion.div>

            ))}

            {/* MOBILE AUTH */}

            {!isAuthenticated ? (

              <button
                className="mobile-login-btn"

                onClick={() => {

                  setMenuOpen(false)

                  navigate('/login')

                }}
              >

                تسجيل الدخول

              </button>

            ) : (

              <div className="mobile-user-menu">

                <button
                  onClick={() => {

                    navigate('/profile')

                    setMenuOpen(false)

                  }}
                >

                  الملف الشخصي

                </button>

                <button
                  onClick={() => {

                    navigate('/wallet')

                    setMenuOpen(false)

                  }}
                >

                  المحفظة

                </button>

                <button
                  onClick={handleLogout}
                >

                  تسجيل الخروج

                </button>

              </div>

            )}

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}

export default Navbar