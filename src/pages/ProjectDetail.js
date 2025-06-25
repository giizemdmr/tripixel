import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../data/projects.json"

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [voting, setVoting] = useState(false)

  useEffect(() => {
    const foundProject = data.find(p => p.id === parseInt(id))
    if (foundProject) {
      setProject(foundProject)
    }
    setLoading(false)
  }, [id])

  const handleVote = async () => {
    if (voting) return
    setVoting(true)
    
    // Simulate API call
    setTimeout(() => {
      setProject(prev => ({ ...prev, votes: prev.votes + 1 }))
      setVoting(false)
    }, 1000)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-lg mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading project...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/gallery')}
            className="btn btn-primary"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="card overflow-hidden">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <button 
                onClick={() => navigate('/gallery')}
                className="btn btn-secondary bg-white/90 backdrop-blur-sm"
              >
                ← Back to Gallery
              </button>
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Designer: <span className="font-semibold text-gray-800 dark:text-white">{project.designer}</span>
            </p>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  🔥 {project.votes} votes
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Active</span>
                </div>
              </div>
              <button 
                onClick={handleVote} 
                disabled={voting}
                className="btn btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {voting ? (
                  <div className="flex items-center space-x-2">
                    <div className="spinner"></div>
                    <span>Voting...</span>
                  </div>
                ) : (
                  "Vote for this project"
                )}
              </button>
            </div>
            
            {project.description && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Description</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
