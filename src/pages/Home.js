import ProjectCard from "../components/ProjectCard"
import data from "../data/projects.json"
import { useEffect, useState } from "react"

// Get top 6 projects by votes
const featuredProjects = data
  .sort((a, b) => b.votes - a.votes)
  .slice(0, 6)

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedService, setSelectedService] = useState(0)
  const [openFAQ, setOpenFAQ] = useState(null)

  const services = [
    {
      title: "Web Tasarımı Ve Geliştirme",
      desc: "Kurumsal kimliğinizi yansıtan, modern ve etkili bir web sitesi ile dijital dünyada fark yaratın. Mobil uyumlu, kullanıcı dostu ve SEO temelli tasarım.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      detail: "#web-design"
    },
    {
      title: "Dijital Pazarlama",
      desc: "Sosyal medya yönetimi, reklam kampanyaları ve içerik stratejileriyle markanızı dijitalde büyütün.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ),
      detail: "#digital-marketing"
    },
    {
      title: "SEO (Arama Motoru Optimizasyonu)",
      desc: "Arama motorlarında üst sıralara çıkmak için teknik ve içerik odaklı SEO çözümleri.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      ),
      detail: "#seo"
    },
    {
      title: "E-Ticaret Çözümleri",
      desc: "Güvenli, hızlı ve ölçeklenebilir e-ticaret altyapıları ile online satışlarınızı artırın.",
      image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v7m4 0H9" /></svg>
      ),
      detail: "#ecommerce"
    }
  ]

  const faqData = [
    {
      id: 1,
      question: "Web sitesi tasarımı ne kadar sürer?",
      answer: "Projenin karmaşıklığına bağlı olarak 2-6 hafta arasında tamamlanır. Basit kurumsal siteler 2-3 hafta, e-ticaret siteleri 4-6 hafta sürer."
    },
    {
      id: 2,
      question: "SEO çalışması ne kadar sürede sonuç verir?",
      answer: "SEO uzun vadeli bir süreçtir. İlk sonuçları 3-6 ay içinde görmeye başlarsınız. Tam etki için 6-12 ay önerilir."
    },
    {
      id: 3,
      question: "Sosyal medya yönetimi paketleri nelerdir?",
      answer: "Aylık, 3 aylık ve yıllık paketlerimiz mevcuttur. İçerik üretimi, paylaşım, etkileşim takibi ve raporlama hizmetleri dahildir."
    },
    {
      id: 4,
      question: "Web siteniz mobil uyumlu mu?",
      answer: "Evet, tüm web sitelerimiz responsive tasarıma sahiptir ve tüm cihazlarda mükemmel görünür."
    },
    {
      id: 5,
      question: "Fiyatlandırma nasıl belirleniyor?",
      answer: "Projenin kapsamı, özellikleri ve süresine göre özel fiyatlandırma yapıyoruz. Ücretsiz danışmanlık için iletişime geçebilirsiniz."
    },
    {
      id: 6,
      question: "Destek hizmeti veriyor musunuz?",
      answer: "Evet, proje tesliminden sonra 3 ay ücretsiz destek hizmeti veriyoruz. Ayrıca bakım paketleri de mevcuttur."
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'web-design', 'digital-marketing', 'seo', 'projects', 'faq', 'contact']
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div> */}

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
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

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {['home', 'about', 'services', 'projects', 'faq', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? 'bg-indigo-600 scale-125'
                  : 'bg-gray-400 hover:bg-indigo-400 hover:scale-110'
              }`}
              title={section === 'home' ? 'Anasayfa' : 
                    section === 'about' ? 'Hakkımızda' :
                    section === 'services' ? 'Hizmetlerimiz' :
                    section === 'projects' ? 'Projeler' :
                    section === 'faq' ? 'SSS' :
                    section === 'contact' ? 'Bize Ulaşın' : section}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image + Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80" alt="Hero" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 flex flex-col items-start justify-center">
            <span className="text-lime-300 font-bold text-lg mb-4 tracking-widest flex items-center gap-2">
              <svg className="w-4 h-4 text-lime-300" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2" /></svg>
              TRIVESS DESIGN
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Her tasarım, bir imzamızdır.
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              Gerçek projeler, gerçek sonuçlar. Markanızı dijitalde öne çıkaracak modern ve işlevsel tasarımlar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center gap-2"
                style={{boxShadow:'0 4px 24px 0 rgba(90,106,133,0.15)'}}
              >
                Projelerimize Göz Atın
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#5a6a85] text-[#5a6a85] bg-transparent btn-service hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Bize Ulaşın
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="card card-hover p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black text-gray-800 dark:text-white mb-2">150+</h3>
                <p className="text-gray-600 dark:text-gray-400">Mutlu Müşteri</p>
              </div>
              
              <div className="card card-hover p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black text-gray-800 dark:text-white mb-2">200+</h3>
                <p className="text-gray-600 dark:text-gray-400">Tamamlanan Proje</p>
              </div>
              
              <div className="card card-hover p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black text-gray-800 dark:text-white mb-2">3+</h3>
                <p className="text-gray-600 dark:text-gray-400">Yıllık Deneyim</p>
              </div>
              
              <div className="card card-hover p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black text-gray-800 dark:text-white mb-2">%100</h3>
                <p className="text-gray-600 dark:text-gray-400">Müşteri Memnuniyeti</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black text-gray-800 dark:text-white mb-8">
                  Hakkımızda
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Trivess, sadece web siteleri tasarlayan bir ekip değil; fikirleri görünür kılan, sadeliği estetikle buluşturan bir tasarım atölyesidir.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  İster yeni bir girişim, ister büyümek isteyen bir marka olun — biz, sizi yansıtan sade, modern ve işlevsel tasarımlar üretiriz.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                  Her projeye "nasıl daha iyi anlatırız?" sorusuyla yaklaşır, dijital kimliğinizi sizinle birlikte şekillendiririz. Çünkü bizim için önemli olan sadece bir site değil, doğru bir iz bırakmaktır.
                </p>
                <button 
                  onClick={() => window.location.href = '/about'}
                  className="btn btn-primary text-lg px-8 py-4 group"
                >
                  <span className="relative z-10">Hakkımızda</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 float"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Ekip Çalışması" 
                  className="relative rounded-3xl shadow-2xl border border-white/20 w-full object-cover float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* HİZMETLERİMİZ SECTION */}
        <section id="services" className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Service List */}
            <div className="flex flex-col gap-6">
              {services.map((srv, i) => (
                <button
                  key={srv.title}
                  onClick={() => setSelectedService(i)}
                  className={`flex items-center justify-between px-8 py-6 rounded-3xl text-lg font-semibold transition-all duration-300 shadow-none border-none outline-none gap-4 ${
                    selectedService === i
                      ? 'btn-service-active'
                      : 'bg-gray-900/80 text-white btn-service hover:scale-105'
                  }`}
                  style={{boxShadow: selectedService === i ? '0 4px 24px 0 rgba(90,106,133,0.10)' : undefined}}
                >
                  <span className="flex items-center gap-4">
                    <span className={`text-xl font-bold ${selectedService === i ? 'text-white' : 'text-gray-300'}`}>{i+1}</span>
                    {srv.title}
                  </span>
                  <span className={`rounded-full w-10 h-10 flex items-center justify-center ${selectedService === i ? 'bg-[#5a6a85] text-white' : 'bg-gray-800 text-[#5a6a85]'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </button>
              ))}
            </div>
            {/* Right: Service Card */}
            <div className="relative flex items-center justify-center">
              <img src={services[selectedService].image} alt={services[selectedService].title} className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl opacity-60 blur-sm" />
              <div className="relative z-10 p-10 rounded-3xl glass shadow-2xl max-w-lg w-full flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 rounded-xl bg-lime-300 flex items-center justify-center text-gray-900 text-2xl">
                    {services[selectedService].icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{services[selectedService].title}</h3>
                </div>
                <p className="text-lg text-gray-200 mb-4">{services[selectedService].desc}</p>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold btn-service hover:scale-105 transition-all text-base w-max"
                  onClick={() => window.location.hash = services[selectedService].detail}
                >
                  Hizmet Detay
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROJELERİMİZ SECTION */}
        <section id="projects" className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
              <div>
                <span className="flex items-center gap-2 text-base font-semibold mb-2 text-[#5a6a85]">
                  <svg className="w-4 h-4 text-[#5a6a85]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2" /></svg>
                  Projelerimiz
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-0 text-[#5a6a85] leading-tight">
                  Farklı sektörlerde geliştirdiğimiz projelerle<br />başarı hikayelerine ortak oluyoruz.
                </h2>
              </div>
              <button
                className="btn-service px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center gap-2"
                style={{boxShadow:'0 4px 24px 0 rgba(90,106,133,0.10)'}}
                onClick={() => window.location.hash = '#projects'}
              >
                Tüm Projelerimiz
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard project={project} titleColor="#5a6a85" buttonClass="btn-service" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gray-800 dark:text-white mb-6">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Merak ettiğiniz soruların cevapları
              </p>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq) => (
                <div key={faq.id} className="card overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between transition-colors duration-200 group faq-button"
                  >
                    <h3 className="text-lg font-bold pr-4">
                      {faq.question}
                    </h3>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6">
                Bize <span className="gradient-text">Ulaşın</span>
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Projeniz hakkında konuşmak ister misiniz? Ücretsiz danışmanlık için hemen iletişime geçin!
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email</h3>
                    <p className="text-white">info@trivess.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Telefon</h3>
                    <p className="text-white">+90 555 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Adres</h3>
                    <p className="text-white">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-3xl p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-full">
                      <input 
                        type="text" 
                        placeholder="Adınız" 
                        className="form-input w-full"
                      />
                    </div>
                    <div className="w-full">
                      <input 
                        type="email" 
                        placeholder="Email Adresiniz" 
                        className="form-input w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <input 
                      type="text" 
                      placeholder="Konu" 
                      className="form-input w-full"
                    />
                  </div>
                  <div className="w-full">
                    <textarea 
                      placeholder="Mesajınız" 
                      rows="6"
                      className="form-input w-full resize-none"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button type="submit" className="btn btn-primary w-full text-lg py-4">
                      Mesaj Gönder
                    </button>
                  </div>
                </form>
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
                <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
                  Hikayenizi dinlemek ve dijital dünyada nasıl öne çıkabileceğinizi keşfetmek için sizi bekliyoruz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="btn cta-contact text-lg px-10 py-5 font-bold"
                  >
                    İletişime Geçin
                  </button>
                  <button 
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
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
