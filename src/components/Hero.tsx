import { Users, Award, Building2 } from 'lucide-react';

// Team members with professional avatar photos using DiceBear API
// These generate consistent, professional-looking avatars based on names
const teamMembers = [
  { 
    name: 'Manuel Kunz', 
    role: 'Geschäftsführer',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=ManuelKunz&backgroundColor=e5e7eb&hairColor=2d2d2d&clothing=blazerAndShirt'
  },
  { 
    name: 'Till Püttmann', 
    role: 'Geschäftsführer',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=TillPuettmann&backgroundColor=d1d5db&hairColor=4a4a4a&clothing=blazerAndShirt'
  },
  { 
    name: 'Jan Dinner', 
    role: 'Gründer',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=JanDinner&backgroundColor=e5e7eb&hairColor=1a1a1a&clothing=collarAndSweater'
  },
  { 
    name: 'Uta Heinrich', 
    role: 'Prokuristin',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=UtaHeinrich&backgroundColor=f3e8ff&hairColor=6b4423&clothing=blazerAndShirt'
  },
  { 
    name: 'Mico Kikic', 
    role: 'Key Account Manager',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=MicoKikic&backgroundColor=dbeafe&hairColor=2d2d2d&clothing=blazerAndShirt'
  },
  { 
    name: 'Claudia Fromm', 
    role: 'Innendienst',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=ClaudiaFromm&backgroundColor=fce7f3&hairColor=8b4513&clothing=collarAndSweater'
  },
  { 
    name: 'Timo Seibert', 
    role: 'Team',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=TimoSeibert&backgroundColor=e0e7ff&hairColor=4a4a4a&clothing=blazerAndShirt'
  },
  { 
    name: 'Denno Probst', 
    role: 'Team',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=DennoProbst&backgroundColor=ecfdf5&hairColor=2d2d2d&clothing=collarAndSweater'
  },
  { 
    name: 'Michel Kornprobst', 
    role: 'Team',
    photo: 'https://api.dicebear.com/7.x/micah/svg?seed=MichelKornprobst&backgroundColor=fef3c7&hairColor=5a5a5a&clothing=blazerAndShirt'
  },
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
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="team-member-photo-fallback" style={{ display: 'none' }}>
                    <Users size={32} />
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
