import { useState } from 'react'
import Footer from '../components/Footer'

const COURSES = [
  'SEO', 'Digital Marketing', 'Artificial Intelligence',
  'Full Stack Web Development', 'Cyber Security',
  'Data Analytics', 'Cloud Computing', 'Graphic Designing',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="relative overflow-hidden bg-white min-h-screen pt-8 pb-0">
      
      {/* BG Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#8DE718,transparent)' }}/>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle,#6AAD12,transparent)' }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-14" style={{ animation: 'hUp .8s ease both' }}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold mb-5 border"
            style={{ background: 'rgba(141,231,24,.09)', borderColor: 'rgba(106,173,18,.25)', color: '#5A9410' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#8DE718' }}/>
            Get In Touch
          </div>
          <h1 className="font-black text-gray-900 mb-3" style={{ fontSize: 'clamp(32px,5vw,52px)' }}>
            Contact <span style={{
              background: 'linear-gradient(135deg,#416A0B,#8DE718)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Us</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-[17px]">
            Have questions? Want to enroll? Fill out the form and our team will get back to you within 24 hours!
          </p>
        </div>

        {/* FORM SECTION */}
        <div className="max-w-3xl mx-auto mb-16" style={{ animation: 'hUp .8s .1s ease both' }}>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl relative overflow-hidden"
            style={{ boxShadow: '0 25px 70px rgba(65,106,11,.08)' }}>
            
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: '#8DE718' }}/>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: '#6AAD12' }}/>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2">Your Name</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <input type="text" required placeholder="Your Name"
                          className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#8DE718] focus:ring-4 focus:ring-[#8DE718]/10 transition-all duration-300"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2">Your Email</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <input type="email" required placeholder="Your Email"
                          className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#8DE718] focus:ring-4 focus:ring-[#8DE718]/10 transition-all duration-300"/>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2">Your Phone</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <input type="tel" required placeholder="Your Phone"
                          className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#8DE718] focus:ring-4 focus:ring-[#8DE718]/10 transition-all duration-300"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2">Select Course</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <select required
                          className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:border-[#8DE718] focus:ring-4 focus:ring-[#8DE718]/10 transition-all duration-300 appearance-none cursor-pointer">
                          <option value="" disabled selected>Select a course</option>
                          {COURSES.map((c, i) => <option key={i} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">Your Message</label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      </div>
                      <textarea rows="4" placeholder="Write your message here..."
                        className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#8DE718] focus:ring-4 focus:ring-[#8DE718]/10 transition-all duration-300 resize-none"/>
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full py-4 rounded-2xl text-[#0E1702] font-bold text-base cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'linear-gradient(135deg,#CBF495,#8DE718)', boxShadow: '0 8px 28px rgba(141,231,24,.35)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow='0 16px 40px rgba(141,231,24,.5)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow='0 8px 28px rgba(141,231,24,.35)'}>
                    Send Message →
                  </button>
              </form>
            ) : (
              <div className="text-center py-16" style={{ animation: 'hUp .5s ease both' }}>
                <div className="text-7xl mb-6">🎉</div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-500 text-base max-w-sm mx-auto">Our team will contact you within 24 hours. Welcome to TecStem!</p>
              </div>
            )}
          </div>
        </div>

        {/* MAP & INFO SECTION */}
        <div className="grid lg:grid-cols-3 gap-6" style={{ animation: 'hUp .8s .2s ease both' }}>
          
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-gray-100 shadow-lg h-[350px] md:h-[400px] bg-gray-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3847856950453!2d74.3507!3d31.5207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919044e5b5a8c75%3A0x8c9b2b8b6b5b5b5b!2sBarkat%20Market%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1690123456789"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TecStem Technologies Location"
            ></iframe>
          </div>

          <div className="space-y-4">
            {[
              { icon: '📍', title: 'Our Office', detail: 'Jubilee Building, Barkat Market, Lahore' },
              { icon: '📞', title: 'Call Us', detail: '+92 300 1234567' },
              { icon: '✉️', title: 'Email Us', detail: 'info@tecstem.com' },
              { icon: '🕐', title: 'Working Hours', detail: 'Mon - Sat: 9AM - 9PM' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#8DE718]/40 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'rgba(141,231,24,.1)' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer/>
      </div>

      <style>{`
        @keyframes hUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  )
}