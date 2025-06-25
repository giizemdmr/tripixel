import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import ProjectDetail from "./pages/ProjectDetail"
import Submit from "./pages/Submit"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { AuthProvider } from "./context/AuthContext"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
       <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </AuthProvider>
  </Router>
  )
}

export default App
