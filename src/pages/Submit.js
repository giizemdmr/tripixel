import { useState } from "react"

export default function Submit() {
  const [title, setTitle] = useState("")
  const [designer, setDesigner] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      alert("Yeni proje gönderildi! (Firebase bağlantısı olmadığı için kaydedilmedi)")
      setTitle("")
      setDesigner("")
      setImage("")
      setDescription("")
      setIsLoading(false)
    }, 2000)
  } 

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Submit Your Project
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Share your amazing design with the community
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Preview */}
            {image && (
              <div className="flex justify-center mb-4">
                <img
                  src={image}
                  alt="Preview"
                  className="rounded-xl shadow-lg max-h-56 object-contain border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                  onError={e => e.target.style.display = 'none'}
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                Project Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Enter your project title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                Designer Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Enter your name"
                value={designer}
                onChange={(e) => setDesigner(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                Project Image URL
              </label>
              <input
                type="url"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="https://example.com/image.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Provide a direct link to your project image
              </p>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                Description
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
                rows="4"
                placeholder="Describe your project, inspiration, and techniques used..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="spinner mr-2"></div>
                  Submitting...
                </>
              ) : (
                "Submit Project"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
