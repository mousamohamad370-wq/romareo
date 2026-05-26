import './Navbar.scss'

import { useState } from 'react'

import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiGlobe
} from 'react-icons/fi'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* LOGO */}
        <div className="logo">
          <span>R</span>
          <h3>Romario</h3>
        </div>

        {/* DESKTOP LINKS */}
        <nav className="nav-links">
          <a href="#">الرئيسية</a>
          <a href="#">الخدمات</a>
          <a href="#">الألعاب</a>
          <a href="#">البطاقات</a>
          <a href="#">تواصل معنا</a>
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

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#">الرئيسية</a>
        <a href="#">الخدمات</a>
        <a href="#">الألعاب</a>
        <a href="#">البطاقات</a>
        <a href="#">تواصل معنا</a>

        <button className="mobile-login-btn">
          تسجيل الدخول
        </button>
      </div>
    </header>
  )
}

export default Navbar