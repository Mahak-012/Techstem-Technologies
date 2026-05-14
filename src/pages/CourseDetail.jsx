import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const COURSE_LIST = ['SEO','Digital Marketing','Artificial Intelligence','Full Stack Web Development','Cyber Security','Data Analytics','Cloud Computing','Graphic Designing']

const DATA = [
  { id:'seo', title:'SEO', sub:'Search Engine Optimization', icon:'📈', grad:'from-[#CBF495] to-[#6AAD12]', tc:'#284107', img:'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80', duration:'3 Months', students:'500+', level:'Advanced',
    benefits:['Rank any website on Google\'s first page organically','Master Google Search Console & Analytics 4','AI-powered keyword research with ChatGPT & Semrush','Local SEO for Pakistani businesses & Google Maps','Voice search optimization & featured snippets strategy','Freelance SEO on Fiverr & Upwork — earn $500+/month'],
    syllabus:['Week 1: SEO Fundamentals & AI Keyword Research','Week 2: On-Page SEO & Content Optimization','Week 3: Technical SEO & Core Web Vitals','Week 4: Off-Page SEO & Link Building','Week 5: Local SEO & Google Business Profile','Week 6: Freelancing & Final Project'],
    projects:'Complete SEO audit of a live website, keyword strategy document, Google Analytics dashboard' },

  { id:'digital-marketing', title:'Digital Marketing', sub:'Social, Ads & Analytics', icon:'📣', grad:'from-blue-400 to-indigo-600', tc:'#fff', img:'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=700&q=80', duration:'3 Months', students:'450+', level:'Advanced',
    benefits:['Run profitable Google & Meta Ads campaigns','AI content creation with ChatGPT & Canva AI','Social media marketing for Pakistani brands','Email automation & WhatsApp marketing','E-commerce marketing for Daraz & Shopify','Build a digital marketing agency from scratch'],
    syllabus:['Week 1: Digital Marketing & AI Tools','Week 2: Google Ads & PPC Campaigns','Week 3: Facebook, Instagram & TikTok Ads','Week 4: Email Marketing & Automation','Week 5: E-commerce & Analytics','Week 6: Agency Building & Final Project'],
    projects:'Google Ads campaign, social media calendar, email automation sequence' },

  { id:'ai', title:'Artificial Intelligence', sub:'ML, Deep Learning & NLP', icon:'🤖', grad:'from-blue-400 to-violet-600', tc:'#fff', img:'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80', duration:'3 Months', students:'300+', level:'Advanced',
    benefits:['Build AI chatbots with Python & OpenAI API','Machine Learning models for prediction & classification','Deep Learning with TensorFlow & PyTorch','Computer Vision for image & video analysis','NLP for Urdu & English text processing','AI freelance projects earning $1000+/month'],
    syllabus:['Week 1: Python & AI Libraries','Week 2: Data Science & Pandas','Week 3: Machine Learning Algorithms','Week 4: Deep Learning & Neural Networks','Week 5: NLP & Computer Vision','Week 6: AI Projects & Freelancing'],
    projects:'AI chatbot, image recognition system, sentiment analysis model' },

  { id:'full-stack', title:'Full Stack Web Dev', sub:'React, Node & MongoDB', icon:'💻', grad:'from-orange-400 to-red-500', tc:'#fff', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80', duration:'3 Months', students:'800+', level:'Advanced',
    benefits:['Build complete web apps with React & Node.js','REST APIs & GraphQL for modern backends','MongoDB & PostgreSQL database management','Deploy on Vercel, AWS & Docker containers','10+ real projects for your portfolio','Remote jobs & freelancing — earn $2000+/month'],
    syllabus:['Week 1: HTML5, Tailwind CSS & Responsive Design','Week 2: JavaScript ES6+ & TypeScript','Week 3: React.js, Hooks & Redux','Week 4: Node.js, Express & REST APIs','Week 5: MongoDB & Authentication','Week 6: Deployment & Portfolio Building'],
    projects:'E-commerce site, blog platform, social app, portfolio website' },

  { id:'cyber', title:'Cyber Security', sub:'Ethical Hacking & Networks', icon:'🔒', grad:'from-teal-400 to-emerald-600', tc:'#fff', img:'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80', duration:'3 Months', students:'400+', level:'Advanced',
    benefits:['Ethical hacking with Kali Linux & Burp Suite','Penetration testing for web & mobile apps','Network security & firewall configuration','Cloud security for AWS & Azure','Bug bounty hunting — earn $500-$5000 per bug','SOC analyst & security engineer career path'],
    syllabus:['Week 1: Cyber Security Fundamentals','Week 2: Network Security & Wireshark','Week 3: Ethical Hacking & Kali Linux','Week 4: Web App Penetration Testing','Week 5: Cloud Security & Cryptography','Week 6: Bug Bounty & Certification Prep'],
    projects:'Vulnerability assessment report, penetration test, security audit' },

  { id:'data-analytics', title:'Data Analytics', sub:'Excel, SQL & Power BI', icon:'📊', grad:'from-pink-400 to-rose-500', tc:'#fff', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80', duration:'3 Months', students:'350+', level:'Advanced',
    benefits:['Advanced Excel with Pivot Tables & VBA macros','SQL queries for database analysis & reporting','Python with Pandas for data processing','Power BI dashboards for business intelligence','AI-powered data analysis with ChatGPT','Data analyst jobs in banking & telecom sectors'],
    syllabus:['Week 1: Advanced Excel & VBA','Week 2: SQL Database Queries','Week 3: Python for Data Analysis','Week 4: Data Visualization & Matplotlib','Week 5: Power BI & Tableau Dashboards','Week 6: Real Projects & Interview Prep'],
    projects:'Sales dashboard, customer segmentation, financial analytics report' },

  { id:'cloud', title:'Cloud Computing', sub:'AWS, Azure & DevOps', icon:'☁️', grad:'from-cyan-400 to-blue-600', tc:'#fff', img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80', duration:'3 Months', students:'250+', level:'Advanced',
    benefits:['AWS & Azure core services & architecture','Docker containers & Kubernetes orchestration','CI/CD pipelines with GitHub Actions & Jenkins','Infrastructure as Code with Terraform','Serverless computing with AWS Lambda','Cloud engineer salary: PKR 300K-800K/year'],
    syllabus:['Week 1: Cloud Fundamentals & AWS','Week 2: AWS EC2, S3, RDS & Lambda','Week 3: Docker & Containerization','Week 4: Kubernetes & Orchestration','Week 5: Azure & Terraform','Week 6: CI/CD & DevOps Projects'],
    projects:'AWS deployment, Docker containerization, CI/CD pipeline setup' },

  { id:'graphic', title:'Graphic Designing', sub:'Photoshop, Figma & Canva', icon:'🎨', grad:'from-purple-400 to-pink-500', tc:'#fff', img:'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700&q=80', duration:'3 Months', students:'600+', level:'Advanced',
    benefits:['Adobe Photoshop & Illustrator mastery','Figma for UI/UX & web design','AI design tools: Midjourney, DALL-E & Canva AI','Social media designs for Pakistani brands','Brand identity & logo design','Freelance designing — earn $1000+/month'],
    syllabus:['Week 1: Design Principles & Color Theory','Week 2: Adobe Photoshop Deep Dive','Week 3: Illustrator & Vector Graphics','Week 4: Figma UI/UX Design','Week 5: AI Design Tools & Canva','Week 6: Portfolio & Freelancing on Fiverr'],
    projects:'Logo design, social media kit, UI mockup, brand identity package' },
]

