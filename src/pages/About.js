import { useEffect, useState } from "react"

const team = [
    {
      name: "Gizem Demir",
      role: "Frontend Developer & UX Designer",
      image: "/images/gizem.jpg",
      bio: "Tutkulu bir geliştirici. Trivess'in arayüz ve kullanıcı deneyimi sorumlusu."
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
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])

    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 pt-20">
          {/* Hero Section */}
          <section className={`py-20 ${isVisible ? 'fade-in' : ''}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-8">
                  Hakkımızda
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  Trivess, sadece web siteleri tasarlayan bir ekip değil; fikirleri görünür kılan, sadeliği estetikle buluşturan bir tasarım atölyesidir.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-8">
                    Biz Kimiz?
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      İster yeni bir girişim, ister büyümek isteyen bir marka olun — biz, sizi yansıtan sade, modern ve işlevsel tasarımlar üretiriz.
                    </p>
                    <p>
                      Her projeye "nasıl daha iyi anlatırız?" sorusuyla yaklaşır, dijital kimliğinizi sizinle birlikte şekillendiririz. Çünkü bizim için önemli olan sadece bir site değil, doğru bir iz bırakmaktır.
                    </p>
                    <p>
                      2020 yılından bu yana, dijital dünyada markaların sesini duyurmak için çalışıyoruz. Deneyimli ekibimizle her projeye özel çözümler geliştiriyor, müşterilerimizin başarısı için elimizden geleni yapıyoruz.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 float"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                    alt="Trivess Ekibi" 
                    className="relative rounded-3xl shadow-2xl border border-white/20 w-full object-cover float"
                  />
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Mission */}
                <div className="card card-hover p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-gray-800 dark:text-white mb-6">
                    Misyonumuz
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Her markanın benzersiz hikayesini dijital dünyada en etkili şekilde anlatmak. Müşterilerimizin vizyonunu anlayarak, onların hedeflerine ulaşmasına yardımcı olacak yaratıcı ve işlevsel çözümler üretmek.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Yaratıcı ve özgün tasarımlar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Kullanıcı odaklı yaklaşım</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Kaliteli ve güvenilir hizmet</span>
                    </div>
                  </div>
                </div>

                {/* Vision */}
                <div className="card card-hover p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-gray-800 dark:text-white mb-6">
                    Vizyonumuz
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Dijital tasarım alanında öncü ve güvenilir bir marka olmak. Türkiye'nin en yaratıcı ve yenilikçi tasarım atölyesi olarak, uluslararası standartlarda projeler üretmek ve sektörde fark yaratmak.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Sektörde öncü olmak</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Uluslararası standartlar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Sürekli yenilik ve gelişim</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-gray-800 dark:text-white mb-6">
                  Değerlerimiz
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Çalışma prensiplerimizi oluşturan temel değerler
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card card-hover p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Kalite</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Her projede en yüksek kalite standartlarını hedefliyoruz
                  </p>
                </div>

                <div className="card card-hover p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Yaratıcılık</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Benzersiz ve özgün tasarımlar üretiyoruz
                  </p>
                </div>

                <div className="card card-hover p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Zamanında Teslimat</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Projeleri belirlenen sürede tamamlıyoruz
                  </p>
                </div>

                <div className="card card-hover p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">İşbirliği</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Müşterilerimizle yakın işbirliği içinde çalışıyoruz
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="relative z-10 text-center py-16 px-8">
                  <h3 className="text-4xl font-black text-white mb-6">
                    Projenizi Birlikte Gerçekleştirelim
                  </h3>
                  <p className="text-xl mb-10 text-indigo-100 max-w-2xl mx-auto">
                    Hikayenizi dinlemek ve dijital dünyada nasıl öne çıkabileceğinizi keşfetmek için sizi bekliyoruz.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => window.location.href = '/#contact'}
                      className="btn bg-white text-indigo-600 hover:bg-gray-100 text-lg px-10 py-5 font-bold"
                    >
                      İletişime Geçin
                    </button>
                    <button 
                      onClick={() => window.location.href = '/#services'}
                      className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 text-lg px-10 py-5"
                    >
                      Hizmetlerimizi Görün
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  