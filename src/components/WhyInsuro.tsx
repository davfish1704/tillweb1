import { Phone, RefreshCw, UserCheck, Laptop } from 'lucide-react';

const benefits = [
  {
    icon: Phone,
    title: 'Langfristige Erreichbarkeit',
    description: 'Ihre Kunden erreichen echte Ansprechpartner – nicht nur anonyme Hotlines. Persönliche Betreuung steht bei uns an erster Stelle.'
  },
  {
    icon: RefreshCw,
    title: 'Jährliche Vertragsoptimierung',
    description: 'Wir überprüfen und optimieren die Verträge Ihrer Kunden jährlich, um stets die besten Konditionen zu sichern.'
  },
  {
    icon: UserCheck,
    title: 'Persönliche Übergabe',
    description: 'Bei der Übergabe nehmen wir persönlich Kontakt zu jedem einzelnen Kunden auf – für eine nahtlose Transition.'
  },
  {
    icon: Laptop,
    title: 'Digital & Persönlich',
    description: 'Die perfekte Kombination aus digitalen Möglichkeiten und persönlicher Nahbarkeit für maximale Effizienz.'
  }
];

export function WhyInsuro() {
  return (
    <section id="why" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">Warum insuro?</h2>
        <p className="section-subtitle">
          Als erfahrener Bestandsnachfolger bieten wir Ihnen nicht nur eine Übernahme, 
          sondern eine langfristige Partnerschaft auf Augenhöhe.
        </p>

        <div className="features-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="card feature-card">
              <div className="feature-icon">
                <benefit.icon size={32} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
