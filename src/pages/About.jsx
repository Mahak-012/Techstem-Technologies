import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Footer from '../components/Footer'

const reviews = [
  { name:'Ali Hassan',   role:'Full Stack Developer', img:'https://randomuser.me/api/portraits/men/1.jpg',   review:'Tecstem changed my life. The instructors are industry experts and practical training helped me land a job within 3 months.', rating:5 },
  { name:'Fatima Khan',  role:'SEO Specialist',       img:'https://randomuser.me/api/portraits/women/2.jpg', review:'Best IT training institute in Lahore. Supportive environment, up-to-date curriculum with market demands.', rating:5 },
  { name:'Usman Ahmed',  role:'Data Analyst',         img:'https://randomuser.me/api/portraits/men/3.jpg',   review:'I came with zero knowledge, now working as a Data Analyst. Thank you Tecstem for this amazing journey!', rating:5 },
]

const faqs = [
  { q:'Are The IT Courses Really Free?',     a:'Yes, our IT courses are completely free, designed to help students in Pakistan learn essential digital skills without any cost.' },
  { q:'Who Can Enroll In These Courses?',    a:'Anyone can apply, including students, beginners, job seekers, and individuals looking to start a career in IT.' },
  { q:'Are Classes Online Or Physical?',     a:'We offer physical classroom-based training only, where students can attend in-person sessions at our institute.' },
  { q:'Do I Need Any Prior Experience?',     a:'No prior experience is required. Our courses are beginner-friendly and start from basic concepts.' },
  { q:'Will I Get A Certificate?',           a:'Yes, students who successfully complete the course receive an industry-recognized certificate of completion.' },
  { q:'How Can I Register?',                 a:'You can register through our website or by visiting our institute and filling out the admission form.' },
]

const whyUs = [
  { icon:'👨‍🏫', title:'Expert Instructors',    desc:'Industry professionals with 5+ years experience in top tech companies like Google and Microsoft.' },
  { icon:'💻', title:'Hands-on Training',       desc:'Practical, project-based learning with real-world scenarios and live projects that build your portfolio.' },
  { icon:'🎓', title:'Job Placement Support',   desc:'100% job assistance, resume building, interview preparation, and direct referrals to partner companies.' },
  { icon:'🏆', title:'Industry Recognition',    desc:"Pakistan's No.1 IT Training Institute with 10,000+ successful graduates and 500+ job placements." },
  { icon:'📚', title:'Updated Curriculum',      desc:'Courses designed according to current market demands and latest technologies to keep you ahead.' },
  { icon:'🆓', title:'100% Free Education',     desc:'All our IT courses are completely free — no hidden charges, no fees. Quality education accessible to everyone.' },
  { icon:'♾️', title:'Lifetime Access',         desc:'Get lifetime access to course materials, recordings, and resources even after completing your course.' },
  { icon:'🤝', title:'Community & Networking',  desc:'Join a thriving community of 10,000+ tech professionals, attend meetups, and grow your network.' },
]

const stats = [
  { num:'10,000+', label:'Students Trained' },
  { num:'500+',    label:'Job Placements' },
  { num:'50+',     label:'Expert Instructors' },
  { num:'4.9★',    label:'Student Rating' },
]

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white"
    >

      {/* Hero */}
      <div className="relative h-[380px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
          alt="Tecstem" className="w-full h-full object-cover" style={{ filter:'brightness(0.4)' }}/>
        <div className="absolute inset-0" style={{ background:'linear-gradient(135deg, rgba(106,173,18,0.35), rgba(141,231,24,0.25))' }}/>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background:'rgba(255,255,255,0.15)', color:'#fff', border:'1px solid rgba(255,255,255,0.3)' }}>
              Established 2015
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-3">About Tecstem</h1>
            <p className="text-xl text-white/85">Pakistan's No.1 IT Training Institute</p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#6AAD12] text-sm font-bold uppercase tracking-widest">Our Story</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3 mb-5">Empowering Youth Through IT Education</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Founded in 2015, Tecstem Technologies has emerged as Pakistan's leading IT training institute.
            Our mission is to bridge the gap between academic knowledge and industry requirements by providing
            practical, hands-on training in cutting-edge technologies.
          </p>
          <p className="text-gray-500 leading-relaxed mb-7">
            With over 10,000+ successful graduates and 500+ job placements, we have established ourselves as
            a trusted name in IT education. Our industry-expert instructors ensure every student gets the best learning experience.
          </p>
          <Link to="/contact">
            <button className="px-8 py-3.5 rounded-2xl text-white font-bold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              style={{ background:'linear-gradient(135deg, #6AAD12, #8DE718)', boxShadow:'0 8px 24px rgba(106,173,18,0.35)' }}>
              Contact Us →
            </button>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl" style={{ background:'linear-gradient(135deg,#8DE718,#6AAD12)' }}/>
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80"
            alt="Students" className="relative rounded-3xl shadow-2xl w-full object-cover" style={{ height:'400px' }}/>
        </div>
      </div>

      {/* Why Us */}
      <section className="py-20 px-6" style={{ background:'linear-gradient(135deg, #f0fdf4, #fff)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6AAD12] text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Why Tecstem is the Right Choice</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ boxShadow:'0 4px 20px rgba(0,0,0,0.06)', border:'1px solid rgba(106,173,18,0.08)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                  style={{ background:'linear-gradient(135deg, #f0fdf4, #F4FDE8)' }}>{w.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="py-16 px-6" style={{ background:'linear-gradient(135deg, #6AAD12, #8DE718)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-5xl font-black">{s.num}</p>
              <p className="text-sm opacity-80 mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6AAD12] text-sm font-bold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">What Our Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background:'#f8fffe', boxShadow:'0 4px 20px rgba(106,173,18,0.08)', border:'1px solid rgba(106,173,18,0.1)' }}>
                <div className="flex text-yellow-400 mb-4">{[...Array(r.rating)].map((_, j) => <span key={j}>★</span>)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{r.review}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#CBF495]"/>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-xs text-[#5A9410] font-medium">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background:'#f8fffe' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6AAD12] text-sm font-bold uppercase tracking-widest">FAQs</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow:'0 2px 12px rgba(106,173,18,0.07)', border:'1px solid rgba(106,173,18,0.1)' }}>
                <h3 className="font-black text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Dark Green theme (NOT blue) → Click goes to /contact (4th page form) */}
      <div className="py-20 px-6 text-center" style={{ background:'#0E1702' }}>
        <h2 className="text-4xl font-black text-white mb-4">Ready to Start Your Journey?</h2>
        <p className="text-white/50 text-lg mb-8">Join thousands of successful graduates from Tecstem</p>
        <Link to="/contact">
          <button className="px-10 py-4 rounded-2xl font-black text-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            style={{ background:'linear-gradient(135deg,#CBF495,#8DE718)', color:'#284107', boxShadow:'0 8px 30px rgba(141,231,24,0.4)' }}>
            Get Started Now →
          </button>
        </Link>
      </div>

      {/* Footer */}
      <Footer/>

    </motion.div>
  )
}