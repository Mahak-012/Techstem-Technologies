import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CoursesSection from '../components/CoursesSection'
import Footer from '../components/Footer'

const WHY = [
  { i:'👨‍🏫', t:'Expert Instructors',    d:'Industry professionals with 5+ years experience in top tech companies.' },
  { i:'💻', t:'Hands-on Training',       d:'Project-based learning with real-world scenarios and live projects.' },
  { i:'🎓', t:'Job Placement Support',   d:'100% job assistance, resume building and interview preparation.' },
  { i:'🏆', t:'Industry Recognition',    d:"Pakistan's No.1 IT Training Institute with 10,000+ graduates." },
  { i:'📚', t:'Updated Curriculum',      d:'Courses designed for current market demands and latest technologies.' },
  { i:'🆓', t:'100% Free Education',     d:'All IT courses are completely free — no hidden charges, no fees.' },
]

const STATS = [
  { n:'10,000+', l:'Students Trained' },
  { n:'500+',    l:'Job Placements' },
  { n:'50+',     l:'Expert Instructors' },
  { n:'4.9★',    l:'Student Rating' },
]

export default function Home() {
  return (
    <div>
      <Hero/>
      <CoursesSection/>

      {/* About */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#5A9410] text-xs font-black uppercase tracking-widest">About Us</span>
            <h2 className="text-4xl font-black text-[#0E1702] mt-3 mb-5 leading-tight">
              Pakistan's No.1<br/>IT Training Institute
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Founded in Lahore, Tecstem Technologies has emerged as Pakistan's leading IT training institute.
              Our mission is to bridge the gap between academic knowledge and industry requirements with practical training.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              With 10,000+ successful graduates and 500+ job placements, we are a trusted name in IT education.
            </p>
            <Link to="/about">
              <button className="px-7 py-3.5 rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                style={{ borderColor:'#8DE718', color:'#416A0B' }}
                onMouseEnter={e => { e.currentTarget.style.background='#DFF8BE'; }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; }}>
                Learn More →
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20" style={{ background:'linear-gradient(135deg,#8DE718,#6AAD12)' }}/>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Tecstem" className="relative rounded-3xl shadow-2xl w-full object-cover" style={{ height: 380 }}/>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              style={{ border: '1px solid rgba(203,244,149,.6)' }}>
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-gray-500">Top Rated</p>
                <p className="font-black text-sm" style={{ color:'#5A9410' }}>4.9 ★ (500+ reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6" style={{ background:'linear-gradient(135deg,#F4FDE8,#fff)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#5A9410] text-xs font-black uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-4xl font-black text-[#0E1702] mt-3 mb-4">Why Tecstem is the Right Choice</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Industry-aligned courses, expert mentorship and hands-on training for real-world success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {WHY.map((w, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 group"
                style={{ boxShadow:'0 2px 16px rgba(65,106,11,.07)', border:'1px solid rgba(203,244,149,.7)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 16px 40px rgba(106,173,18,.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 16px rgba(65,106,11,.07)'}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform group-hover:scale-110"
                  style={{ background:'linear-gradient(135deg,#F4FDE8,#DFF8BE)' }}>{w.i}</div>
                <h3 className="text-lg font-black text-[#0E1702] mb-2">{w.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="py-16 px-6" style={{ background:'linear-gradient(135deg,#416A0B,#8DE718)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-black text-white">{s.n}</p>
              <p className="text-sm text-white/75 mt-2 font-medium">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — Ab /contact page pe jayega jahan form hai */}
      <section className="py-20 px-6 text-center" style={{ background:'#0E1702' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/50 text-lg mb-8">Join thousands of successful graduates from Tecstem Technologies</p>
          <Link to="/contact">
            <button className="px-10 py-4 rounded-2xl font-black text-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ background:'linear-gradient(135deg,#CBF495,#8DE718)', color:'#284107', boxShadow:'0 8px 30px rgba(141,231,24,.4)' }}>
              Get Started Now →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}