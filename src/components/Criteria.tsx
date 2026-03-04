import { 
  DollarSign, 
  Users, 
  FileSpreadsheet, 
  BarChart3, 
  Link, 
  Monitor, 
  TrendingUp 
} from 'lucide-react';

const criteria = [
  {
    icon: DollarSign,
    title: 'Jährliche Courtageeinnahmen',
    description: 'BP (Bestandsprovision) & AP (Abschlussprovision) getrennt ausgewiesen'
  },
  {
    icon: Users,
    title: 'Kundenanzahl',
    description: 'Privat- und Gewerbekunden, aufgeteilt in aktiv und passiv'
  },
  {
    icon: FileSpreadsheet,
    title: 'Vertragsstruktur nach Sparten',
    description: 'KV (Krankenversicherung), LV (Lebensversicherung), SHU (Sach-HUK) etc.'
  },
  {
    icon: BarChart3,
    title: 'Altersstruktur der Kunden',
    description: 'Übersicht über die Altersverteilung Ihrer Kundenbasis'
  },
  {
    icon: Link,
    title: 'Pools und Direktvereinbarungen',
    description: 'Vorhandene Partnerschaften mit Anteilen und Konditionen'
  },
  {
    icon: Monitor,
    title: 'Genutzte Technik',
    description: 'MVP (Maklerverwaltungsprogramm), Vergleichsrechner, digitale Tools'
  },
  {
    icon: TrendingUp,
    title: 'Bei Share-Deal zusätzlich',
    description: 'Jahresüberschuss, GF-Gehalt, Investitionen der letzten Jahre'
  }
];

export function Criteria() {
  return (
    <section id="criteria" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">Für Makler: Was wird für die Bewertung benötigt?</h2>
        <p className="section-subtitle">
          Um Ihren Bestand fair und marktgerecht zu bewerten, benötigen wir folgende Informationen. 
          Selbstverständlich werden alle Daten streng vertraulich behandelt.
        </p>

        <div className="criteria-list">
          {criteria.map((item, index) => (
            <div key={index} className="criteria-item">
              <div className="criteria-icon">
                <item.icon size={20} />
              </div>
              <div>
                <h3 style={{ color: '#1e3a5f', marginBottom: '0.25rem', fontSize: '1.1rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#5a6c7d', fontSize: '0.95rem' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
