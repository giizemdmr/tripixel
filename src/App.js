import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import ProjectDetail from "./pages/ProjectDetail"
import { AuthProvider } from "./context/AuthContext"
import AIAssistant from "./components/AIAssistant"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50 transition-opacity duration-500 animate-fade-in">
        <img
          src="/images/trivess-logo.png"
          alt="Trivess Logo"
          className="w-72 h-72 md:w-96 md:h-96 animate-bounce"
        />
      </div>
    )
  }

  return (
    <Router>
      <AuthProvider>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </AuthProvider>
    </Router>
  )
}

export default App