export default function CourseDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const [c, setC] = useState(null)
  const [enrollModal, setEnrollModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { 
    setC(DATA.find(x => x.id === id) || null) 
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEnrollModal(false)
      setSubmitted(false)
    }, 2500)
  }

  if (!c) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-gray-500 text-lg">Course not found</p>
      <Link to="/" className="font-bold hover:underline" style={{ color:'#5A9410' }}>← Back to Home</Link>
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-white min-h-screen">

      {/* Hero banner */}
      <div className={`bg-gradient-to-br ${c.grad} py-14 px-6 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:'radial-gradient(circle at 15% 50%,white,transparent 60%)' }}/>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold mb-6 transition-opacity hover:opacity-80" style={{ color: c.tc, opacity:.8 }}>
            ← Back to Courses
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="text-8xl drop-shadow-xl">{c.icon}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-1 leading-tight" style={{ color:c.tc }}>{c.title}</h1>
              <p className="text-sm font-semibold opacity-75 mb-4" style={{ color:c.tc }}>{c.sub}</p>
              <div className="flex flex-wrap gap-3">
                {[`⏱ ${c.duration}`,`👥 ${c.students} Students`,`📊 ${c.level}`].map(t => (
                  <span key={t} className="px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-sm" style={{ background:'rgba(255,255,255,.22)', color:c.tc }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Sidebar */}
          <div>
            <div className="sticky top-28">
              <img src={c.img} alt={c.title} className="rounded-2xl shadow-lg w-full object-cover mb-5" style={{ height:200 }}/>
              <div className="rounded-2xl p-6" style={{ background:'#F4FDE8', border:'1px solid rgba(182,239,107,.5)' }}>
                <h3 className="font-black text-[#0E1702] mb-4">Quick Info</h3>
                {[['Duration',c.duration],['Level',c.level],['Certificate','✓ Included'],['Mode','Physical Classes'],['Fee','100% FREE']].map(([l,v]) => (
                  <div key={l} className="flex justify-between py-2.5 border-b border-[#CBF495]/40 last:border-0">
                    <span className="text-gray-500 text-sm">{l}</span>
                    <span className={`font-bold text-sm ${l==='Fee'?'text-[#6AAD12]':l==='Certificate'?'text-[#5A9410]':'text-[#0E1702]'}`}>{v}</span>
                  </div>
                ))}
                <button onClick={() => { setEnrollModal(true); setSubmitted(false) }}
                  className="w-full mt-5 py-3.5 rounded-2xl text-[#0E1702] font-black text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background:'linear-gradient(135deg,#CBF495,#8DE718)', boxShadow:'0 8px 20px rgba(141,231,24,.35)' }}>
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-black text-[#0E1702] mb-5">Industry Benefits & Career Scope</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background:'#F4FDE8', border:'1px solid rgba(182,239,107,.5)' }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-[#0E1702] shrink-0" style={{ background:'linear-gradient(135deg,#CBF495,#8DE718)' }}>✓</span>
                    <span className="text-gray-700 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0E1702] mb-5">Course Syllabus</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.syllabus.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#8DE718] transition-colors">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0" style={{ background:'rgba(141,231,24,.15)', color:'#5A9410' }}>{i+1}</span>
                    <span className="text-gray-600 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0E1702] mb-4">Projects You'll Build</h2>
              <div className="p-6 rounded-2xl" style={{ background:'linear-gradient(135deg,#F4FDE8,#DFF8BE)', border:'1px solid rgba(182,239,107,.5)' }}>
                <p className="text-gray-700 leading-relaxed">{c.projects}</p>
              </div>
            </div>

            <div className="rounded-2xl p-8 text-center text-[#0E1702]"
              style={{ background:'linear-gradient(135deg,#CBF495,#8DE718)', boxShadow:'0 16px 40px rgba(141,231,24,.3)' }}>
              <h3 className="text-2xl font-black mb-2">Ready to Start?</h3>
              <p className="mb-6 opacity-75 text-sm">Join thousands of successful graduates from Tecstem</p>
              <button onClick={() => { setEnrollModal(true); setSubmitted(false) }}
                className="px-8 py-3.5 bg-white font-black rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                style={{ color:'#284107', boxShadow:'0 4px 16px rgba(0,0,0,.12)' }}>
                Enroll Now →
              </button>
            </div>
          </div>
        </div>
      </div>

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
                    style={{ background: 'linear-gradient(135deg,rgba(141,231,24,.15),rgba(106,173,18,.1))' }}>📩</div>
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
                    <select required defaultValue={c.title}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:border-[#8DE718] focus:ring-3 focus:ring-[#8DE718]/10 transition-all duration-300 appearance-none cursor-pointer">
                      <option value="" disabled>Choose a course</option>
                      {COURSE_LIST.map((course, i) => <option key={i} value={course}>{course}</option>)}
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

      {/* Footer */}
      <Footer/>

      <style>{`
        @keyframes mPop { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </motion.div>
  )
}