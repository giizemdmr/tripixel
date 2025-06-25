import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg mb-6 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
          Tripixel
        </Link>
        
        <nav className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive 
                  ? "text-indigo-600 dark:text-indigo-400 underline decoration-2 underline-offset-4" 
                  : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive 
                  ? "text-indigo-600 dark:text-indigo-400 underline decoration-2 underline-offset-4" 
                  : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/submit"
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive 
                  ? "text-indigo-600 dark:text-indigo-400 underline decoration-2 underline-offset-4" 
                  : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            Submit
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive 
                  ? "text-indigo-600 dark:text-indigo-400 underline decoration-2 underline-offset-4" 
                  : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            About
          </NavLink>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
          <NavLink
            to="/login"
            className="btn btn-primary"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="btn btn-secondary"
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
