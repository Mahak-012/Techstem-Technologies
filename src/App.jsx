import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Door / → Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Door /courses → 8 Cards wala Page */}
        <Route path="/courses" element={<Courses />} />
        
        {/* Door /course/seo ya /course/ai etc → Detail Page */}
        <Route path="/course/:id" element={<CourseDetail />} />
        
        {/* Door /about → About Page */}
        <Route path="/about" element={<About />} />
        
        {/* Door /contact → Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  )
}

export default App