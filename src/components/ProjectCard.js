import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="block">
      <div className="card card-hover p-0 overflow-hidden group">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">🔥 {project.votes} votes</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">View Details</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            by <span className="font-medium text-gray-700 dark:text-gray-300">{project.designer}</span>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Active</span>
            </div>
            <button className="btn btn-primary btn-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Vote
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
