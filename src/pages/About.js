import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaClock, FaShieldAlt, FaTruck, FaCheckCircle, FaPhoneAlt, FaQuoteLeft } from 'react-icons/fa';

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

const About = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [whyRef, whyInView] = useInView();

  const values = [
    { icon: <FaHandshake size={28} />, title: 'Personal Touch', desc: 'Every client gets a dedicated point of contact. You\'re never a number — you\'re a partner.' },
    { icon: <FaClock size={28} />, title: 'Responsive Service', desc: 'We answer calls, respond fast, and keep you updated. Communication is our foundation.' },
    { icon: <FaShieldAlt size={28} />, title: 'Reliability First', desc: 'We vet every carrier and hold them to the highest standards of safety and performance.' },
    { icon: <FaTruck size={28} />, title: 'Nationwide Reach', desc: 'From Chattanooga to coast-to-coast, our carrier network covers every lane.' },
  ];

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
          backgroundImage: 'url(https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15,
        }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className={heroInView ? 'animate-fade-in-up' : ''} style={{ opacity: heroInView ? 1 : 0 }}>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              About <span className="text-gradient-gold">Arnold Freight Co.</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              Based in Chattanooga, Tennessee — providing reliable transportation solutions for businesses across the country.
            </p>
          </div>
        </div>
      </section>

      {/* ====== OUR STORY ====== */}
      <section ref={storyRef} style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className={storyInView ? 'animate-slide-left' : ''} style={{ opacity: storyInView ? 1 : 0 }}>
              <div style={{
                borderRadius: '12px', overflow: 'hidden', position: 'relative',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
                  alt="Freight logistics"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
                {/* Gold accent corner */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '80px', borderTop: '4px solid #c9a84c', borderLeft: '4px solid #c9a84c' }} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '80px', height: '80px', borderBottom: '4px solid #c9a84c', borderRight: '4px solid #c9a84c' }} />
              </div>
            </div>

            <div className={storyInView ? 'animate-slide-right' : ''} style={{ opacity: storyInView ? 1 : 0 }}>
              <div style={{ display: 'inline-block', background: 'rgba(201, 168, 76, 0.1)', borderRadius: '4px', padding: '6px 14px', marginBottom: '12px' }}>
                <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>OUR STORY</span>
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
                A Hands-On Approach to <span className="text-gradient-gold">Freight Logistics</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                Arnold Freight Co. is a freight and logistics company based in Chattanooga, Tennessee, providing reliable transportation solutions for businesses across the country. We specialize in coordinating shipments efficiently by working closely with both shippers and a trusted network of carriers.
              </p>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                While we operate with the capability and professionalism of a full-scale logistics company, we maintain a hands-on, responsive approach. Every client works directly with a dedicated point of contact who understands their shipping needs and ensures each load is handled with precision and care.
              </p>
              <div style={{ background: '#f9fafb', borderLeft: '4px solid #c9a84c', padding: '20px 24px', borderRadius: '0 8px 8px 0' }}>
                <FaQuoteLeft style={{ color: '#c9a84c', marginBottom: '8px' }} />
                <p style={{ color: '#374151', fontSize: '16px', fontStyle: 'italic', lineHeight: '1.7', margin: 0 }}>
                  "Our focus is simple — deliver dependable service, maintain clear communication, and move freight efficiently from origin to destination."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== OUR VALUES ====== */}
      <section ref={valuesRef} className="bg-navy" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
            Our <span className="text-gradient-gold">Core Values</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', marginBottom: '12px' }}>The principles that guide everything we do</p>
          <div className="gold-divider" style={{ marginBottom: '48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <div key={i} className={valuesInView ? 'animate-fade-in-up' : ''}
                style={{
                  padding: '40px 24px', background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px', border: '1px solid rgba(201,168,76,0.2)',
                  opacity: valuesInView ? 1 : 0, animationDelay: `${i * 0.15}s`,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = '#c9a84c'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; }}
              >
                <div style={{ color: '#c9a84c', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section ref={whyRef} style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700' }}>Why Choose <span className="text-gradient-gold">Arnold Freight?</span></h2>
            <div className="gold-divider" style={{ marginTop: '12px' }} />
          </div>

          <div className={whyInView ? 'animate-fade-in-up' : ''} style={{ opacity: whyInView ? 1 : 0 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                'Direct communication with a dedicated logistics professional',
                'Fast response times and efficient execution',
                'Flexible solutions tailored to your business',
                'Access to a reliable, nationwide carrier network',
                'Precision and care on every single load',
                'Whether it\'s one shipment or ongoing support — we deliver',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  padding: '20px', background: '#ffffff', borderRadius: '8px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  border: '1px solid #e5e7eb', transition: 'all 0.3s',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c9a84c'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
                  <FaCheckCircle style={{ color: '#c9a84c', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#374151', fontSize: '15px', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="bg-gold" style={{ padding: '50px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1a2332', marginBottom: '12px' }}>
            Ready to Partner With Us?
          </h2>
          <p style={{ color: '#374151', fontSize: '16px', marginBottom: '24px' }}>
            Let's discuss how we can support your freight needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: '#1a2332', color: '#ffffff', padding: '14px 32px',
              borderRadius: '4px', textDecoration: 'none', fontWeight: '600',
            }}>
              Contact Us
            </Link>
            <a href="tel:5551234567" style={{
              background: 'transparent', color: '#1a2332', padding: '14px 32px',
              borderRadius: '4px', textDecoration: 'none', fontWeight: '600',
              border: '2px solid #1a2332', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <FaPhoneAlt /> (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
