import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'blog', 'faq', 'contact']
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsServicesOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-gray-700/20' 
        : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 text-2xl font-black gradient-text hover:scale-105 transition-transform duration-300"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#5a6a85] rounded-full blur-lg opacity-50"></div>
            <img 
              src="/images/trivess-logo.png" 
              alt="Trivess Logo" 
              className="relative w-10 h-10 object-contain rounded-full border-2 border-white/20 shadow-lg" 
            />
          </div>
          <span className="hidden sm:block font-bold text-2xl tracking-wider text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300" style={{fontFamily:'Inter, sans-serif'}}>TRIVESS</span>
        </button>
        
        <nav className="flex-1 flex items-center justify-center gap-2 md:gap-4 lg:gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
              activeSection === 'home'
                ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            }`}
          >
            Ana Sayfa
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className={`font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
              activeSection === 'about'
                ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            }`}
          >
            Kurumsal
          </button>
          
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              className={`font-semibold transition-all duration-300 px-3 py-2 rounded-lg flex items-center gap-1 ${
                activeSection === 'services'
                  ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
            >
              Hizmetlerimiz
              <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="py-2">
                <button onClick={() => scrollToSection('web-design')} className="w-full px-4 py-3 text-left header-dropdown-button transition-colors duration-200">Web Tasarımı</button>
                <button onClick={() => scrollToSection('digital-marketing')} className="w-full px-4 py-3 text-left header-dropdown-button transition-colors duration-200">Dijital Pazarlama</button>
                <button onClick={() => scrollToSection('seo')} className="w-full px-4 py-3 text-left header-dropdown-button transition-colors duration-200">SEO</button>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSection('projects')}
            className={`font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
              activeSection === 'projects'
                ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            }`}
          >
            Projeler
          </button>
          
          <button
            onClick={() => scrollToSection('blog')}
            className={`font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
              activeSection === 'blog'
                ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            }`}
          >
            Blog
          </button>
          
          <button
            onClick={() => scrollToSection('faq')}
            className={`font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
              activeSection === 'faq'
                ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            }`}
          >
            SSS
          </button>
        </nav>
        
        <button
          onClick={() => scrollToSection('contact')}
          className="ml-4 px-6 py-3 rounded-xl font-bold text-lg btn-service shadow-lg transition-all duration-300 flex items-center gap-2"
          style={{boxShadow:'0 4px 24px 0 rgba(90,106,133,0.15)'}}
        >
          Bize Ulaşın
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </header>
  )
}
