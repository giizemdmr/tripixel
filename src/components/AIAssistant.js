import React, { useState, useRef, useEffect } from 'react';
import { FaHeadset, FaTimes, FaPaperPlane, FaUser, FaSpinner, FaWhatsapp } from 'react-icons/fa';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Merhaba! Ben Trivess Canlı Destek Asistanı. Size nasıl yardımcı olabilirim? Web tasarımı, dijital pazarlama, SEO veya e-ticaret konularında sorularınızı yanıtlayabilirim.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage.content);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('web tasarım') || input.includes('website') || input.includes('site')) {
      return `Web tasarımı hizmetlerimiz hakkında bilgi vereyim:

🎨 **Web Tasarım Süreci:**
• Analiz ve planlama (1-2 gün)
• Tasarım taslağı (3-5 gün)
• Geliştirme (1-2 hafta)
• Test ve optimizasyon (2-3 gün)

💰 **Fiyatlandırma:**
• Kurumsal site: 5,000-15,000 TL
• E-ticaret: 15,000-50,000 TL
• Özel projeler: Teklif üzerine

⏱️ **Teslimat süresi:** 2-6 hafta

Detaylı bilgi için iletişime geçebilirsiniz!`;
    } else if (input.includes('seo') || input.includes('arama motoru') || input.includes('google')) {
      return `SEO hizmetlerimiz hakkında bilgi:

🔍 **SEO Paketleri:**
• **Başlangıç:** 2,000 TL/ay
  - Anahtar kelime analizi
  - İçerik optimizasyonu
  - Teknik SEO düzenlemeleri

• **Gelişmiş:** 4,000 TL/ay
  - Link building
  - İçerik pazarlaması
  - Performans takibi

• **Premium:** 8,000 TL/ay
  - Tam kapsamlı SEO
  - Raporlama
  - Danışmanlık

📈 **İlk sonuçlar:** 3-6 ay içinde görülür`;
    } else if (input.includes('pazarlama') || input.includes('sosyal medya') || input.includes('reklam')) {
      return `Dijital pazarlama hizmetlerimiz:

📱 **Sosyal Medya Yönetimi:**
• İçerik üretimi ve paylaşımı
• Topluluk yönetimi
• Reklam kampanyaları
• Performans analizi

💰 **Fiyatlar:**
• Temel paket: 3,000 TL/ay
• Gelişmiş paket: 6,000 TL/ay
• Premium paket: 12,000 TL/ay

🎯 **Google Ads & Facebook Ads:**
• Kampanya tasarımı
• Bütçe yönetimi
• ROI optimizasyonu

Hangi platformda çalışmak istiyorsunuz?`;
    } else if (input.includes('e-ticaret') || input.includes('ecommerce') || input.includes('online satış')) {
      return `E-ticaret çözümlerimiz:

🛒 **E-ticaret Platformları:**
• WooCommerce (WordPress)
• Shopify
• PrestaShop
• Özel geliştirme

💳 **Özellikler:**
• Güvenli ödeme sistemleri
• Stok yönetimi
• Müşteri yönetimi
• Analitik ve raporlama
• Mobil uyumluluk

💰 **Fiyatlandırma:**
• Temel e-ticaret: 15,000-25,000 TL
• Gelişmiş e-ticaret: 25,000-50,000 TL
• Özel çözümler: Teklif üzerine

⏱️ **Teslimat:** 4-8 hafta`;
    } else if (input.includes('fiyat') || input.includes('ücret') || input.includes('maliyet')) {
      return `Fiyatlandırma hakkında bilgi:

💼 **Hizmet Fiyatları:**

**Web Tasarımı:**
• Kurumsal site: 5,000-15,000 TL
• E-ticaret: 15,000-50,000 TL

**SEO:**
• Başlangıç: 2,000 TL/ay
• Gelişmiş: 4,000 TL/ay
• Premium: 8,000 TL/ay

**Sosyal Medya:**
• Temel: 3,000 TL/ay
• Gelişmiş: 6,000 TL/ay
• Premium: 12,000 TL/ay

📞 **Özel teklif için:** İletişime geçin!`;
    } else if (input.includes('iletişim') || input.includes('telefon') || input.includes('email') || input.includes('adres')) {
      return `İletişim bilgilerimiz:

📞 **Telefon:** 0539 616 63 42
📧 **E-posta:** trivess@gmail.com
📍 **Adres:** İstanbul / Pendik, Türkiye

⏰ **Çalışma saatleri:**
Pazartesi - Cuma: 09:00 - 18:00
Cumartesi: 10:00 - 14:00

💬 **Online destek:** Bu sohbet üzerinden 7/24`;
    } else if (input.includes('merhaba') || input.includes('selam') || input.includes('nasılsın')) {
      return 'Merhaba! Ben Trivess Canlı Destek Asistanı. Size web tasarımı, dijital pazarlama, SEO ve e-ticaret konularında yardımcı olabilirim. Hangi konuda bilgi almak istiyorsunuz?';
    } else if (input.includes('teşekkür') || input.includes('sağol') || input.includes('thanks')) {
      return 'Rica ederim! Başka bir sorunuz varsa yardımcı olmaktan mutluluk duyarım. Trivess olarak sizin için buradayız! 😊';
    } else {
      return `Bu konuda size yardımcı olabilirim! Trivess olarak şu hizmetleri sunuyoruz:

🎨 **Web Tasarımı ve Geliştirme**
📱 **Dijital Pazarlama**
🔍 **SEO (Arama Motoru Optimizasyonu)**
🛒 **E-ticaret Çözümleri**

Hangi konuda detaylı bilgi almak istiyorsunuz? Size en uygun çözümü önerebilirim.`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '05396166342';
    const message = 'Merhaba! Trivess hakkında bilgi almak istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(true)} 
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 24px rgba(107, 114, 128, 0.3)',
          fontSize: '1.8rem',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="Canlı Destek"
      >
        <FaHeadset />
      </button>

      {/* WhatsApp Button */}
      <button 
        onClick={openWhatsApp} 
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '110px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#25D366',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 24px rgba(37, 211, 102, 0.3)',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="WhatsApp'ta Mesaj Gönder"
      >
        <FaWhatsapp />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '110px',
          right: '32px',
          width: '350px',
          height: '480px',
          background: 'white',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          border: '1px solid #e5e7eb',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Header */}
          <div style={{
            padding: '16px',
            borderBottom: '1px solid #e5e7eb',
            background: 'linear-gradient(90deg, #6b7280 0%, #4b5563 100%)',
            color: 'white',
            borderTopLeftRadius: '18px',
            borderTopRightRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{display:'flex',alignItems:'center',gap:'8px', fontSize: '0.95rem', fontWeight: '600'}}>
              <FaHeadset /> Canlı Destek
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{
                background:'none',
                border:'none',
                color:'white',
                fontSize:'1.3rem',
                cursor:'pointer'
              }}
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            background: '#f8f9fa',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{
                display:'flex',
                justifyContent: msg.type==='user'?'flex-end':'flex-start'
              }}>
                <div style={{
                  background: '#ffffff',
                  color: '#000000 !important',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  maxWidth: '80%',
                  fontSize: '0.9rem',
                  marginBottom: '2px',
                  display:'flex',
                  alignItems:'center',
                  gap:'6px',
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }} className="chat-message">
                  {msg.type==='bot' && <FaHeadset style={{fontSize:'0.9rem', color: '#6b7280'}} />}
                  <span style={{whiteSpace:'pre-line', color: '#000000 !important'}} className="chat-message">{msg.content}</span>
                  {msg.type==='user' && <FaUser style={{fontSize:'0.9rem', color: '#6b7280'}} />}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{
                  background:'#ffffff',
                  color:'#000000 !important',
                  borderRadius:'12px',
                  padding:'10px 14px',
                  display:'flex',
                  alignItems:'center',
                  gap:'6px',
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }} className="chat-loading">
                  <FaHeadset style={{fontSize:'0.9rem', color: '#6b7280'}} />
                  <FaSpinner style={{
                    fontSize:'0.9rem',
                    animation:'spin 1s linear infinite',
                    color: '#6b7280'
                  }} />
                  <span style={{color: '#000000 !important'}} className="chat-loading">Yazıyor...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid #e5e7eb',
            background: '#fff',
          }}>
            <form 
              style={{display:'flex',alignItems:'center'}} 
              onSubmit={e => {e.preventDefault();handleSendMessage();}}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Mesajınızı yazın..."
                className="chat-input"
                style={{
                  width: 'calc(100% - 48px)',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '0.9rem',
                  outline: 'none',
                  marginRight: '8px',
                  color: '#000000 !important',
                  backgroundColor: '#ffffff',
                }}
                autoFocus
              />
              <button 
                type="submit" 
                style={{
                  background: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }} 
                disabled={!inputValue.trim() || isLoading} 
                title="Gönder"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes spin { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        
        /* Force all text to be black */
        .chat-message, .chat-message * {
          color: #000000 !important;
        }
        
        .chat-input, .chat-input::placeholder {
          color: #000000 !important;
        }
        
        .chat-loading {
          color: #000000 !important;
        }
      `}</style>
    </>
  );
};

export default AIAssistant; 