import { Users, Award, Building2 } from 'lucide-react';

const teamMembers = [
  { name: 'Manuel Kunz', role: 'Geschäftsführer' },
  { name: 'Till Püttmann', role: 'Geschäftsführer' },
  { name: 'Jan Dinner', role: 'Gründer' },
  { name: 'Uta Heinrich', role: 'Prokuristin' },
  { name: 'Mico Kikic', role: 'Key Account Manager' },
  { name: 'Claudia Fromm', role: 'Innendienst' },
  { name: 'Timo Seibert', role: 'Team' },
  { name: 'Denno Probst', role: 'Team' },
  { name: 'Michel Kornprobst', role: 'Team' },
];

export function Hero() {
  return (
    <section className="hero" id="team">
      <div className="container">
        <div className="hero-content">
          <h1>insuro Versicherungsmakler GmbH</h1>
          <p className="hero-subtitle">
            Ihr Lebenswerk in guten Händen – Über 25 Jahre Erfahrung als Bestandsnachfolger
          </p>
          <a href="#contact" className="btn-primary">
            Kontakt aufnehmen
          </a>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
            Unser Team
          </h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-avatar">
                  <Users size={32} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="stat-card" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem' }}>
            <Award style={{ margin: '0 auto 0.5rem', width: '48px', height: '48px', color: '#c9a227' }} />
            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#c9a227' }}>25+</span>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Jahre Erfahrung</p>
          </div>
          <div className="stat-card" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem' }}>
            <Users style={{ margin: '0 auto 0.5rem', width: '48px', height: '48px', color: '#c9a227' }} />
            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#c9a227' }}>1.600+</span>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Makler in Zusammenarbeit</p>
          </div>
          <div className="stat-card" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem' }}>
            <Building2 style={{ margin: '0 auto 0.5rem', width: '48px', height: '48px', color: '#c9a227' }} />
            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#c9a227' }}>2</span>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Standorte (Köln & Heidelberg)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
