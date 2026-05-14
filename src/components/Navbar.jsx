import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative text-[15px] ${
      isActive ? 'text-[#6AAD12]' : 'text-gray-700'
    } hover:text-[#6AAD12] transition-all duration-500 font-medium tracking-wide group`;

  const underlineStyle = (isActive) =>
    `absolute -bottom-1 left-0 h-[2px] ${
      isActive ? 'w-full' : 'w-0'
    } bg-[#6AAD12] rounded-full transition-all duration-500 group-hover:w-full`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-[#8DE718]/10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

      {/* soft glow line like hero theme */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#8DE718]/40 to-transparent"></div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-[92px] flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="Tecstem Logo"
            className="w-40 lg:w-48 object-contain transition-all duration-300 hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-12 ml-auto">

          <NavLink to="/" className={linkStyle} end>
            {({ isActive }) => (
              <>
                Home
                <span className={underlineStyle(isActive)} />
              </>
            )}
          </NavLink>

          {/* COURSES */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              to="/courses"
              className="relative flex items-center gap-1 text-[15px] text-gray-700 hover:text-[#6AAD12] transition-all duration-500 font-medium tracking-wide group"
            >
              Courses
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#6AAD12] rounded-full transition-all duration-500 group-hover:w-full" />
            </Link>

            <div
              className={`absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.10)] border border-gray-100 py-3 overflow-hidden z-50 transition-all duration-300 ${
                dropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              {[
                ["SEO", "/course/seo"],
                ["Digital Marketing", "/course/digital-marketing"],
                ["Artificial Intelligence", "/course/ai"],
                ["Full Stack Web Development", "/course/full-stack"],
                ["Cyber Security", "/course/cyber"],
                ["Data Science & Analytics", "/course/data-analytics"],
                ["Cloud Computing", "/course/cloud"],
                ["Graphic Designing", "/course/graphic"],
              ].map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="block px-5 py-3 text-[15px] text-gray-600 hover:bg-[#F4FDE8] hover:text-[#416A0B] transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/about" className={linkStyle}>
            {({ isActive }) => (
              <>
                About Us
                <span className={underlineStyle(isActive)} />
              </>
            )}
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            {({ isActive }) => (
              <>
                Contact Us
                <span className={underlineStyle(isActive)} />
              </>
            )}
          </NavLink>

        </div>

        {/* MOBILE */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;