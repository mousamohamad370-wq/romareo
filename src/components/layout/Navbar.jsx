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
  FiGlobe
} from 'react-icons/fi'

import {
  motion,
  AnimatePresence
} from 'framer-motion'

function Navbar() {

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
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }

  }, [menuOpen])

  /* LINKS */

  const navLinks = [
    'الرئيسية',
    'الخدمات',
    'الألعاب',
    'الاشتراكات',
    'تواصل معنا'
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
          className="logo"

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

          <span>R</span>

          <h3>Romario</h3>

        </motion.div>

        {/* NAV LINKS */}

        <nav className="nav-links">

          {navLinks.map((link, index) => (

            <motion.a
              href="#"
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

              {link}

            </motion.a>

          ))}

        </nav>

        {/* ACTIONS */}

        <div className="navbar-actions">

          <button className="icon-btn">

            <FiSearch />

          </button>

          <button className="icon-btn">

            <FiGlobe />

          </button>

          <button className="login-btn">

            <FiUser />

            تسجيل الدخول

          </button>

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

              <motion.a
                href="#"

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

                onClick={() =>
                  setMenuOpen(false)
                }
              >

                {link}

              </motion.a>

            ))}

            <button
              className="mobile-login-btn"

              onClick={() =>
                setMenuOpen(false)
              }
            >

              تسجيل الدخول

            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}

export default Navbar