import { useNavigate } from 'react-router-dom'

const STATS = [
  { n: '10,000+', l: 'Students Trained' },
  { n: '500+', l: 'Job Placements' },
  { n: '50+', l: 'Expert Instructors' }
]

const BADGES = [
  { i: '💻', t: 'Live Projects' },
  { i: '🎯', t: '100% Practical' },
  { i: '🏆', t: 'Certified' },
  { i: '🚀', t: 'Job Ready' }
]

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-[#FAFDF5]" style={{ minHeight: '92vh' }}>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Green blobs */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle,#8DE718,transparent)' }} />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#6AAD12,transparent)' }} />

        {/* Dot grid */}
        <svg width="100%" height="100%" className="opacity-[0.04] absolute inset-0">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#6AAD12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#8DE718]/10 to-transparent hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex items-center min-h-[92vh]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* LEFT SIDE */}
          <div className="text-left relative" style={{ animation: 'fadeUp .8s ease both' }}>

            {/* 🔥 NEW GLOW BACKGROUND (ONLY LEFT SIDE) */}
            <div className="absolute -inset-10 bg-gradient-to-br from-[#8DE718]/10 via-transparent to-transparent blur-2xl rounded-3xl -z-10"></div>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border tracking-wider uppercase"
              style={{ background: 'rgba(141,231,24,.08)', borderColor: 'rgba(106,173,18,.2)', color: '#5A9410' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DE718] animate-pulse"></span>
              Pakistan's No.1 IT Institute
            </div>

            <h1 className="font-black leading-[1.1] text-[#0E1702] mb-2"
              style={{ fontSize: 'clamp(36px,5vw,56px)' }}>
              Empower Your
            </h1>

            <h1 className="font-black leading-[1.1] mb-6"
              style={{
                fontSize: 'clamp(36px,5vw,56px)',
                background: 'linear-gradient(135deg,#284107,#8DE718,#5A9410)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              Future Career
            </h1>

            <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8">
              Build skills that deliver real value. Learn from industry experts with hands-on practical training and job placement support.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => navigate('/contact')}
                className="px-7 py-3 rounded-xl text-white font-bold text-sm transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#416A0B,#8DE718)' }}
              >
                Enroll Now
              </button>

              <button
                onClick={() => navigate('/about')}
                className="px-7 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:bg-[#F4FDE8]"
                style={{ borderColor: '#8DE718', color: '#416A0B' }}
              >
                More Info
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-200/70">
              {STATS.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-black" style={{ color: '#416A0B' }}>{s.n}</p>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {BADGES.map((b, i) => (
                <span key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border text-xs text-gray-600 hover:border-[#8DE718] transition-all">
                  <span>{b.i}</span> {b.t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative" style={{ animation: 'fadeUp .8s .15s ease both' }}>

            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] opacity-25 blur-3xl -z-10"
              style={{ background: 'linear-gradient(135deg,#8DE718,#6AAD12)' }} />

            {/* NEW IMAGE (MATCHED IT / TEAM / MODERN LOOK) */}
            <div className="relative rounded-[2rem] overflow-hidden group shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop"
                alt="IT Team Collaboration"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: 540 }}
              />

              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg,rgba(141,231,24,.08),transparent 50%)' }} />

              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top,rgba(14,23,2,.1),transparent 40%)' }} />
            </div>

            {/* Floating Cards (UNCHANGED) */}
            <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center gap-2.5 border border-white/50"
              style={{ animation: 'float 3.5s ease-in-out infinite' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'linear-gradient(135deg,#fbbf24,#f59e0b)' }}>⭐</div>
              <div>
                <p className="text-[9px] text-gray-400 font-medium">Top Rated</p>
                <p className="font-black text-gray-900 text-xs">4.9★</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 text-center border border-white/50"
              style={{ animation: 'float 3.5s 1.5s ease-in-out infinite', minWidth: 100 }}>
              <p className="text-[9px] text-gray-400 font-medium">Students</p>
              <p className="font-black text-lg" style={{ color: '#6AAD12' }}>10K+</p>
            </div>

            <div className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 hidden lg:block border border-white/50"
              style={{ animation: 'float 3.5s 0.8s ease-in-out infinite', minWidth: 110 }}>
              <p className="text-[9px] text-gray-400 font-medium">Placements</p>
              <p className="font-black text-lg" style={{ color: '#5A9410' }}>500+</p>
            </div>

            <div className="absolute bottom-16 -left-4 hidden lg:block">
              <div className="bg-[#0E1702]/90 text-green-400 text-[10px] p-3 rounded-lg border border-[#8DE718]/20 shadow-lg"
                style={{ animation: 'float 4s 2s ease-in-out infinite' }}>
                const career = "success";
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(25px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>
    </section>
  )
}