import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaHandshake, FaChartLine, FaUsers, FaCheckCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Careers = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [whyRef, whyInView] = useInView();
  const [openingsRef, openingsInView] = useInView();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const perks = [
    { icon: <FaChartLine size={28} />, title: 'Growth Opportunity', desc: 'Join a growing company with room to advance your career in logistics.' },
    { icon: <FaHandshake size={28} />, title: 'Team Culture', desc: 'Work alongside dedicated professionals who value collaboration and respect.' },
    { icon: <FaTruck size={28} />, title: 'Industry Impact', desc: 'Play a key role in keeping supply chains moving across the nation.' },
    { icon: <FaUsers size={28} />, title: 'Supportive Environment', desc: 'We invest in our people with training, support, and competitive compensation.' },
  ];

  const openings = [
    { title: 'Freight Broker Agent', type: 'Full-Time', location: 'Chattanooga, TN / Remote', desc: 'Coordinate shipments, build carrier relationships, and deliver excellent service to clients.' },
    { title: 'Logistics Coordinator', type: 'Full-Time', location: 'Chattanooga, TN', desc: 'Support daily operations including load tracking, carrier communication, and documentation.' },
    { title: 'Carrier Sales Representative', type: 'Full-Time', location: 'Remote', desc: 'Grow our carrier network by recruiting reliable carriers and negotiating competitive rates.' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div>
      {/* ====== HERO ====== */}
      <section ref={heroRef} style={{
        paddingTop: '140px', paddingBottom: '80px',
        background: 'linear-gradient(135deg, #0f1724 0%, #1a2332 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15,
        }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className={heroInView ? 'animate-fade-in-up' : ''} style={{ opacity: heroInView ? 1 : 0 }}>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Join the <span className="text-gradient-gold">Arnold Freight</span> Team
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 32px' }}>
              We're looking for driven professionals who want to make an impact in the freight and logistics industry.
            </p>
            <a href="#openings" className="btn-gold" style={{ fontSize: '16px' }}>View Open Positions</a>
          </div>
        </div>
      </section>

      {/* ====== WHY JOIN US ====== */}
      <section ref={whyRef} style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '8px' }}>Why Join <span className="text-gradient-gold">Arnold Freight?</span></h2>
          <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '12px' }}>Build your career with a company that values its people</p>
          <div className="gold-divider" style={{ marginBottom: '48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {perks.map((p, i) => (
              <div key={i} className={whyInView ? 'animate-fade-in-up' : ''}
                style={{
                  padding: '40px 24px', background: '#f9fafb', borderRadius: '8px',
                  border: '1px solid #e5e7eb', transition: 'all 0.3s',
                  opacity: whyInView ? 1 : 0, animationDelay: `${i * 0.15}s`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c9a84c'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
                <div style={{ color: '#c9a84c', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== OPEN POSITIONS ====== */}
      <section id="openings" ref={openingsRef} className="bg-navy" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
              Open <span className="text-gradient-gold">Positions</span>
            </h2>
            <div className="gold-divider" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {openings.map((job, i) => (
              <div key={i} className={openingsInView ? 'animate-fade-in-up' : ''}
                style={{
                  padding: '28px 32px', background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px', border: '1px solid rgba(201,168,76,0.2)',
                  opacity: openingsInView ? 1 : 0, animationDelay: `${i * 0.15}s`,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c9a84c'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '6px', marginTop: 0 }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '8px' }}>
                      <span style={{ fontSize: '13px', background: 'rgba(201,168,76,0.15)', color: '#c9a84c', padding: '4px 12px', borderRadius: '12px' }}>{job.type}</span>
                      <span style={{ fontSize: '13px', color: '#9ca3af' }}>{job.location}</span>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{job.desc}</p>
                  </div>
                  <a href="#apply" className="btn-outline-gold" style={{ fontSize: '13px', padding: '8px 20px', flexShrink: 0 }}>
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== APPLICATION FORM ====== */}
      <section id="apply" style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700' }}>Apply <span className="text-gradient-gold">Today</span></h2>
            <p style={{ color: '#6b7280', fontSize: '16px' }}>Send us your information and we'll be in touch</p>
            <div className="gold-divider" style={{ marginTop: '12px' }} />
          </div>

          {formSubmitted && (
            <div style={{
              background: 'rgba(201, 168, 76, 0.15)', border: '1px solid #c9a84c',
              padding: '16px', borderRadius: '8px', marginBottom: '24px',
              color: '#b8943a', fontSize: '15px', textAlign: 'center',
            }}>
              Thank you for your application! We'll review it and get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{
            background: '#ffffff', padding: '40px', borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>First Name *</label>
                <input type="text" className="form-input" required placeholder="John" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Last Name *</label>
                <input type="text" className="form-input" required placeholder="Doe" />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Email *</label>
              <input type="email" className="form-input" required placeholder="john@example.com" />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Phone</label>
              <input type="tel" className="form-input" placeholder="(555) 000-0000" />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Position Interested In *</label>
              <select className="form-input" required style={{ cursor: 'pointer' }}>
                <option value="">Select a position...</option>
                <option>Freight Broker Agent</option>
                <option>Logistics Coordinator</option>
                <option>Carrier Sales Representative</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Tell Us About Yourself</label>
              <textarea className="form-input" rows="4" placeholder="Share your experience and why you'd like to join Arnold Freight Co..." style={{ resize: 'vertical' }} />
            </div>

            <button type="submit" className="btn-gold" style={{ width: '100%', fontSize: '16px', padding: '14px', border: 'none' }}>
              Submit Application
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              Or email your resume directly to{' '}
              <a href="mailto:info@arnoldfreight.com" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: '600' }}>
                info@arnoldfreight.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
