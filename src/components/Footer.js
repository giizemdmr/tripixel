export default function Footer() {
    return (
      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Tripixel. Built with 💻 by Sıla, Meryem & Gizem.
          <div className="mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline mx-2">
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline mx-2">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    )
  }
  