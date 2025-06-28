import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../data/projects.json"

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [voting, setVoting] = useState(false)
  const [activeTab, setActiveTab] = useState('website')

  useEffect(() => {
    const foundProject = data.find(p => p.id === parseInt(id))
    if (foundProject) {
      setProject(foundProject)
      // Eğer proje URL'si varsa otomatik olarak siteye yönlendir
      if (foundProject.url) {
        setTimeout(() => {
          window.open(foundProject.url, '_blank')
        }, 2000) // 2 saniye sonra otomatik aç
      }
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

  const getProjectDetails = (projectId) => {
    const details = {
      9: {
        technologies: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
        features: [
          "Responsive tasarım",
          "Modern UI/UX",
          "Hızlı yükleme",
          "SEO optimizasyonu",
          "İletişim formu",
          "Hizmet sayfaları"
        ],
        codeExplanation: `Bu proje React ve Tailwind CSS kullanılarak geliştirilmiştir. 
        
Ana özellikler:
• Component-based mimari
• Responsive grid sistemi
• Modern CSS animasyonları
• Form validasyonu
• SEO meta tag'leri

Kullanılan teknolojiler:
• React 18+ (Hooks, Context API)
• Tailwind CSS (Utility-first CSS)
• React Router (Sayfa yönlendirme)
• Vercel (Deployment)`,
        challenges: "Hukuk sektörü için güvenilir ve profesyonel görünüm sağlamak, karmaşık içerik yapısını organize etmek."
      },
      10: {
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        features: [
          "E-ticaret sistemi",
          "Ödeme entegrasyonu",
          "Ürün kategorileri",
          "Sepet yönetimi",
          "Sipariş takibi",
          "Admin paneli"
        ],
        codeExplanation: `Bu e-ticaret platformu Next.js ve TypeScript ile geliştirilmiştir.

Ana özellikler:
• Server-side rendering (SSR)
• Type-safe development
• E-ticaret fonksiyonları
• Ödeme sistemi entegrasyonu
• Ürün yönetimi

Kullanılan teknolojiler:
• Next.js 13+ (App Router)
• TypeScript (Tip güvenliği)
• Tailwind CSS (Styling)
• Stripe (Ödeme sistemi)
• Prisma (Veritabanı ORM)`,
        challenges: "E-ticaret fonksiyonlarını optimize etmek, güvenli ödeme sistemi entegrasyonu, ürün yönetimi."
      },
      11: {
        technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
        features: [
          "Portfolio showcase",
          "Blog sistemi",
          "Animasyonlar",
          "Dark/Light mode",
          "İletişim formu",
          "Proje galerisi"
        ],
        codeExplanation: `Bu kişisel portfolio sitesi React ve Framer Motion ile geliştirilmiştir.

Ana özellikler:
• Smooth animasyonlar
• Interactive UI elements
• Blog sistemi
• Portfolio showcase
• Responsive design
• Dark/Light theme

Kullanılan teknolojiler:
• React 18+ (Hooks, Context)
• Framer Motion (Animasyonlar)
• Tailwind CSS (Styling)
• React Router (Navigation)
• Vercel (Hosting)`,
        challenges: "Yaratıcı animasyonlar eklemek, portfolio içeriğini etkili şekilde sunmak, performans optimizasyonu."
      }
    }
    return details[projectId] || {
      technologies: ["React", "JavaScript", "CSS"],
      features: ["Responsive design", "Modern UI", "Fast loading"],
      codeExplanation: "Bu proje modern web teknolojileri kullanılarak geliştirilmiştir.",
      challenges: "Modern ve kullanıcı dostu arayüz tasarımı."
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
        <div className="text-center">
          <div className="spinner-lg mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Proje yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Proje Bulunamadı</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Aradığınız proje mevcut değil.</p>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    )
  }

  const projectDetails = getProjectDetails(project.id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden mb-8 border border-white/20">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <button 
                onClick={() => navigate('/')}
                className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg font-medium shadow-lg"
              >
                ← Ana Sayfaya Dön
              </button>
            </div>
            {project.url && (
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => window.open(project.url, '_blank')}
                  className="bg-white !text-black hover:bg-gray-100 px-4 py-2 rounded-lg font-medium shadow-lg transition-colors duration-300 border border-gray-300"
                  style={{color: 'black'}}
                >
                  🌐 Siteyi Ziyaret Et
                </button>
              </div>
            )}
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-white/80 mb-6">
              Tasarımcı: <span className="font-semibold text-white">{project.designer}</span>
            </p>
            
            {/* Büyük Site Ziyaret Butonu */}
            {project.url && (
              <div className="mb-8 p-6 bg-white/20 backdrop-blur-md rounded-xl text-center border border-white/30">
                <h3 className="text-white text-xl font-bold mb-4">
                  🌐 Bu Projeyi Canlı Olarak Görün
                </h3>
                <p className="text-white/90 mb-4">
                  {project.title} web sitesini yeni sekmede açmak için aşağıdaki butona tıklayın
                </p>
                <button 
                  onClick={() => window.open(project.url, '_blank')}
                  className="bg-white !text-black hover:bg-gray-100 text-lg px-8 py-4 font-bold rounded-lg transition-colors duration-300 shadow-lg border border-gray-300"
                  style={{color: 'black'}}
                >
                  🚀 Siteyi Aç
                </button>
              </div>
            )}
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-yellow-300">
                  🔥 {project.votes} oy
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/70">Aktif</span>
                </div>
              </div>
              <button 
                onClick={handleVote} 
                disabled={voting}
                className="bg-white !text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 border border-gray-300"
                style={{color: 'black'}}
              >
                {voting ? (
                  <div className="flex items-center space-x-2">
                    <div className="spinner"></div>
                    <span>Oy veriliyor...</span>
                  </div>
                ) : (
                  "Bu projeye oy ver"
                )}
              </button>
            </div>
            
            {project.description && (
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Açıklama</h3>
                <p className="text-white/90 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
          <div className="border-b border-white/20">
            <nav className="flex space-x-8 px-8 pt-6">
              <button
                onClick={() => setActiveTab('website')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'website'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/70 hover:text-white hover:border-white/50'
                }`}
              >
                🌐 Web Sitesi
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'code'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/70 hover:text-white hover:border-white/50'
                }`}
              >
                💻 Kod Detayları
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'features'
                    ? 'border-white text-white'
                    : 'border-transparent text-white/70 hover:text-white hover:border-white/50'
                }`}
              >
                ⚡ Özellikler
              </button>
            </nav>
          </div>

          <div className="p-8">
            {/* Website Tab */}
            {activeTab === 'website' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Web Sitesi Önizlemesi
                </h3>
                {project.url ? (
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <p className="text-white/90 mb-4">
                        <strong>Site URL:</strong> <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">{project.url}</a>
                      </p>
                      <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <span className="text-sm text-white/70">Tarayıcı Önizlemesi</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded p-4 text-center border border-white/20">
                          <p className="text-white/90">
                            🌐 <strong>{project.title}</strong> web sitesini görüntülemek için yukarıdaki linke tıklayın
                          </p>
                          <button 
                            onClick={() => window.open(project.url, '_blank')}
                            className="bg-white !text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium mt-4 transition-colors duration-300 border border-gray-300"
                            style={{color: 'black'}}
                          >
                            Siteyi Aç
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-white/70">
                      Bu proje için henüz canlı site linki mevcut değil.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Code Tab */}
            {activeTab === 'code' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Kod Detayları ve Teknolojiler
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      🛠️ Kullanılan Teknolojiler
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      🎯 Geliştirme Zorlukları
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      {projectDetails.challenges}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    📝 Kod Açıklaması
                  </h4>
                  <div className="bg-black/50 backdrop-blur-md text-white rounded-lg p-6 font-mono text-sm overflow-x-auto border border-white/20">
                    <pre className="whitespace-pre-wrap">{projectDetails.codeExplanation}</pre>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Proje Özellikleri
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    🚀 Proje Başarıları
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• Modern ve responsive tasarım</li>
                    <li>• Hızlı yükleme süreleri</li>
                    <li>• SEO optimizasyonu</li>
                    <li>• Kullanıcı dostu arayüz</li>
                    <li>• Cross-browser uyumluluğu</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
