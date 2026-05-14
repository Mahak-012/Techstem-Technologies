import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const COURSES = [
  { id:'seo',             title:'SEO',                      sub:'Search Engine Optimization', icon:'📈', desc:'Rank websites on Google, master keyword research, on-page SEO, technical SEO and link building.', students:'500+', duration:'3 Months', level:'Advanced',     grad:'from-[#CBF495] to-[#6AAD12]', text:'#284107' },
  { id:'digital-marketing', title:'Digital Marketing',      sub:'Social, Ads & Analytics',    icon:'📣', desc:'Master Google Ads, Facebook Ads, email marketing, analytics and social media strategy.',          students:'450+', duration:'3 Months', level:'Advanced',     grad:'from-blue-400 to-indigo-600',  text:'#fff' },
  { id:'ai',              title:'Artificial Intelligence',   sub:'ML, Deep Learning & NLP',    icon:'🤖', desc:'Python, Machine Learning, Deep Learning, Neural Networks and real-world AI projects.',            students:'300+', duration:'3 Months', level:'Advanced', grad:'from-blue-400 to-violet-600',  text:'#fff' },
  { id:'full-stack',      title:'Full Stack Web Dev',        sub:'React, Node, MongoDB',       icon:'💻', desc:'HTML, CSS, JS, React, Node.js, MongoDB — build 10+ real projects and get job-ready.',           students:'800+', duration:'3 Months', level:'Advanced',     grad:'from-orange-400 to-red-500',   text:'#fff' },
  { id:'cyber',           title:'Cyber Security',            sub:'Ethical Hacking & Networks', icon:'🔒', desc:'Ethical hacking, penetration testing, network security, cryptography and web app security.',     students:'400+', duration:'3 Months', level:'Advanced', grad:'from-teal-400 to-emerald-600', text:'#fff' },
  { id:'data-analytics',  title:'Data Analytics',            sub:'Excel, SQL, Power BI',       icon:'📊', desc:'Excel, SQL, Python, Power BI, Tableau — turn raw data into actionable insights.',              students:'350+', duration:'3 Months', level:'Advanced',     grad:'from-pink-400 to-rose-500',    text:'#fff' },
  { id:'cloud',           title:'Cloud Computing',            sub:'AWS, Azure & DevOps',       icon:'☁️', desc:'AWS, Azure, Google Cloud, Docker, Kubernetes — deploy and manage scalable applications.',       students:'250+', duration:'3 Months', level:'Advanced', grad:'from-cyan-400 to-blue-600',    text:'#fff' },
  { id:'graphic',         title:'Graphic Designing',          sub:'Photoshop, Figma & Canva',  icon:'🎨', desc:'Photoshop, Illustrator, Figma, Canva — create logos, UI mockups and social media designs.',     students:'600+', duration:'3 Months', level:'Advanced',     grad:'from-purple-400 to-pink-500',  text:'#fff' },
]

const LEVEL_TAG = {
  Advanced: { bg:'rgba(249,115,22,.12)', color:'#c2410c' },
}

const COURSE_LIST = ['SEO','Digital Marketing','Artificial Intelligence','Full Stack Web Development','Cyber Security','Data Analytics','Cloud Computing','Graphic Designing']

