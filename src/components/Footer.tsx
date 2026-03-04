import { Phone, Mail, Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>insuro Versicherungsmakler GmbH</h3>
            <p>
              Ihr verlässlicher Partner für Bestandsnachfolge im Versicherungsmakler-Bereich. 
              Über 25 Jahre Erfahrung, 1.600+ Makler in Zusammenarbeit.
            </p>
          </div>

          <div className="footer-section">
            <h3>Kontakt</h3>
            <p>
              <Phone size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
              <a href="tel:022182829419">0221 / 82829419</a>
            </p>
            <p>
              <Mail size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
              <a href="mailto:puettmann@insurolink.de">puettmann@insurolink.de</a>
            </p>
          </div>

          <div className="footer-section">
            <h3>Standorte</h3>
            <p>
              <Building2 size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
              Büro Köln
            </p>
            <p>
              <Building2 size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
              Büro Heidelberg
            </p>
          </div>

          <div className="footer-section">
            <h3>Rechtliches</h3>
            <p><a href="#impressum">Impressum</a></p>
            <p><a href="#datenschutz">Datenschutz</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} insuro Versicherungsmakler GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
