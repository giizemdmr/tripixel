const team = [
    {
      name: "Gizem Demir",
      role: "Frontend Developer & UX Designer",
      image: "/images/gizem.jpg",
      bio: "Tutkulu bir geliştirici. Tripixel'in arayüz ve kullanıcı deneyimi sorumlusu."
    },
    {
      name: "Sıla İldeniz",
      role: "Full Stack Developer",
      image: "/images/sila.jpg",
      bio: "Hem frontend hem backend tarafında deneyimli. Projenin altyapısını üstleniyor."
    },
    {
      name: "Meryem Çirkin",
      role: "Project Manager & QA",
      image: "/images/meryem.jpg",
      bio: "Takımı organize eder, kaliteyi kontrol eder. Proje takibini sağlar."
    },
  ]
  
  export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TriPixel
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're building the world's most inspiring platform for designers to showcase their work, 
              get feedback, and discover amazing web design projects.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card p-8">
              <div className="text-4xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that great design should be shared and celebrated. Our platform 
                connects designers, developers, and design enthusiasts to create a vibrant 
                community of creativity and innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Design Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-indigo-600">💡</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Innovation</div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="card p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">✨ What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Showcase Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">Display your best work to the world</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl mb-4">🔥</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Vote & Rate</h3>
                <p className="text-gray-600 dark:text-gray-300">Support your favorite designs</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Discover</h3>
                <p className="text-gray-600 dark:text-gray-300">Find amazing design inspiration</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Connect</h3>
                <p className="text-gray-600 dark:text-gray-300">Network with other designers</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Feedback</h3>
                <p className="text-gray-600 dark:text-gray-300">Get valuable design feedback</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Grow</h3>
                <p className="text-gray-600 dark:text-gray-300">Build your design portfolio</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">👥 Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={member.name} className="card p-6 text-center hover:scale-105 transition-transform">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=400&fit=crop" 
                alt="Join Community" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 flex items-center justify-center">
                <div className="text-white p-12">
                  <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-xl mb-8 opacity-90">
                    Ready to share your amazing designs? Submit your project today and 
                    become part of our growing community of creative professionals.
                  </p>
                  <button className="btn bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4">
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  