export default function CoursesSection() {
  const [modal, setModal] = useState(null)
  const [enrollModal, setEnrollModal] = useState(false)
  const [enrollCourse, setEnrollCourse] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const nav = useNavigate()

  const handleEnrollClick = (courseName) => {
    setEnrollCourse(courseName)
    setEnrollModal(true)
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEnrollModal(false)
      setSubmitted(false)
    }, 2500)
  }

  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(180deg,#fff 0%,#F4FDE8 100%)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5"
            style={{ background: 'rgba(141,231,24,.12)', color: '#5A9410', border: '1px solid rgba(106,173,18,.25)' }}>
            <span className="w-2 h-2 rounded-full bg-[#8DE718] animate-pulse"/>
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0E1702] mb-4">Popular Courses</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Industry-leading curriculum designed by experts to boost your career</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((c) => (
            <div key={c.id}
              onClick={() => setModal(c)}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: '0 2px 16px rgba(65,106,11,.08)', border: '1px solid rgba(203,244,149,.6)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow='0 20px 50px rgba(106,173,18,.2)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 16px rgba(65,106,11,.08)'}>

              <div className={`bg-gradient-to-br ${c.grad} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.15),transparent)' }}/>
                <div className="text-5xl mb-3 drop-shadow-md">{c.icon}</div>
                <h3 className="font-black text-[17px] leading-tight mb-0.5" style={{ color: c.text }}>{c.title}</h3>
                <p className="text-[11px] font-semibold opacity-80" style={{ color: c.text }}>{c.sub}</p>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] px-2.5 py-1 rounded-full font-bold"
                    style={{ background: LEVEL_TAG[c.level].bg, color: LEVEL_TAG[c.level].color }}>
                    {c.level}
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">👥 {c.students}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium">⏱ {c.duration}</span>
                  <button
                    onClick={e => { e.stopPropagation(); nav(`/course/${c.id}`) }}
                    className="text-[12px] font-bold px-3.5 py-1.5 rounded-xl border-2 transition-all duration-300 hover:text-white cursor-pointer"
                    style={{ borderColor:'#8DE718', color:'#5A9410' }}
                    onMouseEnter={e => { e.currentTarget.style.background='#8DE718'; e.currentTarget.style.color='#284107'; }}
                    onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#5A9410'; }}>
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button onClick={() => nav('/courses')}
            className="px-10 py-3.5 rounded-2xl font-bold text-sm border-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{ borderColor:'#8DE718', color:'#416A0B' }}
            onMouseEnter={e => { e.currentTarget.style.background='#8DE718'; e.currentTarget.style.color='#284107'; }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#416A0B'; }}>
            View All Courses →
          </button>
        </div>
      </div>

      {/* COURSE DETAIL MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(14,23,2,.65)', backdropFilter: 'blur(10px)' }}
          onClick={() => setModal(null)}>
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl"
            style={{ animation: 'mPop .3s cubic-bezier(.34,1.56,.64,1) both' }}
            onClick={e => e.stopPropagation()}>

            <div className={`bg-gradient-to-br ${modal.grad} p-6 relative`}>
              <button onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center text-lg font-black transition cursor-pointer"
                style={{ color: modal.text }}>×</button>
              <div className="text-5xl mb-3">{modal.icon}</div>
              <h3 className="text-2xl font-black mb-0.5" style={{ color: modal.text }}>{modal.title}</h3>
              <p className="text-sm opacity-80 font-semibold" style={{ color: modal.text }}>{modal.sub} • {modal.level}</p>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{modal.desc}</p>
              {[['Duration', modal.duration],['Students', modal.students],['Certificate','✓ Industry Recognized']].map(([l,v]) => (
                <div key={l} className="flex justify-between py-2.5 border-b border-gray-100 last:border-0">
                  <span className="text-gray-500 text-sm">{l}</span>
                  <span className={`font-bold text-sm ${l==='Certificate'?'text-[#5A9410]':'text-[#0E1702]'}`}>{v}</span>
                </div>
              ))}
              <button onClick={() => { setModal(null); handleEnrollClick(modal.title) }}
                className="w-full mt-5 py-3.5 rounded-2xl text-[#0E1702] font-black text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                style={{ background: 'linear-gradient(135deg,#CBF495,#8DE718)', boxShadow: '0 8px 24px rgba(141,231,24,.35)' }}>
                Enroll Now →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ENROLLMENT FORM MODAL */}
      {enrollModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: 'rgba(14,23,2,.65)', backdropFilter: 'blur(10px)' }}
          onClick={() => setEnrollModal(false)}>
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative"
            style={{ animation: 'mPop .3s cubic-bezier(.34,1.56,.64,1) both', boxShadow: '0 0 40px rgba(141,231,24,.15)' }}
            onClick={e => e.stopPropagation()}>

            <button onClick={() => setEnrollModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition cursor-pointer z-10 text-lg">
              ×
            </button>

            {!submitted ? (
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: 'linear-gradient(135deg,rgba(141,231,24,.15),rgba(106,173,18,.1))' }}>
                    📩
                  </div>
                  <h3 className="text-2xl font-black text-[#0E1702]">Enroll Now</h3>
                  <p className="text-gray-500 text-sm mt-1">Fill in your details & we'll reach out to you!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name</label>
                    <input type="text" required placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#8DE718] focus:ring-3 focus:ring-[#8DE718]/10 transition-all duration-300"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Email</label>
                    <input type="email" required placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#8DE718] focus:ring-3 focus:ring-[#8DE718]/10 transition-all duration-300"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Phone</label>
                    <input type="tel" required placeholder="Your Phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#8DE718] focus:ring-3 focus:ring-[#8DE718]/10 transition-all duration-300"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Course</label>
                    <select required defaultValue={enrollCourse}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:border-[#8DE718] focus:ring-3 focus:ring-[#8DE718]/10 transition-all duration-300 appearance-none cursor-pointer">
                      <option value="" disabled>Choose a course</option>
                      {COURSE_LIST.map((c, i) => <option key={i} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 rounded-xl text-[#0E1702] font-bold text-sm cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg,#CBF495,#8DE718)', boxShadow: '0 8px 24px rgba(141,231,24,.35)' }}>
                    Submit Enrollment →
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12 px-8" style={{ animation: 'mPop .5s ease both' }}>
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-2xl font-black text-[#0E1702] mb-2">Enrollment Submitted!</h3>
                <p className="text-gray-500 text-sm">We'll contact you shortly. Welcome to TecStem!</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes mPop { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </section>
  )
}