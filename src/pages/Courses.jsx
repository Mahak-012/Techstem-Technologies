import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

// Links matched EXACTLY with CourseDetail.jsx DATA ids
const courses = [
  { title: 'SEO & Digital Marketing', desc: 'Master Search Engine Optimization to rank websites on Google\'s first page and drive organic traffic.', icon: '🔍', duration: '3 Months', link: '/course/seo' },
  { title: 'Digital Marketing', desc: 'Learn Facebook Ads, Google Ads, Social Media Marketing, and complete digital marketing strategy.', icon: '📱', duration: '3 Months', link: '/course/digital-marketing' },
  { title: 'Artificial Intelligence', desc: 'Dive into Machine Learning, Deep Learning, and AI tools to build intelligent systems.', icon: '🤖', duration: '6 Months', link: '/course/ai' },
  { title: 'Full Stack Web Development', desc: 'Become a complete developer with React, Node.js, MongoDB, and build real-world projects.', icon: '💻', duration: '6 Months', link: '/course/full-stack' },
  { title: 'Cyber Security', desc: 'Learn ethical hacking, penetration testing, network security, and protect systems from threats.', icon: '🛡️', duration: '6 Months', link: '/course/cyber' },
  { title: 'Data Science & Analytics', desc: 'Master Python, Data Visualization, Statistical Analysis, and make data-driven decisions.', icon: '📊', duration: '6 Months', link: '/course/data-analytics' },
  { title: 'Cloud Computing', desc: 'Learn AWS, Azure, Google Cloud deployment, server management, and scalable architecture.', icon: '☁️', duration: '4 Months', link: '/course/cloud' },
  { title: 'Graphic Designing', desc: 'Master Adobe Photoshop, Illustrator, Canva, and create stunning visual designs for brands.', icon: '🎨', duration: '3 Months', link: '/course/graphic' },
]

export default function Courses() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-white">
      
      {/* Hero Banner */}
      <div className="relative h-[340px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="Courses" className="w-full h-full object-cover" style={{ filter: 'brightness(0.35)' }}/>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(65,106,11,0.7), rgba(141,231,24,0.4))' }}/>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>🎓 Professional Training</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-3">Our Courses</h1>
            <p className="text-xl text-white/85">Choose your path & build your career</p>
          </div>
        </div>
      </div>

      {/* Course Cards Grid - 8 Cards */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#6AAD12] text-sm font-bold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3">Explore Our Programs</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Industry-aligned courses designed to make you job-ready from day one.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link to={course.link} className="block group h-full">
                <div className="bg-white rounded-2xl p-7 h-full border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#8DE718]/40 relative overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  
                  {/* Hover Glow */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none" style={{ background: '#8DE718' }}/>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'linear-gradient(135deg, #f0fdf4, #F4FDE8)' }}>{course.icon}</div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-[#416A0B] transition-colors duration-300">{course.title}</h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{course.desc}</p>

                  {/* Duration & Arrow */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'rgba(141,231,24,.1)', color: '#416A0B' }}>🕐 {course.duration}</span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#6AAD12] transition-all duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 text-center text-white" style={{ background: 'linear-gradient(135deg, #0E1702, #284107, #416A0B)' }}>
        <h2 className="text-4xl font-black mb-4">Can't Decide Which Course is Right?</h2>
        <p className="text-gray-300 text-lg mb-8">Talk to our counselors — we'll guide you to the perfect career path!</p>
        <Link to="/contact">
          <button className="px-10 py-4 rounded-2xl font-black text-lg text-gray-900 transition-all duration-300 hover:-translate-y-1 cursor-pointer" style={{ background: 'linear-gradient(135deg,#8DE718,#6AAD12)', boxShadow: '0 8px 30px rgba(141,231,24,0.4)' }}>Get Free Counseling →</button>
        </Link>
      </div>
    </motion.div>
  )
}