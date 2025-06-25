import ProjectCard from "../components/ProjectCard"
import data from "../data/projects.json"

// Get top 3 projects by votes
const featuredProjects = data
  .sort((a, b) => b.votes - a.votes)
  .slice(0, 3)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">TriPixel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Showcase, vote and get inspired by <span className="text-indigo-600 dark:text-indigo-400 font-bold">amazing web design</span> from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary text-lg px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition">
                Explore Projects
              </button>
              <button className="btn btn-secondary text-lg px-8 py-4 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-white rounded-lg shadow transition">
                Submit Your Work
              </button>
            </div>
            <div className="mt-6 text-gray-400 text-sm">
              Trusted by 1000+ designers
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
              alt="Design Inspiration" 
              className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 max-w-xs w-full object-cover"
            />
          </div>
        </section>

        {/* Stats Section - single strip, no boxes */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
            <div>
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">500+</span> Projects Shared
            </div>
            <span className="hidden md:inline-block text-2xl text-gray-300 dark:text-gray-700">|</span>
            <div>
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10K+</span> Votes Cast
            </div>
            <span className="hidden md:inline-block text-2xl text-gray-300 dark:text-gray-700">|</span>
            <div>
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">200+</span> Designers
            </div>
          </div>
        </section>

        {/* Featured Projects - seamless gallery, no card/kutu */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              🔥 Featured Projects
            </h2>
            <button className="btn btn-secondary bg-white dark:bg-gray-800 border border-indigo-100 dark:border-gray-700 text-indigo-700 dark:text-white rounded-lg shadow transition">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CTA Section - full width banner, no card/kutu */}
        <section className="text-center mt-24">
          <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg py-12 px-4">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Share Your Design?</h3>
            <p className="text-xl mb-8 text-indigo-100">
              Join our community and showcase your creative work to designers worldwide.
            </p>
            <button className="btn bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg shadow">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
