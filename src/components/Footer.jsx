import { Link } from 'react-router-dom'

const COURSES = [
  ['seo', 'SEO'],
  ['digital-marketing', 'Digital Marketing'],
  ['ai', 'Artificial Intelligence'],
  ['full-stack', 'Full Stack Web Dev'],
  ['cyber', 'Cyber Security'],
  ['data-analytics', 'Data Analytics'],
  ['cloud', 'Cloud Computing'],
  ['graphic', 'Graphic Designing'],
]

export default function Footer() {
  return (
    <footer style={{ background: '#0E1702', color: 'rgba(255,255,255,0.65)' }}>
      
      {/* Main Footer Content — Full Width */}
      <div className="w-full px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg"
                  style={{ background: 'linear-gradient(135deg,#6AAD12,#8DE718)' }}>
                  T
                </div>
                <div>
                  <div className="font-black text-lg text-white">Tecstem</div>
                  <div className="text-[9px] font-bold tracking-widest uppercase -mt-0.5" style={{ color: '#8DE718' }}>
                    TECHNOLOGIES
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/40 max-w-xs">
                Pakistan's No.1 IT Training Institute offering professional short courses.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com/share/1895Q8Y2Fg/" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(141,231,24,.08)', border: '1px solid rgba(141,231,24,.15)' }}>
                  <svg className="w-4 h-4" fill="currentColor" style={{ color: '#8DE718' }} viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/tecstemtechnologies" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(141,231,24,.08)', border: '1px solid rgba(141,231,24,.15)' }}>
                  <svg className="w-4 h-4" fill="currentColor" style={{ color: '#8DE718' }} viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Courses Column */}
            <div>
              <h4 className="text-xs font-black text-white mb-5 uppercase tracking-wider">Courses</h4>
              <ul className="space-y-2">
                {COURSES.map(([id, label]) => (
                  <li key={id}>
                    <Link to={`/course/${id}`}
                      className="text-sm transition-colors duration-200 hover:text-[#8DE718]"
                      style={{ color: 'rgba(255,255,255,.5)' }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-xs font-black text-white mb-5 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm transition-colors duration-200 hover:text-[#8DE718]" style={{ color: 'rgba(255,255,255,.5)' }}>Home</Link></li>
                <li><Link to="/about" className="text-sm transition-colors duration-200 hover:text-[#8DE718]" style={{ color: 'rgba(255,255,255,.5)' }}>About Us</Link></li>
                {/* Contact Us link goes to form page */}
                <li><Link to="/contact" className="text-sm transition-colors duration-200 hover:text-[#8DE718]" style={{ color: 'rgba(255,255,255,.5)' }}>Contact Us</Link></li>
                <li><Link to="/courses" className="text-sm transition-colors duration-200 hover:text-[#8DE718]" style={{ color: 'rgba(255,255,255,.5)' }}>All Courses</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-xs font-black text-white mb-5 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start text-sm" style={{ color: 'rgba(255,255,255,.5)' }}>
                  <span className="shrink-0">📞</span> 0300-8467836
                </li>
                <li className="flex gap-2 items-start text-sm" style={{ color: 'rgba(255,255,255,.5)' }}>
                  <span className="shrink-0">✉️</span> info@tecstem.com
                </li>
                <li className="flex gap-2 items-start text-sm" style={{ color: 'rgba(255,255,255,.5)' }}>
                  <span className="shrink-0">🕐</span> Mon-Sat 9AM-9PM
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Divider — Full Width */}
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div style={{ borderTop: '1px solid rgba(141,231,24,.1)' }}></div>
      </div>

      {/* Bottom Bar — Full Width */}
      <div className="w-full px-6 md:px-10 lg:px-16 py-6 text-center text-xs" style={{ color: 'rgba(255,255,255,.3)' }}>
        <p>
          Made with <span className="text-red-400 inline-block animate-pulse">❤️</span> by 
          <span className="font-semibold mx-1" style={{ color: '#8DE718' }}>Mahak</span> 
          | © 2025 Tecstem Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}