import { Shield, Clock, TrendingUp, Headphones } from 'lucide-react';

export function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Über uns</h2>
        <p className="section-subtitle">
          Seit über 25 Jahren sind wir als erfahrener Bestandsnachfolger im Maklermarkt tätig. 
          Mit modernster digitaler Infrastruktur und persönlicher Betreuung stehen wir Ihnen zur Seite.
        </p>

        <div className="features-grid">
          <div className="card feature-card">
            <div className="feature-icon">
              <Clock size={32} />
            </div>
            <h3>25+ Jahre Erfahrung</h3>
            <p>
              Seit über zwei Jahrzehnten begleiten wir Versicherungsmakler bei der Bestandsnachfolge 
              und wissen genau, worauf es ankommt.
            </p>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">
              <Headphones size={32} />
            </div>
            <h3>Persönliche Betreuung</h3>
            <p>
              Wir legen großen Wert auf direkten Kontakt und persönliche Betreuung – 
              bei uns gibt es keine anonymen Callcenter.
            </p>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">
              <TrendingUp size={32} />
            </div>
            <h3>Modernste Infrastruktur</h3>
            <p>
              Digitale Prozesse kombiniert mit persönlicher Nähe. Wir nutzen modernste 
              Technologie für eine effiziente Zusammenarbeit.
            </p>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">
              <Shield size={32} />
            </div>
            <h3>Vertrauen & Diskretion</h3>
            <p>
              Ihre Daten und die Ihrer Kunden sind bei uns in sicheren Händen. 
              Diskretion ist für uns selbstverständlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
