import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="block group">
      <div className="card card-hover p-0 overflow-hidden relative">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Floating Action Button */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                View Details
              </button>
            </div>
            
            {/* Vote Count Badge */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                🔥 {project.votes} votes
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 project-title-black">{project.title}</h3>
            <p className="mb-4 flex-1 project-desc-black">{project.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              by <span className="font-semibold text-gray-700 dark:text-gray-300 gradient-text">{project.designer}</span>
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Active Project</span>
              </div>
              
              <button className="btn btn-primary text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
