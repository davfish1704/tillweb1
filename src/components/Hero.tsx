import { Users, Award, Building2, User } from 'lucide-react';

// Team members with neutral grey silhouette placeholders
// Using simple initials on grey background - no faces, no skin tones
const teamMembers = [
  { name: 'Manuel Kunz', role: 'Geschäftsführer', initials: 'MK' },
  { name: 'Till Püttmann', role: 'Geschäftsführer', initials: 'TP' },
  { name: 'Jan Dinner', role: 'Gründer', initials: 'JD' },
  { name: 'Uta Heinrich', role: 'Prokuristin', initials: 'UH' },
  { name: 'Mico Kikic', role: 'Key Account Manager', initials: 'MK' },
  { name: 'Claudia Fromm', role: 'Innendienst', initials: 'CF' },
  { name: 'Timo Seibert', role: 'Team', initials: 'TS' },
  { name: 'Denno Probst', role: 'Team', initials: 'DP' },
  { name: 'Michel Kornprobst', role: 'Team', initials: 'MK' },
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
                <div className="team-member-photo">
                  {/* Grey silhouette placeholder with initials */}
                  <div className="team-silhouette">
                    <User size={40} strokeWidth={1.5} />
                  </div>
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
