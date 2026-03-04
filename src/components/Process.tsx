import { Handshake, Search, FileText, CheckCircle, Users } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Handshake,
    title: 'Kennenlernen & Vertraulichkeit',
    description: 'In einem ersten persönlichen Gespräch lernen wir uns kennen und besprechen Ihre Ziele unter Wahrung vollster Vertraulichkeit.'
  },
  {
    number: 2,
    icon: Search,
    title: 'Analyse & Bewertung des Bestands',
    description: 'Wir führen eine detaillierte Analyse Ihres Bestands durch und erstellen eine faire, marktgerechte Bewertung.'
  },
  {
    number: 3,
    icon: FileText,
    title: 'Übergabeplanung & Absichtserklärung',
    description: 'Gemeinsam erarbeiten wir einen detaillierten Übergabeplan und fixieren die wesentlichen Punkte in einer Absichtserklärung.'
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Vertrag & Umsetzung',
    description: 'Nach Vertragsunterzeichnung beginnen wir mit der schrittweisen Umsetzung – transparent und in enger Abstimmung mit Ihnen.'
  },
  {
    number: 5,
    icon: Users,
    title: 'Kundenübernahme & Betreuung',
    description: 'Wir übernehmen die Betreuung Ihrer Kunden und stellen sicher, dass der Übergang reibungslos verläuft.'
  }
];

export function Process() {
  return (
    <section id="process">
      <div className="container">
        <h2 className="section-title">Ablauf der Bestandsübertragung</h2>
        <p className="section-subtitle">
          Ein bewährter Prozess in 5 Schritten – transparent, fair und auf Ihre Bedürfnisse zugeschnitten. 
          <strong> Ø Dauer: 6–9 Monate</strong> (individuell planbar)
        </p>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="card process-step">
              <div className="step-number">{step.number}</div>
              <step.icon size={32} style={{ margin: '0 auto 1rem', color: '#1e3a5f' }} />
              <h3>{step.title}</h3>
              <p style={{ color: '#5a6c7d', fontSize: '0.95rem' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
