import { useState, useEffect } from 'react';
import { MessageCircle, X, Clock } from 'lucide-react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`whatsapp-container ${isVisible ? 'visible' : ''}`}>
      {/* Chat Preview Popup */}
      <div className={`whatsapp-popup ${isOpen ? 'open' : ''}`}>
        <div className="whatsapp-popup-header">
          <div className="whatsapp-popup-avatar">
            <MessageCircle size={24} />
          </div>
          <div className="whatsapp-popup-info">
            <h4>insuro Versicherungsmakler</h4>
            <p>
              <span className="online-indicator"></span>
              Online
            </p>
          </div>
          <button 
            className="whatsapp-popup-close" 
            onClick={toggleChat}
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
        </div>
        <div className="whatsapp-popup-body">
          <div className="whatsapp-message">
            <p>Guten Tag! 👋</p>
            <p>Wie können wir Ihnen helfen? Schreiben Sie uns für eine unverbindliche Beratung.</p>
            <span className="whatsapp-message-time">
              {new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
        <div className="whatsapp-popup-footer">
          <a 
            href="https://wa.me/49022182829419?text=Guten%20Tag%2C%20ich%20interessiere%20mich%20für%20eine%20Beratung%20zur%20Bestandsnachfolge."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-start-chat"
          >
            <MessageCircle size={18} />
            WhatsApp Nachricht senden
          </a>
          <p className="whatsapp-response-time">
            <Clock size={14} />
            Antwort innerhalb weniger Stunden
          </p>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        className={`whatsapp-button ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="WhatsApp Chat öffnen"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
